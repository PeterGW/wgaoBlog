const slider = require('./configs/slider');

module.exports = {
    base: '/',
    title: 'My Docs',
    description: 'Just playing around',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        nav:[ // 导航栏配置
            {text: 'home', link: '/' },
            {text: 'about', link: '/algorithm/'},
            {text: 'github', link: 'https://baidu.com'}      
        ],
        logo: '/assets/img/logo.png',
        slider
    }
}