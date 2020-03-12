<template>
  <view class="components-page">
    <view class="components-page__header">
      <Header title="button"></Header>
    </view>
    <view class="components-page__body">
      <view class="components-page__body-example example">
        <view class="example-body">
          <button
            v-for="(item, index) in btn"
            :key="index"
            :size="item.size ? item.size : ''"
            :type="item.type ? item.type : ''"
            :loading="item.loading ? item.loading : false"
            :disabled="item.disabled ? item.disabled : false"
          >{{item.text}}</button>
          <button plain type="primary">按钮</button>
          <button plain type="primary" disabled>不可点击的按钮</button>
          <button plain>镂空按钮</button>
          <button plain disabled>镂空按钮 Disabled</button>
          <view class="btn-center">
            <button size="mini" type="primary">小号按钮</button>
            <button size="mini">小号按钮</button>
            <button size="mini" type="warn">小号按钮</button>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Header from "../../../../components/head/head.vue";
import './button.scss'
export default {
  components: {
    Header
  },
  data() {
    return {
      btn: [
        {
          text: "页面主操作 Normal",
          size: "default",
          type: "primary"
        },
        {
          text: "页面主操作 Loading",
          size: "default",
          type: "primary",
          loading: true
        },
        {
          text: "页面主操作 Disabled",
          size: "default",
          type: "primary",
          disabled: true
        },
        {
          text: "页面次要操作 Normal",
          size: "default",
          type: "default"
        },
        {
          text: "页面次要操作 Disabled",
          size: "default",
          type: "default",
          disabled: true
        },
        {
          text: "警告类操作 Normal",
          size: "default",
          type: "warn"
        },
        {
          text: "警告类操作 Disabled",
          size: "default",
          type: "warn",
          disabled: true
        }
      ]
    };
  }
};
</script>

<style>
</style>
