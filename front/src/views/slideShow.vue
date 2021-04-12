<template>
  <div>
    <div id="light">
      <ul :style="{ left: left }" id="slideshow">
        <li><img src="../image/a.jpg" alt="" /><span>1</span></li>
        <li><img src="../image/b.jpg" alt="" /><span>2</span></li>
        <li><img src="../image/c.gif" alt="" /><span>3</span></li>
      </ul>
    </div>
    <button @click="toLeft">left</button>
    <button @click="toRight">right</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      l: 0,
      left: '0vw',
      clock: '',
    };
  },
  methods: {
    toLeft() {
      this.l += 100;
      if (this.l > 0) {
        this.l = -200;
      }
      this.left = this.l + 'vw';
    },
    toRight() {
      this.l -= 100;
      if (this.l <= -300) {
        this.l = 0;
      }
      this.left = this.l + 'vw';
    },
  },
  created() {
    this.clock = setInterval(this.toLeft, 5000);
  },
  destroyed() {
    clearInterval(this.clock);
  },
};
</script>

<style lang="scss" scoped>
#light {
  height: 500px;
  overflow: hidden;
  position: relative;
}
#slideshow {
  position: absolute;
  display: flex;
  & > li {
    position: relative;
  }
  img {
    width: 100vw;
    height: 500px;
  }

  span {
    color: red;
    font-size: 30px;
    position: absolute;
    bottom: 20px;
    left: calc(50vw - 15px);
    z-index: 100;
  }
}
</style>
