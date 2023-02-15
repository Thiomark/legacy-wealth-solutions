<template>
    <main>
        <CarouselComponent />
        <section class="grid w-full max-w-[1500px] mx-auto grid-rows-2 lg:py-10 p-4 gap-4 lg:grid-rows-1 lg:gap-0 lg:grid-cols-[1fr_auto]">
            <div class="md:p-8 p-6 text-white min-h-[24em] text-left bg-green-650">
                <div>
                    <SideSectionHeader class="text-white after:bg-white pb-4 gap-20 lg:-mr-8" title="Legacy" sub-title="Who We Are?"/>
                    <p class="lg:text-[1.1rem] xl:text-[1.875rem]">{{limitedParagraph}}</p>
                </div>
                <button aria-label="Read more" @click.prevent="toggleReadMore" class="py-2">Read More >></button>
            </div>
            <img class="w-full lg:aspect-[6/4] mx-auto max-w-[40em]" src="@/assets/images/home/Rectangle49@2x.webp" loading="lazy" alt="image of a man and and a women" srcset="">
            <!-- <div class=" hover-scale bg-center bg-cover bg-no-repeat transition duration-500 ease-in-out cursor-pointer"
                @mouseenter="hover = true" @mouseleave="hover = false" :style="{'background-image': 'url(' + require('@/assets/images/home/Rectangle49@2x.webp') + ')'}">
            </div> -->
        </section>
        <section class="py-6 pb-20 __shaped_bg" 
            :style="{ 'background-image': 'url(' + require('@/assets/images/home/patterns.png') + ')' }"
            >
            <div class="">
                <MiddleSectionHeader class="py-[1.125em] text-white before:bg-white after:bg-white" title="Our" sub-title="Services"/> 
                <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mx-auto w-fit mt-10">
                    <div v-for="(item, index) in ourServices" :key="index" :style="{ 'background-image': `url(${item.image})` }" class="aspect-square max-w-[22.1875em] flex-wrap flex items-center justify-center transition ease-in-out duration-300 hover: bg-cover cursor-pointer relative bg-center hover-scale">
                        <h1 style="text-shadow: 3px 3px 3px #000000CC;" class="text-[1.313rem] basis-0 text-center text-white flex-shrink-0 font-playfair">{{ item.title }}</h1>
                        <button aria-label="Read more" class="text-white h-[2.625em] absolute bottom-4 left-0 right-0 mx-auto w-full max-w-[10.438em] text-sm bg-gradient-to-r from-gold-250 to-gold-450">Read More</button>
                    </div>
                </div>
            </div>
        </section>
        <section class="grid lg:grid-cols-[auto_1fr] items-center gap-4 w-fit mx-auto py-7 p-4">
            <img class="mx-auto w-full max-w-[36.25em] h-auto" aria-label="image of a man dressing formal" src="@/assets/images/home/rec.webp" alt="" srcset="">
            <div class="text-green-650 max-w-[36.25em] lg:max-w-[45.75em] text-left">
                <SideSectionHeader class="text-green-650 after:bg-green-650" title="WHAT MAKES US" sub-title="DIFFERENT?"/>
                <div class="space-y-4 text-[.9rem] lg:text-[1.188rem] font-extralight">
                    <p>What makes us different is that we use a unique combination of simplistic planning, investment solutions and integrated financial strategies to set Legacy Employee Benefits apart from our competition.</p>
                    <p>Benefits to our clients are clear as we provide long-term, innovative wealth management. Our goal is to help our clients achieve their personal and business financial goals.</p>
                    <p>We have truly individualized personal services from generation to generation.</p>
                </div>
            </div>
        </section>
        <section v-lazy class="min-h-[33.438em] pb-[4.5em] bg-cover" loading="lazy" :style="{ 'background-image': `url(${testimonial.testimonialsBG})` }">
            <MiddleSectionHeader class="py-[3.125em] text-white before:bg-white after:bg-white" title="CLIENT" sub-title="TESTIMONIALS"/>
            <div class="grid md:grid-cols-2 __sides grid-rows-3 md:grid-rows-2 lg:grid-rows-1 gap-[3.125em] lg:grid-cols-3 mx-auto max-w-[1200px]">
                <div class="text-white relative p-[1.563em] group flex flex-col items-center text-center" v-for="(item, index) in testimonial.testimonials" :key="index">
                    <h1 class="text-[1.563rem] mb-6 z-[2] font-playfair font-semibold">{{ item.title }}</h1>
                    <hr class="w-20 group-hover:w-8 transition duration-700 z-[2] pb-4">
                    <p class="text-[1.188rem] z-[2] font-thin">{{ item.information }}</p> 
                    <div class="absolute top-0 bottom-0 w-full bg-green-650 duration-300 ease-out transition group-hover:rotate-180 "></div>
                </div>
            </div>
        </section>
        <PartnershipsSection />
        <GetInTouchSection />
    </main>
</template>

<script>

    import service1 from '@/assets/images/home/services/services_1.webp'
    import service2 from '@/assets/images/home/services/services_2.webp'
    import service3 from '@/assets/images/home/services/services_3.webp'
    import service4 from '@/assets/images/home/services/services_4.webp'
    import service5 from '@/assets/images/home/services/services_5.webp'
    import service6 from '@/assets/images/home/services/services_6.webp'
    import testimonialsBG from '@/assets/images/home/home-page-testimonials-treated.webp';

    import MiddleSectionHeader from '@/components/MiddleSectionHeader.vue';
    import SideSectionHeader from '@/components/SideSectionHeader.vue';
    import PartnershipsSection from '@/components/PartnershipsSection.vue'
    import GetInTouchSection from '@/components/GetInTouchSection.vue'
    import CarouselComponent from '@/components/CarouselComponent.vue'
    
    export default {
        name: 'HomeView',
        components: {
            MiddleSectionHeader,
            SideSectionHeader,
            PartnershipsSection,
            GetInTouchSection,
            CarouselComponent
        },
        data() {
            return {
                isLimited: true,
                whoWeAre: 'Legacy Employee Benefits is a leading Wealth Management and Independent Employee Benefits Consulting practice, based in Johannesburg. With a combined experience of over 100 years we have the knowledge and resources to plan for all our clients’ potential financial needs. Our independence means that our focus is clearly on our clients’ best interests. We are not affiliated to any product providers and we maintain our objectivity at all times to provide our clients with our best possible advice to help them achieve their personal and business goals. We believe that customer loyalty is a direct result of our dedication to helping our clients manage risk and investments, improve cash flow, and reduce or defer income. Our personal commitment to our clients is always uncompromising.',
                ourServices: [
                    {
                        title: 'HOLISTIC FINANCIAL PLANNING',
                        image: service1
                    },
                    {
                        title: 'TAILOR-MADE INVESTING',
                        image: service2
                    },
                    {
                        title: 'EMPLOYEE BENEFITS',
                        image: service3
                    },
                    {
                        title: 'MEDICAL COVER',
                        image: service4
                    },
                    {
                        title: 'BUSINESS ASSURANCE',
                        image: service5
                    },
                    {
                        title: 'MEET THE TEAM',
                        image: service6
                    }
                ],
                testimonial: {
                    testimonialsBG,
                    testimonials: [
                        {
                            title: 'Dotcom Software Solutions',
                            information: 'We have received piece of mind from the Legacy team from day 1! They understood our business objectives and curtailed their solutions to satisfy our needs! I would certainly recommend their professional services!'
                        },
                        {
                            title: 'Anonymous',
                            information: 'Thanks to you and your team of unseen heroes for assisting us so timeously and professionally. We would have been a lot worse off without your excellent guidance.'
                        },
                        {
                            title: 'Anonymous',
                            information: 'Great friendly service. Very professional I would recommend to anyone looking for financial advise.'
                        }
                    ]
                }
            }
        },
        computed: {
            limitedParagraph() {
                return this.isLimited ? this.whoWeAre.substring(0, 133) : this.whoWeAre
            }
        },
        methods: {
            toggleReadMore() {
                this.isLimited = !this.isLimited
            }
        }
    }
</script>

<style lang="scss">
    @media screen and (min-width: 1024px) { 
        .hover-scale:hover {
            background-size: 130%;
        }
    }
</style>
