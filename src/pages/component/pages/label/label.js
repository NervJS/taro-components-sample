import { Component } from '@tarojs/taro'

// RadioGroup
import {
  View,
  Text,
  CheckboxGroup,
  Checkbox,
  Label,
  Radio,
  RadioGroup
} from '@tarojs/components'

import Header from '../../../../components/head/head'

import './label.scss'

export default class PageLabel extends Component {

  config = {
    navigationBarTitleText: 'Label组件'
  }

  constructor() {
    super(...arguments)
  }

  state = {
    checked: false
  }

  handleChange = e => {
    const { checked } = this.state
    this.setState({
      checked: !checked
    })
  }

  render() {
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='Label'></Header>
        </View>
        <View className='components-page__body'>
          <View className='components-page__body-example example'>
            <View className='example-header'>
              <Text>表单组件在label内</Text>
            </View>
            <View className='example-body'>
              <CheckboxGroup>
                <Label className='example-body__label' for='1' key='1'>
                  <Checkbox value='美国'>美国</Checkbox>
                </Label>
                <Label className='example-body__label' for='2' key='2'>
                  <Checkbox value='中国' checked>
                    中国
                </Checkbox>
                </Label>
              </CheckboxGroup>
            </View>
          </View>
          <View className='components-page__body-example example'>
            <View className='example-header'>
              <Text>label用for标识表单组件</Text>
            </View>
            <View className='example-body'>
              <RadioGroup>
                <Label className='example-body__label' for='3' key='3'>
                  <Radio value='USA'>USA</Radio>
                </Label>
                <Label className='example-body__label' for='4' key='4'>
                  <Radio value='CHN' checked>
                    CHN
                  </Radio>
                </Label>
              </RadioGroup>
            </View>
          </View>
          <View className='components-page__body-example example'>
            <View className='example-header'>
              <Text>表单组件在Label外</Text>
            </View>
            <View className='example-body'>
              <RadioGroup>
                <Label className='example-body__label' for='5' key='5'>
                  <Radio value='GuangZhou'>广州</Radio>
                </Label>
                <Label className='example-body__label' for='6' key='6'>
                  <Radio value='ShenZhen'>深圳</Radio>
                </Label>
              </RadioGroup>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
