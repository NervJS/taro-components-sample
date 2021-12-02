import './index.scss'

import Taro from '@tarojs/taro'
import React from 'react'

import { View, Navigator, Text } from '@tarojs/components'

import Header from '../../../../components/head/head'

export default class PageSwitch extends React.Component {
  state = {}

  render() {
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='Navigator'></Header>
        </View>
        <View className='components-page_body'>
          <View className='components-page__body-example example'>
            <View className='example-body'>
              {
                process.env.TARO_ENV != 'h5' ? 
                  <View className='example-body__navigators'>
                    <Navigator
                      url='/pages/component/pages/navigatePage/index'
                      className='example-body__navigators-item'
                      hoverClass='example-body__navigators-item'
                    >
                      <View className='example-body__navigator'>
                        <Text>跳转到新页面</Text>
                      </View>
                    </Navigator>
                    <Navigator
                      url='/pages/component/pages/redirectPage/index'
                      className='example-body__navigators-item'
                      hoverClass='example-body__navigators-item'
                      open-type='redirect'
                    >
                      <View className='example-body__navigator'>
                        <Text>在当前页打开</Text>
                      </View>
                    </Navigator>
                  </View> : 
                  <Text>暂未支持，请使用Taro API</Text>
              }

            </View>
          </View>
        </View>
      </View>
    )
  }
}
