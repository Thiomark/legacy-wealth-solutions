<template>
    <div class=" overflow-x-hidden">
        <h1 class="font-playfair text-[#1A1A1A] text-[1.9rem] lg:text-[2.875rem] text-center pt-4 lg:pt-8 pb-4 lg:pb-16 ">More Services</h1>
        <div class="relative px-4 lg:px-8 max-w-[1600px] mx-auto">
            <div class="absolute text-green-650 text-[1.938em] flex items-center justify-between h-full w-full">
                <button aria-label="go to the previous item">&#x3c;</button>
                <button aria-label="go to the next item">&#x3e;</button>
            </div>
            <div class="w-fit gap-20 mx-auto __sides mb-20 grid grid-cols-[auto_auto_auto]">
                <CardComponent :class="index % 2 !== 0 && 'scale-[115%]'" v-for="(cardItem, index) in moreServices" :key="cardItem.title" :title="cardItem.title" :image="cardItem.image" />
            </div>
        </div>
    </div>
</template>

<script>
    import CardComponent from '@/components/CardComponent.vue';
    export default {
        name: 'MoreServicesComponent',
        components: {
            CardComponent
        },
        data: () => {
            return {
                moreServices: [
                    {
                        title: 'HOLISTIC FINANCIAL PLANNING',
                        image: 'home/services/services_1.webp.webp'
                    },
                    {
                        title: 'TAILOR-MADE INVESTING',
                        image: 'home/services/services_2.webp'
                    },
                    {
                        title: 'EMPLOYEE BENEFITS',
                        image: 'home/services/services_3.webp'
                    }
                ]
            }
        }
    }
</script>