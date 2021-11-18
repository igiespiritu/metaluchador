<template>
    <div class="position-relative flex-center m-auto w-100 h-100" :style="cssVars">
        <div class="layer layer-1"></div>
        <div class="layer layer-2"></div>
        <div class="layer layer-3"></div>
        <div class="layer layer-4"></div>
        <div class="layer layer-5"></div>
        <div class="layer layer-6"></div>
        <div class="layer layer-7"></div>
        <div class="layer layer-8"></div>
        <div class="layer layer-9"></div>
        <div class="layer layer-10"></div>
        <div class="layer layer-11"></div>
        <div class="layer layer-12"></div>
        <div class="layer layer-13"></div>
        <div class="layer layer-14"></div>
        <div class="layer layer-15"></div>
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
    bottom: 0;
    background-color: var(--pixel-color);
}
.layer-1 {
    width: calc(100% - calc(var(--pixel) * 48px));
    height: calc(100% - calc(var(--pixel) * 9px));
    opacity: 0.5;
    bottom: calc(100% - calc(var(--pixel) * 48px));
}
.layer-2 {
    width: calc(100% - calc(var(--pixel) * 30px));
    height: calc(100% - calc(var(--pixel) * 17px));
    opacity: 0.5;
    bottom: calc(100% - calc(var(--pixel) * 48px));
}
.layer-3 {
    width: calc(100% - calc(var(--pixel) * 32px));
    height: calc(100% - calc(var(--pixel) * 15px));
    opacity: 0.5;
    bottom: calc(100% - calc(var(--pixel) * 48px));
}
.layer-4 {
    width: calc(100% - calc(var(--pixel) * 38px));
    height: calc(100% - calc(var(--pixel) * 11px));
    opacity: 0.5;
    bottom: calc(100% - calc(var(--pixel) * 48px));
}
.layer-5 {
    width: calc(100% - calc(var(--pixel) * 42px));
    height: calc(100% - calc(var(--pixel) * 10px));
    opacity: 0.5;
    bottom: calc(100% - calc(var(--pixel) * 48px));
}
.layer-6 {
    width: calc(100% - calc(var(--pixel) * 28px));
    height: calc(100% - calc(var(--pixel) * 18px));
    opacity: 0.5;
    bottom: calc(100% - calc(var(--pixel) * 49px));
}
.layer-7 {
    width: calc(100% - calc(var(--pixel) * 28px));
    height: calc(100% - calc(var(--pixel) * 18px));
    opacity: 0.5;
    bottom: calc(100% - calc(var(--pixel) * 49px));
}
.layer-8 {
    width: calc(100% - calc(var(--pixel) * 28px));
    height: calc(100% - calc(var(--pixel) * 18px));
    opacity: 0.5;
    bottom: calc(100% - calc(var(--pixel) * 48px));
}
.layer-9 {
    width: calc(100% - calc(var(--pixel) * 30px));
    height: calc(100% - calc(var(--pixel) * 16px));
    opacity: 0.5;
    bottom: calc(100% - calc(var(--pixel) * 48px));
}
.layer-10 {
    width: calc(100% - calc(var(--pixel) * 32px));
    height: calc(100% - calc(var(--pixel) * 14px));
    opacity: 0.5;
    bottom: calc(100% - calc(var(--pixel) * 48px));
}
.layer-11 {
    width: calc(100% - calc(var(--pixel) * 34px));
    height: calc(100% - calc(var(--pixel) * 13px));
    opacity: 0.5;
    bottom: calc(100% - calc(var(--pixel) * 48px));
}
.layer-12 {
    width: calc(100% - calc(var(--pixel) * 36px));
    height: calc(100% - calc(var(--pixel) * 12px));
    opacity: 0.5;
    bottom: calc(100% - calc(var(--pixel) * 48px));
}
.layer-13 {
    width: calc(100% - calc(var(--pixel) * 40px));
    height: calc(100% - calc(var(--pixel) * 11px));
    opacity: 0.5;
    bottom: calc(100% - calc(var(--pixel) * 48px));
}
.layer-14 {
    width: calc(100% - calc(var(--pixel) * 46px));
    height: calc(100% - calc(var(--pixel) * 9px));
    opacity: 0.5;
    bottom: calc(100% - calc(var(--pixel) * 48px));
}
.layer-15 {
    width: calc(100% - calc(var(--pixel) * 44px));
    height: calc(100% - calc(var(--pixel) * 10px));
    bottom: calc(100% - calc(var(--pixel) * 48px));
}
</style>