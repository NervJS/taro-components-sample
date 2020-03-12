<template>
  <view class="components-page">
    <view class="components-page__header">
      <Header title="Camera"></Header>
    </view>
    <view class="components-page__body">
      <view class="components-page__body-example example">
        <view class="example-body">
          <button type="primary" @tap="toggleDevice">开启{{devicePosition == 'back' ? '前置' : '后置'}}镜头</button>
          <camera
            class="cammer-content"
            @stop="handleStop"
            @error="handleError"
            :devicePosition="devicePosition"
          />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Header from "../../../../components/head/head.vue";
import './camera.scss'
export default {
  components: {
    Header
  },
  methods: {
    handleError() {
      alert("您的浏览器不允许使用摄像头");
    },

    handleStop() {
      alert("摄像头被非正常终止");
    },

    toggleDevice() {
      this.devicePosition =
        this.devicePosition == "back" ? "front" : "back";
    }
  }
};
</script>

<style>
</style>
