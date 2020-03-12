<template>
  <view class="components-page">
    <view class="components-page__header">
      <Header title="image"></Header>
    </view>
    <view class="components-page__body">
      <view class="components-page__body-example example">
        <view class="example-header">
          <text>Local image</text>
        </view>
        <view class="example-body">
          <image style="width: 300px;height: 300px;" src="./nerv_logo.png"></image>
        </view>
      </view>
      <view class="components-page__body-example example">
        <view class="example-header">
          <text>Internet image</text>
        </view>
        <view class="example-body">
          <image
            style="width: 300px;height: 300px;"
            src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
          ></image>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Header from "../../../../components/head/head.vue";
import "./image.scss";

export default {
  components: {
    Header
  }
};
</script>

<style>
</style>
