<template>
  <div class="content">
    <div class="box">flex垂直水平居中</div>
  </div>
</template>

<style lang="less">
.content {
  display: flex;
  height: 300px;
  width: 300px;
  background: skyblue;
  justify-content: center;
  align-items: center;
  .box {
    height: 150px;
    width: 150px;
    background: green;
    font-size: 2rem;
  }
}
</style>
