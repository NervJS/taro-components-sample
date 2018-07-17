import './camera.scss'

import { Component } from '@tarojs/taro'
import { Camera, Button, View } from '@tarojs/components'

import Header from '../../../../components/head/head'

export default class PageView extends Component {

  config = {
    navigationBarTitleText: 'Camera组件'
  }

  constructor() {
    super(...arguments)
    this.state = {
      devicePosition: 'back'
    }
  }

  handleError() {
    alert('您的浏览器不允许使用摄像头')
  }

  handleStop() {
    alert('摄像头被非正常终止')
  }

  toggleDevice = () => {
    this.setState({
      devicePosition: this.state.devicePosition == 'back' ? 'front' : 'back'
    })
  }

  render() {
    return (
      <View>
        <Header title='Camera'></Header>
        <Button type='primary' onClick={this.toggleDevice}>开启{this.state.devicePosition == 'back' ? '后置' : '前置'}镜头</Button>
        <Camera className='cammer-content' onStop={this.handleStop} onError={this.handleError} devicePosition={this.state.devicePosition}></Camera>
      </View>
    )
  }
}
