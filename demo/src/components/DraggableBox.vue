<template>
  <div class="Draggable-box-wrap">
    <draggable v-model="list" @end="dragEnd" tag="ul" class="list-group">
      <transition-group type="transition" name="flip-list">
        <li class="list-group-item" v-for="(item,index) in list" :key="'a'+index">{{ item.content }}</li>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable
  },
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      list: this.value.map((content, index) => {
        return { content, order: index + 1 };
      })
      // list: this.value
    };
  },
  methods: {
    dragEnd(e) {
      // console.log(e);
      // const newData = this.list.map(r => r.content);
      // const newData = this.list.map(r => r);
      // this.$emit("input", newData);
    }
  }
};
</script>

<style lang="less">
.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

// .ghost {
//   opacity: 0.5;
//   background: #c8ebfb;
// }

.list-group-item {
  background-color: #f3f3f3;
  padding: 10px 10px;
  margin: 10px 0;
  list-style: none;
}
</style>
