import React from 'react'
import {
  View,
  Text,
  Swiper,
  SwiperItem,
  Switch,
  Slider
} from '@tarojs/components'
import Header from '../../../../components/head/head'

import './index.scss'

export default class PageView extends React.Component {
  state = {
    current: 1,
    duration: 500,
    interval: 5000,
    isCircular: true,
    verticalIsCircular: true,
    isAutoplay: false,
    verticalIsAutoplay: false,
    hasIndicatorDots: true,
    verticalHasIndicatorDots: true
  }

  setAutoPlay = (e) => {
    this.setState({
      isAutoplay: e.detail.value
    })
  }

  setVerticalAutoPlay = (e) => {
    this.setState({
      verticalIsAutoplay: e.detail.value
    })
  }

  setCircular = (e) => {
    this.setState({
      isCircular: e.detail.value
    })
  }

  setVerticalCircular = (e) => {
    this.setState({
      verticalIsCircular: e.detail.value
    })
  }

  setIndicatorDots = e => {
    this.setState({
      hasIndicatorDots: e.detail.value
    })
  }

  setVerticalIndicatorDots = e => {
    this.setState({
      verticalHasIndicatorDots: e.detail.value
    })
  }

  setInterval = e => {
    this.setState({
      interval: e.detail.value
    })
  }

  setDuration = e => {
    console.log(this)
    this.setState({
      duration: e.detail.value
    })
  }

  render() {
    const {
      current,
      isAutoplay,
      duration,
      isCircular,
      interval,
      hasIndicatorDots,
      verticalIsCircular,
      verticalHasIndicatorDots,
      verticalIsAutoplay
    } = this.state

    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='Swiper'></Header>
        </View>
        <View className='components-page__body-swiper'>
          <View className='example'>
            <View className='example-header'>
              <Text>Swiper 横向滑动</Text>
            </View>
            <View className='swiper-example'>
              <Swiper
                slideMult='10'
                indicatorColor='#999'
                indicatorActiveColor='#333'
                current={current}
                duration={duration}
                interval={interval}
                circular={isCircular}
                autoplay={isAutoplay}
                indicatorDots={hasIndicatorDots}
                preMargin='20'>
                <SwiperItem>
                  <View className='swiper-example__list-item-1'><Text>A</Text></View>
                </SwiperItem>
                <SwiperItem>
                  <View className='swiper-example__list-item-2'><Text>B</Text></View>
                </SwiperItem>
                <SwiperItem>
                  <View className='swiper-example__list-item-3'><Text>C</Text></View>
                </SwiperItem>
              </Swiper>
              <View className='switch-list'>
                <View className='switch-list__item'>
                  <View className='switch-list__text'><Text>指示点</Text></View>
                  <Switch checked={hasIndicatorDots} onChange={this.setIndicatorDots} ></Switch>
                </View>
                <View className='switch-list__item'>
                  <View className='switch-list__text'><Text>自动播放</Text></View>
                  <Switch checked={isAutoplay} onChange={this.setAutoPlay} ></Switch>
                </View>
                <View className='switch-list__item'>
                  <View className='switch-list__text'><Text>循环播放</Text></View>
                  <Switch checked={isCircular} onChange={this.setCircular} ></Switch>
                </View>
              </View>
              <View className='slider-list'>
                <View className='slider-list__item'>
                  <View className='slider-list__item-header'>
                    <Text>幻灯片切换时长(ms)</Text>
                  </View>
                  <View className='slider-list__item-body'>
                    <Slider
                      showValue
                      step={1}
                      min={500}
                      max={2000}
                      value={duration}
                      onChange={this.setDuration}></Slider>
                  </View>
                </View>
                <View className='slider-list__item'>
                  <View className='slider-list__item-header'>
                    <Text>自动播放间隔时长(ms)</Text>
                  </View>
                  <View className='slider-list__item-body'>
                    <Slider
                      showValue
                      step={1}
                      min={2000}
                      max={10000}
                      value={this.state.interval}
                      onChange={this.setInterval} ></Slider>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className='example'>
            <View className='example-header'>
              <Text>Swiper 纵向滑动</Text>
            </View>
            <View className='swiper-example'>
              <Swiper
                slideMult='10'
                className='test-h'
                indicatorColor='#999'
                indicatorActiveColor='#333'
                vertical
                circular={verticalIsCircular}
                indicatorDots={verticalHasIndicatorDots}
                autoplay={verticalIsAutoplay}
                preMargin='20'>
                <SwiperItem>
                  <View className='swiper-example__list-item-1'><Text>A</Text></View>
                </SwiperItem>
                <SwiperItem>
                  <View className='swiper-example__list-item-2'><Text>B</Text></View>
                </SwiperItem>
                <SwiperItem>
                  <View className='swiper-example__list-item-3'><Text>C</Text></View>
                </SwiperItem>
              </Swiper>
              <View className='switch-list'>
                <View className='switch-list__item'>
                  <View className='switch-list__text'><Text>指示点</Text></View>
                  <Switch checked={verticalHasIndicatorDots} onChange={this.setVerticalIndicatorDots} ></Switch>
                </View>
                <View className='switch-list__item'>
                  <View className='switch-list__text'><Text>自动播放</Text></View>
                  <Switch checked={verticalIsAutoplay} onChange={this.setVerticalAutoPlay} ></Switch>
                </View>
                <View className='switch-list__item'>
                  <View className='switch-list__text'><Text>循环播放</Text></View>
                  <Switch checked={verticalIsCircular} onChange={this.setVerticalCircular} ></Switch>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
