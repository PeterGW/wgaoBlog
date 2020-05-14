# 什么是Tree-shaking

    所谓Tree-shaking就是把项目中没必要的模块全部抖掉，用于在不同的模块之间消除无用的代码。

# Tree-shaking原理
tree-shaking的本质用于消除项目一些不必要的代码，早在编译原理中有提到DCE(dead code eliminnation)，作用是消除不可能执行的代码，
它的工作是使用编辑器判断出某些代码是不可能执行的，然后清除。

tree-shaking同样也是消除项目中不必要的代码，但是和DCE又有不同，DCE是一种实现，主要工作是用于模快间，在打包过程中抽出有用的部分。

**tree-shaking是依赖ES6模块静态分析的，ES6 module的特点如下：**
- 1. 只能作为模块顶层的语句出现
- 2. import 的模块名只能是字符串常量
- 3. import binding 是 immutable的
