# JavaScript数据类型

    基本数据类型：Undefined, Null, Boolean, String, Number, Symbol, bigint
    引用数据类型：Object

**检测数据类型的几种方式：**

- typeof 不能细分是数组还是正则，对于对象数据类型中的所有值的返回的都是object

string、number、undefined、boolean、symbol、bigint都能通过typeof(返回字符串形式)直接判断类型，还有对象类型function也可判断
除了null无法通过typeof(为object)直接判断类型(历史遗留)，包括对象类型，typeof把null当作对象类型处理，所以typeof无法判断对象类型，typeof也能判断function

- instance  只要在当前原型中可以找到的，都可以返回true
- constructor  与instance相似，不过可以处理基本数据类型的检测，如number等

construtor检测object与instance不一样.

``` js
var reg = /^$/;
console.log(reg.constructor === RegExp); // true
console.log(reg.constructor === Object); // false
```
constructor的局限性：我们可以把类的原型进行重写，在重写的过程中，很有可能把之前的constructor给覆盖了，这样检测出来的结果就是不准确的

- Object.prototype.toStrong.call()可以检测所有的类型，返回"[object, 类型]"

### 0.1 + 0.2 != 0.3

要弄清这个问题的原因，首先我们需要了解下在计算机中数字是如何存储和运算的。在计算机中，数字无论是定点数还是浮点数都是以多位二进制的方式进行存储的。
在JS中数字采用的IEEE 754的双精度标准进行存储，我们可以无需知道他的存储形式，只需要简单的理解成就是存储一个数值所使用的二进制位数比较多而已，这样得到的数会更加精确。

这里为了简单直观，我们使用定点数来说明问题。在定点数中，如果我们以8位二进制来存储数字
对于整数来说，十进制的35会被存储为： 00100011 其代表 2^5 + 2^1 + 2^0。
对于纯小数来说，十进制的0.375会被存储为： 0.011 其代表 1/2^2 + 1/2^3 = 1/4 + 1/8 = 0.375

**最好的解决方法**

最好的方法就是我们想办法规避掉这类小数计算时的精度问题就好了，那么最常用的方法就是将浮点数转化成整数计算。因为整数都是可以精确表示的。

