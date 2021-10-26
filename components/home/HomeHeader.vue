<template>
  <section class="home-header">
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

<style lang="scss">
.wrestler {
  width: 50vw;
  height: 50vw;
  margin-left: -8vw;
}
</style>