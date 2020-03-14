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
            <label class="example-body__label">
              <checkbox value="美国">美国</checkbox>
            </label>
            <label class="example-body__label">
              <checkbox value="中国" checked>中国</checkbox>
            </label>
          </checkbox-group>
        </view>
      </view>
      <view class="components-page__body-example example">
        <view class="example-header">
          <text>表单组件在Label外</text>
        </view>
        <view class="example-body">
          <radio-group>
            <radio value="GuangZhou" id="gz">GuangZhou</radio>
            <radio value="ShenZhen" id="sz">ShenZhen</radio>
          </radio-group>
        </view>
        <label className='example-body__label' for='gz'>
          广州
        </label>
        <label className='example-body__label' for='sz'>
          深圳
        </label>
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
