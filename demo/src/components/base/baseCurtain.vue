<template>
  <div class="curtain-wrap">
    <div class="left" :class="[{ 'open-left': isOpen }, { 'close-left': isClose }]"></div>
    <div class="right" :class="[{ 'open-right': isOpen }, { 'close-right': isClose }]"></div>
    <svg width="0" height="0"> 
      <filter id="filter">
        <feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="4" />
        <feDisplacementMap in="SourceGraphic" scale="180" />
      </filter>
    </svg>
  </div>
</template>

<script>
export default {
  computed: {
    isOpen () {
      return this.$store.state.isOpenCurtain
    },
    isClose () {
      return this.$store.state.isCloseCurtain
    }
  }
}
</script>

<style lang="less" scoped>
@keyframes open-left {
  0% {
      float: left;
      background-color: rgba(255, 255, 255, 0);
      border-radius: 50%;
      background: #fff;
      height: 120%;
      width: 70%;
      left: -1000px;
      top: -680px;
      position: absolute;
      box-shadow: 600px 600px 100px 0px #fff;
      filter: url(#filter);
  }
  100% {
      float: left;
      background-color: rgba(255, 255, 255, 0);
      border-radius: 50%;
      background: #fff;
      height: 120%;
      width: 70%;
      left: -700px;
      top: -680px;
      position: absolute;
      box-shadow: 600px 600px 100px 0px #fff;
      filter: url(#filter);
  }
}
@keyframes open-right {
  0% {
      float: right;
      background-color: rgba(255, 255, 255, 0);
      border-radius: 50%;
      background: #fff;
      height: 120%;
      width: 70%;
      right: -1000px;
      top: -680px;
      position: absolute;
      box-shadow: -600px 600px 100px 0px #fff;
      filter: url(#filter);
  }
  100% {
      float: right;
      background-color: rgba(255, 255, 255, 0);
      border-radius: 50%;
      background: #fff;
      height: 120%;
      width: 70%;
      right: -700px;
      top: -680px;
      position: absolute;
      box-shadow: -600px 600px 100px 0px #fff;
      filter: url(#filter);
  }
}
@keyframes close-left {
  0% {
    float: left;
    background-color: rgba(255, 255, 255, 1);
    width: 50%;
    height: 100%;
  }
  100% {
    float: left;
    background-color: rgba(255, 255, 255, 0);
    width: 0;
    height: 100%;
  }
}
@keyframes close-right {
  0% {
    float: right;
    background-color: rgba(255, 255, 255, 1);
    width: 50%;
    height: 100%;
  }
  100% {
    float: right;
    background-color: rgba(255, 255, 255, 0);
    width: 0;
    height: 100%;
  }
}

.curtain-wrap {
  position: absolute;
  z-index: 99;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  .left {
    float: left;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 50%;
    background: #fff;
    height: 120%;
    width: 54%;
    left: -700px;
    top: -680px;
    position: absolute;
    box-shadow: 600px 600px 100px 0px #fff;
    filter: url(#filter);
  }
  .right {
    float: right;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 50%;
    background: #fff;
    height: 120%;
    width: 54%;
    right: -700px;
    top: -680px;
    position: absolute;
    box-shadow: -600px 600px 100px 0px #fff;
    filter: url(#filter);
  }
  .open-left {
    animation: open-left 600ms ease;
  }
  .open-right {
    animation: open-right 600ms ease;
  }
  .close-left {
    animation: close-left 600ms ease;
  }
  .close-right {
    animation: close-right 600ms ease;
  }
}
</style>