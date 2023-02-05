<template>
    <h1 v-if="middle" class="uppercase text-[1.25rem] grid grid-cols-[auto_1fr] items-center gap-4"><span>{{title}} <span class="block -mt-3 text-[2.188rem]">{{subTitle}}</span></span> </h1>
</template>

<script>
    export default {
        name: 'SideSectionHeader',
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
    h1::after{
        content: "";
        height: 1px;
        display: block;
    }
</style>