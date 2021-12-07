import React from 'react'
import { Camera,View, Button } from '@tarojs/components'
import Header from '../../../../components/head/head'

import './index.scss'

export default class PageView extends React.Component {
  constructor() {
    super(...arguments)
  }

  cameraError(e) {
    console.log('[cameraa] cameraError 用户不允许使用摄像头时触发')
    console.log(e.detail)
  }

  render() {
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='Camera'></Header>
        </View>
        <View class="container">
          {/* devicePosition: font前置摄像头 ｜ back后置摄像头 */}
          <Camera className="camera" id="cameraId"  flash="on" devicePosition="back" onError={this.cameraError}>
          </Camera>
        </View>
        </View>
    )
  }
}
