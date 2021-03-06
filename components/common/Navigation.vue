<template>
  <div :class="`nav vw-100 ${ isMobile ? 'mobile' : '' }`">
    <div class="left-nav m-2 m-md-4">
        <nuxt-link to="/">
          <div class="logo-column flex-column flex-center margin-center">
            <div class="logo flex-column flex-center justify-content-between">
              <div class="logo-img"></div>
              <div class="logo-txt"></div>
            </div>
            <div class="logo-cta"><pixelated-bg :pixel="8" :pixelColor="`00d6ff`"><h2 class="m-3">BRAWLING SOON</h2></pixelated-bg></div>
          </div>
        </nuxt-link>
    </div>
    <div class="right-nav m-1 m-md-4">
      <div class="d-flex align-items-center flex-column">
        <div class="hamburger-menu my-2"><hamburger @toggle="burgerToggled" /></div>
        <div class="slide-out d-flex align-items-center flex-column">
          <a href="https://t.co/Jq3UZYxNla?amp=1"><div class="discord my-2"></div></a>
          <a href="https://twitter.com/MetaLuchador"><div class="twitter my-2"></div></a>
        </div>
        <nuxt-link v-if="!isCollection" to='/collections' class="collections-btn">
          <div class="collections my-2 flex-center flex-column"><div class="collections-icon mb-1"></div>collections</div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Hamburger from './Hamburger.vue'
import PixelatedBg from './PixelatedBg.vue'
import variables from '~/assets/sass/_variables.scss'
import { gsap } from 'gsap'

export default {
  name: 'Navigation',
  components: {
    Hamburger,
    PixelatedBg
  },
  data (){
    return {
      sideMenuOpen: false,
      buttonColor: variables.metaSecondary,
      logoDimension: {
        maxWidth: 412,
        maxHeight: 597,
        minWidth: 255,
        minHeight: 62,
        mini: false
      }
    }
  },
  computed: {
    isMobile() {
      return this.$store.state.base.screenSize == 'xs'
    },
    isCollection() {
      return this.$route.name == 'collections'
    }
  },
  methods: {
    scrolling() {
      if(this.$route.name == 'index'){
        const top = document.scrollingElement.scrollTop

        if(top >= 540 && !this.mini && !this.isMobile) {
          this.shrink()
        } else if(top <= 540 && this.mini && !this.isMobile) {
          this.expand()
        }
      }
    },
    shrink() {
      this.mini = true
      gsap.to('.logo', 0.5, { width: this.logoDimension.minWidth, height: this.logoDimension.minHeight })
      gsap.to('.logo-img', 0.5, { width: '20%'})
      gsap.to('.logo-txt', 0.5, { width: '75%'})
      gsap.to('.logo-cta', 0.5, { scale: 0, marginTop: 0, height: 0})
      gsap.to('.left-nav', 0.5, { height: 62, width: this.logoDimension.minWidth })
    },
    expand() {
      this.mini = false
      gsap.to('.logo', 0.5, { width: this.logoDimension.maxWidth, height: this.logoDimension.maxHeight })
      gsap.to('.logo-img', 0.5, { width: '100%'})
      gsap.to('.logo-txt', 0.5, { width: '100%'})
      gsap.to('.logo-cta', 0.5, { scale: 1, marginTop: 20, height: 'unset'})
      gsap.to('.left-nav', 0.5, { height: 1080, width: '50%' })
    },
    burgerToggled(e) {
      if(e) {
        gsap.to('.slide-out', 0.5, { height: 112 })
      } else {
        gsap.to('.slide-out', 0.5, { height: 0 })
      }
    }
  },
  mounted() {
    if(this.$route.name === 'index') {
      window.addEventListener('scroll', this.scrolling)
    } else {
      this.shrink()
    }
    gsap.set('.slide-out', { transformOrigin: '0% 0%', height: 0 })
  }
}
</script>

<style lang="scss">
@import '~/assets/sass/_pixel.scss';

.nav {
  .left-nav {
    position: absolute;
    width: 50%;
    height: 100vh;
    max-height: 1080px;
  }
  .right-nav {
    position: absolute;
    right: 0;
  }
}
.logo {
  position: relative;
  width: 412px;
  height: 597px;
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

.mobile {
  .left-nav {
    width: 255px;
    height: 62px;
  }
  .logo {
    width: 255px;
    height: 62px;
    .logo-img {
      width: 20%;
    }
    .logo-txt {
      width: 75%;
    }
  }
  .logo-cta {
    display: none;
    margin-top: 0;
    height: 0;
  }
}
.slide-out {
  overflow: hidden;
}
.logo-cta {
  margin-top: 20px;
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