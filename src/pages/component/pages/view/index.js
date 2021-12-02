import React from 'react'
import { View, Text } from '@tarojs/components'

import Header from '../../../../components/head/head'

import './index.scss'

export default class PageView extends React.Component {
  render() {
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='View'></Header>
        </View>
        <View className='components-page_body'>
          <View className='example'>
            <View className='example-header'>
              <Text>flex-direction: row 横向布局</Text>
            </View>
            <View className='view-example'>
              <View className='view-example__list'>
                <View className='view-example__list-item-1'>
                  <Text>A</Text>
                </View>
                <View className='view-example__list-item-2'>
                  <Text>B</Text>
                </View>
                <View className='view-example__list-item-3'>
                  <Text>C</Text>
                </View>
              </View>
            </View>
          </View>
          <View className='example'>
            <View className='example-header'>
              <Text>flex-direction: column 纵向布局</Text>
            </View>
            <View className='view-example'>
              <View className='view-example__list--vertical'>
                <View className='view-example__list-item-1'>
                  <Text>A</Text>
                </View>
                <View className='view-example__list-item-2'>
                  <Text>B</Text>
                </View>
                <View className='view-example__list-item-3'>
                  <Text>C</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
