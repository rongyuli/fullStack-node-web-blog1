<template>
  <row>
    <Col :xs="1" :sm="1" :md="2" :lg="3" :xl="4"></Col>
    <Col :xs="22" :sm="22" :md="20" :lg="18" :xl="16">
      <h1 h1>{{ heading }}</h1>
      <div v-html="content"></div>
    </Col>
    <Col :xs="1" :sm="22" :md="2" :lg="3" :xl="4"></Col>
  </row>
</template>

<script>
export default {
  data() {
    return {
      heading: '',
      content: '',
    };
  },
  methods: {
    async get() {
      this.$Spin.show();
      const id = location.hash.split('/')[2];
      const { data } = await this.$axios.get(`/blog/${id}`);
      this.$Spin.hide();
      this.heading = data[0] ? data[0].heading : '';
      this.content = data[0] ? data[0].content : '该博文正在书写中...';
    },
  },
  created() {
    this.get();
  },
};
</script>

<style lang="scss" scoped>
::v-deep img {
  max-width: 100% !important;
}
::v-deep p,
h1,
h2 {
  word-break: break-all !important;
}
[h1] {
  font-size: 30px;
  font-weight: bold;
}
</style>
