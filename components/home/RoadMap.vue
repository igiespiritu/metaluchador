<template>
    <div class="content">
        <div class="flex-center">
            <h2 class="meta-tertiary">RoadMap</h2>
        </div>
        <div class="d-flex">
            <div class="col tile size-2_5 p-0">
                <pixelated-bg></pixelated-bg>
            </div>
            <div class="col tile size-0_5 p-0">
            </div>
            <div class="col tile size-1 p-0">
                <pixelated-bg></pixelated-bg>
            </div>
            <div class="col tile size-1 p-0">
                <pixelated-bg></pixelated-bg>
            </div>
            <div class="col tile size-3 p-0">
                <pixelated-bg></pixelated-bg>
            </div>
        </div>
        
    </div>
</template>

<script>
import PixelatedBg from '../common/PixelatedBg.vue'

export default {
    name: 'RoadMap',
    components: { PixelatedBg }
}
</script>

<style lang="scss" scoped>
.tile {
    min-height: 190px;
}
.size-0_5 {
    max-width: 150px;
}
.size-1 {
    max-width: 175px;
}
.size-2_5 {
    max-width: 350px;
}
.size-3 {
    max-width: 520px;
}

</style>