<template>
    <div
        :style="{ 'background-image': 'url(' + require('@/assets/images/' + image) + ')' }" 
        class="h-[26.813em] relative bg-center space-y-10 bg-cover bg-no-repeat flex items-center justify-center flex-col font-playfair text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi text-gold-250  h-20 w-20 absolute z-[2] left-2 bi-quote" viewBox="0 0 16 16">
            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi text-gold-250  h-20 w-20 absolute z-[2] right-2 rotate-180 bi-quote" viewBox="0 0 16 16">
            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
        </svg>
        <h1 class="text-[2.875rem]">{{ quote }}</h1>
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