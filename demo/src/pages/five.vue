<template>
  <div class="stage">
    <div class="message">
      <p>{{hit}}</p>
      <button @click="piece = []; winner = undefined; now = 0">重新开始</button>
    </div>
    <div v-for="(itemX, indexX) in Array(row)" class="row" :key="indexX + 'row'">
      <div class="col">
        <div
          v-for="(itemY, indexY) in Array(col)"
          :key="indexX + 'row' + indexY + 'col'"
          :class="{piece: true, black: piece[indexX * col + indexY] === 1, white: piece[indexX * col + indexY] === 0}"
          @click="clickHandle(indexX * col + indexY, indexX, indexY)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      now: 0,
      col: 28,
      row: 14,
      piece: [],
      winner: undefined
    };
  },
  methods: {
    clickHandle(index, x, y) {
      if (this.piece[index] !== undefined || this.winner !== undefined) return;
      this.piece[index] = this.now;
      this.piece = this.piece.slice();
      this.winnerHandle(x, y);
      console.log(x, y); // eslint-disable-line
      this.now = 1 - this.now;
    },
    winnerHandle(x, y) {
      let one = [];
      let two = [];
      let three = [];
      let four = [];
      let result = [one, two, three, four];
      for (let i = 0; i < 9; i++) {
        let now = 4 - i;
        if (x + now >= 0 && x + now < this.row) {
          if (this.piece[(x + now) * this.col + y] === undefined) {
            one.push(-2);
          } else {
            one.push(this.piece[(x + now) * this.col + y]);
          }
        }
        if (y + now >= 0 && y + now < this.col) {
          if (this.piece[x * this.col + (y + now)] === undefined) {
            two.push(-2);
          } else {
            two.push(this.piece[x * this.col + (y + now)]);
          }
        }
        if (
          y + now >= 0 &&
          y + now < this.col &&
          x + now >= 0 &&
          x + now < this.row
        ) {
          if (this.piece[(x + now) * this.col + (y + now)] === undefined) {
            three.push(-2);
          } else {
            three.push(this.piece[(x + now) * this.col + (y + now)]);
          }
        }
        if (
          y - now >= 0 &&
          y - now < this.col &&
          x + now >= 0 &&
          x + now < this.row
        ) {
          if (this.piece[(x + now) * this.col + (y - now)] === undefined) {
            four.push(-2);
          } else {
            four.push(this.piece[(x + now) * this.col + (y - now)]);
          }
        }
      }

      console.log(result); // eslint-disable-line
      result.forEach(item => {
        let string = item.join("");
        if (string.indexOf("11111") !== -1) {
          this.winner = 1;
        }
        if (string.indexOf("00000") !== -1) {
          this.winner = 0;
        }
      });
    }
  },
  computed: {
    hit() {
      if (this.now === 1) {
        return "下一手，黑子";
      } else {
        return "下一手，白子";
      }
    }
  },
  watch: {
    winner(value) {
      if (value === 1) {
        alert("黑");
      } else if (value === 0) {
        alert("白");
      }
    }
  }
};
</script>

<style scoped="scoped" lang="less">
.message {
  color: black;
  position: absolute;
  transform: translate(0, -100%);
  width: 100%;
  line-height: 2;
}
.stage {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-image: linear-gradient(
      to right,
      black 3px,
      transparent 3px,
      transparent 33px,
      black 36px
    ),
    linear-gradient(to bottom, black 3px, #c26230 3px, #c26230 33px, black 36px);
  background-size: 36px 100%, 100% 36px;
  position: absolute;
}
.col {
  display: flex;
}
.piece {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  transform: translate(50%, 50%);
  background-clip: content-box;
  border: 3px solid transparent;
  &.white {
    background-color: white;
  }
  &.black {
    background-color: black;
  }
}
</style>
