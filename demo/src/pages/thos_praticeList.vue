<template>
  <div>
    <!-- <elUITest/> -->
  <div class="pratice_list">
    <ul>
      <li>
        <router-link to="pratice">
          pratice
        </router-link>
      </li>
      <li>
        <router-link to="pratice1">
          伪元素垂直水平居中
        </router-link>
      </li>
      <li>
        <router-link to="pratice2">
          transform垂直居中
        </router-link>
      </li>
      <li>
        <router-link to="pratice3">
          flex垂直水平居中
        </router-link>
      </li>
      <li>
        <router-link to="SvgPratice">
          svg绘画
        </router-link>
      </li>
      <li>
        <router-link to="StarrySky">
          cavas星空
        </router-link>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
import elUITest from './elUITest.vue'

export default {
  components: {
    elUITest
  }
}
</script>


<style lang="less">
a {
  text-decoration: none;
}
.pratice_list {
  align-content: center;
  background: rgba(198, 226, 252, 0.555);
  padding: 20px 20px;
}
ul {
    padding-left: 0;
}
li {
  font-family: 'KirangHaerang-Regular';
  font-size: 1.5rem;
  list-style: none;
  padding: 4px 0;
}
a {
  color: #2d588f;
}
</style>

