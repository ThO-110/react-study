<template lang="pug">
  .wrap
    img(src="@/assets/images/logo.png")
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.wrap {
  height: 100%;
  width: 100%;
  align-items: center;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>