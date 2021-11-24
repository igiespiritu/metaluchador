<template>
  <section>
    <h1 class="seo-title">{{ title }}</h1>
    <div class="spacer-100"></div>
    <drops-list />
    <div class="spacer-100"></div>
    <navigation />
    <custom-footer />
  </section>
</template>

<script>
const pkg = require('../package')
import Navigation from '../components/common/Navigation.vue'
import DropsList from '../components/home/DropsList.vue'
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
    DropsList,
    CustomFooter
  },
  async asyncData({ store }) {
    await store.dispatch('luchador/init')
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
