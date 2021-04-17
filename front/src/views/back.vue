<template>
  <div id="app">
    <input type="text" v-model="h" />
    <input type="text" v-model="c" />
    <button @click="addBlog">增加</button>
    <div>
      <input v-model="deleteBlogId" type="text" />
      <button @click="deleteBlog">删除</button>
    </div>
    <div>
      <input v-model="update.id" type="text" />
      <input v-model="update.h" type="text" />
      <input v-model="update.c" type="text" />
      <button @click="updateBlog">修改</button>
    </div>
    <div>
      <button @click="getBlog">读所有</button>
    </div>

    <Carousel></Carousel>
  </div>
</template>

<script>
import Carousel from './back/caroucel';
export default {
  components: {
    Carousel,
  },
  data() {
    return {
      h: '',
      c: '',
      deleteBlogId: '',
      img: '',
      toPostcarouselId: '',
      toPutcarouselId: '',
      update: { id: '', h: '', c: '' },
    };
  },
  methods: {
    async addBlog() {
      await this.$axios.post('/blog', {
        h: this.h,
        c: this.c,
      });
      this.getBlog();
    },
    async deleteBlog() {
      let res = await this.$axios.delete(`/blog/${this.deleteBlogId}`);
      if (res.data > 0) this.getBlog();
    },
    async updateBlog() {
      let res = await this.$axios.put(`/blog/${this.update.id}/${this.update.h}/${this.update.c}`);
      if (res.data > 0) this.getBlog();
    },
    async getBlog() {
      let res = await this.$axios.get('/blog');
      this.blogs = res.data.reverse();
    },
  },
};
</script>

<style lang="scss"></style>
