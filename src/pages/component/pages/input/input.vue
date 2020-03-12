<template>
  <view class="components-page">
    <view class="components-page__header">
      <Header title="input"></Header>
    </view>
    <view class="components-page__body">
      <view class="components-page__body-example example">
        <view class="example-header">
          <text>可以自动聚焦的input</text>
        </view>
        <view class="example-body">
          <input type="text" placeholder="将会获取焦点" focus />
        </view>
      </view>
      <view class="components-page__body-example example">
        <view class="example-header">
          <text>控制最大输入长度的input</text>
        </view>
        <view class="example-body">
          <input type="text" placeholder="最大输入长度为10" maxlength="10" />
        </view>
      </view>
      <view class="components-page__body-example example">
        <view class="example-header">
          <text>实时获取输入值:{{value}}</text>
        </view>
        <view class="example-body">
          <input type="text" placeholder="输入同步到view中" v-model="value" />
        </view>
      </view>
      <view class="components-page__body-example example">
        <view class="example-header">
          <text>数字输入的input</text>
        </view>
        <view class="example-body">
          <input type="number" placeholder="这是一个数字输入框" />
        </view>
      </view>
      <view class="components-page__body-example example">
        <view class="example-header">
          <text>密码输入的input</text>
        </view>
        <view class="example-body">
          <input type="password" password placeholder="这是一个密码输入框" />
        </view>
      </view>
      <view class="components-page__body-example example">
        <view class="example-header">
          <text>身份证输入的input</text>
        </view>
        <view class="example-body">
          <input type="idcard" placeholder="身份证输入键盘" />
        </view>
      </view>
      <view class="components-page__body-example example">
        <view class="example-header">
          <text>控制占位符颜色的input</text>
        </view>
        <view class="example-body">
          <input type="text" placeholder="占位符字体是红色的" placeholderStyle="color:red" />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Header from "../../../../components/head/head.vue";
import "./input.scss";

export default {
  components: {
    Header
  },
  data() {
    return {
      value: ""
    };
  }
};
</script>

<style>
</style>
