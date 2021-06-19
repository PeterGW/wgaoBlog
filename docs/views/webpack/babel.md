# babel原理

### babel编译三步骤
- 解析parse，将代码解析生成抽象语法树AST，即词发分析与语法分析的过程
- 转换transform, 对于 AST 进⾏变换⼀系列的操作，babel 接受得到 AST 并通过 babel-traverse 对其进⾏遍历，在 此过程中进⾏添加、更新及移除等操作
    plugin，插件应用在babel的转义过程中，如果在此阶段不使用任何插件，那么babel会原样输出代码，babel官方帮我们封装了插件集《Presets》，babel-preset-env相当于ES2015，ES2016，ES2017及最新版本

    - plugin会运行在presets之前
    - plugin会从第一个开始顺序执行
    - presets的顺序刚好相反（从最后一个逆序执行）
    {
        "plugins": [
            "transform-decorators-legacy",
            "transform-class-properties"
        ]
    }
    将先执行  transform-decorators-legacy 再执行  transform-class-properties
    但 preset 是反向的
    {
        "presets": [
            "es2015",
            "react",
            "stage-2"
        ]
    }
    会按以下顺序运行:   stage-2 ，  react ， 最后  es2015 。
    如果  presets 和  plugins 同时存在，那执行顺序又是怎样的呢？答案是先执行  plugins 的配置，再执行  presets 的配置

- 生成generate, 将变换后的 AST 再转换为 JS 代码, 使⽤到的模块是 babel-generator

### 如何编写一个babel插件
那么Babel的插件模块需要你暴露⼀个function，function内返回visitor，visitor 中的每个函数接收 2 个参数： path 和  state
```js
    module.export = function(babel){
        return {
            visitor:{ }
        }
    }
```

下面是一个事例，把变量a替换成b，如下：
```js
    import * as babel from '@babel/core'
    const c = 'var a = 1'
    const { code } = babel.transform(c, {
        plugins: [
            function({types: t} {
                return {
                    visitor: {
                        VariableDeclarator(path, state) {
                            if (path.node.id.name === 'a') {
                                path.node.id = t.identifier('b')
                            }
                        }
                    }
                }
            })
        ]
    })
    console.log(code)  // var b = 1
```

### babel常用API

* @babel/core
    Babel 的编译器，核心 API 都在这里面，比如常见的  transform、 parse

* @babel/cli
    cli 是命令行工具,  安装了  @babel/cli 就能够在命令行中使用  babel  命令来编译文件。当然我们一般不会用到，打包工具已经帮我们做好了。

* babylon
    Babel 的解析器。

* @babel/node
    直接在  node 环境中，运行 ES6 的代码。

* babel-traverse
    用于对 AST 的遍历，维护了整棵树的状态，并且负责替换、移除和添加节点。

* babel-types
    用于 AST 节点的 Lodash 式工具库, 它包含了构造、验证以及变换 AST 节点的方法，对编写处理 AST 逻辑非常有用。

* babel-generator
    Babel 的代码生成器，它读取 AST 并将其转换为代码和源码映射（sourcemaps）。