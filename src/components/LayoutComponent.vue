<template>
    <main>
        <div
            class="__layout"
            :style="{ 'background-image': 'url(' + require('@/assets/images/layout/' + image) + ')' }"
        >
            <div :class="textStyle" class="px-10">
                <h1 class="text-[4.875em] text-white font-playfair">{{text}}</h1>
                <h1 v-if="textSplit" class="text-[4.875em] text-white font-playfair">{{textSplit}}</h1>
            </div>
        </div>
        <slot />
    </main>
</template>

<script>
    export default {
        name: 'LayoutComponent',
        props: {
            text: String,
            textSplit: String,
            image: String,
            textStyle: String,
            textStyleOverride: String
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