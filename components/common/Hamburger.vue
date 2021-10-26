<template>
  <div class="burger">
    <div class="stripe"></div>
    <div class="stripe"></div>
    <div class="stripe"></div>
  </div>
</template>

<script>
export default {
  name: 'Hamburger'
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