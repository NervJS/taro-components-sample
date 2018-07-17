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

  blur= () => {
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
      <View className='container'>
        <Header title='Textarea'></Header>
        <Button type='primary' onClick={this.handleClick}>点击设置值到第一个Textarea</Button>
        <View className='page-body'>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>输入区域高度自适应，不会出现滚动条</Text>
            </View>
            <View className='textarea-container'>
              <Textarea onFocus={this.focus} onBlur={this.blur} value={this.state.value} placeholder='这是一个Textarea' autoHeight onInput={this.input}></Textarea>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>这是一个可以自动聚焦的textarea</Text>
            </View>
            <View className='textarea-container'>
              <Textarea autoFocus placeholder='这是一个Textarea'></Textarea>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
