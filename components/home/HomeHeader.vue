<template>
  <section class="home-header content">
    <div class="d-flex justify-content-center align-items-center h-100">
      <div class="col-6"></div>
      <div class="col-6">
        <div class="wrestler" :style="`background: url(${wrestlerURL}promotional-wrestlers/Wrestler_${wrestlerNumber}.gif); background-size: contain;`"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeHeader',
  data() {
    return {
      wrestlerURL: 'https://meta-luchador-wrestlers.s3.ap-southeast-1.amazonaws.com/',
      wrestlerNumber: 132
    }
  }
}
</script>

<style lang="scss" scoped>
.wrestler {
  width: 50vw;
  height: 50vw;
  max-width: 960px;
  max-height: 960px;
  margin-left: -8vw;
}
</style>