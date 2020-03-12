import Vue from 'vue'
import './app.scss'

const App = new Vue({
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
})

export default App
