<template>
  <div class="nav d-flex vw-100">
    <div class="col-6 flex-column flex-center">
      <div class="">
        <div class="logo-column flex-column flex-center margin-center">
          <div class="logo flex-column flex-center justify-content-between">
            <div class="logo-img"></div>
            <div class="logo-txt"></div>
          </div>
          <div class="logo-cta"><pixelated-bg :pixel="10" :pixelColor="`00d6ff`">BRAWLING SOON</pixelated-bg></div>
        </div>    
      </div>
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
import PixelatedBg from './PixelatedBg.vue'
import variables from '~/assets/sass/_variables.scss'

export default {
  name: 'Navigation',
  components: {
    Hamburger,
    PixelatedButton,
    PixelatedBg
  },
  data (){
    return {
      buttonColor: variables.metaSecondary,
      logoDimension: {
        width: 0,
        height: 0,
        minWidth: 255,
        minHeight: 62
      }
    }
  },
  methods: {
    scrolling() {
      const top = document.scrollingElement.scrollTop
      const dWidth = this.logoDimension.width - this.logoDimension.minWidth
      const dHeight = this.logoDimension.height - this.logoDimension.minHeight
      const delta = top / 1080
      const height = this.logoDimension.height - (dHeight * delta)
      const width = this.logoDimension.width - (dWidth * delta)
      const lWidth = 100 - (80 * delta)
      const tWidth = 100 - (25 * delta)
      const ctaScale = 1 - delta
      const containerBottom = 90 * delta
      const containerRight = 70 * delta

      if(top < 1080) {
        console.log('delta:', delta, 'height:', height, 'width', width)
        $('.logo')[0].style.height = `${height}px`
        $('.logo')[0].style.width = `${width}px`
        $('.logo-img')[0].style.width = `${lWidth}%`
        $('.logo-txt')[0].style.width = `${tWidth}%`
        $('.logo-cta')[0].style.transform = `scale(${ctaScale})`
        $('.logo-column')[0].style.bottom = `${containerBottom}%`
        $('.logo-column')[0].style.right = `${containerRight}%`
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrolling)
    console.log('maxWidth', $('.logo').css('Width'))
    this.logoDimension.width = parseInt($('.logo').css('Width').trim('px'))
    this.logoDimension.height = parseInt($('.logo').css('Height').trim('px'))
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
  position: relative;
  width: 412px;
  height: 597px;
  // max-width: 412px;
  // max-height: 597px;
  .logo-img {
    position: absolute;
    top: 0;
    left: 0;
    margin: auto;
    background: url($s3-base-url+'images/navigation/logo.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    height: 100%;
    max-width: 412px;
    max-height: 447px;
  }
  .logo-txt {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: auto;
    background: url($s3-base-url+'images/navigation/text_logo.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    height: 100%;
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