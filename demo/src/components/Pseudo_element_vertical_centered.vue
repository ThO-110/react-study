<template>
  <div class="content">
    <div class="box"></div>
  </div>
</template>

<style lang="less">
.content {
  height: 200px;
  width: 200px;
  background: skyblue;
  &::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 1px;
    vertical-align: middle;
  }
}

.box {
  display: inline-block;
  height: 100px;
  width: 100px;
  background: green;
  vertical-align: middle;
  align-content: center;
}
</style>
