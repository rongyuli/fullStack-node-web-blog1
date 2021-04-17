<template>
  <div>
    <MyCarousel></MyCarousel>
    <ul v-for="item in blogs" :key="item.id">
      <li>
        <div class="heading" style="display: flex">
          <span>{{ item.id }}</span>
          <h2>{{ item.heading }}</h2>
          <span>{{ item.createdAt }}</span>
          <span>{{ item.updatedAt }}</span>
        </div>
        <p>{{ item.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import MyCarousel from './home/carousel';
export default {
  components: {
    MyCarousel,
  },
  data() {
    return {
      blogs: [],
    };
  },
  methods: {
    async getBlog() {
      let res = await this.$axios.get('/blog');
      this.blogs = res.data.reverse();
    },
  },
  mounted() {
    this.getBlog();
  },
};
</script>

<style lang="scss" scoped></style>
