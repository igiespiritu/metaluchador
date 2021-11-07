<template>
    <section class="what-why content d-flex flex-column">
        <div class="d-flex justify-content-center h-100 my-5">
            <div class="col-2"></div>
            <div class="col-5">
                <h2 class="font-PixelDigivolveItalic meta-tertiary text-right">WHAT&nbsp;IS METAVERSE&nbsp;LUCAHDOR ENTERTAINMENT&nbsp;?</h2>
            </div>
            <div class="col-4">
                <p class="meta-primary">MLE's aim is to create an experience where wrestling fans and NFT collectors jump inside a wrestling ring for bragging rights and for the coveted title of world champion.</p>
                <p class="meta-primary">3 divisions will storm season 1 as Heavyweights, Cruiserwieghts, and Middleweights duke it out for ring supremacy. Each division will be composed of 1500 distinct Meta Luchas each with their own unique aesthetic. The team is composed of seasoned game developers, coders, and artists, lead by LuchaGab, an Industrial Designer from the Philippines. LuchaGab is an avid fan of wrestling and wishes to bring a great experience to the collectors and supporters of the project.</p>
            </div>
            <div class="col-1"></div>
        </div>
        <div class="d-flex justify-content-center h-100 my-5">
            <div class="col-2"></div>
            <div class="col-5">
                <h2 class="font-PixelDigivolveItalic meta-tertiary text-right">WHY&nbsp;GET&nbsp;A LUCHADOR&nbsp;?</h2>
            </div>
            <div class="col-4">
                <p class="meta-primary">A total of 4500 Meta Luchas will be minted for S1 and each one is qualified to compete in the future</p>
            </div>
            <div class="col-1"></div>
        </div>
        <div class="flex-center flex-column my-5">
            <h5 class="font-PixelDigivolveItalic">STILL&nbsp;CLUELESS&nbsp;?</h5>
            <div class="reach-out">
                <pixelated-bg  :pixel="6" :pixelColor="`00d6ff`"><h4 class="cta flex-center m-0">REACH OUT!</h4></pixelated-bg>
            </div>
            
        </div>
    </section>
</template>

<script>
import PixelatedBg from '../common/PixelatedBg.vue'
export default {
  name: 'WhatWhy',
  components: { PixelatedBg }
}
</script>

<style lang="scss" scoped>
.reach-out {
    width: 200px;
    height: 50px;
}
</style>
