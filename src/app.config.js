export default {
  pages: [
    'pages/component/index',
    'pages/component/pages/view/view',
    'pages/component/pages/scroll-view/scroll-view',
    'pages/component/pages/icon/icon',
    'pages/component/pages/progress/progress',
    'pages/component/pages/image/image',
    'pages/component/pages/audio/audio',
    'pages/component/pages/video/video',
    'pages/component/pages/swiper/swiper',
    // 'pages/component/pages/form/form',
    'pages/component/pages/input/input',
    'pages/component/pages/checkbox/checkbox',
    'pages/component/pages/radio/radio',
    // 'pages/component/pages/button/button',
    'pages/component/pages/text/text',
    'pages/component/pages/label/label',
    'pages/component/pages/picker/picker',
    // 'pages/component/pages/picker-view/picker-view',
    'pages/component/pages/slider/slider',
    'pages/component/pages/switch/switch',
    'pages/component/pages/textarea/textarea',
    // 'pages/component/pages/canvas/canvas',
    // 'pages/component/pages/map/map',
    'pages/component/pages/navigator/navigator',
    'pages/component/pages/redirectPage/redirectPage',
    'pages/component/pages/navigatePage/navigatePage',
    'pages/about/about',
    'pages/component/pages/camera/camera'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'TODO List',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    backgroundColor: '#fff',
    selectedColor: '#dc0032',
    list: [
      {
        pagePath: 'pages/component/index',
        text: '组件',
        iconPath: 'asset/component/view.png',
        selectedIconPath: 'asset/component/view_red.png'
      },
      {
        pagePath: 'pages/about/about',
        text: '关于',
        iconPath: 'asset/component/nav.png',
        selectedIconPath: 'asset/component/nav_red.png'
      }
    ]
  }
}
