<template>
  <div id="app">
    <Nav></Nav>
    <BackTop></BackTop>
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
<style src="./assets/global.scss" lang="scss"></style>
<style src="./assets/icon/iconfont.css"></style>
