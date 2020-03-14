<template>
  <view class="components-page">
    <view class="components-page__header">
      <Header title="Icon"></Header>
    </view>
    <view class="components-page__body">
      <view class="components-page__body-example example">
        <view class="page__con__list">
          <icon size="30" type="success"></icon>
          <view class="icon_right">
            <view class="icon_right_head">成功</view>
            <view class="icon_right_tit">用于表示操作顺利完成</view>
          </view>
        </view>
        <view class="page__con__list">
          <icon size="30" type="info"></icon>
          <view class="icon_right">
            <view class="icon_right_head">提示</view>
            <view class="icon_right_tit">用于表示信息展示；也常用于缺乏条件的操作拦截，提示用户所需信息</view>
          </view>
        </view>
        <view class="page__con__list">
          <icon size="30" type="warn" color="#ccc"></icon>
          <view class="icon_right">
            <view class="icon_right_head">普通警告</view>
            <view class="icon_right_tit">用于表示操作后将引起一定后果的情况；也用于表示由于系统原因而造成的负向结果</view>
          </view>
        </view>
        <view class="page__con__list">
          <icon size="30" type="warn"></icon>
          <view class="icon_right">
            <view class="icon_right_head">强烈警告</view>
            <view class="icon_right_tit">用于表示由于用户原因造成的负向结果；也用于表示操作后引起不可挽回的严重后果的情况</view>
          </view>
        </view>
        <view class="page__con__list">
          <icon size="30" type="waiting"></icon>
          <view class="icon_right">
            <view class="icon_right_head">等待</view>
            <view class="icon_right_tit">用于表示由于用户原因造成的负向结果；也用于表示操作后引起不可挽回的严重后果的情况</view>
          </view>
        </view>
        <view class="page__con__list icon_sml">
          <icon size="30" type="success_no_circle"></icon>
          <view class="icon_right">
            <view class="icon_right_head">多选控件图标_已选择</view>
            <view class="icon_right_tit">用于多选控件中，表示已选择该项目</view>
          </view>
        </view>
        <view class="page__con__list icon_sml">
          <icon size="30" type="warn"></icon>
          <view class="icon_right">
            <view class="icon_right_head">错误提示</view>
            <view class="icon_right_tit">用于在表单中表示出现错误</view>
          </view>
        </view>
        <view class="page__con__list icon_sml">
          <icon size="30" type="success"></icon>
          <view class="icon_right">
            <view class="icon_right_head">单选控件图标_已选择</view>
            <view class="icon_right_tit">用于单选控件中，表示已选择该项目</view>
          </view>
        </view>
        <view class="page__con__list icon_sml">
          <icon size="30" type="download"></icon>
          <view class="icon_right">
            <view class="icon_right_head">下载</view>
            <view class="icon_right_tit">用于表示可下载</view>
          </view>
        </view>
        <view class="page__con__list icon_sml">
          <icon size="30" type="clear" color="red"></icon>
          <view class="icon_right">
            <view class="icon_right_head">停止或关闭</view>
            <view class="icon_right_tit">用于在表单中，表示关闭或停止</view>
          </view>
        </view>
        <view class="page__con__list icon_sml">
          <icon size="30" type="search"></icon>
          <view class="icon_right">
            <view class="icon_right_head">搜索</view>
            <view class="icon_right_tit">用于搜索控件中，表示可搜索</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Header from "../../../../components/head/head.vue";
import './icon.scss'

export default {
  components: {
    Header
  },
};
</script>

<style>
</style>
