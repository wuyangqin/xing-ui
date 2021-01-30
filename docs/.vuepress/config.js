module.exports = {
  base: '/xing-ui/',
  title: 'Hello Xing-UI',
  description: '一个基于Vue的UI框架',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/get-started/' },
      { text: 'Github', link: 'https://github.com/wuyangqin/xing-ui' },
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/introduction/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/tabs',
          '/components/toast'
        ]
      }
    ]
  }
}
