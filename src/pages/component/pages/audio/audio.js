import './audio.scss'

import { Component } from '@tarojs/taro'
import { View, Audio } from '@tarojs/components'

import Header from '../../../../components/head/head'

import './audio.scss'

export default class PageView extends Component {

  config = {
    navigationBarTitleText: 'Audio组件'
  }

  constructor() {
    super(...arguments)
  }

  render() {
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='Audio'></Header>
        </View>
        <View className='components-page__body'>
          <View className='components-page__body-example example'>
            <View className='example-body'>
              <Audio
                src='http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'
                controls
                autoplay={false}
                loop={false}
                muted
                initialTime='30'
                className='example-body__audio'
                id='audio' ></Audio>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
