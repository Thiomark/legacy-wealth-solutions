<template>
    <main>
        <div
            class="__layout"
            :style="{ 'background-image': 'url(' + require('@/assets/images/layout/' + image) + ')' }"
        >
            <div :class="textStyle" class="px-10 w-fit text-center lg:text-left">
                <h1 class="text-[2.875em] lg:text-[4.875em] text-white font-playfair">{{text}}</h1>
                <h1 v-if="textSplit" class="text-[2.875em] lg:text-[4.875em] text-white font-playfair">{{textSplit}}</h1>
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
        min-height: calc(100vh - 8em);
        background-repeat: no-repeat;
        background-size: cover;
        align-items: center;
        justify-content: center;
        display: grid;
        position: relative;
        grid-template-columns: 1fr;
    }
    @media screen and (min-width: 1024px) { 
        .carousel {
            height: calc(100vh - 11.625em);
        }

        .__layout { 
            grid-template-columns: 1fr 1fr;
        }

    }
</style>