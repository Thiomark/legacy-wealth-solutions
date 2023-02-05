<template>
    <LayoutComponent text-style="col-start-1" image="faq_1.png" text="LATEST NEWS">
        <div class="w-fit mx-auto gap-4 grid md:grid-cols-2 lg:grid-cols-3 pb-[13.499em] pt-[6.563em]">
            <div class="border w-full flex flex-col max-w-[34.438em]" v-for="(card, index) in cards" :key="index">
                <div class="h-[22.625em] w-full" :style="{ 'background-image': 'url(' + require('@/assets/images/news/news' + (index + 1) + '.png') + ')' }" />
                <div class="p-4 flex-1 flex flex-col">
                    <h1 class="text-green-650 text-[1.739rem] font-playfair">{{ card.title }}</h1>
                    <h2 class="text-[0.875rem] text-[#1A1A1A] py-2">{{ card.date }}</h2>
                    <p class="text-[1.313rem] flex-1">{{ card.message }}</p>
                    <button class="btn-gold max-w-[13.813em] mx-auto h-[3.5em] mt-10">Read More</button>
                </div>
            </div>
        </div>
    </LayoutComponent>
</template>

<script>
    import LayoutComponent from '@/components/LayoutComponent.vue';
    export default {
        name: "LatestNewsView",
        components: { 
            LayoutComponent 
        },
        data: () => {
            return {
                cards: [
                    {
                        title: 'Did You Know',
                        date: '12 October 2022',
                        message: '“Sleeping less than 8 hours" costs a single medical aid company R22 billion annually? One night of less than 6 hours sleep is equivalent…'
                    },
                    {
                        title: 'Easy 6 Financial Planning Tips!',
                        date: '10 September 2022',
                        message: 'Financial Goals For Business Or Individually: Determine your current financial situation. Develop financial goals.…'
                    },
                    {
                        title: 'Tips on how to choose the right medical aid or hospital plan for you and your family!',
                        date: '10 August 2022',
                        message: 'Look at your healthcare needs. Look at your past medical…'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    
</style>