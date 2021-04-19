<template>
  <div id="nav">
    <Menu mode="horizontal" theme="light" :active-name="nav" @on-select="route">
      <MenuItem :name="1">
        <i class="iconfont iconxingxing"></i>
        首页
      </MenuItem>
      <MenuItem :name="2">
        <i class="iconfont icondangwugongkai"></i>
        后台
      </MenuItem>
    </Menu>
  </div>
</template>

<script>
export default {
  methods: {
    route(name) {
      switch (name) {
        case 1:
          if (location.hash === '#/') return;
          this.toHome();
          break;
        case 2:
          if (location.hash === '#/back') return;
          this.toBack();
          break;
      }
    },
    toHome() {
      this.$router.push('/');
      this.$store.commit('route', 1);
    },
    toBack() {
      this.$router.push('/back');
      this.$store.commit('route', 2);
    },
  },
  computed: {
    nav() {
      return this.$store.state.nav;
    },
  },
  watch: {
    $route(val) {
      switch (val.path) {
        case '/':
          this.$store.commit('route', 1);
          this.$store.commit('toggleEdit', false);
          break;
        case '/back':
          this.$store.commit('route', 2);
          break;
      }
    },
  },
  created() {
    switch (location.hash) {
      case '#/':
        this.$store.commit('route', 1);
        break;
      case '#/back':
        this.$store.commit('route', 2);
        break;
    }
  },
};
</script>

<style lang="scss">
#nav {
  background: #df280f !important;
  height: 59px;
  overflow: hidden;
}
</style>
