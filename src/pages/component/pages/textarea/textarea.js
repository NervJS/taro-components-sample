import './textarea.scss'

import { Component } from '@tarojs/taro'
import { View, Text, Textarea, Button } from '@tarojs/components'

import Header from '../../../../components/head/head'

export default class PageTextarea extends Component {

  config = {
    navigationBarTitleText: 'Textare组件'
  }

  constructor() {
    super(...arguments)
  }

  state = {
    value: '初始值',
  }

  handleClick = () => {
    this.setState({
      value: '点击了按钮',
    })
  }

  blur = () => {
    console.log('blur');

  }

  focus = () => {
    console.log('focus')
  }

  input = (e) => {
    console.log(e);
  }

  render() {
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='Textarea'></Header>
        </View>
        <View className='components-page__body'>

          <View className='components-page__body-example example'>
            <View className='example-header'>
              <Text>输入区域高度自适应，不会出现滚动条</Text>
            </View>
            <View className='example-body'>
              <View className='example-body__button'>
                <Button size='mini' type='primary' onClick={this.handleClick}>点击设置值到第一个Textarea</Button>
              </View>
              <Textarea onFocus={this.focus} onBlur={this.blur} value={this.state.value} placeholder='这是一个Textarea' autoHeight onInput={this.input}></Textarea>
            </View>
          </View>

          <View className='components-page__body-example example'>
            <View className='example-header'>
              <Text>这是一个可以自动聚焦的textarea</Text>
            </View>
            <View className='example-body'>
              <Textarea autoFocus placeholder='这是一个Textarea'></Textarea>
            </View>
          </View>

        </View>
      </View >
    )
  }
}
