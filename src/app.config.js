export default {
  pages: [
    'pages/component/index',
    'pages/component/pages/view/index',
    'pages/component/pages/scroll-view/index',
    'pages/component/pages/icon/index',
    'pages/component/pages/progress/index',
    'pages/component/pages/image/index',
    // 'pages/component/pages/audio/audio',
    'pages/component/pages/video/index',
    'pages/component/pages/swiper/index',
    // 'pages/component/pages/form/form',
    // 'pages/component/pages/input/input',
    'pages/component/pages/checkbox/index',
    'pages/component/pages/radio/index',
    'pages/component/pages/button/index',
    'pages/component/pages/text/index',
    'pages/component/pages/label/index',
    'pages/component/pages/picker/index',
    // 'pages/component/pages/picker-view/picker-view',
    'pages/component/pages/slider/index',
    'pages/component/pages/switch/index',
    'pages/component/pages/textarea/index',
    // 'pages/component/pages/canvas/canvas',
    // 'pages/component/pages/map/map',
    'pages/component/pages/navigator/index',
    'pages/component/pages/redirectPage/index',
    'pages/component/pages/navigatePage/index',
    // 'pages/about/about',
    'pages/component/pages/camera/index' 
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
