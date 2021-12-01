<template>
    <section id="whatwhy" class="what-why content d-flex flex-column">
        <div class="spacer-100"></div>
        <div class="d-flex justify-content-center flex-column flex-md-row h-100 my-5">
            <div class="col-2 d-none d-md-block "></div>
            <div class="col-12 col-md-5">
                <h2 class="d-none d-md-block font-PixelDigivolveItalic meta-tertiary text-right">WHAT&nbsp;IS METAVERSE&nbsp;LUCAHDOR ENTERTAINMENT&nbsp;?</h2>
                <h2 class="d-md-none font-PixelDigivolveItalic meta-tertiary text-right">WHAT IS METAVERSE LUCAHDOR ENTERTAINMENT ?</h2>
            </div>
            <div class="col-12 col-md-4">
                <p class="meta-primary">Metaverse Luchador Entertainment (MLE) is a premiere NFT project in the Cardano Blockchain. It is the home of the Meta Luchas-- pixelized luchadors set to battle it out in a game that will be launched in the future.</p>
                <p class="meta-primary">MLE's aim is to create an experience where wrestling fans and NFT collectors jump inside a wrestling ring for bragging rights and for the coveted title of world champion.</p>
                <p class="meta-primary">The Middleweight division will storm season 1 as a total of 1500 Meta Luchas will be dropped on the first release. Seasons 2 and 3 would consist of drops for the Cruiserweight and Heavyweight divisions. To balance it all out, 4500 Femme Fatale Luchas will be unleashed in Season 4.</p>
            </div>
            <div class="col-1 d-none d-md-block"></div>
        </div>
        <div class="d-flex justify-content-center flex-column flex-md-row h-100 my-5">
            <div class="col-2 d-none d-md-block"></div>
            <div class="col-12 col-md-5">
                <h2 class="d-none d-md-block font-PixelDigivolveItalic meta-tertiary text-right">WHY&nbsp;GET&nbsp;A LUCHADOR&nbsp;?</h2>
                <h2 class="d-md-none font-PixelDigivolveItalic meta-tertiary text-right">WHY GET A LUCHADOR ?</h2>
            </div>
            <div class="col-12 col-md-4">
                <p class="meta-primary">A total of 10,000 (10% of which are allocated for promotional purposes) Meta Luchas will be minted from Season 1-4, each with their own unique aesthetic. Each Meta Lucha is qualified to compete in the future.</p>
                <p class="meta-primary">The team is composed of seasoned game developers, coders, and artists, led by LuchaGab, an Industrial Designer from the Philippines. LuchaGab is an avid fan of wrestling and wishes to bring a great experience to the collectors and supporters of the project.</p>
            </div>
            <div class="col-1 d-none d-md-block"></div>
        </div>
        <div class="flex-center flex-column my-5">
            <h5 class="font-PixelDigivolveItalic">STILL&nbsp;CLUELESS&nbsp;?</h5>
            <div class="reach-out">
                <a href="https://t.co/Jq3UZYxNla?amp=1">
                    <pixelated-bg  :pixel="6" :pixelColor="`00d6ff`">
                        <h4 class="cta flex-center m-0">REACH OUT!</h4>
                    </pixelated-bg>
                </a>
            </div>
        </div>
        <div class="spacer-100"></div>
        <p class="text-center"><span class="meta-primary">Policy ID: </span>5986681de9e63a9ad4a5b29dfc567229dc9d97a9df453e40407020b6</p>
        <div class="spacer-100"></div>
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
