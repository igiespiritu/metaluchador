<template>
    <div class="position-relative flex-center w-100 h-100">
        <div class="layer layer-1"></div>
        <div class="layer layer-2"></div>
        <div class="layer layer-3"></div>
        <div class="layer layer-4"></div>
        <div class="layer layer-5"></div>
        <div class="slot-content position-relative">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'PixelatedBg'
}
</script>

<style lang="scss" scoped>
.layer {
    position: absolute;
    margin: auto;
    background-color: $meta-primary;
}
.layer-1 {
    width: calc(100% - 40px);
    height: calc(100% - 20px);
    opacity: 0.5;
}
.layer-2 {
    width: calc(100% - 20px);
    height: calc(100% - 40px);
    opacity: 0.5;
}
.layer-3 {
    width: calc(100% - 20px);
    height: calc(100% - 50px);
}
.layer-4 {
    width: calc(100% - 50px);
    height: calc(100% - 20px);
}
.layer-5 {
    width: calc(100% - 30px);
    height: calc(100% - 30px);
}
.slot-content {
    padding: 10px;
}
</style>