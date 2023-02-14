<template>
    <div
        :style="{ 'background-image': 'url(' + require('@/assets/images/' + image) + ')' }" 
        class="h-[26.813em] relative bg-center space-y-10 bg-cover bg-no-repeat flex items-center justify-center flex-col font-playfair text-white">
        <img loading="lazy" src="@/assets/images/quote2.svg" class="text-gold-250  h-[4.5em] w-[4.438em] absolute z-[2] left-12" alt="" srcset="">
        <img loading="lazy" src="@/assets/images/quote.svg" class="text-gold-250  h-[4.5em] w-[4.438em] absolute z-[2] right-12" alt="" srcset="">
        <h1 class="text-[2.875rem] mx-auto text-center max-w-[80vw]">{{ quote }}</h1>
        <h2 class="text-[2rem] font-extralight">{{ name }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'MotivationBannerComponent',
        props: {
            quote: {
                type: String,
                default: 'Insert quote here lorem lpsum dolor'
            },
            name: {
                type: String,
                default: '- John Doe'
            },
            image: String
        }
    }
</script>