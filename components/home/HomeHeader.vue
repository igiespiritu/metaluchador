<template>
  <section class="home-header content">
    <div class="d-flex justify-content-center h-100">
      <div class="col-6 d-none d-md-block"></div>
      <div class="col-12 col-md-6 d-flex justify-content-start align-items-end w-100 h-100">
        <!-- <div class="wrestler w-100 h-100" :style="`background: url(${wrestlerURL}promotional-wrestlers/Wrestler_${wrestlerNumber}.gif); background-size: contain;`"></div> -->
        <img class="wrestler w-100 h-100" :src="`${wrestlerURL}promotional-wrestlers/Promotional_Wrestler%23${wrestlerNumber}.gif`" alt="wrestler">
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
      wrestlerNumber: 139,
      screenWidth: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.home-header {
  background: url(https://metalucha.s3.ap-southeast-1.amazonaws.com/assets/images/home/bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  max-width: 1920px;
  max-height: 1080px;
  @include media-breakpoint-down(md) {
    height: 60vh;
    background-position: 75% 50%;
  }
}
.wrestler {
  object-fit: contain;
  margin: 0 0 -5% -15%;
  @include media-breakpoint-down(md) {
    margin: 0;
  }
}
</style>