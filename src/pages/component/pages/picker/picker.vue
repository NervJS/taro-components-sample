<template>
  <view class="container">
    <Header title="picker"></Header>
    <view class="page-body">
      <view class="page-section">
        <view class="page-section-title">
          <text>普通选择器</text>
        </view>
        <view>
          <picker mode="selector" :range="selector" :value="selectorValue" @change="handleChange">
            <view class="picker">当前选择：{{selector[selectorValue]}}</view>
          </picker>
        </view>
      </view>
      <view class="page-section">
        <view class="page-section-title">
          <text>多行选择器</text>
        </view>
        <view>
          <picker
            mode="multiSelector"
            :range="multiSelector"
            @change="handleMulitChange"
            @columnchange="handleColumnchange"
          >
            <view class="picker">当前选择：{{mulitSelectorValues}}</view>
          </picker>
        </view>
      </view>
      <view class="page-section">
        <view class="page-section-title">
          <text>时间选择器</text>
        </view>
        <view>
          <picker mode="time" @change="handleTimeChange" :value="timeSel">
            <view class="picker">当前选择：{{timeSel}}</view>
          </picker>
        </view>
      </view>
      <view class="page-section">
        <view class="page-section-title">
          <text>日期选择器</text>
        </view>
        <view>
          <picker mode="date" @change="handleDateChange" :value="dateSel">
            <view class="picker">当前选择：{{dateSel}}</view>
          </picker>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Header from "../../../../components/head/head.vue"
import './picker.scss'

export default {
  components: {
    Header
  },
  data() {
    return {
      timeSel: "12:01",
      dateSel: "2018-04-22",
      selectorValue: 1,
      mulitSelectorValues: [],
      selector: ["美国", "中国", "巴西", "日本"],
      multiSelector: [
        ["饭", "粥", "粉"],
        ["猪肉", "牛肉"]
      ]
    };
  },
  methods: {
    handleChange(e) {
      this.selectorValue = e.detail.value;
    },

    handleMulitChange(e) {
      const values = e.detail.value.map((item, index) => {
        return this.multiSelector[index][item];
      });
      this.mulitSelectorValues = values.join(",");
    },

    handleColumnchange(e) {
      console.log(e.detail);
    },

    handleTimeChange(e) {
      this.timeSel = e.detail.value;
    },

    handleDateChange(e) {
      const val = e.detail.value;
      const dateSel = Array.isArray(val) ? val.join("-") : val;
      this.dateSel = dateSel;
    }
  }
};
</script>

<style>
</style>
