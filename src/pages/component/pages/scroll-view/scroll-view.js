import './scroll-view.scss'

import { Component } from '@tarojs/taro'
import { View, Text, ScrollView, Button } from '@tarojs/components'

import Header from '../../../../components/head/head'

export default class PageView extends Component {

  config = {
    navigationBarTitleText: 'ScrollView组件'
  }

  constructor() {
    super(...arguments)
  }

  render() {
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='ScrollView'></Header>
        </View>
        <View className='components-page__body'>
          <View className='components-page__body-example example'>
            <View className='example-header'>
              <Text> Horizontal 横向滚动</Text>
            </View>
            <View className='example-body'>
              <ScrollView
                scrollX
                className='example-body__scroll-view'>
                <View className='example-body__scroll-view-item demo-text-1'></View>
                <View className='example-body__scroll-view-item demo-text-2'></View>
                <View className='example-body__scroll-view-item demo-text-3'></View>
              </ScrollView>
            </View>
          </View>
          <View className='components-page__body-example example'>
            <View className='example-header'>
              <Text>Vertical 纵向滚动</Text>
            </View>
            <View className='example-body example-body--vertical'>
              <ScrollView
                scrollY
                scrollWithAnimation
                className='example-body__scroll-view'>
                <View className='example-body__scroll-view-item demo-text-1'></View>
                <View className='example-body__scroll-view-item demo-text-2'></View>
                <View className='example-body__scroll-view-item demo-text-3'></View>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
