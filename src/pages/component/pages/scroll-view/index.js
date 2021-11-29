import React from 'react'
import { View, Text, ScrollView, Button } from '@tarojs/components'

import Header from '../../../../components/head/head'

import './index.scss'

export default class PageView extends React.Component {
  render() {
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='ScrollView'></Header>
        </View>
        <View className='components-page__body'>
          <View className='example'>
            <View className='example-header'>
              <Text> Horizontal 横向滚动</Text>
            </View>
            <View className='scroll-view-example'>
              <ScrollView
                scrollX
                className='scroll-view-example__H'
              >
                <View className='scroll-view-example__item-1'><Text>A</Text></View>
                <View className='scroll-view-example__item-2'><Text>B</Text></View>
                <View className='scroll-view-example__item-3'><Text>C</Text></View>
              </ScrollView>
            </View>
          </View>

          <View className='example'>
            <View className='example-header'>
              <Text>Vertical 纵向滚动</Text>
            </View>
            <View className='scroll-view-example'>
              <ScrollView
                scrollY
                scrollWithAnimation
                className='scroll-view-example__V'
              >
                <View className='scroll-view-example__item-1'><Text>A</Text></View>
                <View className='scroll-view-example__item-2'><Text>B</Text></View>
                <View className='scroll-view-example__item-3'><Text>C</Text></View>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
