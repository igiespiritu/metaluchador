<template>
  <div class="footer w-100">
    <div class="links flex-center pt-4">
      <div class="mx-4">COLLECTIONS</div>
      <div class="mx-4">WHAT & WHY</div>
      <div class="mx-4">FAQs</div>
      <div class="mx-4">ROADMAP</div>
      <div class="mx-4">ABOUT</div>
    </div>
    <div class="flex-center mt-4">
      Powered by
      <div class="cardano-logo"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomFooter'
}
</script>

<style lang="scss">
.footer {
  font-family: Arial;
  font-weight: 100;
  background: $white;
  color: $black;
}
</style>
