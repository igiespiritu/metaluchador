<template>
  <section class="about content">
    <div class="d-flex justify-content-center align-items-center h-100">
      <div class="col-3">
          <img class="wrestler" :src="`${wrestlerURL}promotional-wrestlers/Wrestler_${wrestlerNumber}.gif`">
      </div>
      <div class="col-9 p-5">
        <h2 class="font-PixelDigivolveItalic meta-accent mb-4">ABOUT&nbsp;METAVERSE LUCHADOR&nbsp;ENTERTAINMENT</h2>
        <p class="meta-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur fermentum luctus nisi, a condimentum lacus facilisis
        rhoncus. Mauris varius odio sed venenatis maximus. Nunc sem est, 
        mollis sed luctus a, blandit at mauris. Nullam commodo,
        ex auctor scelerisque porttitor, lacus turpis malesuada orci,
        sit amet auctor ex massa at nunc. Donec vel viverra leo
        Morbi eu imperdiet risus, mattis scelerisque nunc. Sed ut
        tincidunt erat. Integer a volutpat urna, quis aliquet dolor. </p>
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