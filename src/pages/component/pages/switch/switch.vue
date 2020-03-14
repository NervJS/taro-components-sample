<template>
  <view class="container">
    <Header title="switch"></Header>
    <view class="page-body">
      <view class="page-section">
        <view class="page-section-title">
          <text>静态展示</text>
        </view>
        <view class="switch-list">
          <view class="switch-list__item">
            <view class="switch-list__text">关闭</view>
            <switch></switch>
          </view>
          <view class="switch-list__item">
            <view class="switch-list__text">开启中</view>
            <switch checked></switch>
          </view>
          <view class="switch-list__item">
            <view class="switch-list__text">更换颜色</view>
            <switch checked color="#6190E8"></switch>
          </view>
          <view class="switch-list__item">
            <view class="switch-list__text">CheckBox形式(h5暂不支持)</view>
            <switch type="checkbox"></switch>
          </view>
        </view>
      </view>
      <view class="page-section">
        <view class="page-section-title">
          <text>数据绑定</text>
        </view>
        <view class="switch-list">
          <view class="switch-list__item">
            <view class="switch-list__text">{{isChecked ? '开启' : '关闭'}}</view>
            <switch @change="setIsChecked" :checked="isChecked"></switch>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Header from "../../../../components/head/head.vue"
import './switch.scss'

export default {
  components: {
    Header
  },
  data() {
    return {
      isChecked: true
    };
  },
  methods: {
    setIsChecked(e) {
      const { detail } = e;
      this.isChecked = detail.value;
    }
  }
};
</script>

<style>
</style>
