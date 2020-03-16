<template>
  <view class="components-page">
    <view class="components-page__header">
      <Header title="swiper"></Header>
    </view>
    <view class="components-page__body swiper">
      <view class="components-page__body-example example">
        <view class="example-header">
          <text>swiper 横向滑动</text>
        </view>
        <view class="example-body">
          <swiper
            slide-mult="10"
            indicator-color="#999"
            indicator-active-color="#333"
            :current="current"
            :duration="duration"
            :interval="interval"
            :circular="isCircular"
            :autoplay="isAutoplay"
            :indicator-dots="hasIndicatorDots"
            pre-margin="20"
          >
            <swiper-item>
              <view class="demo-text-1"></view>
            </swiper-item>
            <swiper-item>
              <view class="demo-text-2"></view>
            </swiper-item>
            <swiper-item>
              <view class="demo-text-3"></view>
            </swiper-item>
          </swiper>
          <view class="switch-list">
            <view class="switch-list__item">
              <view class="switch-list__text">指示点</view>
              <switch :checked="hasIndicatorDots" @change="setIndicatorDots"></switch>
            </view>
            <view class="switch-list__item">
              <view class="switch-list__text">自动播放</view>
              <switch :checked="isAutoplay" @change="setAutoPlay"></switch>
            </view>
          </view>
          <view class="slider-list">
            <view class="slider-list__item">
              <view class="slider-list__item-header">
                <text>幻灯片切换时长(ms)</text>
              </view>
              <view class="slider-list__item-body">
                <slider
                  show-value
                  step="1"
                  min="500"
                  max="2000"
                  :value="duration"
                  @change="setDuration"
                ></slider>
              </view>
            </view>
            <view class="slider-list__item">
              <view class="slider-list__item-header">
                <text>自动播放间隔时长(ms)</text>
              </view>
              <view class="slider-list__item-body">
                <slider
                  show-value
                  step="1"
                  min="2000"
                  max="10000"
                  :value="interval"
                  @change="setInterval"
                ></slider>
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="components-page__body-example example">
        <view class="example-header">
          <text>swiper 纵向滑动</text>
        </view>
        <view class="example-body">
          <swiper
            slideMult="10"
            class="test-h"
            indicator-color="#999"
            indicator-active-color="#333"
            vertical
            :circular="verticalIsCircular"
            :indicator-dots="verticalHasIndicatorDots"
            :autoplay="verticalIsAutoplay"
            pre-margin="20"
          >
            <swiper-item>
              <view class="demo-text-1"></view>
            </swiper-item>
            <swiper-item>
              <view class="demo-text-2"></view>
            </swiper-item>
            <swiper-item>
              <view class="demo-text-3"></view>
            </swiper-item>
          </swiper>
        </view>
        <view class="switch-list">
          <view class="switch-list__item">
            <view class="switch-list__text">指示点</view>
            <switch :checked="verticalHasIndicatorDots" @change="setVerticalIndicatorDots"></switch>
          </view>
          <view class="switch-list__item">
            <view class="switch-list__text">自动播放</view>
            <switch :checked="verticalIsAutoplay" @change="setVerticalAutoPlay"></switch>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Header from "../../../../components/head/head.vue";
import './swiper.scss'

export default {
  components: {
    Header
  },
  data () {
    return {
      current: 1,
      duration: 500,
      interval: 5000,
      isCircular: true,
      verticalIsCircular: false,
      isAutoplay: false,
      verticalIsAutoplay: false,
      hasIndicatorDots: true,
      verticalHasIndicatorDots: true,
    }
  },
  methods: {
    setAutoPlay (e) {
      this.isAutoplay = e.detail.value
    },

    setVerticalAutoPlay (e) {
      this.verticalIsAutoplay = e.detail.value
    },

    setCircular (e) {
      this.isCircular = e.detail.value
    },

    setVerticalCircular (e) {
      this.verticalIsCircular = e.detail.value
    },

    setIndicatorDots (e) {
      this.hasIndicatorDots = e.detail.value
    },

    setVerticalIndicatorDots (e) {
      this.verticalHasIndicatorDots = e.detail.value
    },

    setInterval (e) {
      this.interval = e.detail.value
    },

    setDuration (e) {
      this.duration = e.detail.value
    }
  }
};
</script>

<style>
</style>
