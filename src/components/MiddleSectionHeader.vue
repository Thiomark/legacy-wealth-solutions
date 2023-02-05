<template>
    <h1 v-if="middle" class="grid-cols-3 w-fit mx-auto uppercase text-[1.25rem] grid items-center gap-4"><span class="text-center">{{title}} <span class="block -mt-3 text-[2.188rem]">{{subTitle}}</span></span> </h1>
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
    h1::before, h1::after{
        content: "";
        height: 2px;
        display: block;
    }
</style>