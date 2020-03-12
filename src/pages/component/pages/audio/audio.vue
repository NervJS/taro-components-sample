<template>
  <view class="components-page">
    <view class="components-page__header">
      <Header title="Audio"></Header>
    </view>
    <view class="components-page__body">
      <view class="components-page__body-example example">
        <view class="example-body">
          <audio
            src="http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46"
            controls
            autoplay="false"
            loop="false"
            muted
            initial-time="30"
            class="example-body__audio"
            id="audio"
          />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Header from '../../../../components/head/head.vue'
import './audio.scss'
export default {
  components: {
    Header
  }
};
</script>

<style>
</style>
