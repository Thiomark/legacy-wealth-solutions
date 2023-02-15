<template>
    <LayoutComponent text-style="col-start-1" image="banner_our-focus.webp" text="OUR FOCUS">
        <div class="max-w-[1543px] px-4 lg:px-10 w-full relative grid lg:grid-cols-[auto_1fr] mx-auto mt-[2em] lg:mt-[10.704em]">
            <img alt="image of a lady" loading="lazy" class="mx-auto" :src="require(`@/assets/images/ourfocus/Rectangle.png`)" />
            <div class="flex space-y-3 lg:p-8 flex-col justify-center max-w-md mx-auto lg:max-w-full lg:mx-0">
                <h1 class="text-[#060606] text-[1.8rem] text-center lg:text-left mt-4 lg:mt-0 lg:text-[2.899rem] font-playfair">Heading Goes Here</h1>
                <p class="text-[#131313] text-[1.3rem] text-center lg:text-left lg:text-[1.739rem] font-extralight">“Sleeping less than 8 hours" costs a single medical aid company R22 billion annually? One night of less than 6 hours sleep is equivalent…</p>
            </div>
            <div class="border hidden lg:block border-green-650 absolute w-full h-full mt-10 max-w-[85%] -z-10 right-0 mr-8 2xl-right-4" />
        </div>
        <h1 class="font-playfair text-[#1A1A1A] text-[1.8rem] text-center lg:text-[2.875em] py-4 lg:py-8 lg:mt-20">Our Gallery</h1>
        <div class="max-w-[1543px] w-fit px-4 lg:px-8 mx-auto pb-14 gap-4 grid md:grid-cols-2 lg:grid-cols-4">
            <img loading="lazy" class="mx-auto md:mx-auto" v-for="(item, index) in 4" :alt="item" :key="index" :src="require(`@/assets/images/ourfocus/AdobeStock_538322099_${(index + 1)}.png`)" />
        </div>
    </LayoutComponent>
</template>

<script>
    import LayoutComponent from '@/components/LayoutComponent.vue';
    export default {
        name: "OurFocusView",
        components: { 
            LayoutComponent 
        }
    }
</script>