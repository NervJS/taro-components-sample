import './camera.scss'

import { Component } from '@tarojs/taro'
import { Camera, View } from '@tarojs/components'

export default class About extends Component {
  config = {
    navigationBarTitleText: '相机'
  }

  constructor () {
    super(...arguments)
  }

  render () {
    return (
      <View>
        <Camera></Camera>
      </View>
    )
  }
}
