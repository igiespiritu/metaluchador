<template>
  <div class="nav d-flex vw-100">
    <div class="col-6 flex-column flex-center">
        <div class="logo-w-text"></div>
        <div class="cta flex-center meta-primary mt-2"><h3 class="m-0">Brawling Soon</h3></div>
    </div>
    <div class="col-6">
      <div class="hamburger-menu"><hamburger /></div>
      <div class="discord"></div>
      <div class="twitter"></div>
      <div class="collections"></div>
    </div>
  </div>
</template>

<script>
import Hamburger from './Hamburger.vue'

export default {
  name: 'Navigation',
  components: {
    Hamburger
  }
}
</script>

<style lang="scss">
.nav {
  height: 56.75vw;
}

.logo-w-text {
  background: url($s3-base-url+'images/home/logo_w_text.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 24.7vw;
  height: 31.1vw;
}

.cta {
  background: url($s3-base-url+'images/home/cta-bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 24.7vw;
  height: 4vw;
}
</style>