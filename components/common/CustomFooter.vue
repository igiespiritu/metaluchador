<template>
  <div class="footer w-100">
    <div class="links flex-center pt-4">
      <div class="mx-4 cursor-pointer">COLLECTIONS</div>
      <div class="mx-4 cursor-pointer">WHAT & WHY</div>
      <div class="mx-4 cursor-pointer">FAQs</div>
      <div class="mx-4 cursor-pointer">ROADMAP</div>
      <div class="mx-4 cursor-pointer">ABOUT</div>
    </div>
    <div class="flex-center flex-column mt-4">
      <div class="small-text">Powered by</div>
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
}
.cardano-logo {
  width: 13vw;
  img {
    width: 100%;
    object-fit: contain;
  }
}
</style>
