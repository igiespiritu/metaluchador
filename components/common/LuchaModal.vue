<template>
    <div class="modal fade show" @click="$emit('click')">
        <div class="card margin-center flex-center">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'LuchaModal'
}
</script>

<style lang="scss" scoped>
.modal {
    background-color: rgba(0,0,0,0.5);
    .card {
        background-color: rgb(120,120,120);
        border-radius: 20px;
        max-width: 1024px;
        max-height: 768px;
    }
}
.modal.show {
    display: block;
}
</style>
