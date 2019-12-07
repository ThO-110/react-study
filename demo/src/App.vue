<template>
  <div id="app">
    <video id="bg" src="./assets/beach.mp4" ref="video" muted autoplay loop></video>
    <router-view class="router-view"/>
    <base-curtain v-if="isShowCurtain"/>
  </div>
</template>

<script>
import baseCurtain from '@/components/base/baseCurtain'

export default {
  name: 'App',
  components: {
    baseCurtain
  },
  computed: {
    isShowCurtain () {
      return this.$store.state.isOpenCurtain || this.$store.state.isCloseCurtain
    }
  }
}
</script>

<style>
.router-view {
  position: absolute;
  transform: translate(-50%,-50%);
  left: 50%;
  top: 40%;
}
.base-curtain {
  z-index: 9;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* 背景 */
#bg {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width:100%;
  min-height:100%;
  z-index: -100;
}
</style>
