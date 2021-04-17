<template>
  <div id="app">
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>
<script>
import Nav from './views/nav';
export default {
  components: {
    Nav,
  },
};
</script>
<style lang="scss">
* {
  padding: 0px;
  margin: 0px;
}
ul,
li {
  list-style: none;
}
.file {
  display: none;
}
#app {
  margin-bottom: 50px;
}
h1 {
  text-align: center;
  margin-bottom: 20px !important;
  color: black;
}
</style>
