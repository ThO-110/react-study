<template>
  <div class="pratice-wrap">
    <draggable-box v-model="dragData" />
  </div>
</template>

<script>
import DraggableBox from "../components/DraggableBox";

export default {
  components: {
    DraggableBox
  },
  data() {
    return {
      // dragData: ["aaa", "bbb", "ccc"]
      dragData: ["aaa", "bbb", "ccc"]
    };
  },
  methods: {
    changeData(e) {
      console.log(e, "data");
    }
  }
};
</script>

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
