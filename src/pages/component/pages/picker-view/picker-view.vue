<template>
  <view>
    <view>{{year}}年{{month}}月{{day}}日</view>
    <picker-view
      indicator-style="height: 50px;"
      style="width: 100%; height: 300px;"
      :value="value"
      @change="onChange"
    >
      <picker-view-column>
        <view v-for="item in years" :key="item">{{item}}年</view>
      </picker-view-column>
      <picker-view-column>
        <view v-for="item in months" :key="item">{{item}}月</view>
      </picker-view-column>
      <picker-view-column>
        <view v-for="item in days" :key="item">{{item}}日</view>
      </picker-view-column>
    </picker-view>
  </view>
</template>

<script>
import Header from "../../../../components/head/head.vue";

export default {
  components: {
    Header
  },
  data() {
    const date = new Date();
    const years = [];
    const months = [];
    const days = [];
    for (let i = 1990; i <= date.getFullYear(); i++) {
      years.push(i);
    }
    for (let i = 1; i <= 12; i++) {
      months.push(i);
    }
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
    return {
      years: years,
      year: date.getFullYear(),
      months: months,
      month: 2,
      days: days,
      day: 2,
      value: [9999, 1, 1]
    };
  },
  methods: {
    onChange(e) {
      const val = e.detail.value;
      this.year = this.years[val[0]];
      this.month = this.months[val[1]];
      this.day = this.days[val[2]];
      this.value = val;
    }
  }
};
</script>

<style>
</style>
