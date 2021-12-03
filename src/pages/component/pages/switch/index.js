import './index.scss'
import React from 'react'
import { View, Text, Switch } from '@tarojs/components'

import Header from '../../../../components/head/head'

export default class PageSwitch extends React.Component {
  state = {
    isChecked: false
  }

  setIsChecked = (e) => {
    console.log('e===', e);
    const { detail } = e
    this.setState({
      isChecked: detail.value
    })
  }

  render() {
    return (
      <View className='container'>
        <Header title='Switch'></Header>
        <View className='switch-list'>
          <Text className="switch-list__text">关闭</Text>
          <Switch></Switch>
        </View>
        <View className='switch-list'>
          <Text className="switch-list__text">开启</Text>
          <Switch checked></Switch>
        </View>
         {/* <View className='switch-list'>
          <Text className='switch-list__text'>更换颜色</Text>
          <Switch checked color='#6190E8'></Switch>
        </View> */}
        <View className='switch-list'>
          <Text className="switch-list__text">CheckBox形式</Text>
          <Switch type='checkbox'></Switch>
        </View>
        <View className='switch-list'>
          <Text className='switch-list__text'>数据绑定:{this.state.isChecked ? '开启' : '关闭'}</Text>
          <Switch onChange={this.setIsChecked} checked={this.state.isChecked}></Switch>
        </View>
        <View className='switch-list'>
          <Text className='switch-list__text'>是否显示文本</Text>
          <Switch showtext></Switch>
        </View>
        <View className='switch-list'>
          <Text className='switch-list__text'>选中和未选中的时候的文本</Text>
          <Switch showtext texton="是" textoff="否"></Switch>
        </View>
      </View>
    )
  }
}
