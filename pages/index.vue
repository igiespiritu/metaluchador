<template>
  <section>
    <h1 class="seo-title">{{ title }}</h1>
    <home-header />
    <what-why />
    <road-map />
    <about />
    <navigation />
    <custom-footer />
  </section>
</template>

<script>
const pkg = require('../package')
import Navigation from '../components/common/Navigation.vue'
import HomeHeader from '../components/home/HomeHeader.vue'
import About from '../components/home/AboutSection.vue'
import WhatWhy from '../components/home/WhatWhy.vue'
import RoadMap from '../components/home/RoadMap.vue'
import CustomFooter from '../components/common/CustomFooter.vue'

export default {
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Metaverse Luchador'
        }
      ]
    }
  },
  components: {
    Navigation,
    HomeHeader,
    About,
    WhatWhy,
    RoadMap,
    CustomFooter
  },
  data() {
    return {
      title: 'Metaverse Luchador',
      pkg: pkg,
      componentKey: 0,
      visibleHeight: this.$store.state.base.innerHeight
    }
  },
  mounted() {
    this.$store.commit('base/SITE_LOADED')
  }
}
</script>

<style>

</style>
