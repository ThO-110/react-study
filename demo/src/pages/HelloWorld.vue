<template>
  <div class="hello-wrap">
    <div class="title">
      <h1>Welcome to My Vue.js App</h1>
      <h2>
        <router-link to="Thos_praticeList">
          Thos_praticeList
        </router-link>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.hello-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: 'KirangHaerang-Regular';
    font-size: 3.5rem;
  }

  h2 {
    font-family: 'JosefinSans-Light';
    /* font-family: 'KirangHaerang-Regular'; */
    font-weight: lighter;
    font-size: 2rem;
  }
  a {
    color: #2d588f;
    text-decoration: none;
  }
}
</style>
