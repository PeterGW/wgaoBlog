module.exports = {
    '/views/': [
        '',
        {
            title: 'question',
            collapsable: true,
            children: [
                'question/question',
            ]
        },
        {
            title: 'JavaScript',
            collapsable: true,
            children: [
                'javascript/jsbase',
                'javascript/promise',
                'javascript/array',
                'javascript/keep-alive',
                'javascript/module语法与加载实现',
            ]
        },
        {
            title: 'typescript',
            collapsable: true,
            children: [
                'tsconfig/tsconfig',
            ]
        },
        {
            title: 'webpack',
            collapsable: true,
            children: [
                'webpack/tree-sharking',
                'webpack/plugins',
                'webpack/modules',
                'webpack/transform',
                'webpack/babel',
            ]
        },
        {
            title: 'vue',
            collapsable: true,
            children: [
                'vue/ssr',
                'vue/vue-source',
                'vue/vue-circle',
            ]
        },
    ]
};