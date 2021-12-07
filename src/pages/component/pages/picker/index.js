import Taro from '@tarojs/taro'
import React from 'react'
import { View, Text, Picker } from '@tarojs/components'
import Header from '../../../../components/head/head'

import './index.scss'

export default class PagePicker extends React.Component {
  state = {
    timeSel: '12:01',
    dateSel: '2018-04-22',
    selectorValue: 1,
    mulitSelectorValues: [0, 0],
    selector: ['美国', '中国', '巴西', '日本'],
    multiSelector: [['饭', '粥', '粉'], ['猪肉', '牛肉']],
  }

  handleChange = e => {
    this.setState({
      selectorValue: e.detail.value
    })
  }

  handleMulitChange = e => {
    const values = e.detail.value.map((item,index) => {
      return this.state.multiSelector[index][item]
    })
    this.setState({
      mulitSelectorValues: e.detail.value
    })
  }

  handleColumnchange = e => {
    console.log(e.detail)
  }

  handleTimeChange = e => {
    this.setState({
      timeSel: e.detail.value
    })
  }

  handleDateChange = e => {
    const val = e.detail.value
    const dateSel = Array.isArray(val) ? val.join('-') : val
    this.setState({ dateSel })
    const isContentType = Object.keys(header).find(key => key.toLowerCase() === 'content-type')
    if (!isContentType) {
      header['content-type'] = '...'
    }
  }

  render () {
    const { selector, multiSelector, selectorValue, mulitSelectorValues, timeSel, dateSel } = this.state
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='Picker'></Header>
        </View>
        <View className='components-page_body'>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>普通选择器</Text>
            </View>
            <View className="picker-row">
              <Text className='picker-content'>
                当前选择：{selector[selectorValue]}
              </Text>
              <Picker
                className='picker'
                mode='selector'
                range={selector}
                value={selectorValue}
                onChange={this.handleChange}>
              </Picker>
            </View>
          </View>
          <View className='page-section'>
              <View className='page-section-title'>
                <Text>多行选择器</Text>
              </View>
              <View className="picker-row">
                <Text className='picker-content'>
                  当前选择： {
                    `${this.state.multiSelector[0][mulitSelectorValues[0]]}, ${this.state.multiSelector[1][mulitSelectorValues[1]]}`
                  }
                </Text>
                <Picker
                  className='picker'
                  mode='multiSelector'
                  range={multiSelector}
                  onChange={this.handleMulitChange}
                  onColumnchange={this.handleColumnchange}>
                </Picker>
              </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>时间选择器</Text>
            </View>
            <View className="picker-row">
              <Text className='picker-content'>当前选择：{timeSel}</Text>
              <Picker className='picker' mode='time' onChange={this.handleTimeChange} value={timeSel}>
              </Picker>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>日期选择器</Text>
            </View>
            <View className="picker-row">
              <Text className='picker-content'>当前选择：{dateSel}</Text>
              <Picker className='picker' mode='date' onChange={this.handleDateChange} value={dateSel}>
              </Picker>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
