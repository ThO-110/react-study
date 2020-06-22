<template>
  <div class="wrap">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-facebook"></use>
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.wrap {
  height: 100%;
  width: 100%;
  align-items: center;
  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 120px;
  }
}
</style>
