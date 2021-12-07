import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import logo from '../../asset/component/logo.png'
import viewPng from '../../asset/component/view.png'
import contentPng from '../../asset/component/content.png'
import formPng from '../../asset/component/form.png'
import navPng from '../../asset/component/nav.png'
import mediaPng from '../../asset/component/media.png'
import mapPng from '../../asset/component/map.png'
import canvasPng from '../../asset/component/canvas.png'

import './index.scss'

const PNGS = {
  viewPng,
  contentPng,
  formPng,
  navPng,
  mediaPng,
  mapPng,
  canvasPng
}

export default class Index extends Component {
  state = {
    list: [
      {
        id: 'view',
        name: '视图容器',
        open: false,
        pages: ['view', 'scroll-view', 'swiper']
      },
      {
        id: 'content',
        name: '基础内容',
        open: false,
        pages: ['text', 'icon', 'progress']
      },
      {
        id: 'form',
        name: '表单组件',
        open: false,
        pages: [
          'button',
          'checkbox',
          'form',
          'input',
          'label',
          'picker',
          'picker-view',
          'radio',
          'slider',
          'switch',
          'textarea'
        ]
      },
      {
        id: 'nav',
        name: '导航',
        open: false,
        pages: ['navigator']
      },
      {
        id: 'media',
        name: '媒体组件',
        open: false,
        pages: ['image', 'audio', 'video', 'camera']
      },
      // {
      //   id: 'map',
      //   name: '地图',
      //   pages: ['map']
      // },
      // {
      //   id: 'canvas',
      //   name: '画布',
      //   pages: ['canvas']
      // }
    ]
  }

  kindToggle = e => {
    const id = e.currentTarget.id
    const list = this.state.list
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setState({
      list: list
    })
  }

  goToComponent = (page, e) => {
    Taro.navigateTo({
      url: page.url
    })
  }

  render () {
    return (
      <View className='index'>
        <View className='index-hd'>
          <Image className='index-logo' src={logo} />
          <View className='index-desc'>
            <Text className='index-desc_text'>以下将展示Taro官方组件能力，组件样式仅供参考，开发者可根据自身需求自定义组件样式。</Text>
          </View>
        </View>
        <View className='index-bd'>
          <View className='kind-list'>
            {this.state.list
              .map((item, index) => {
                item.hdClass = item.open ? 'kind-list-item-hd-show' : 'kind-list-item-hd'
                item.bdClass = item.open ? 'kind-list-item-bd-show' : 'kind-list-item-bd'
                item.boxClass = item.open ? 'navigator-box-show' : 'navigator-box'
                item.imgSrc = PNGS[`${item.id}Png`]
                item._pages = item.pages.map(page => {
                  return {
                    page: page,
                    url: `/pages/component/pages/${page}/index`
                  }
                })
                return item
              })
              .map((item, index) => {
                return (
                  <View className='kind-list-item' key={index}>
                    <View
                      id={item.id}
                      className={item.hdClass}
                      onClick={this.kindToggle}>
                      <View className='kind-list-text'>
                        <Text>{item.name}</Text>
                      </View>
                      <Image className='kind-list-img' src={item.imgSrc} />
                    </View>
                    <View className={item.bdClass}>
                      <View className={item.boxClass}>
                        {item._pages.map((page, index) => {
                          return (
                            <View
                              onClick={this.goToComponent.bind(this, page)}
                              key={index}
                              className='navigator'
                            >
                              <Text className='navigator-text'>{page.page}</Text>
                              <View className='navigator-arrow'>
                                <View  className='navigator-arrow-icon'></View>
                              </View>
                            </View>
                          )
                        })}
                      </View>
                    </View>
                  </View>
                )
              })}
          </View>
        </View>
      </View>
    )
  }
}
