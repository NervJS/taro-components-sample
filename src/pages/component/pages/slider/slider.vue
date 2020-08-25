<template>
  <view class="components-page">
    <view class="components-page__header">
      <Header title="Slider"></Header>
    </view>
    <view class="components-page__body">
      <view class="components-page__body-example example">
        <view class="example-header">
          <text>设置step</text>
        </view>
        <view class="example-body">
          <slider step="5" value="50"></slider>
        </view>
      </view>

      <view class="components-page__body-example example">
        <view class="example-header">
          <text>显示当前的value</text>
        </view>
        <view class="example-body">
          <slider step="1" value="50" show-value="true"></slider>
        </view>
      </view>

      <view class="components-page__body-example example">
        <view class="example-header">
          <text>设置最小/最大值</text>
        </view>
        <view class="example-body">
          <slider step="1" value="100" show-value="true" min="50" max="200"></slider>
        </view>
      </view>

      <view class="components-page__body-example example">
        <view class="example-header">
          <text>UI设置</text>
        </view>
        <view class="example-body">
          <slider
            step="1"
            value="50"
            active-color="#6190E8"
            background-color="red"
            block-color="#333"
            block-size="20"
          ></slider>
        </view>
      </view>

      <view class="components-page__body-example example">
        <view class="example-header">
          <text>数据绑定</text>
        </view>
        <view class="example-body">
          <button @tap="setValue">Set Value</button>
          <slider
            step="1"
            :value="value"
            @change="handleChange"
            @changing="handleChaning"
            show-value="true"
            min="50"
            max="200"
          ></slider>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Header from "../../../../components/head/head.vue";

export default {
  components: {
    Header
  },
  data() {
    return {
      value: 50
    };
  },
  methods: {
    setValue() {
      const value = Math.floor(Math.random() * 100);
      console.log(value);
      this.value = value;
    },

    handleChaning() {},

    handleChange() {}
  }
};
</script>

<style>
</style>
