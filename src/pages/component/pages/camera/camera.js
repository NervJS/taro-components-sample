import './camera.scss'

import { Component } from '@tarojs/taro'
import { Camera, View } from '@tarojs/components'

import Header from '../../../../components/head/head'

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
        <Header title='Canvas'></Header>
        <Camera></Camera>
      </View>
    )
  }
}
