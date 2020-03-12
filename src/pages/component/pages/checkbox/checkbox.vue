<template>
  <view class="components-page">
    <view class="components-page__header">
      <Header title="checkbox"></Header>
    </view>
    <view class="components-page__body">
      <view class="components-page__body-example example">
        <view class="example-header">
          <text>默认样式</text>
        </view>
        <view class="example-body">
          <checkbox value="选中" checked>选中</checkbox>
          <checkbox style="margin-left: 20px" value="未选中">未选中</checkbox>
        </view>
      </view>
      <view class="components-page__body-example example">
        <view class="example-header">
          <text>推荐展示样式</text>
        </view>
        <view class="example-body">
          <view class="select-box">当前选择: {{selectValues.join(',')}}</view>
          <view>
            <view class="checkbox-list">
              <checkbox-group name="checkbox" @change="checkboxChange">
                <label
                  v-for="(item, index) in list"
                  :key="index"
                  class="checkbox-list__label"
                  :for="item.value"
                >
                  <checkbox
                    class="checkbox-list__checkbox"
                    :value="item.value"
                    :checked="item.checked"
                  >{{item.text}}</checkbox>
                </label>
              </checkbox-group>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Header from "../../../../components/head/head.vue";
import './checkbox.scss'

export default {
  components: {
    Header
  },
  data() {
    return {
      selectValues: ["中国", "法国"],
      list: [
        {
          value: "美国",
          text: "美国",
          checked: false
        },
        {
          value: "中国",
          text: "中国",
          checked: true
        },
        {
          value: "巴西",
          text: "巴西",
          checked: false
        },
        {
          value: "日本",
          text: "日本",
          checked: false
        },
        {
          value: "英国",
          text: "英国",
          checked: false
        },
        {
          value: "法国",
          text: "法国",
          checked: true
        }
      ]
    };
  },
  methods: {
    checkboxChange(e) {
      const list = this.list.map(item => {
        item.checked = e.detail.value.indexOf(item.value) >= 0;
        return item;
      });
      this.list = list
      this.selectValues = e.detail.value
    }
  }
};
</script>

<style>
</style>
