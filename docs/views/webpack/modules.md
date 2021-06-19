# 模块
模块即是一组与特定功能相关的代码，封装了细节，公开提供一个API，并于其他模块结合构成更大的应用程序
> 主要是现实代码可复用，拥有独立的作用域，防止全局污染，提高开发效率、降低维护成本等等。
> 有了模块后，我们就可以根据相应的需求加载对应的模块，想要什么功能，就加载什么模块，npm就是最大的模块仓库。

### 常见的模块
CJS: commonjs主要用于后端，nodejs遵循此规范，模块自己可以看成是一个js沙箱，可以被多次加载，但是只会第一次加载运行一次，运行结果会被缓存，模块加载的顺序按代码执行顺序
```js
    // math.js
    function add (a, b) {
        return a + b
    }
    module.exports = {
        add: add
    }

    // 导入
    var math = require(./math.js)
    math.add(1, 2)
```
AMD: （异步模块定义）AMD是RequireJS的的规范，遵循依赖前置，提前执行
```js
    require(["jquery","underscore"],function($,_){
      // some code here
    });
```
CMD: seaJS规范，依赖就近，延迟执行，推崇职责单一
```js
    define(function(require, exports, module) {   var a = require('./a')   a.doSomething()
        // 此处略去 100 行
        var b = require('./b')
        // 依赖可以就近书写
        b.doSomething()
        // ...
    })
```
UMD: UMD规范只是一种通用的写法，是在amd和cjs两个流行而不统一的规范情况下，才催生出umd来统一规范的，umd前后端均可通用
```js
    (function (root, factory) {
        if (typeof define === 'function' && define.amd) {
            // AMD
            define(['jquery', 'underscore'], factory);
        } else if (typeof exports === 'object') {
            // Node, CommonJS之类的
            module.exports = factory(require('jquery'), require('underscore'));
        } else {
            // 浏览器全局变量(root 即 window)
            root.returnExports = factory(root.jQuery, root._);
        }
    }(this, function ($, _) {
        // 属性
        var PI = Math.PI;
        // 方法
        function a() { };                   // 私有方法，因为它没被返回
        function b() { return a() };        // 公共方法，因为被返回了
        function c(x, y) { return x + y };  // 公共方法，因为被返回了

        // 暴露公共方法
        return {
            ip: PI,
            b: b,
            c: c
        }
    }));
```

ESM: esm规范是es6原生支持的，很多浏览器开始支持，类似commonjs的写法和同、异步加载机制能通过设置type=module，用于html中，而且在node也开始支持
> export暴露或导出模块 export default xxx
> import引入模块 import {xx, xxx} from './xxx.js'

```js
     /** 定义模块 math.js **/
    var basicNum = 0;
    var add = function (a, b) {
        return a + b;
    };
    export { basicNum, add };

    /** 引用模块 **/
    import { basicNum, add } from './math';
    function test(ele) {
        ele.textContent = add(99 + basicNum);
    }
```
