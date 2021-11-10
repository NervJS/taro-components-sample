import React from 'react'
import { View, Text } from '@tarojs/components'

import './head.scss'

export default class Header extends React.Component {
  static options = {
    addGlobalClass: true
  }

  render () {
    return (
      <View className="page-head">
        <Text className="page-head-title">{this.props.title}</Text>
        <View className="page-head-line" />
        {!!this.props.desc ?
          (<Text className="page-head-desc">{this.props.desc}</Text>)
          : null}
      </View>
    )
  }
}
