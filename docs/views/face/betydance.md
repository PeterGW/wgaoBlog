### 字节 50分钟 视频
1、微前端乾坤、single-spa原理
2、css怎么隔离
3、业务一些问题，与解决方案
4、项目介绍 难点 充当什么角色 怎么解决
5、defer/async区别
6、setInterval/requestAnimationFrame区别

   * setTimeout，setInterval，都接收两个参数，一个要执行的代码，一个延迟或者间隔的时间数，都不能保证时间精度，第二个参数只是在指定时间
   内把执行代码添加到队列中去，不能保证立即执行, 添加了
   * setInterval后，需要手动去清理，不然会造成内存泄露
   * requestAnimationFrame接收一个函数作为参数，刷新频率一般60HZ， 1000ms-60次


7、304状态码以及怎么判定304
8、实现一个promise.all且要求可以控制发送请求数
9、实现不定宽高的居中
10、实现一个将深层次嵌套的对象转为指定格式的对象输出
  obj = {
    a: {
      b: {
        c: {
          d: '111'
        }
      }
    },
    e: {
      f: '222'
    }
  }

  outobj = {
    'a.b.c.d': '111',
    'e.f': '222'
  }

11: 对数组归并排序


### 涂鸦智能 40分钟 电话

promise介绍
then状态怎么改变
怎么让捕获异常

闭包与普通函数区别   闭包怎么清除

vue怎么渲染模板

url输入的整个过程 DOM树之后做了什么操作

event loop

new vue的整个过程

vue diff怎么比较，怎么更新

vue双向绑定原理 defineProperty优缺点

vue对数组与深层次对应怎么监听

动态给data种的对象添加一个属性，怎么监听这个属性

webpack怎么依赖收集

loader\plugin区别

webpack流程

tree-shaking做了什么操作

ts泛型

ts高级用法

==比较 类型转换  字符串与字符串  字符串与数字包括非数字的字符串  对象与对象比较

附加：
map weakMap set weakSet区别





