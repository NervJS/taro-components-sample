import React from 'react'
import { View, Text, PickerView, PickerViewColumn } from '@tarojs/components'
import Header from '../../../../components/head/head'

export default class Picks extends React.Component {
  constructor() {
    super(...arguments)
    const date = new Date()
    const years = []
    const months = []
    const days = []
    for (let i = 1990; i <= date.getFullYear(); i++) {
      years.push(i)
    }
    for (let i = 1; i <= 12; i++) {
      months.push(i)
    }
    for (let i = 1; i <= 31; i++) {
      days.push(i)
    }
    this.state = {
      years: years,
      year: date.getFullYear(),
      months: months,
      month: 2,
      days: days,
      day: 2,
      value: [years.length - 1, 1, 1],
    }
  }

  onChange = e => {
    const val = e.detail.value
    console.log('val: ' + val )
    this.setState({
      year: this.state.years[val[0]],
      month: this.state.months[val[1]],
      day: this.state.days[val[2]],
      value: val
    })
  }

  render() {
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='PickerView'></Header>
        </View>
        <View className='components-page_body'>
          <View className='example'>
            <View className='example-header'>
              <Text>{this.state.year}年{this.state.month}月{this.state.day}日</Text>
            </View>
            <View className='picker-view-example'>
              <PickerView indicatorStyle="height: 50px;" style="width: 100%; height: 300px;" value={this.state.value} onChange={this.onChange}>
                <PickerViewColumn>
                  {this.state.years.map(item => {
                    return (
                      <View>{item}年</View>
                    );
                  })}
                </PickerViewColumn>
                <PickerViewColumn>
                  {this.state.months.map(item => {
                    return (
                      <View>{item}月</View>
                    );
                  })}
                </PickerViewColumn>
                <PickerViewColumn>
                  {this.state.days.map(item => {
                    return (
                      <View>{item}日</View>
                    );
                  })}
                </PickerViewColumn>
              </PickerView>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
