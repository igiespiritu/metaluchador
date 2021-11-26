<template>
  <div class="footer w-100 p-5">
    <div class="links flex-center flex-column flex-md-row">
      <!-- <div class="mx-4 cursor-pointer"><nuxt-link to='/collections'>COLLECTIONS</nuxt-link></div> -->
      <div class="mx-4 cursor-pointer"><nuxt-link to='/#whatwhy'>WHAT & WHY</nuxt-link></div>
      <!-- <div class="mx-4 cursor-pointer"><nuxt-link to='/'>FAQs</nuxt-link></div> -->
      <div class="mx-4 cursor-pointer"><nuxt-link to='/#roadmap'>ROADMAP</nuxt-link></div>
      <div class="mx-4 cursor-pointer"><nuxt-link to='/#about'>ABOUT</nuxt-link></div>
    </div>
    <div class="flex-center flex-column mt-5">
      <div class="m-3">Powered by</div>
      <div class="cardano-logo">
        <img :src="`${s3BaseBucket}assets/images/home/cardano-logo.png`" alt="cardano" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomFooter',
  computed: {
    s3BaseBucket() {
      return this.$store.state.base.s3BaseBucket
    }
  }
}
</script>

<style lang="scss">
.footer {
  font-family: Arial;
  font-weight: 100;
  background: $white;
  color: $black;
  font-size: 1.5em;
}
.cardano-logo {
  width: 250px;
  img {
    width: 100%;
    object-fit: contain;
  }
}
</style>
