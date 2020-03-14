<template>
  <view class="components-page">
    <view class="components-page__header">
      <Header title="Form"></Header>
    </view>
    <form @submit="formSubmit" @reset="formReset">
      <view class="components-page__body">
        <view class="components-page__body-example example">
          <view class="example-header">
            <text>switch</text>
          </view>
          <view class="example-body">
            <switch @change="onHandleChange" name="switch" class="form-switch"></switch>
          </view>
        </view>
        <view class="components-page__body-example example">
          <view class="example-header">
            <text>radio</text>
          </view>
          <view class="example-body">
            <radio-group
              class="example-body__radio-group"
              @change="onRadioChange"
              name="radio"
            >
              <label
                v-for="(item, index) in radioItem"
                :key="index"
                class="example-body__radio-group-item"
                :for="item.key"
              >
                <radio :value="item.key" :checked="item.checked">
                  <text>{{item.value}}</text>
                </radio>
              </label>
            </radio-group>
          </view>
        </view>
        <view class="components-page__body-example example">
          <view class="example-header">
            <text>checkbox</text>
          </view>
          <view class="example-body">
            <checkbox-group
              class="example-body__checkbox-group"
              @change="onCheckChange"
              name="checkbox"
            >
              <label
                v-for="item in checkItem"
                class="example-body__checkbox-group-item"
                :for="item.key"
                :key="item.key"
              >
                <checkbox :value="item.key" :checked="item.checked">
                  <text>{{item.value}}</text>
                </checkbox>
              </label>
            </checkbox-group>
          </view>
        </view>
        <view class="components-page__body-example example">
          <view class="example-header">
            <text>slider</text>
          </view>
          <view class="example-body">
            <slider
              name="slider"
              :value="sliderValue"
              show-Value
              @change="handleSliderChange"
            ></slider>
          </view>
        </view>
        <view class="components-page__body-example example example-input">
          <view class="example-header">
            <text>input</text>
          </view>
          <view class="example-body">
            <input name="input" type="text" placeholder="这是一个输入框" @change="onHandleChange" />
          </view>
        </view>
        <view class="components-page__body-example example">
          <view class="example-body">
            <button form-type="submit" type="primary">Submit</button>
            <button form-type="reset" type="default">Reset</button>
          </view>
        </view>
      </view>
    </form>
  </view>
</template>

<script>
import Header from "../../../../components/head/head.vue";
import "./form.scss";

export default {
  components: {
    Header
  },
  data() {
    return {
      radioItem: [
        {
          key: "radio-1",
          value: "选项一",
          checked: false
        },
        {
          key: "radio-2",
          value: "选项二",
          checked: false
        }
      ],
      checkItem: [
        {
          key: "checkbox—1",
          value: "选项一",
          checked: false
        },
        {
          key: "checkbox—2",
          value: "选项二",
          checked: false
        }
      ],
      sliderValue: 50
    };
  },
  methods: {
    onHandleChange(e) {
      console.log(e);
    },

    onRadioChange(e) {
      console.log(e);
    },

    onCheckChange(e) {
      console.log(e);
    },

    handleSliderChange(e) {
      console.log(e);
    },

    handleSliderChanging(e) {
      console.log(e);
    },

    formSubmit(e) {
      console.log(e);
    },

    formReset(e) {
      console.log(e);
    }
  }
};
</script>

<style>
</style>
