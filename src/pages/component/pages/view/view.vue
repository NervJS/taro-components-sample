<template>
  <view class="components-page">
    <view class="components-page__header">
      <Header title="view"></Header>
    </view>
    <view class="components-page__body">
      <view class="components-page__body-example example">
        <view class="example-header">
          <text>flex-direction: row 横向布局</text>
        </view>
        <view class="example-body">
          <view class="example-body__list">
            <view class="example-body__list-item demo-text-1"></view>
            <view class="example-body__list-item demo-text-2"></view>
            <view class="example-body__list-item demo-text-3"></view>
          </view>
        </view>
      </view>
      <view class="components-page__body-example example">
        <view class="example-header">
          <text>flex-direction: column 纵向布局</text>
        </view>
        <view class="example-body">
          <view class="example-body__list example-body__list--vertical">
            <view class="example-body__list-item demo-text-1"></view>
            <view class="example-body__list-item demo-text-2"></view>
            <view class="example-body__list-item demo-text-3"></view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Header from "../../../../components/head/head.vue";
import './view.scss'

export default {
  components: {
    Header
  },
};
</script>

<style>
</style>
