<template>
  <view class="components-page">
    <view class="components-page__header">
      <Header title="text"></Header>
    </view>
    <view class="components-page__body">
      <view class="components-page__body-example example">
        <view class="example-header">
          <text>H5、小程序通用</text>
        </view>
        <view class="example-body">
          <view class="example-body__text">
            <text selectable>可选择的文字</text>
          </view>
          <view class="example-body__text">
            <text>不可选择的文字</text>
          </view>
        </view>
      </view>
      <view class="components-page__body-example example">
        <view class="example-header">
          <text>仅工作在小程序</text>
        </view>
        <view class="example-body">
          <view class="example-body__text">
            <text>不支持多 空格文字</text>
          </view>
          <view class="example-body__text">
            <text space="ensp">多 空格文字(ensp)</text>
          </view>
          <view class="example-body__text">
            <text space="nbsp">多 空格文字(nbsp)</text>
          </view>
          <view class="example-body__text">
            <text>不解码文字&gt;</text>
          </view>
          <view class="example-body__text">
            <text decode>解码文字&gt;</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Header from "../../../../components/head/head.vue";
import './text.scss'

export default {
  components: {
    Header
  },
};
</script>

<style>
</style>
