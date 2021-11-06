<template>
    <div class="position-relative flex-center w-100 h-100" :style="cssVars">
        <div class="layer layer-1"></div>
        <div class="layer layer-2"></div>
        <div class="layer layer-3"></div>
        <div class="layer layer-4"></div>
        <div class="layer layer-5"></div>
        <div class="layer layer-6"></div>
        <div class="layer layer-7"></div>
        <div class="slot-content position-relative">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'PixelatedBg',
    props: {
        pixel: {
            type: Number,
            default: 5
        },
        pixelColor: {
            type: String,
            default: 'b72cff'
        }
    },
    computed: {
        cssVars() {
            return {
                '--pixel': this.pixel,
                '--pixel-color': '#' + this.pixelColor
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.layer {
    position: absolute;
    margin: auto;
    background-color: var(--pixel-color);
}
.layer-1 {
    width: calc(100% - calc(var(--pixel) * 4px));
    height: calc(100% - calc(var(--pixel) * 0px));
    opacity: 0.5;
}
.layer-2 {
    width: calc(100% - calc(var(--pixel) * 0px));
    height: calc(100% - calc(var(--pixel) * 2px));
    opacity: 0.5;
}
.layer-3 {
    width: calc(100% - calc(var(--pixel) * 0px));
    height: calc(100% - calc(var(--pixel) * 3px));
}
.layer-4 {
    width: calc(100% - calc(var(--pixel) * 3px));
    height: calc(100% - calc(var(--pixel) * 0px));
    opacity: 0.5
}
.layer-5 {
    width: calc(100% - calc(var(--pixel) * 1px));
    height: calc(100% - calc(var(--pixel) * 1px));
}
.layer-6 {
    top: calc(var(--pixel) * 0px);
    width: calc(100% - calc(var(--pixel) * 2px));
    height: calc(var(--pixel) * 1px);
    opacity: 0.5;
}
.layer-7 {
    top: calc(var(--pixel) * 0px);
    width: calc(100% - calc(var(--pixel) * 3px));
    height: calc(var(--pixel) * 1px);
}
</style>