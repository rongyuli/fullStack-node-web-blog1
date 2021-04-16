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

    <Row>
      <Col :sm="0" :md="3" :lg="5"></Col>
      <Col :sm="24" :md="18" :lg="14">
        <section>
          <h2>编辑轮播图</h2>
          <ul v-for="(item, index) in slideShow" :key="index">
            <li>{{ index }}</li>
            <li>{{ 'http://127.0.0.1:91' + item.img }}</li>
            <li><img :src="'http://127.0.0.1:91' + item.img" alt="" /></li>
            <li><input type="file" @change="browse" /></li>
            <li><button>确定</button></li>
            <li><button>删除</button></li>
          </ul>
          <Divider />
        </section>
      </Col>
      <Col :sm="0" :md="3" :lg="5"></Col>
    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      h: '',
      c: '',
      deleteBlogId: '',
      img: '',
      update: { id: '', h: '', c: '' },
      slideShow: [],
    };
  },
  methods: {
    async browse(e) {
      const fd = new FormData();
      fd.append('img', e.target.files[0]);
      await this.$axios.post('/slideShow', fd);
      this.getSlideShow();
    },
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
    async getSlideShow() {
      let { data } = await this.$axios.get('/slideShow');
      this.slideShow = data;
      console.log(res);
    },
  },
  created() {
    this.getSlideShow();
  },
};
</script>

<style lang="scss" scoped>
ul {
  margin: 10px 0;
  display: flex;
  img {
    width: 100px;
  }
}
</style>
