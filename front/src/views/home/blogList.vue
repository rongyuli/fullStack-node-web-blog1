<template>
  <Row>
    <Col :xs="1" :sm="1" :md="2" :lg="3" :xl="4"></Col>
    <Col :xs="22" :sm="22" :md="20" :lg="18" :xl="16">
      <List item-layout="vertical">
        <ListItem v-for="item in data" :key="item.id">
          <ListItemMeta
            :avatar="item.avatar"
            :description="getDesc(item.author, item.updatedAt)"
            :title="item.heading"
          />
          <template v-if="editMode" #action>
            <li @click="toEdit(item.id)" class="blue">
              <Icon type="ios-paper" />
              <span>修改</span>
            </li>
            <li class="red">
              <Icon @click="del(item.id)" type="ios-trash" />
              <span @click="del(item.id)">删除</span>
            </li>
          </template>
          <div v-html="item.content"></div>
        </ListItem>
      </List>
    </Col>
    <Col :xs="1" :sm="1" :md="2" :lg="3" :xl="4"></Col>
  </Row>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  methods: {
    getDesc(author, time) {
      const myTime = new Date(time).toLocaleString();
      return `${author} ${myTime}`;
    },
    async getBlog() {
      this.$Spin.show();
      const res = await this.$axios.get('/blog');
      this.$Spin.hide();
      this.data = res.data.reverse();
    },
    async toEdit(id) {
      this.$router.push('/edit');
      this.$Spin.show();
      const res = await this.$store.commit('getBlogId', id);
      this.$store.commit('toggleEdit', true);
      this.$Spin.hide();
    },
    async del(id) {
      this.$Spin.show();
      await this.$axios.delete(`/blog/${id}`);
      const res = await this.$axios.get('/blog');
      this.data = res.data.reverse();
      this.$Spin.hide();
    },
  },
  computed: {
    editMode() {
      return this.$store.state.editMode;
    },
  },
  mounted() {
    this.getBlog();
  },
};
</script>

<style lang="scss" scoped>
::v-deep img {
  max-width: 100% !important;
}
.ivu-icon {
  font-size: 25px;
  color: #444444 !important;
}
</style>
