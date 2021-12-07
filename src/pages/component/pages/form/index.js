import './index.scss'
import React from 'react'

import {
  View,
  Text,
  Label,
  Radio,
  Checkbox,
  Slider,
  Input,
  Button,
  RadioGroup,
  Form,
  CheckboxGroup,
  Switch
} from '@tarojs/components'

import Header from '../../../../components/head/head'

export default class PageForm extends React.Component {
  state = {
    radioItem: [
      {
        key: 'radio-1',
        value: '选项一',
        checked: false
      },
      {
        key: 'radio-2',
        value: '选项二',
        checked: false
      }
    ],
    checkItem: [
      {
        key: 'checkbox—1',
        value: '选项一',
        checked: false
      },
      {
        key: 'checkbox—2',
        value: '选项二',
        checked: false
      }
    ],
    sliderValue: 50
  }

  onHandleChange = e => {
    console.log(e)
  }

  onRadioChange = e => {
    console.log('[Radio] === onChange: ' + JSON.stringify(e))
  }

  onCheckChange = e => {
    console.log(e)
  }

  handleSliderChange = e => {
    console.log(e)
  }

  handleSliderChanging = e => {
    console.log(e)
  }

  formSubmit = e => {
    console.log('提交了')
    console.log(JSON.stringify(e))
  }

  formReset = e => {
    console.log(e)
  }

  render() {
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='Form'></Header>
        </View>
        <Form onSubmit={this.formSubmit} onReset={this.formReset}>
          <View className='components-page_body'>
            <View className='components-page__body-example'>
              <View className='example-header'>
                <Text>radio</Text>
              </View>
              <View className='example-body'>
                <Label id='radio1' target='radio1'>
                  <Radio name="radio-single" value='1' checked />
                  <Text>radio1</Text>
                </Label>
                <Label id='radio2' target='radio2'>
                  <Radio name="radio-single" value='2' />
                  <Text>radio2</Text>
                </Label>

              </View>

            </View>
            <View className='components-page__body-example'>
              <View className='example-header'>
                <Text>input</Text>
              </View>
              <View className='example-body'>
                <Input
                  name='text'
                  type='text'
                  placeholder={'请输入文字'}
                  onChange={this.onHandleChange} ></Input>
              </View>
              <View className='example-body'>
                <Input
                  name='number'
                  type='number'
                  placeholder={'请输入数字'}
                  onChange={this.onHandleChange} ></Input>
              </View>
              <View className='example-body'>
                <Input
                  name='password'
                  type='password'
                  placeholder={'请输入密码'}
                  onChange={this.onHandleChange} ></Input>
              </View>
            </View>
            <View className='components-page__body-example example'>
              <View className='example-form_func'>
                <Button className='example-form_button' formType='submit' type='primary'>
                  Submit
                </Button>
                <Button className='example-form_button' formType='reset'>
                  Reset
                </Button>
              </View>
            </View>
          </View>
        </Form>
      </View>
    )
  }
}
