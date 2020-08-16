### Vue源码浅析

entry-runtime-with-compiler.js

render -> template -> el

if (template) -> compile(template) as render

扩展$mount方法，解析模板，得到渲染函数   -> 调用函数（web/runtime/index.js） 安装_patch_方法  实现$mount   -> core/index 全局方法初始化

-> instance 构造函数  执行初始化  -> init 

new Vue发生了什么事情   ->  初始化