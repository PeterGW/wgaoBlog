# js基础

### javascript执行顺序与异步
* js执行顺序是按代码顺序从上而下执行
* defer/async标识符可以是js不阻塞页面渲染异步执行js，都作用于外部js的引用，defer是只有在页面全部渲染完成才执行，理论上是按这执行顺执行，
  而async则是下载完成当前的js就执行

### JavaScript数据类型

    基本数据类型：Undefined, Null, Boolean, String, Number, Symbol, bigint
    引用数据类型：Object

**检测数据类型的几种方式：**

- typeof 不能细分是数组还是正则，对于对象数据类型中的所有值的返回的都是object

string、number、undefined、boolean、symbol、bigint、function都能通过typeof(返回字符串形式)直接判断类型，对未定义的则返回undefined
除了null无法通过typeof(为object)直接判断类型(历史遗留)，包括对象类型，typeof把null当作对象类型处理，所以typeof无法判断对象类型

- instanceof  判断只要在当前原型链中可以找到的，都可以返回true，所以缺点就是可以改变constructor来改变行为
- constructor  与instanceof相似，不过可以处理基本数据类型的检测，如number等

constructor检测object与instanceof不一样.

``` js
var reg = /^$/;
console.log(reg.constructor === RegExp); // true
console.log(reg.constructor === Object); // false
```
constructor的局限性：我们可以把类的原型进行重写，在重写的过程中，很有可能把之前的constructor给覆盖了，这样检测出来的结果就是不准确的

- Object.prototype.toStrong.call()可以检测所有的类型，返回"[object, 类型]"

### 操作符
* 如果将一元加应用到非数值，则会执行与使用 Number()转型函数一样的类型转换：布尔值 false和 true 转换为 0 和 1，字符串根据特殊规则进行解析，对象会调用它们的 valueOf()和/或 toString()方法以得到可以转换的值。一元加和减操作符主要用于基本的算术，但也可以像上面的例子那样，用于数据类型转换

* 按位非操作符用波浪符（~）表示，它的作用是返回数值的: 补数，按位非的最终效果是对数值取反并减 1，就像执行如下操作的结果一样
```js
let num1 = 25;
let num2 = ~num1   // -26
// 等价如下
let num2 = -num1 - 1;
console.log(num2); // "-26"
```

* 按位与操作符用和号（&）表示，有两个操作数。本质上，按位与就是将两个数的每一个位对齐，然后基于真值表中的规则，对每一位执行相应的与操作，按位与操作 在两个位都是 1 时返回 1，在任何一位是 0 时返回 0。

* 按位或操作符用管道符（|）表示，同样有两个操作数，按位或操作在至少一位是 1 时返回 1，两位都是 0 时返回 0

* 按位异或用脱字符（^）表示，同样有两个操作数，它只在一位上是 1 的时候返回 1（两位都是 1 或 0，则返回 0）


### 变量、作用域、内存

* var声明，作用域函数作用域，变量会提升，可以重复声明一个变量，var做全局声明的时候，可以在window上挂载，声明的变量可以不初始化，默认为undefined
* let作用域块级作用域，不能变量提升，let做全局声明的时候不可以在window上挂载，可以不初始化
* const行为几本与let一致，只是const声明的变量必须初始化值，而且不能修改const的值，声明的限制只适用于它指向的变量的引用，如果引用的是对象等，修改
  对象内部属性不会报错

* 垃圾回收机制-标记清理和引用计数(应用技术存在问题，比如循环引用，计数永远不会为0)


### 跨域请求
* 浏览器同源策略，禁止不同源之间的相互访问，包括cookie、localStorage、indexDB等
* options跨域预检请求，检测http请求支持的方法，检查服务器性能
* 解决跨域问题：window.name、document.domain、postMessageApi、JSONP
* CORS是一种网络浏览器的技术规范，允许网页从不同的域访问其资源。而这种访问是被同源策略所禁止的。CORS系统定义了一种浏览器和服务器交互的方式来确定是否允许跨域请求，nodejs解决跨域是设置允许跨域设置Access-Control-Allow-Origin: *
当请求满足下述任一条件时，即应首先发送预检请求（使用OPTIONS）：

    1、使用了下面任一 HTTP 方法：
    PUT
    DELETE
    CONNECT
    OPTIONS
    TRACE
    PATCH
    2、人为设置了对 CORS 安全的首部字段集合之外的其他首部字段。该集合为：
    Accept
    Accept-Language
    Content-Language
    Content-Type (but note the additional requirements below)
    DPR
    Downlink
    Save-Data
    Viewport-Width
    Width
    3、Content-Type 的值不属于下列之一:
    application/x-www-form-urlencoded
    multipart/form-data
    text/plain

### 0.1 + 0.2 != 0.3

要弄清这个问题的原因，首先我们需要了解下在计算机中数字是如何存储和运算的。在计算机中，数字无论是定点数还是浮点数都是以多位二进制的方式进行存储的。
在JS中数字采用的IEEE 754的双精度标准进行存储，我们可以无需知道他的存储形式，只需要简单的理解成就是存储一个数值所使用的二进制位数比较多而已，这样得到的数会更加精确。

这里为了简单直观，我们使用定点数来说明问题。在定点数中，如果我们以8位二进制来存储数字
对于整数来说，十进制的35会被存储为： 00100011 其代表 2^5 + 2^1 + 2^0。
对于纯小数来说，十进制的0.375会被存储为： 0.011 其代表 1/2^2 + 1/2^3 = 1/4 + 1/8 = 0.375

**最好的解决方法**

最好的方法就是我们想办法规避掉这类小数计算时的精度问题就好了，那么最常用的方法就是将浮点数转化成整数计算。因为整数都是可以精确表示的。


### 对象引用类型
```js
  // 创建false的一个Boolean对象
  let falseObject = new Boolean(false);
  // 所有对象(有值)在布尔表达式中自动转为true
  let result = falseObject && true;       // false
```

- slice()、substr()、substring()三个string类型的方法，
    * 都接受两个参数，第一个参数表示开始的位置，
    * 其中substr()第二个参数表示个数（返回子字符串），
    * slice()、sbustring()方法第二个参数表示结束位置（不包含当前位置），三个方法不会修改他们的字符串

### js异步执行 script标签中加载
  defer会在文档解析完之后执行,并且多个defer会按照顺序执行,而async则是在js加载好之后就会执行,并且多个async,哪个加载好就执行哪个,同时出现的话，deffer优先级高

    加载时间图：
    ![example for vnode](../images/cnode2.png)

