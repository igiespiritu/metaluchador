<template>
  <section class="home-header content" :class="{ 'wide' : isWide }">
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
      wrestlerNumber: 132,
      screenWidth: 0
    }
  },
  computed: {
    isWide() {
      return this.screenWidth > 1920
    }
  },
  mounted() {
    this.screenWidth = window.innerWidth
    window.addEventListener('resize', _ => { this.screenWidth = window.innerWidth })
  }
}
</script>

<style lang="scss" scoped>
.home-header {
  background: url(https://metalucha.s3.ap-southeast-1.amazonaws.com/assets/images/home/bg.jpg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100vw;
  height: 56.75vw;
  min-height: 1080px;
  max-height: 100vh;
  &.wide {
    min-height: unset;
    margin: calc(((100vh - 1080px) / 2) * -1) auto;
  }
}
.wrestler {
  width: 50vw;
  height: 50vw;
  max-width: 960px;
  max-height: 960px;
  margin-left: -8vw;
}
</style>