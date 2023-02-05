<template>
    <main>
        <div
            class="__layout"
            :style="{ 'background-image': 'url(' + require('@/assets/images/layout/' + image) + ')' }"
        >
            <h1 :class="textStyle" class="text-[4.875em] text-white font-playfair text-center">{{text}}</h1>
        </div>
        <slot />
    </main>
</template>

<script>
    export default {
        name: 'LayoutComponent',
        props: {
            text: String,
            image: String,
            textStyle: String
        }
    }
</script>

<style lang="scss" scoped>
    .__layout {
        width: 100%;
        min-height: calc(100vh - 11.625em);
        background-repeat: no-repeat;
        background-size: cover;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-content: center;
        position: relative;
    }
</style>