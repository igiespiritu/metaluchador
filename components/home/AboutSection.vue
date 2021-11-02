<template>
  <section class="about content">
    <div class="d-flex justify-content-center align-items-center h-100">
      <div class="col-3">
          <img class="wrestler" :src="`${wrestlerURL}promotional-wrestlers/Wrestler_${wrestlerNumber}.gif`">
      </div>
      <div class="col-9 p-5">
        <h2 class="font-PixelDigivolveItalic meta-accent mb-4">ABOUT&nbsp;METAVERSE LUCHADOR&nbsp;ENTERTAINMENT</h2>
        <p class="meta-primary">Metaverse Luchador Entertainment (MLE) is a premiere NFT project in the Cardano Blockchain. It is the home of the Meta Luchas-- pixelized luchadors set to battle it out in a game that will be launched in the future.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
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
  width: 100%;
  object-fit: contain;
}
</style>