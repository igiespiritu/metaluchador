<template>
  <div class="nav d-flex vw-100">
    <div class="col-6 flex-column flex-center">
        <div class="logo-w-text"></div>
        <div class="cta flex-center meta-primary mt-2"><h3 class="m-0">Brawling Soon</h3></div>
    </div>
    <div class="col-6 d-flex justify-content-end">
      <div class="m-2 mt-3 d-flex align-items-center flex-column">
        <div class="hamburger-menu my-2"><hamburger /></div>
        <div class="discord my-2"></div>
        <div class="twitter my-2"></div>
        <div class="collections my-2 flex-center flex-column"><div class="collections-icon mb-1"></div>collections</div>
      </div>
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
.discord {
  background: url($s3-base-url+'images/navigation/discord-icon.png');
}
.twitter {
  background: url($s3-base-url+'images/navigation/twitter-icon.png');
}
.collections-icon {
  background: url($s3-base-url+'images/navigation/collections-icon.png');
}
.discord, .twitter, .collections-icon {
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 40px;
  height: 40px;
}
.collections-icon {
  width: 50px;
  height: 50px;
}
.collections {
  font-size: 10px;
  color: $meta-secondary;
}
</style>