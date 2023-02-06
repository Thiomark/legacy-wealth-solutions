<template>
    <section class="mb-10">
        <MiddleSectionHeader class="py-8 text-green-650 before:bg-green-650 after:bg-green-650" title="LEGACY" sub-title="PARTNERSHIPS"/>
        <div class="sponsors-container">
            <img class="sponsor w-fit" v-for="(sponsor, index) in sponsors" :key="index" :src="sponsor" />
        </div>
    </section>
</template>

<script>
    import zestlife_1 from '@/assets/images/home/partnerships/zestlife_1.png';
    import zestlife_2 from '@/assets/images/home/partnerships/zestlife_2.png';
    import zestlife_3 from '@/assets/images/home/partnerships/zestlife_3.png';
    import zestlife_4 from '@/assets/images/home/partnerships/zestlife_4.png';
    import zestlife_5 from '@/assets/images/home/partnerships/zestlife_5.png';
    import zestlife_6 from '@/assets/images/home/partnerships/zestlife_6.png';
    import zestlife_7 from '@/assets/images/home/partnerships/zestlife_7.png';
    import zestlife_8 from '@/assets/images/home/partnerships/zestlife_8.png';
    import zestlife_9 from '@/assets/images/home/partnerships/zestlife_9.png';
    import zestlife_10 from '@/assets/images/home/partnerships/zestlife_10.png';
    import zestlife_11 from '@/assets/images/home/partnerships/zestlife_11.png';
    import zestlife_12 from '@/assets/images/home/partnerships/zestlife_12.png';
    import zestlife_13 from '@/assets/images/home/partnerships/zestlife_13.png';
    import zestlife_14 from '@/assets/images/home/partnerships/zestlife_14.png';
    import zestlife_15 from '@/assets/images/home/partnerships/zestlife_15.png';
    import zestlife_16 from '@/assets/images/home/partnerships/zestlife_16.png';
    import zestlife_17 from '@/assets/images/home/partnerships/zestlife_17.png';
    import zestlife_18 from '@/assets/images/home/partnerships/zestlife_18.png';
    import zestlife_19 from '@/assets/images/home/partnerships/zestlife_19.png';
    import zestlife_20 from '@/assets/images/home/partnerships/zestlife_20.png';
    import MiddleSectionHeader from './MiddleSectionHeader.vue';

    export default {
    data() {
        return {
            sponsors: [zestlife_1, zestlife_2, zestlife_3, zestlife_4, zestlife_5, zestlife_6, zestlife_7, zestlife_8, zestlife_9, zestlife_10, zestlife_11, zestlife_12, zestlife_13, zestlife_14, zestlife_15, zestlife_16, zestlife_17, zestlife_18, zestlife_19, zestlife_20]
        };
    },
    components: { 
        MiddleSectionHeader 
    }
}
</script>
  
<style>
    .sponsors-container {
        overflow: hidden;
        width: 100%;
        white-space: nowrap;
    }

    .sponsor {
        display: inline-block;
        height: auto;
        max-height: 100%;
        animation: slide-right 20s linear infinite;
    }

    @keyframes slide-right {
        from {
            transform: translateX(0%);
        }
        to {
            transform: translateX(-100%);
        }
    }
</style>