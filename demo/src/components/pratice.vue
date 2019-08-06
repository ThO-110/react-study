<template>
  <div class="father">
    <div class="son"></div>
  </div>
</template>

<style lang="less">
.father {
  position: absolute;
  width: 100px;
  height: 100px;
  .son {
    background: green;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
}
</style>

<script>
export default {
  
}
</script>
