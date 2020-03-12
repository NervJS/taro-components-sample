<template>
  <view class="components-page">
    <view class="components-page__header">
      <Header title="navigator"></Header>
    </view>
    <view class="components-page__body">
      <view class="components-page__body-example example">
        <view class="example-body">
          <view class="example-body__navigators">
            <navigator
              url="/pages/component/pages/navigatePage/navigatePage"
              class="example-body__navigators-item"
            >
              <view class="example-body__navigator">跳转到新页面</view>
            </navigator>
            <navigator
              url="/pages/component/pages/redirectPage/redirectPage"
              class="example-body__navigators-item"
              open-type="redirect"
            >
              <view>在当前页打开</view>
            </navigator>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Header from '../../../../components/head/head.vue'
import './navigator.scss'

export default {
  components: {
    Header
  }
};
</script>

<style>
</style>
