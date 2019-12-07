<template>
  <div class="content">
    <div class="box">transform垂直水平居中</div>
  </div>
</template>

<style lang="less">
.content {
  background: skyblue;
  height: 300px;
  width: 300px;
  .box {
    display: relative;
    background: green;
    height: 150px;
    width: 150px;
    translate: -50% -50%;
    top: 50%;
    left: 50%;
    text-align: center;
    font-size: 2rem;
  }
}
</style>
