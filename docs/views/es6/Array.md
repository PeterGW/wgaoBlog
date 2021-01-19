# Array 数组的扩展
> 数据的一些扩展与总结
### 扩展运算符，展开运算，只有在函数调用中 放在括号里面，否则报错
```js
    (...[1, 2])
    // Uncaught SyntaxError: Unexpected number
    console.log((...[1, 2]))
    // Uncaught SyntaxError: Unexpected number
    console.log(...[1, 2])
    // 1 2
```

### 替代apply用法
```js
    // ES5的 写法
    var arr1 = [0, 1, 2];
    var arr2 = [3, 4, 5];
    Array.prototype.push.apply(arr1, arr2);

    // ES6 的写法
    let arr1 = [0, 1, 2];
    let arr2 = [3, 4, 5];
    arr1.push(...arr2);
```

### 复制数组
1. 直接复制数组，复制的是指向数组底层数据结构的指针，而不是克隆新数组
```js
    const a1 = [1,2];
    const a2 = a1;
    a2[0] = 3;
    console.log(a1); // [3,2]
```

2. 扩展运算符合并数组
```js
    const a1 = [1, 2];
    // 写法一
    const a2 = [...a1];
    // 写法二
    const [...a2] = a1;
```

3. 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
```js
    const [...a, b] = [1,2,3]  // 报错
    const [a, ...b, c] = [1,3,4,56,7]  // 报错
    const [a, ...b] = [2,3,4] // [3,4]
```

### Array.from
1. 方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）
```js
    let arrayLike = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        length: 3
    };
    // ES5的写法
    var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
    // ES6的写法
    let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
```

2. 如果参数是一个真正的数组，Array.from会返回一个一模一样的新数组。
```js
    Array.from([1, 2, 3])
    // [1, 2, 3]
```

### Array.of
1. Array.of方法用于将一组值，转换为数组。
```js
    Array.of(3, 11, 8) // [3,11,8]
    Array.of(3) // [3]
    Array.of(3).length // 1

    Array() // []
    Array(3) // [, , ,]
    Array(3, 11, 8) // [3, 11, 8]
```

### Array常用方法
1. Array.find: 数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined

2. Array.findIndex: 数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1

3. Array.fill 如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象。
```js
    let arr = new Array(3).fill({name: "Mike"});
    arr[0].name = "Ben";
    arr
    // [{name: "Ben"}, {name: "Ben"}, {name: "Ben"}]

    let arr = new Array(3).fill([]);
    arr[0].push(5);
    arr
    // [[5], [5], [5]]
```

4. Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。ES2016 引入了该方法

5. Array.prototype.flat()用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响,如果不管有多少层嵌套，都要转成一维数组，可以用Infinity关键字作为参数。

6. flatMap()方法对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()），然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组, flatMap()只能展开一层数组。