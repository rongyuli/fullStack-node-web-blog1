<template>
  <div id="navBox">
    <div v-if="width > 600" id="nav">
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
    <div v-else id="smallNav">
      <div>
        <Icon @click="toggle" id="button" class="yellow" type="md-menu" />
      </div>
      <div id="smallNavBox" :style="{ height: openNav ? '92px' : '0px' }">
        <Menu mode="vertical" theme="light" :active-name="nav" @on-select="route">
          <MenuItem :name="1">
            <i class="iconfont iconxingxing"></i>
            <span>首页</span>
          </MenuItem>
          <MenuItem :name="2">
            <i class="iconfont icondangwugongkai"></i>
            <span>后台</span>
          </MenuItem>
        </Menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openNav: false,
      width: 0,
    };
  },
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
    toggle() {
      this.openNav = !this.openNav;
    },
  },
  computed: {
    nav() {
      return this.$store.state.nav;
    },
  },
  watch: {
    width(val) {
      console.log(val);
    },
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
  mounted() {
    this.width = document.body.clientWidth;
    window.addEventListener('resize', () => {
      this.width = document.body.clientWidth;
    });
  },
};
</script>

<style lang="scss" scoped>
#navBox {
  background: #df280f !important;
  position: relative;
}
#nav {
  background: #df280f !important;
  height: 59px;
  overflow: hidden;
}
#smallNav {
  & > div {
    background: #df280f !important;
    position: relative;
    height: 59px;
  }
  .ivu-menu-light {
    border-top: 3px solid #ffdf00 !important;
    width: auto !important;
  }
  .ivu-menu-item {
    text-align: center;
    background: #df280f !important;
    &:hover {
      border-bottom: none !important;
    }
    span,
    i {
      position: relative;
      top: 8px;
    }
  }
  .ivu-menu-item-active {
    border-bottom: none !important;
  }
  .ivu-menu-item-active:not(.ivu-menu-submenu):after,
  .ivu-menu-vertical.ivu-menu-light:after {
    width: 0px;
  }
}
#smallNavBox {
  transition: 0.3s;
  overflow: hidden;
}
#button {
  position: absolute;
  font-size: 40px;
  top: 10px;
  right: 15px;
  cursor: pointer;
}
</style>
