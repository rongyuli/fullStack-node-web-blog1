<template>
  <ul>
    <li @click="toHome">首页</li>
    <li @click="toBack">后台</li>
  </ul>
</template>

<script>
export default {
  methods: {
    toHome() {
      this.$router.push('/');
    },
    toBack() {
      this.$router.push('/back');
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(255, 100, 131);
  height: 40px;
  & > li {
    margin: 0 10px;
    color: white;
    cursor: pointer;
    font-size: 20px;
    &:hover {
      color: yellow;
    }
  }
}
</style>
