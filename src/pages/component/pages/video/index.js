import React from 'react'
import { View, Text, Video } from "@tarojs/components";
import Header from '../../../../components/head/head'
import './index.scss'
export default class PageView extends React.Component {
  render() {
    return (
      <View className="block">
        <View className='components-page__header'>
          <Header title='Video'></Header>
        </View>
        <Video
          className="video-box"
          src="https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/48e602ec290439626706407425/v.f30.mp4"
          poster="https://developer.harmonyos.com/resource/image/new/home/pic_banner_hdc_360-1013.jpg"
          objectFit="fill"
          direction={90}
          speed={2}
          initialTime={10}
          onLoadedMetaData={this.onLoadedMetaData}
          onPlay={this.onPlay}
          onPause={this.onPause}
          onEnded={this.onEnded}
          onError={this.onError}
          onTimeUpdate={this.onTimeUpdate}
          onProgress={this.onProgress}
          onFullscreenChange={this.onFullscreenChange}
          onTap={this.onTapVideo}
        ></Video>
      </View>
    );
  }

  onTapVideo(e) {
    console.log("[video] tap  " + "e.detail: " + print(e.detail));
  }

  onLoadedMetaData(e) {
    console.log(
      "[video] loadedmetadata  " + "e.detail: " + print(e.detail)
    );
  }

  onPlay(e) {
    console.log("[video] play  " + "e.detail: " + print(e.detail));
  }

  onPause(e) {
    console.log("[video] pause  " + "e.detail: " + print(e.detail));
  }

  onEnded(e) {
    console.log("[video] ended  " + "e.detail: " + print(e.detail));
  }

  onError(e) {
    console.log("[video] error  " + "e.detail: " + print(e.detail));
  }

  onTimeUpdate(e) {
    console.log("[video] timeupdate  " + "e.detail: " + print(e.detail));
  }

  onProgress(e) {
    console.log("[video] progress  " + "e.detail: " + print(e.detail));
  }

  onFullscreenChange(e) {
    console.log("[video] fullscreen  " + "e.detail: " + print(e.detail));
  }
}

function print(obj){
  if(!obj) return 'null'
  return JSON.stringify(obj)
}
