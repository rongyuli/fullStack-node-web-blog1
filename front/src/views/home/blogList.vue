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
          <template #action>
            <li @click="toEdit(item.id)" class="blue">
              <Icon type="ios-paper" />
              <span>修改</span>
            </li>
            <li class="red">
              <Icon type="ios-trash" />
              <span>删除</span>
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
      this.$router.push('/back');
      this.$Spin.show();
      const res = await this.$store.commit('getBlogId', id);
      this.$store.commit('toggleEdit', true);
      this.$Spin.hide();
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
