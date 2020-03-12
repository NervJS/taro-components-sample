<template>
  <view class="page-head">
    <view class="page-head-title">{{title}}</view>
    <view class="page-head-line" />
    <view class="page-head-desc" v-if="desc">{{desc}}</view>
  </view>
</template>

<script>
export default {
  props: ["title", "desc"]
};
</script>

<style>
</style>
