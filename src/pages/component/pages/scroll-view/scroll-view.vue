<template>
  <view class="components-page">
    <view class="components-page__header">
      <Header title="scroll-view"></Header>
    </view>
    <view class="components-page__body">
      <view class="components-page__body-example example scroll-view">
        <view class="example-header">
          <text>Horizontal 横向滚动</text>
        </view>
        <view class="example-body">
          <scroll-view scroll-x class="example-body__scroll-view">
            <view class="example-body__scroll-view-item demo-text-1"></view>
            <view class="example-body__scroll-view-item demo-text-2"></view>
            <view class="example-body__scroll-view-item demo-text-3"></view>
          </scroll-view>
        </view>
      </view>
      <view class="components-page__body-example example scroll-view">
        <view class="example-header">
          <text>Vertical 纵向滚动</text>
        </view>
        <view class="example-body example-body--vertical">
          <scroll-view scroll-y scroll-with-animation class="example-body__scroll-view">
            <view class="example-body__scroll-view-item demo-text-1"></view>
            <view class="example-body__scroll-view-item demo-text-2"></view>
            <view class="example-body__scroll-view-item demo-text-3"></view>
          </scroll-view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Header from "../../../../components/head/head.vue";
import './scroll-view.scss'
export default {
  components: {
    Header
  },
};
</script>

<style>
</style>
