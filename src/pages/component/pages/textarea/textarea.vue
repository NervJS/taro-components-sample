<template>
  <view class="components-page">
    <view class="components-page__header">
      <Header title="textarea"></Header>
    </view>
    <view class="components-page__body">
      <view class="components-page__body-example example">
        <view class="example-header">
          <text>输入区域高度自适应，不会出现滚动条</text>
        </view>
        <view class="example-body">
          <view class="example-body__button">
            <button size="mini" type="primary" @tap="handleClick">点击设置值到第一个Textarea</button>
          </view>
          <textarea
            @focus="focus"
            @blur="blur"
            :value="value"
            placeholder="这是一个Textarea"
            auto-height
            @input="input"
          ></textarea>
        </view>
      </view>

      <view class="components-page__body-example example">
        <view class="example-header">
          <text>这是一个可以自动聚焦的textarea</text>
        </view>
        <view class="example-body">
          <textarea autofocus placeholder="这是一个Textarea"></textarea>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Header from "../../../../components/head/head.vue";
import './textarea.scss'

export default {
  components: {
    Header
  },
  data() {
    return {
      value: "初始值"
    };
  },
  methods: {
    handleClick() {
      this.value = "点击了按钮";
    },

    blur() {
      console.log("blur");
    },

    focus() {
      console.log("focus");
    },

    input(e) {
      console.log(e);
      this.value = e.detail.value
    }
  }
};
</script>

<style>
</style>
