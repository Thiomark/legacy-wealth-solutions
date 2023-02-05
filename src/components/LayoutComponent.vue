<template>
    <main class="flex flex-col">
        <slot />
    </main>
</template>

<script>
    export default {
        name: 'LayoutComponent'
    }
</script>

<style lang="scss" scoped>
    mainn {
        min-height: calc(100vh - 104px);
    }
</style>