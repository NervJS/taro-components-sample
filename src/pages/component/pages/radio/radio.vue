<template>
  <view class="components-page">
    <view class="components-page__header">
      <Header title="radio"></Header>
    </view>
    <view class="components-page__body">
      <view class="components-page__body-example example">
        <view class="example-header">
          <text>默认样式</text>
        </view>
        <view class="example-body">
          <radio value="选中" checked>选中</radio>
          <radio style="margin-left: 30px" value="未选中">未选中</radio>
        </view>
      </view>
      <view class="components-page__body-example example">
        <view class="example-header">
          <text>推荐展示样式</text>
        </view>
        <view class="example-body">
          <view class="example-body__select-box">选中的值是: {{selectValue}}</view>
          <view class="example-body__radios">
            <radio-group @change="radioChange">
              <label v-for="(item, i) in list" :key="i" class="example-body__radios-item" :for="i">
                <radio name="radio" :value="item.value" :checked="item.checked">{{item.text}}</radio>
              </label>
            </radio-group>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Header from "../../../../components/head/head.vue";
import './radio.scss'

export default {
  components: {
    Header
  },
  data() {
    return {
      isChecked: false,
      selectValue: "中国",
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
          checked: false
        }
      ]
    };
  },
  methods: {
    radioChange(e) {
      const list = this.list.map(item => {
        item.checked = item.value == e.detail.value;
        return item;
      });
      this.list = list;
      this.selectValue = e.detail.value;
    }
  }
};
</script>

<style>
</style>
