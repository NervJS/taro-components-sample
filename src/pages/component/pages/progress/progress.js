import "./progress.scss";
import React from "react";
import { View, Progress, Button, Text } from "@tarojs/components";

import Header from "../../../../components/head/head";

export default class PageView extends React.Component {
  constructor() {
    super(...arguments);
    this._timmer = null;
  }

  state = {
    progress: 0,
  };

  handleStart = () => {
    if (this._timmer || this.state.progress > 100) return;
    this._timmer = setInterval(() => {
      const value = this.state.progress + 2;
      if (value > 100) {
        return this.handleStop();
      }
      this.setState({
        progress: value,
      });
    }, 100);
  };

  handleStop = () => {
    if (this._timmer) {
      clearInterval(this._timmer);
      this._timmer = null;
    }
  };

  handleReset = () => {
    this.handleStop();
    this.setState({
      progress: 0,
    });
  };

  render() {
    const { progress } = this.state;
    return (
      <View className="components-page">
        <View className="components-page__header">
          <Header title="Progress"></Header>
        </View>
        <View className="components-page__body">
          <View className="components-page__body-title">
            <Text>type="horizontal"</Text>
          </View>
          <View className="components-page__body-example">
            <View className="example-progress">
              <Progress percent={20} showInfo strokeWidth={2}></Progress>
            </View>
            <View className="example-progress">
              <Progress
                percent={80}
                strokeWidth={4}
                active
                activeColor="blue"
              ></Progress>
            </View>
          </View>
          <View className="components-page__body-example">
            <View className="example-progress">
              <Progress
                showInfo
                strokeWidth={2}
                percent={progress}
                activeColor="#3C7FE8"
              ></Progress>
            </View>
            <View>
              <Button onClick={this.handleStart}>加载</Button>
              <Button onClick={this.handleStop}>暂停</Button>
              <Button onClick={this.handleReset}>重置</Button>
            </View>
          </View>

          <View className="components-page__body-title">
            <Text>type="circular"</Text>
          </View>
          <View className="components-page__body-example">
            <View className="example-progress">
              <Progress type="circular" activeColor="#3C7FE8"></Progress>
            </View>
          </View>

          <View className="components-page__body-title">
            <Text>type="ring"</Text>
          </View>
          <View className="components-page__body-example">
            <View className="example-progress">
              <Progress
                type="ring"
                strokeWidth={8}
                percent={80}
                secondarypercent={40}
                activeColor="#3C7FE8"
              ></Progress>
            </View>
          </View>

          <View className="components-page__body-title">
            <Text>type="scale-ring"</Text>
          </View>
          <View className="components-page__body-example">
            <View className="example-progress__small">
              <Progress
                type="scale-ring"
                strokeWidth={8}
                percent={80}
                secondarypercent={40}
                activeColor="#3C7FE8"
              ></Progress>
            </View>
          </View>

          <View className="components-page__body-title">
            <Text>type="arc"</Text>
          </View>
          <View className="components-page__body-example">
            <View className="example-progress">
              <Progress
                type="arc"
                strokeWidth={8}
                percent={80}
                activeColor="#3C7FE8"
              ></Progress>
            </View>
          </View>

          <View className="components-page__body-title">
            <Text>type="eclipse"</Text>
          </View>
          <View className="components-page__body-example">
            <View className="example-progress">
              <Progress
                type="eclipse"
                strokeWidth={8}
                percent={80}
                activeColor="#3C7FE8"
              ></Progress>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
