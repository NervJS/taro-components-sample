import React from 'react'
import { View, Button, Text, Slider } from '@tarojs/components'

import Header from '../../../../components/head/head'

import './index.scss'

export default class PageSlider extends React.Component {
  state = {
    value: 50
  }

  setValue = () => {
    const value = Math.floor(Math.random() * 150) + 50
    console.log(value)
    this.setState({
      value
    })
  }

  handleChanging = e => {
    console.log('[slider] e.detail:'+JSON.stringify(e.detail))
  }

  handleChange = e => {

  }

  render() {
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='Slider'></Header>
        </View>
        <View className='components-page_body'>

          <View className='components-page__body-example'>
            <View className='example-header'>
              <Text>设置step</Text>
            </View>
            <View className='example-body'>
              <Slider step={1} value={50}></Slider>
            </View>
          </View>

          <View className='components-page__body-example'>
            <View className='example-header'>
              <Text>显示当前的value</Text>
            </View>
            <View className='example-body'>
              <Slider step={1} value={50} showValue></Slider>
            </View>
          </View>

          <View className='components-page__body-example'>
            <View className='example-header'>
              <Text>设置最小/最大值</Text>
            </View>
            <View className='example-body'>
              <Slider step={1} value={100} showValue min={50} max={200}></Slider>
            </View>
          </View>

          <View className='components-page__body-example'>
            <View className='example-header'>
              <Text>UI设置</Text>
            </View>
            <View className='example-body'>
              <Slider step={1} value={50} activeColor='#6190E8' backgroundColor='red' blockColor='#333' blockSize={20}></Slider>
            </View>
          </View>

          <View className='components-page__body-example'>
            <View className='example-header'>
              <Text>数据绑定</Text>
            </View>
            <View className='example-body__column'>
              <Button onClick={this.setValue}>Set Value</Button>
              <Slider step={1} value={this.state.value} onChange={this.handleChange} onChanging={this.handleChanging} showValue min={50} max={200}></Slider>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
