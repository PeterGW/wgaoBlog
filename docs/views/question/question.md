## js
- [] == ![] {} == !{} 0.1+0.2 != 0.3
- EventLoop
- 原型、原型链
- 闭包以及使用场景
- 继承
- 设计模式（观察者-发布订阅）
- 跨域
- apply call bind 区别及原理可否手写

## http/https
- xss csrf
- http缓存 http1.0 http1.1 http2.0
- https证书、私钥，公钥

## css
- flex布局
- grid布局
- 重绘重排
- position

<a href="https://q.shanyue.tech/base/http/363.html">http传送门</a>
## vue
- Vue的生命周期。✔
- Create和beforeMount他们两之间有什么区别。
- Vue组件通信。✔
- v-if和v-show的区别以及使用场景。✔
- nextTick的使用场景和作用。✔
- Vue中的key有什么作用。✔
- 计算属性和watch的区别。✔
- 子元素上下左右居中。
- 生成一条0.5px的线。✔
- 自适应方案。
- rem和rm的区别。✔
- vw和百分比有什么区别。✔
- 合并两个数组。✔
- 数组去重，冒泡排序。✔
- Object去掉其中一项属性，delete删除对象有什么影响。✔
- 深浅拷贝。
- 防抖节流 。
- 从0+100怎么实现。✔
- 一到一百个相同的请求，后面的依赖前面一个的结果，现在要拿到第一百个结果要怎么做。
- 假如你在爬楼梯，楼梯一共有N层，但你每次爬楼梯只能走一步、两步或三步，计算共有多少种走法，怎么打印出所有走法？
- 组件生命周期
- new Vue()，初始化事件和生命周期
- beforeCreate（$el和data都是undefined）
- 初始化数据和方法（data和props的响应式处理，mehods方法声明）
- created（$el是undefined，修改data不触发update）
- 判断有没有el项（vm.$mount(el)），判断有没有模板(没有将el外层的HTML当模板)，将模板编译成渲染函数，返回虚拟DOM
- beforeMounted（$el是虚拟DOM，修改data不触发update）
- 创建正式DOM替换虚拟DOM，挂载到页面指定容器显示
- mounted（可操作真实DOM）
- 数据变更
- beforeUpdate
- 重新渲染虚拟DOM并通过DIFF算法比较差异更新真实DOM
- updated
- 调用vm.$destory()
- beforeDestory（清理计时器、事件）
- 移除数据监听、事件监听和子组件
- destoryed（实例不可用）
- keep-alive生命周期
    被keep-alive包裹的组件有 activated 和 deactivated 两个生命周期。如keep-alive包裹两个组件：组件A和组件B。当第一次切换到组件A时，组件A的created和activated生命周期函数都会被执行，切换到组件B，这时组件A的deactivated的生命周期函数会被触发；在切换回组件A，组件A的activated生命周期函数会被触发，但是它的created生命周期函数不会被触发了。

- vue组件通信。

    父子间通信:父亲提供数据通过属性 props传给儿子；儿子通过 $on 绑父亲的事件，再通过 $emit 触发自己的事件（发布订阅）
    利用父子关系 $parent 、 $children ，
    父组件提供数据，子组件注入。 provide 、 inject ，插件用得多。
    ref 获取组件实例，调用组件的属性、方法
    跨组件通信 Event Bus （Vue.prototype.bus=newVue）基于on与$emit
    vuex 状态管理实现通信
- v-if和v-show的区别以及使用场景。

    区别
    v-if是删除生成dom,v-show是切换dispaly的状态。
    使用场景

    v-if
    某一块代码在运行时条件很少改变，使用 v-if 较好 (v-if 有更高的切换开销)
    在组件上使用v-if可触发组件的生命周期函数
    与transition结合使用 当条件变化时该指令可以触发过渡效果(用于动画切换)
    v-show
    需要非常频繁地切换某块代码，使用 v-show渲染
    当条件变化时该指令触发过渡效果(用于动画切换)
- nextTick的使用场景和作用。

    使用场景
    例：一个子组件通过v-if控制隐藏显示，当修改完显示状态后，立马通过ref去操作子组件的方法，这个时候会报错，原因在于子组件此时可能还未渲染完成，这个时候使用nextTick可以解决，他会在dom更新完成之后再去调用。
    作用
    在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。

- vue中的key有什么作用。

    key会用在虚拟DOM算法（diff算法）中，用来辨别新旧节点。
    不带key的时候会最大限度减少元素的变动，尽可能用相同元素。（就地复用）
    带key的时候，会基于相同的key来进行排列。（相同的复用）
    带key还能触发过渡效果，以及触发组件的生命周期
- 计算属性和watch的区别。

    处理数据的场景不同，监听器(watch)适合一个数据影响多个数据，计算属性适合一个数据受多个数据影响
    计算属性有缓存性，计算所得的值如果没有变化不会重复执行,但是watch会重复执行
    监听器选项提供了更通用的方法，适合执行异步操作或较大开销操作的情况


- rem和rm的区别。

    rem是相对于根元素字体大小
    em是相对于自身字体大小
- vw和百分比有什么区别。

    百分比是相对高度，相对于他的父元素而言。
    vw永远都是相对于视窗大小的。
- 合并两个数组。

    arr1.concat(arr2)
    [...arr1,...arr2]
    循环

- 数组去重

    1. Array.from(new Set(arr))
    2. [...new Set(arr)]
    3. for循环嵌套，利用splice去重
    4. 新建数组，利用indexOf或者includes去重
    5. 先用sort排序，然后用一个指针从第0位开始，配合while循环去重
- 冒泡排序
```js
function bubbleSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    let flag = true;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = false;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (flag) break;
  }
  return arr;
}
```
复制代码
这个是优化过后的冒泡排序。用了一个flag来优化，它的意思是：如果某一次循环中没有交换过元素，那么意味着排序已经完成了。

冒泡排序总会执行(N-1)+(N-2)+(N-3)+..+2+1趟，但如果运行到当中某一趟时排序已经完成，或者输入的是一个有序数组，那么后边的比较就都是多余的，为了避免这种情况，我们增加一个flag，判断排序是否在中途就已经完成（也就是判断有无发生元素交换）

- Object去掉其中一项属性，delete删除对象有什么影响。

    delete Object['name']
    delete只能删除自有属性，不会影响原型链上的属性

- 从0+100怎么实现。

```js
    // 使用for循环从1加到100的总和
    let sum=0;
    for(var i=0;i<=100;i++){
        sum+=i;
    }

    // 使用while函数从1加到1000的总和
    let i=0, sum=0;
    while(i<=100){
        sum+=i++;
    }
```

- 现在前端除了一些基本的面试知识外，明显感觉到算法的考虑在逐步加强，所以也总结一些重点的考点吧。一些很基本的原理我就不写了，什么
- 闭包
- 原型链
- 对JavaScript的Api可以手写。
- bind
- new
- promise
- .....
- 浏览器的加载原理，回流重绘，url输入后的流程，关键渲染路径等....
- 框架的原理，了解你最常用的框架的内部原理以及实现，包括思想等。
- 浏览器和node的GC原理
- 浏览器和node之间eventLoop的区别
- webpack的基本原理
- 数据库，redis，nginx的一些基本概念以及基本原理和优化。
- 对于前端页面的优化方案，包括首屏加载，资源整合，网络优化，长列表优化等
- 网络安全，xss，csrf，cookies保护等
- 网络知识
- tcp
- https和http
- dns
- udp
- 算法和数据结构
- 基本常用排序
- 链表操作
- 树结构操作
- 贪心算法
- 回溯算法
- 双指针操作
- 哈希表
- 动态规划（一般为加分题）
- 
- dom树节点和渲染树节点一一对应吗，有什么是dom树会有，渲染树不会有的节点
- CSS会阻塞dom解析吗？
- requestIdleCallback是干什么用的
- 浏览器的渲染原理
- 浏览器的渲染过程
- 关键渲染路径详述
- 避免回流的方式
- 跨域的方式
- 前端的网络安全如何防御（xss，csrf）
- cookies的保护方式
- 浏览器的缓存机制
- 什么文件用强缓存，什么文件用协商缓存
- React-Native的原理，优缺点
- react的虚拟dom和diff描述
- react渲染优化（class，hook）
- react的context的使用场景
- node和后端知识
- 
- mysql和mongo的区别，使用情景
- node有什么情况会导致内存溢出
- node的内存分配
- event loop（浏览器和node）
- 开放性题目

- 首屏优化方案
- 在App中如何实现前端资源离线缓存（方案）
- 算法const arr = [101,19,12,51,32,7,103,8];1.找出连续最大升序的数量2.找出不连续最大升序的数量
- 
- 
- 浏览器的输入url后的过程
- js异步方式
- promise.resolve是干嘛的
- promise.then如何实现链式调用
- promise.then不返还一个promise还能用then吗
- promise.finally的作用，如何自己实现finally
- promise原理
- webpack的异步加载如何实现
- webpack的分包策略
- 跨域方式有什么
- jsonp的原理
- csrf防御手段
- cookie的samesite属性作用
- js对象循环引用会导致什么问题
- react如何阻止原生默认事件
- react的fiber节点树是什么数据结构，为什么要用这样的数据结构
- react 异步渲染原理，优先级如何划分
- react hook有自己做一些自定义的hook吗
- react key的原理
- react如何实现函数式调用组件，toast.show()
- react新增了什么生命周和删除了什么生命周期，为什么要删除
- node后端知识
- 
- node对于option请求如何处理
- node如何处理cors跨域
- ES modules和commonjs的区别
- node的event loop和浏览器的区别
- dns查询过程，dns用什么协议发起dns查询的
- tcp和udp区别
- tcp的三次握手和四次挥手
- 协商缓存和强缓存的区别
- https协议握手大概过程
- 对称加密和非对称加密的区别
- 非对称加密，私钥和公钥的区别
- https证书的作用
- 其他
- 
- 如何埋点，为什么用1*1像素的gif图片做上报
- 如何定义首屏
- 算法
```js
// 从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。
// 示例 1:
// 输入: [1,2,3,4,5]
// 输出: True


// 示例 2:
// 输入: [0,0,1,2,5]
// 输出: True


// 限制：
// 数组长度为 5
// 数组的数取值为 [0, 13] .
```
- 绑定事件有多少种方式
- 事件触发的流程，捕获和冒泡
- 捕获阶段能终止吗
- 终止冒泡阶段有哪些
- 如果实现one绑定事件
- 事件委托的原理
- event.target和event.currtager的区别
- 浏览器显示一个图片有什么方式
- 如何获取url中的?后的参数
- 浏览器的内存回收机制 标记清除还是引用计数？
- 如何解决跨域
- 什么是简单请求什么复杂请求
- const和let有什么区别
- ES6常用的api有哪些
- 数组断引用的方式有什么
- Base64图片有什么问题
- node后端知识
- 
- Http强缓存和协商缓存用的是什么字段，整体流程是怎样
- Https原理
- Https第一次请求会携带什么
- Ca证书的内容是什么
- Https2.0的特性
- xss攻击原理的防御方式
- Csrf攻击原理和防御方式
- 二进制分帧的具体是什么
- Keep alive和多路复用的区别
- Option请求的作用
- Node gc方式
- 新生代和老生代的区别
- 新生代内存地址移动到老生代内存地址的过程
- 
- 长列表优化方案
- 首屏优化方案
- Node如何保证第三方接口的稳定性
- 浏览器从写入url到加载完毕的流程
- 浏览器白屏原因
- 页面打开后cpu和内存快速增长，如何定位问题，可能有什么问题
- 长列表优化，以及长列表中，如果带搜索功能如何实现
- 
- 最满意的项目列举2个
- 为什么使用RN
- 有100匹马，场地只有4条跑道，得出最快的4只马需要多少轮 Lam：100匹马，4个赛道，找出跑最快的4匹马。
- 已知函数fn1会随机返回1-5的整数，要求基于fn1编写fn2，要随机生成1-7，fn2内不能使用系统的随机api，只能调用fn1获取随机数
- 
- 前端的未来发展的一些思考
- Serverless的优缺点，前端的应用范围
- 页面性能优化
- 做过的专项的架构图
