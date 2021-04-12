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

    <section>
      <h2>编辑轮播图</h2>
      <ul>
        <li>1</li>
        <li><img src="../image/a.jpg" alt="" /></li>
        <li><button>选择图片</button></li>
        <li><button>删除</button></li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      h: '',
      c: '',
      deleteBlogId: '',
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

<style lang="scss" scoped>
section {
  margin: 10px;
  margin-left: calc(50vw - 200px);
}
ul {
  margin: 10px 0;
  display: flex;
  img {
    width: 100px;
  }
}
</style>
