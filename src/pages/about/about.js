import './about.scss'

import React from 'react'
import { View, Text } from '@tarojs/components'
export default class About extends React.Component {
  componentDidMount () {
    console.log('about mount')
  }

  componentDidShow () {
    console.log('about show')
  }

  componentDidHide () {
    console.log('about hide')
  }

  componentWillUnmount () {
    console.log('about unmount')
  }

  render () {
    return (
      <View className='about'>
        <View>
          <View className='info'>
            <Text>Taro 基础组件库，一套基于「微信小程序」和「WeUI」规范实现的基础组件，依赖于 NervJS 或 Taro框架；其组件样式与「WeUI」规范一致，调用方式与「微信小程序」接口一致，为快速开发多端项目而准备</Text>
          </View>
        </View>
      </View>
    )
  }
}
