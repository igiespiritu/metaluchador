<template>
    <div class="modal">
        {{ lucha }}
    </div>
</template>

<script>
export default {
    name: 'LuchaModal',
    props: {
        lucha: {
            type: Object,
            default: () => {}
        }
    }    
}
</script>

<style lang="scss" scoped>

</style>
