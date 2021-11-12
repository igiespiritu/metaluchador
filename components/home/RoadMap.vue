<template>
    <section class="roadmap content">
        <div class="flex-center mb-4">
            <h1 class="meta-tertiary">RoadMap</h1>
        </div>
        <div class="meta-black">
            <template v-for="(block, i) in blocks">
                <div :key="`block-${i}`" class="d-flex flex-wrap flex-md-nowrap">
                    <template v-for="(b, j) in block">
                        <div :key="`b-${j}`" :class="`col tile ${b.animated ? 'animated' : ''} size-${b.size} p-1 m-1`">
                            <pixelated-bg v-if="b.pixelatedBg" :pixel="b.pixelatedBg.size" :pixelColor="b.pixelatedBg.color">
                                <div  v-html="b.content" class="flex-center flex-column"></div>
                            </pixelated-bg>
                        </div>
                    </template>
                </div>
            </template>
        </div>
    </section>
</template>

<script>
import PixelatedBg from '../common/PixelatedBg.vue'
import blocksJSON from '../../static/roadmap.json'

export default {
    name: 'RoadMap',
    components: { PixelatedBg },
    data() {
        return {
            blocks: blocksJSON
        }
    }
}
</script>

<style lang="scss" scoped>
.tile {
    min-height: 190px;
}
.size-0 {
    max-width: 100px;
}
.size-0_25 {
    max-width: 125px;
}
.size-1 {
    max-width: 175px;
}
.size-2 {
    max-width: 240px;
}
.size-3 {
    max-width: 315px;
}
.size-4 {
    max-width: 500px;
}

.tile {
    cursor: default;
}

.tile.animated {
    transition: transform 0.5s ease-in-out;
}

.tile.animated:hover {
    transform: scale(1.1);
}

</style>