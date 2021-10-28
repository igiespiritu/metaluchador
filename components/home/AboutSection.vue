<template>
  <section class="about p-5">
    <div class="d-flex justify-content-center align-items-center h-100">
      <div class="col-3">
          <div class="wrestler" :style="`background: url(${wrestlerURL}promotional-wrestlers/Wrestler_${wrestlerNumber}.gif); background-size: contain;`"></div>
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
  width: 26.7vw;
  height: 28.5vw;
}
</style>