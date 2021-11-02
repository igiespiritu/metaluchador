<template>
  <div class="nav d-flex vw-100">
    <div class="col-6 flex-column flex-center">
        <div class="logo flex-column flex-center justify-content-between">
          <div class="logo-img"></div>
          <div class="logo-txt"></div>
        </div>
        <pixelated-button class="logo-cta" :pixel-color="buttonColor" :pixel="`.1em`">BRAWLING SOON</pixelated-button>
        <!-- <div class="cta flex-center meta-secondary mt-2 pixel-border"><h3 class="m-0">Brawling Soon</h3></div> -->
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
import PixelatedButton from './PixelatedButton.vue'
import variables from '~/assets/sass/_variables.scss'

export default {
  name: 'Navigation',
  components: {
    Hamburger,
    PixelatedButton
  },
  data (){
    return {
      buttonColor: variables.metaSecondary,
      logoImgHeight: 0
    }
  },
  methods: {
    scrolling() {
      const top = document.scrollingElement.scrollTop
      const scale = (1 - ((top / 1018)))
      const height = 1080 - top

      if(top < 1080 && scale > 0.13) {
        console.log('top:', top, 'scale', scale)
        $('.logo-img')[0].style.transform = `scale(${scale})`
        $('.logo-txt')[0].style.transform = `scale(${scale})`
        // $('.logo')[0].style.height = `${height}px`
      }

      $('.logo-cta')[0].style.transform = `scale(${scale > 0 ? scale : 0})`
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrolling)
  }
}
</script>

<style lang="scss">
@import '~/assets/sass/_pixel.scss';

.nav {
  height: 56.75vw;
  max-height: 1080px;
}
.logo {
  width: 24.7vw;
  height: 31.1vw;
  max-width: 475px;
  max-height: 597px;
  .logo-img {
    background: url($s3-base-url+'images/navigation/logo.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 17.1875vw;
    height: 23.2812vw;
    max-width: 330px;
    max-height: 447px;
  }
  .logo-txt {
    background: url($s3-base-url+'images/navigation/text_logo.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 17.1875vw;
    height: 6.302vw;
    max-width: 412px;
    max-height: 121px;
  }
}

.cta {
  background: url($s3-base-url+'images/home/cta-bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 24.7vw;
  height: 4vw;
  max-width: 475px;
  max-height: 75px;
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