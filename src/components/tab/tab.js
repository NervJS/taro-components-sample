import React from 'react'
import { connect } from 'react-redux'
import { View, Image, Button ,Text} from '@tarojs/components'

import { diao } from '../../utils'

import mv from '../../asset/timg.jpg'

import './tab.scss'

import { increment, decrement, asyncInc } from '../../actions/counter'

class Tab extends React.Component {

  handler = () => {
    console.log(this.props.t)
    console.log(diao)
    this.props.xx()
  }

  render () {
    return (
      <View className='tab'>
        <Button className='add_btn' onClick={this.props.inc}><Text>+</Text></Button>
        <Button className='dec_btn' onClick={this.props.dec}><Text>-</Text></Button>
        <Button className='dec_btn' onClick={this.props.asyncInc}><Text>async</Text></Button>
        <View>{this.props.counter.num}</View>
        <Image src={mv}/>
        <View onClick={this.handler}>componentTab{this.props.t}</View>
      </View>
    )
  }
}

export default connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  inc () {
    dispatch(increment())
  },
  dec () {
    dispatch(decrement())
  },
  asyncInc () {
    dispatch(asyncInc())
  }
}))(Tab)
