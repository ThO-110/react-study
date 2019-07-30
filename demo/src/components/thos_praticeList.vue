<template>
  <div class="pratice_list">
    <ul>
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
    </ul>
  </div>
</template>

<style lang="less">
.pratice_list {
  align-content: center;
  background: rgb(20, 133, 133);
}

li {
  font-size: 1.5rem;
  list-style: none;
  padding: 4px 0;
}
</style>

