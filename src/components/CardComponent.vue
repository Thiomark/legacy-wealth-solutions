<template>
    <div
        :style="{ 'background-image': 'url(' + require('@/assets/images/' + image) + ')' }"
        class="w-[22.1875em] flex-wrap flex items-center justify-center transition ease-in-out duration-300 hover: bg-cover cursor-pointer relative bg-center h-[22.1875em] hover-scale">
        <h1 style="text-shadow: 3px 3px 3px #000000CC;" class="text-[1.313rem] basis-0 text-center text-white flex-shrink-0 font-playfair">{{ title }}</h1>
        <button aria-label="Read more" class="text-white h-[2.625em] absolute bottom-4 left-0 right-0 mx-auto w-full max-w-[10.438em] text-sm bg-gradient-to-r from-gold-250 to-gold-450">Read More</button>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: {
            title: String,
            image: String
        }
    }
</script>