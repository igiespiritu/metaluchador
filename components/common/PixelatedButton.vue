<template>
    <div :style="cssVars" class="pixel-border">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'PixelatedButton',
    props: {
        pixel: {
            type: String,
            default: '0.3em'
        },
        pixelColor: {
            type: String,
            default: '#b72cff'
        },
        pixelColor2: {
            type: String,
            default: '#b72cff'
        }
    },
    computed: {
        cssVars() {
            return {
                '--pixel': this.pixel,
                '--pixel-color': this.pixelColor,
                '--pixel-color-2': this.pixelColor2
            }
        }
    },
    mounted () {
        console.log(this.$props)
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/sass/pixel';
</style>