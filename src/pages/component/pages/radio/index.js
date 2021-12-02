import React from 'react'
import cn from 'classnames'
import { View, Text, Radio, Label, RadioGroup } from '@tarojs/components'
import Header from '../../../../components/head/head'

import './index.scss'

export default class PageRadio extends React.Component {
  state = {
    isChecked: false,
    selectValue: '中国',
    list: [
      {
        value: '美国',
        text: '美国',
        checked: false
      },
      {
        value: '中国',
        text: '中国',
        checked: true
      },
      {
        value: '巴西',
        text: '巴西',
        checked: false
      },
      {
        value: '日本',
        text: '日本',
        checked: false
      },
      {
        value: '英国',
        text: '英国',
        checked: false
      },
      {
        value: '法国',
        text: '法国',
        checked: false
      }
    ]
  }

  radioChange = e => {
    this.setState({
      selectValue: e._detail.value
    })
  }

  render() {
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='Radio'></Header>
        </View>
        <View className='components-page_body'>
          <View className='components-page__body-example example'>
            <View className='example-header'>
              <Text>默认样式</Text>
            </View>
            <View className='example-body'>
              <Label className='example-body-label'>
                <Radio className="example-body-label__radio" value='选中' checked id='0' groupId='group1' />
                <Text className='example-title'>选中</Text>
              </Label>

              <Label className='example-body-label'>
                <Radio style='margin-left: 20rpx' value='未选中' id='1' groupId='group1' />
                <Text className='example-title'>未选中</Text>
              </Label>
            </View>
          </View>
          <View className='components-page__body-example example'>
            <View className='example-header'>
              <Text>推荐展示样式</Text>
            </View>
            <View className='example-body-group'>
              <View className='example-body__select-box'>
                <Text>选中的值是: {this.state.selectValue}</Text>
              </View>
              <View className='example-body__radios-box'>
                <RadioGroup id='radio-group' className='radio-vertical' onChange={this.radioChange}>
                  <View className='example-body__radios'>
                    {this.state.list.map((item, i) => {
                      return (
                        <View 
                          className={ cn('example-body__radios-label', { 
                            'example-body__radios-label__active': i === this.state.list.length - 1
                          }) } 
                          for={i} key={i}
                        >
                          <Radio id={i} value={item.value} checked={item.checked} groupId='radio-group' />
                          <Text className='example-title'>{item.text}</Text>
                        </View>
                      )
                    })}
                  </View>
                </RadioGroup>
              </View>
            </View>
          </View>
        </View>
      </View >
    )
  }
}
