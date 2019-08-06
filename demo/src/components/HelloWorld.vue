<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>
      <router-link to="Thos_praticeList">
        <img class="icon-list" src="../assets/list.png" alt="">
        Thos_praticeList
      </router-link>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to My Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-family: 'KirangHaerang-Regular';
  font-size: 3.5rem;
}

h2 {
  /* font-family: 'JosefinSans-Light'; */
  font-family: 'KirangHaerang-Regular';
  font-weight: lighter;
  font-size: 2rem;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #2d588f;
  text-decoration: none;
}
.icon-list {
  height: 18px;
  width: auto;
}
</style>
