<template>
    <div>
        <ServiceMotivationBannerComponent :quote="quote" :name="quoteBy" v-if="quoteBackgroundImage" :image="quoteBackgroundImage" />
        <div class="flex py-14 max-w-[1700px] __sides mx-auto">
            <div class="___shaped_bg p-6 pr-16 ml-[2em] flex-1 scale-110"
                :style="{ 'background-image': 'url(' + require('@/assets/images/home/patterns-gold.png') + ')' }"
            >
                <slot />
            </div>
            <img loading="lazy" :src="require(`@/assets/images/${serviceImage}`)" class="z-10 h-[32.563em] w-auto m-auto" alt="" srcset="">
        </div>
        <ServiceFaqsComponent />
        <MoreServicesComponent />
        <ServiceFormComponent v-if="formBackgroundImage" :bg-image-style="formBackgroundImageStyle" :background-image="formBackgroundImage" />
    </div>
</template>

<script>
    
    import ServiceMotivationBannerComponent from '@/components/service/ServiceMotivationBannerComponent.vue';
    import ServiceFaqsComponent from './service/ServiceFaqsComponent.vue';
    import MoreServicesComponent from './service/MoreServicesComponent.vue';
    import ServiceFormComponent from './service/ServiceFormComponent.vue';
    
    export default {
        name: 'ServiceComponent',
        components: {
            ServiceMotivationBannerComponent,
            ServiceFaqsComponent,
            MoreServicesComponent,
            ServiceFormComponent
        },
        props: {
            quoteBackgroundImage: {
                type: String,
                required: true
            },
            formBackgroundImage: {
                type: String,
                required: true
            },
            serviceImage: {
                required: true,
                type: String
            },
            formBackgroundImageStyle: String,
            quote: String,
            quoteBy: String
        }
    }
</script>