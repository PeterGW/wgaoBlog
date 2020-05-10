module.exports = {
    base: '/',
    title: 'My Docs',
    description: 'Just playing around',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav:[ // 导航栏配置
            {text: '前端基础', link: '/accumulate/' },
            {text: '算法题库', link: '/algorithm/'},
            {text: '微博', link: 'https://baidu.com'}      
        ],
        sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 2, // 侧边栏显示2级
        logo: '/assets/img/logo.png',
    }
}