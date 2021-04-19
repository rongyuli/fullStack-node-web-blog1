<template>
  <div id="back">
    <Carousel></Carousel>
    <Divider />
    <Blog></Blog>
  </div>
</template>

<script>
import Carousel from './back/caroucel';
import Blog from './back/blog';
export default {
  components: {
    Blog,
    Carousel,
  },
};
</script>

<style lang="scss" scoped>
.ivu-divider {
  margin: 80px 0;
}
</style>
