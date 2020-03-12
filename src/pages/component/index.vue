<template>
  <view class="index">
    <view class="index-hd">
      <image class="index-logo" src="../../asset/component/logo.png" />
      <view class="index-desc">
        <text class="index-desc_text">以下将展示Taro官方组件能力，组件样式仅供参考，开发者可根据自身需求自定义组件样式。</text>
      </view>
    </view>
    <view class="index-bd">
      <view class="kind-list">
        <view class="kind-list-item" :key="index" v-for="(item, index) in comps">
          <view :id="item.id" :class="item.hdClass" @tap="kindToggle">
            <view class="kind-list-text">
              <text>{{item.name}}</text>
            </view>
            <image class="kind-list-img" :src="item.imgSrc" />
          </view>
          <view :class="item.bdClass">
            <view :class="item.boxClass">
              <view
                @tap="goToComponent(page)"
                :key="index"
                class="navigator"
                v-for="(page, index) in item._pages"
              >
                <text class="navigator-text">{{page.page}}</text>
                <view class="navigator-arrow" />
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Taro from "@tarojs/taro";
import viewPng from "../../asset/component/view.png";
import contentPng from "../../asset/component/content.png";
import formPng from "../../asset/component/form.png";
import navPng from "../../asset/component/nav.png";
import mediaPng from "../../asset/component/media.png";
import mapPng from "../../asset/component/map.png";
import canvasPng from "../../asset/component/canvas.png";
import './index.scss'

const PNGS = {
  viewPng,
  contentPng,
  formPng,
  navPng,
  mediaPng,
  mapPng,
  canvasPng
};

export default {
  data() {
    return {
      list: [
        {
          id: "view",
          name: "视图容器",
          open: false,
          pages: ["view", "scroll-view", "swiper"]
        },
        {
          id: "content",
          name: "基础内容",
          open: false,
          pages: ["text", "icon", "progress"]
        },
        {
          id: "form",
          name: "表单组件",
          open: false,
          pages: [
            "button",
            "checkbox",
            "form",
            "input",
            "label",
            "picker",
            "picker-view",
            "radio",
            "slider",
            "switch",
            "textarea"
          ]
        },
        {
          id: "nav",
          name: "导航",
          open: false,
          pages: ["navigator"]
        },
        {
          id: "media",
          name: "媒体组件",
          open: false,
          pages: ["image", "audio", "video", "camera"]
        },
        {
          id: "map",
          name: "地图",
          pages: ["map"]
        },
        {
          id: "canvas",
          name: "画布",
          pages: ["canvas"]
        }
      ]
    };
  },
  methods: {
    kindToggle(e) {
      const id = e.currentTarget.id;
      const list = this.list;
      for (var i = 0, len = list.length; i < len; ++i) {
        if (list[i].id == id) {
          list[i].open = !list[i].open;
        } else {
          list[i].open = false;
        }
      }
      this.list = list;
    },
    goToComponent(page, e) {
      Taro.navigateTo({
        url: page.url
      });
    }
  },
  computed: {
    comps() {
      return this.list.map((item, index) => {
        item.hdClass =
          "kind-list-item-hd " + (item.open ? "kind-list-item-hd-show" : "");
        item.bdClass =
          "kind-list-item-bd " + (item.open ? "kind-list-item-bd-show" : "");
        item.boxClass =
          "navigator-box " + (item.open ? "navigator-box-show" : "");
        item.imgSrc = PNGS[`${item.id}Png`];
        item._pages = item.pages.map(page => {
          return {
            page: page,
            url: `/pages/component/pages/${page}/${page}`
          };
        });
        return item;
      });
    }
  }
};
</script>

<style>
</style>
