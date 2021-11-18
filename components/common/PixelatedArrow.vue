<template>
    <div class="pixel-arrow flex-center cursor-pointer" :class="`to-${direction}`" :style="cssVars" @click="$emit('click')">
        <div class="layer layer-1"></div>
        <div class="layer layer-2"></div>
        <div class="layer layer-3"></div>
        <div class="layer layer-4"></div>
        <div class="layer layer-5"></div>
    </div>
</template>

<script>
export default {
    name: 'PixelatedArrow',
    props: {
        pixel: {
            type: Number,
            default: 5
        },
        pixelColor: {
            type: String,
            default: 'b72cff'
        },
        direction: {
            type: String,
            default: 'left'
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
.pixel-arrow {
    position: relative;
    width: calc(var(--pixel) * 4px);
    height: calc(var(--pixel) * 5px);
}
.layer {
    position: absolute;
    margin: auto;
    background-color: var(--pixel-color);
}
.layer-1 {
    width: calc(var(--pixel) * 2px);
    height: calc(var(--pixel) * 1px);
}
.layer-2 {
    width: calc(var(--pixel) * 2px);
    height: calc(var(--pixel) * 1px);
}
.layer-3 {
    width: calc(var(--pixel) * 2px);
    height: calc(var(--pixel) * 1px);
}
.layer-4 {
    width: calc(var(--pixel) * 2px);
    height: calc(var(--pixel) * 1px);
}
.layer-5 {
    width: calc(var(--pixel) * 2px);
    height: calc(var(--pixel) * 1px);
}
.to-left {
    .layer-1 { left: 0; }
    .layer-2 { top: calc(100% - calc(var(--pixel) * 2px)); }
    .layer-3 { bottom: calc(100% - calc(var(--pixel) * 2px)); }
    .layer-4 { top: calc(100% - calc(var(--pixel) * 1px)); right: 0; }
    .layer-5 { bottom: calc(100% - calc(var(--pixel) * 1px)); right: 0; }
}
.to-right {
    .layer-1 { right: 0; }
    .layer-2 { top: calc(100% - calc(var(--pixel) * 2px)); }
    .layer-3 { bottom: calc(100% - calc(var(--pixel) * 2px)); }
    .layer-4 { top: calc(100% - calc(var(--pixel) * 1px)); left: 0; }
    .layer-5 { bottom: calc(100% - calc(var(--pixel) * 1px)); left: 0; }
}
</style>