<template>
  <ul id="navBox">
    <li v-if="width > 600" id="nav">
      <Menu mode="horizontal" theme="light" :active-name="nav" @on-select="route">
        <MenuItem :name="1">
          <i class="iconfont iconxingxing"></i>
          <span>首页</span>
        </MenuItem>
        <MenuItem :name="2">
          <i class="iconfont icondangwugongkai"></i>
          <span>管理</span>
        </MenuItem>
        <MenuItem :name="3">
          <i class="iconfont icondangwugongkai"></i>
          <span>编辑</span>
        </MenuItem>
      </Menu>
    </li>
    <li v-else id="smallNav">
      <div>
        <div id="now">
          <i :class="['iconfont', nowIcon]"></i>
          <span>{{ nowTitle }}</span>
        </div>
        <Icon @click="toggle" id="button" class="yellow" type="md-menu" />
      </div>
      <div id="smallNavBox" :style="{ height: openNav ? '136px' : '0px' }">
        <Menu mode="vertical" theme="light" :active-name="nav" @on-select="route">
          <MenuItem :name="1">
            <i class="iconfont iconxingxing"></i>
            <span>首页</span>
          </MenuItem>
          <MenuItem :name="2">
            <i class="iconfont icondangwugongkai"></i>
            <span>网站管理</span>
          </MenuItem>
          <MenuItem :name="3">
            <i class="iconfont icondangwugongkai"></i>
            <span>内容管理</span>
          </MenuItem>
        </Menu>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      openNav: false,
      width: 0,
      nowTitle: '',
      nowIcon: '',
    };
  },
  methods: {
    route(name) {
      switch (name) {
        case 1:
          if (location.hash === '#/') return (this.openNav = false);
          this.toHome();
          break;
        case 2:
          if (location.hash === '#/back') return (this.openNav = false);
          this.toBack();
          break;
        case 3:
          if (location.hash === '#/edit') return (this.openNav = false);
          this.toEdit();
          break;
      }
    },
    toHome() {
      this.$router.push('/');
      this.$store.commit('route', 1);
      this.openNav = false;
      this.nowTitle = '首页';
      this.nowIcon = 'iconxingxing';
    },
    toBack() {
      this.$router.push('/back');
      this.$store.commit('route', 2);
      this.openNav = false;
      this.nowTitle = '网站管理';
      this.nowIcon = 'icondangwugongkai';
    },
    toEdit() {
      this.$router.push('/edit');
      this.$store.commit('route', 3);
      this.openNav = false;
      this.nowTitle = '内容管理';
      this.nowIcon = 'icondangwugongkai';
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
    $route(val) {
      switch (val.path) {
        case '/':
          this.$store.commit('route', 1);
          this.$store.commit('toggleEdit', false);
          break;
        case '/back':
          this.$store.commit('route', 2);
          break;
        case '/edit':
          this.$store.commit('route', 3);
      }
    },
  },
  created() {
    switch (location.hash) {
      case '#/':
        this.$store.commit('route', 1);
        this.nowTitle = '首页';
        this.nowIcon = 'iconxingxing';
        break;
      case '#/back':
        this.$store.commit('route', 2);
        this.nowTitle = '网站管理';
        this.nowIcon = 'icondangwugongkai';
        break;
      case '#/edit':
        this.$store.commit('route', 3);
        this.nowTitle = '内容管理';
        this.nowIcon = 'icondangwugongkai';
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
    padding: 4px 0 !important;
    text-align: center;
    background: #df280f !important;
    &:hover {
      border-bottom: none !important;
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
#now {
  color: #ffdf00;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  position: relative;
  i {
    font-size: 24px;
    font-weight: bold;
  }
  top: 11px;
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
