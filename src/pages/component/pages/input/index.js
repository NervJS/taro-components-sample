import { View, Text, Input } from '@tarojs/components'
import React from 'react'

import Header from '../../../../components/head/head'

import './index.scss'

export default class PageInput extends React.Component {
  state = {
    value: ''
  }

  onInput = e => {
    this.setState({
      value: e.detail.value
    })
  }

  render() {
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='Input'></Header>
        </View>
        <View className='components-page_body'>
          <View className='components-page__body-example'>
            <View className='example-header'>
              <Text>控制最大输入长度的input</Text>
            </View>
            <View className='example-body'>
              <Input
                type='text'
                placeholder={'最大输入长度为10'}
                maxlength='10' ></Input>
            </View>
          </View>
          <View className='components-page__body-example'>
            <View className='example-header'>
              <Text>实时获取输入值:{this.state.value}</Text>
            </View>
            <View className='example-body'>
              <Input
                type='text'
                placeholder={'输入同步到view中'}
                value={this.state.value}
                onInput={this.onInput} ></Input>
            </View>
          </View>
          <View className='components-page__body-example'>
            <View className='example-header'>
              <Text>数字输入的input</Text>
            </View>
            <View className='example-body'>
              <Input type='number' placeholder={'这是一个数字输入框'} ></Input>
            </View>
          </View>
          <View className='components-page__body-example'>
            <View className='example-header'>
              <Text>密码输入的input</Text>
            </View>
            <View className='example-body'>
              <Input
                type='password'
                password
                placeholder={'这是一个密码输入框'} ></Input>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
