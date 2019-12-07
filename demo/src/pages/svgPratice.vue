<template>
  <div class="grid-wrap">
    <svg width="750" height="500" 
      style="stroke: #000;
      stroke-width: 5;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: none;">
      <path d="
        M 0 0
        L 200 0
        Q 220 0, 240 20
        Q 370 200, 490 20
        Q 510 0, 530 0
        L 700 0
        L 700 130
        L 0 130
        L 0 0
        Z
      " fill="#fff">
      </path>
    </svg>
  </div>
</template>

<style lang="less" scoped>
.grid-wrap {
  width: 750px;
  height: 500px;
  top: 280px;
  padding-top: 100px;
  padding-left: 100px;
  background-image: url('/../../assets/images/grid.png');
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: "";
    border-left: 1px solid #7c7cea;
    position: absolute;
    top: 0;
    left: 100px;
    width: 750px;
    height: 600px;
  }
  &::after {
    content: "";
    border-top: 1px solid #7c7cea;
    position: absolute;
    top: 100px;
    left: 0;
    width: 850px;
    height: 500px;
  }
  // svg {
  //   stroke: #000;
  //   stroke-width: 5;
  //   stroke-linecap: round;
  //   stroke-linejoin: round;
  //   fill: none;
  // }
}
</style>>