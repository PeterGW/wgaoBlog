# promise,async/await,generator实现

#### promise实现：
- promise接收一个构造方法executor作为参数
- executo内部的异步任务被放入宏/微任务队列，等待执行
- then()被执行，收集成功/失败回调，放入队列，then返回一个promise
- executor异步任务被执行，触发resolve/reject， 依次执行队列

**观察者实现：收集依赖 -> 触发通知 -> 取出依赖执行**
[代码摘自](https://juejin.im/post/5e3b9ae26fb9a07ca714a5cc)
```js
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class myPromise {
    constructor(executor){
        this._status = PENDING;          // 初始化状态
        this._resolveQueue = [];
        this._rejectQueue = [];
        this._value = undefined;         // 保存上then回调的返回值
        let _resolve = (val) => {
            //把resolve执行回调的操作封装成一个函数,放进setTimeout里,以兼容executor是同步代码的情况
            const run = () => {
                // 对应状态只能是从pending到fulfilled或者rejected
                if(this._status !== PENDING) return             
                this._status = FULFILLED;   // 状态变更
                this._value = val;          // 保存resolve返回的值
                while(this._resolveQueue.length){
                    // 取出resolve队列第一个 且传入val执行
                    const callback = this._resolveQueue.shift();
                    callback(val);
                }
            }
            setTimeout(run);                // 保证是异步调用
        };
        let _reject = (val) => {
            const run = () => {
                // 对应状态只能是从pending到fulfilled或者rejected
                if(this._status !== REJECTED) return                
                this._status = REJECTED;
                this._value = val;
                while(this._rejectQueue.length){
                    // 取出reject队列第一个 且传入val执行
                    const callback = this._rejectQueue.shift();     
                    callback(val);
                }
            }
            setTimeout(run);
        };
        executor(_resolve, _reject);                            // new Promise()时立即执行
    }

    then(resolveFn, rejectFn){                 
        // 值穿透问题
        // 根据规范，如果then的参数不是function，则我们需要忽略它, 让链式调用继续往下执行
        typeof resolveFn !== 'function' ? resolveFn = value => value : null
        typeof rejectFn !== 'function' ? rejectFn = error => error : null
        
        return new Promiese((resolve, reject) => {              // then需要返回一个promise才可以链式调用
            const fulfilled = val => {
                try {
                    let x = resolveFn(val);                     // 第一个Promise执行，并返回值
                    x instanceof Promise ? x.then(resolve, reject) : resolve(x);     // 返回一个Promise,调用then变更状态，否的话直接执行成功回调且值进去
                } catch(e) {
                    reject(e);
                }
            }
            

            const rejected = err => {
                try {
                    let x = rejectedFn(err);
                    x instanceof Promise ? x.then(resolve, reject) : reject(err);
                } catch(e) {
                    reject(e);
                }
            }
           

            switch(this._status) {
                case PENDING:
                    this._resolveQueue.push(fulfilled);
                    this._rejectQueue.push(rejected);
                    break;
                case FUFILLED:
                    fulfilled(this._value);
                    break;
                case REJECTED:
                    rejected(this._value);
                    break;
            }
        });
    }

    //catch方法其实就是执行一下then的第二个回调
    catch(rejectFn) {
        return this.then(undefined, rejectFn)
    }

    //finally方法
    finally(callback) {
        return this.then(
            // MyPromise.resolve执行回调,并在then中return结果传递给后面的Promise
            value => MyPromise.resolve(callback()).then(() => value),             
            reason => MyPromise.resolve(callback()).then(() => { throw reason })  // reject同理
        )
    }

    //静态的resolve方法
    static resolve(value) {
        if(value instanceof MyPromise) return value // 根据规范, 如果参数是Promise实例, 直接return这个实例
        return new MyPromise(resolve => resolve(value))
    }

    //静态的reject方法
    static reject(reason) {
        return new MyPromise((resolve, reject) => reject(reason))
    }

    //静态的all方法
    static all(promiseArr) {
        let index = 0
        let result = []
        return new MyPromise((resolve, reject) => {
            promiseArr.forEach((p, i) => {
                //Promise.resolve(p)用于处理传入值不为Promise的情况
                MyPromise.resolve(p).then(
                    val => {
                        index++
                        result[i] = val
                        //所有then执行后, resolve结果
                        if(index === promiseArr.length) {
                            resolve(result)
                        }
                    },
                    err => {
                        //有一个Promise被reject时，MyPromise的状态变为reject
                        reject(err)
                    }
                )
            })
        })
    }

    static race(promiseArr) {
        return new MyPromise((resolve, reject) => {
            //同时执行Promise,如果有一个Promise的状态发生改变,就变更新MyPromise的状态
            for (let p of promiseArr) {
                Promise.resolve(p).then(  //Promise.resolve(p)用于处理传入值不为Promise的情况
                    value => {
                    resolve(value)        //注意这个resolve是上边new MyPromise的
                    },
                    err => {
                    reject(err)
                    }
                )
            }
        })
    }
}
```
#### promise 执行顺序

``` js
console.log(1);

async function Async1() {
    await Async2()
    console.log('async1');
}

async function Async2() {
    console.log('async2')
}

Async1() 

new Promise(resolve => {
    console.log(2)
    resolve()
}).then(function() {
    console.log(3)
    new Promise(resolve => {
        console.log(4);
        resolve();
    }).then(function(){
        console.log(5);
    })
}).then(function() {
    console.log(6)
})

Promise.resolve().then(()=>{
    console.log(7);
});

setTimeout(() => {
    console.log(8);
    Promise.resolve().then(()=>{
        console.log(9);
    });
},0);

console.log(10);
```
---
#### console书出结果顺序： 
    1,async2,2,10,async1,3,4,7,5,6,8,9

**async/await实现：**
异步，可暂停代码执行，async/await实际上是对Generator(生成器)的封装，语法糖, */yield和async/await看起来其实已经很相似了，它们都提供了暂停执行的功能，但二者又有三点不同：
- async/await 自带执行器，不需要手动调用next()就能自动执行下一步
- async函数返回值是promise对象。而Generator返回是生成器对象
- await能够返回Promise的resolve/reject的值

模拟实现自动执行
```js
function run(gen){
    return new Promise((resolve, reject) => {
        var g = gen();                          
        function step(val){                         // 封装方法，递归执行next
            try {                                   // 捕获异常
                var res = g.next(val);              // 生成一个迭代器
            } catch(e) {
                return reject(e);
            }                 
            if(res.done) {                          // 判断是否最后一步
                return resolve(res.value);      
            }
            Promise.resolve(res.value).then(        // res.value封装成promise
                val => {
                    step(val);
                },
                err => {
                    g.throw(err);
                }
            );
        }
        step();
    });
}
```
对于generator例子，可以这样执行
```js
function* myGenerator() {
    console.log(yield Promise.resolve(1))   //1
    console.log(yield Promise.resolve(2))   //2
    console.log(yield Promise.resolve(3))   //3
}
run(myGenerator)
```

**generator实现：**
```js
function $gen(_context){
    while(1){
        switch(_context.prev = _context.next) {
            case 0:
                _context.next = 2;
                return 'result1';
            case 2:
                _context.next = 4;
                return 'result2';
            case 4:
                _context.next = 6;
                return 'result3';
            case 6
            case 'end':
                return _context.stop();
        }
    }
}

var context = {
    next: 0,
    prev: 0,
    done: false,
    stop: function(){
        this.done = true;
    }
}

let gen = function() {
  return {
    next: function() {
      value = context.done ? undefined: gen$(context)
      done = context.done
      return {
        value,
        done
      }
    }
  }
}
```