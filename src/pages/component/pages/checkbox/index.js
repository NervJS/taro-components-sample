import React from 'react'
import { View, Text, Checkbox, Label, CheckboxGroup } from '@tarojs/components'
import Header from '../../../../components/head/head'

import './index.scss'

export default class PageCheckbox extends React.Component {
  state = {
    selectValues: ['中国', '法国'],
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
        checked: true
      }
    ]
  }

  checkboxChange = e => {
    const list = this.state.list.map(item => {
      item.checked = e.detail.value.indexOf(item.value) >= 0
      return item
    })
    this.setState({
      list,
      selectValues: e.detail.value
    })
  }

  render() {
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='Checkbox'></Header>
        </View>
        <View className='components-page_body'>
          <View className='example'>
            <View className='example-header'>
              <Text>默认样式</Text>
            </View>
            <View className='checkbox-example'>
              <Checkbox value='选中' checked>
                选中
              </Checkbox>
              <Checkbox style='margin-left: 20px' value='未选中'>
                未选中
              </Checkbox>
            </View>
          </View>
          <View className='example'>
            <View className='example-header'>
              <Text>推荐展示样式</Text>
            </View>
            <View className='checkbox-example-vertical'>
              <View className='select-box'>
                <Text>当前选择: {this.state.selectValues.join(',')}</Text>
              </View>
              <CheckboxGroup id='cg' className='checkbox-list' name='checkbox' onChange={this.checkboxChange}>
                {this.state.list.map(item => {
                  return (
                    <Label
                      className='checkbox-list__label'
                      key={item.value}>
                      <Checkbox
                        className='checkbox-list__checkbox'
                        groupId='cg'
                        value={item.value}
                        checked={item.checked}>
                        {item.text}
                      </Checkbox>
                    </Label>
                  )
                })}
              </CheckboxGroup>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
