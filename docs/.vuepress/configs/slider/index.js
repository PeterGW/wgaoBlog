module.exports = {
    '/views/' : [
        '',
        {
            title:'面试篇',
            collapsable: true,
            children: [
                'question/question',
            ]
        },
        {
            title:'JavaScript篇',
            collapsable: true,
            children: [
                'javascript/jsbase',
                'javascript/promise',
            ]
        },
        {
            title:'webpack篇',
            collapsable: true,
            children: [
                'webpack/tree-sharking',
                'webpack/plugins',
            ]
        },
    ]
};