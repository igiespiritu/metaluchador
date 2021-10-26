<template>
  <section>
    <h1 class="seo-title">{{ title }}</h1>
    <home-header />
    <navigation />
    <custom-footer />
  </section>
</template>

<script>
const pkg = require('../package')
import Navigation from '../components/common/Navigation.vue'
import HomeHeader from '../components/home/HomeHeader.vue'
import CustomFooter from '../components/common/CustomFooter.vue'

export default {
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A boilerplate for Nuxt projects. It includes Bootstrap | SCSS | JQuery.'
        }
      ]
    }
  },
  components: {
    Navigation,
    HomeHeader,
    CustomFooter
  },
  data() {
    return {
      title: 'Index',
      pkg: pkg
    }
  },
  mounted() {
    this.$store.commit('base/SITE_LOADED')
  }
}
</script>

<style>

</style>
