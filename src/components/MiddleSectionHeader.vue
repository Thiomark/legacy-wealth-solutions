<template>
    <h1 v-if="middle" class="grid-cols-3 font-playfair text-center w-fit mx-auto uppercase text-[1rem] md:text-[1.25rem] md:grid items-center gap-4"><span class="text-center">{{title}} <span class="block md:-mt-3 text-[1.8rem] md:text-[2.188rem]">{{subTitle}}</span></span> </h1>
</template>

<script>
    export default {
        name: 'MiddleSectionHeader',
        props: {
            middle: {
                type: Boolean,
                default: true
            },
            title: {
                type: String,
                required: true
            },
            subTitle: String
        }
    }
</script>

<style lang="scss" scoped>
    @media screen and (min-width: 768px) { 
        h1::before, h1::after{
            content: "";
            height: 1px;
            display: block;
        }
    }
</style>