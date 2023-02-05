<template>
    <div>
        <div class="bg-green-650 h-32">
            <HeaderComponent />
        </div>
        <router-view/>
        <FooterComponent />
    </div>
</template>

<script>
    import HeaderComponent from '@/components/HeaderComponent.vue';
    import FooterComponent from './components/FooterComponent.vue';
    export default {
        components: {
            HeaderComponent,
            FooterComponent
        }
    }
</script>

<style lang="scss">

</style>
