<template>
  <view class="components-page">
    <view class="components-page__header">
      <Header title="label"></Header>
    </view>
    <view class="components-page__body">
      <view class="components-page__body-example example">
        <view class="example-header">
          <text>表单组件在label内</text>
        </view>
        <view class="example-body">
          <checkbox-group>
            <label class="example-body__label" for="1" key="1">
              <checkbox value="美国">美国</checkbox>
            </label>
            <label class="example-body__label" for="2" key="2">
              <checkbox value="中国" checked>中国</checkbox>
            </label>
          </checkbox-group>
        </view>
      </view>
      <view class="components-page__body-example example">
        <view class="example-header">
          <text>label用for标识表单组件</text>
        </view>
        <view class="example-body">
          <radio-group>
            <label class="example-body__label" for="3" key="3">
              <radio value="USA">USA</radio>
            </label>
            <label class="example-body__label" for="4" key="4">
              <radio value="CHN" checked>CHN</radio>
            </label>
          </radio-group>
        </view>
      </view>
      <view class="components-page__body-example example">
        <view class="example-header">
          <text>表单组件在Label外</text>
        </view>
        <view class="example-body">
          <radio-group>
            <label class="example-body__label" for="5" key="5">
              <radio value="GuangZhou">广州</radio>
            </label>
            <label class="example-body__label" for="6" key="6">
              <radio value="ShenZhen">深圳</radio>
            </label>
          </radio-group>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Header from "../../../../components/head/head.vue";
import "./label.scss"
export default {
  components: {
    Header
  },
  data () {
    return {
      checked: false
    }
  },
  methods: {
    handleChange () {
      this.checked = !this.checked
    }
  }
};
</script>

<style>
</style>
