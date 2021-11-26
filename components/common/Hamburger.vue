<template>
  <div class="burger" @click="toggle">
    <div class="stripe stripe-1"></div>
    <div class="stripe stripe-2"></div>
    <div class="stripe stripe-3"></div>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'Hamburger',
  data() {
    return {
      burgerOpen: false
    }
  },
  mounted() {
    gsap.set('.stripe-1', { transformOrigin: '0% 0%' })
    gsap.set('.stripe-2', { transformOrigin: '100% 100%' })
  },
  methods: {
    toggle() {
      if(!this.burgerOpen) {
        gsap.to('.stripe-1', 0.5, { rotate: 45, x: 6 })
        gsap.to('.stripe-2', 0.5, { rotate: -45, x: -2, y: -12 })
        gsap.to('.stripe-3', 0.5, { opacity: 0 })
      } else {
        gsap.to('.stripe-1', 0.5, { rotate: 0, x: 0 })
        gsap.to('.stripe-2', 0.5, { rotate: 0, x: 0, y: 0 })
        gsap.to('.stripe-3', 0.5, { opacity: 1 })
      }
      this.burgerOpen = !this.burgerOpen
      this.$emit('toggle', this.burgerOpen)
    }
  }
}
</script>

<style lang="scss">
.stripe {
  width: 30px;
  height: 3px;
  background-color: $meta-secondary;
  margin: 8px;
}
</style>