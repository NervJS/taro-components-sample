<template>
  <view class="components-page">
    <view class="components-page__header">
      <Header title="Progress"></Header>
    </view>
    <view class="components-page__body">
      <view class="components-page__body-example example">
        <view class="example-progress">
          <progress percent="20" show-info stroke-width="2"></progress>
        </view>
        <view class="example-progress">
          <progress percent="40" stroke-width="2" active></progress>
        </view>
        <view class="example-progress">
          <progress percent="60" stroke-width="2" active></progress>
        </view>
        <view class="example-progress">
          <progress percent="80" stroke-width="2" active active-color="blue"></progress>
        </view>
      </view>
      <view class="components-page__body-example example">
        <view class="example-progress">
          <progress show-info stroke-width="2" :percent="progress" active-color="#3C7FE8"></progress>
        </view>
        <view>
          <button @tap="handleStart">加载</button>
          <button @tap="handleStop">暂停</button>
          <button @tap="handleReset">重置</button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Header from "../../../../components/head/head.vue";
import './progress.scss'
export default {
  components: {
    Header
  },
  data() {
    return {
      progress: 0
    };
  },
  methods: {
    handleStart() {
      if (this._timmer || this.progress > 100) return;
      this._timmer = setInterval(() => {
        const value = this.progress + 2;
        if (value > 100) {
          return this.handleStop();
        }
        this.progress = value;
      }, 100);
    },

    handleStop() {
      if (this._timmer) {
        clearInterval(this._timmer);
        this._timmer = null;
      }
    },

    handleReset() {
      this.handleStop();
      this.progress = 0;
    }
  }
};
</script>

<style>
</style>
