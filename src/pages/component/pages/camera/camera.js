import './camera.scss'

import { Component } from '@tarojs/taro'
import { Camera, View } from '@tarojs/components'

import Header from '../../../../components/head/head'

export default class PageView extends Component {
  constructor () {
    super(...arguments)
  }

  handleError () {
    alert('您的浏览器不允许使用摄像头')
  }

  handleStop () {
    alert('摄像头被非正常终止')
  }

  render () {
    return (
      <View>
        <Header title='Camera'></Header>
        <Camera onStop={this.handleStop} onError={this.handleError}></Camera>
      </View>
    )
  }
}
