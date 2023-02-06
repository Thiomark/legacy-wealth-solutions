<template>
    <main>
        <CarouselComponent />
        <section class="max-w-[1500px] __sides py-10 mx-auto w-full grid-rows-2 lg:grid-rows-1 grid lg:grid-cols-[1fr_auto]">
            <div class="p-8 text-white text-left bg-green-650">
                <div>
                    <SideSectionHeader class="text-white after:bg-white pb-4 gap-20 -mr-8" title="Legacy" sub-title="Who We Are?"/>
                    <p class="text=[1.875rem]">{{limitedParagraph}}</p>
                </div>
                <button @click.prevent="toggleReadMore" class="py-2">Read More >></button>
            </div>
            <img src="@/assets/images/home/Rectangle 49@2x.png" class="h-[27.25em] mt-10 lg:mt-0 mx-auto" alt="" srcset="">
        </section>
        <section class="py-6 pb-20 __shaped_bg" 
            :style="{ 'background-image': 'url(' + require('@/assets/images/home/patterns.png') + ')' }"
            >
            <div class="">
                <MiddleSectionHeader class="py-[1.125em] text-white before:bg-white after:bg-white" title="Our" sub-title="Services"/> 
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto w-fit mt-10">
                    <div v-for="(item, index) in ourServices" :key="index" :style="{ 'background-image': `url(${item.image})` }" class="w-[22.1875em] transition ease-in-out duration-300 hover: bg-cover cursor-pointer relative bg-center h-[22.1875em] hover-scale">
                        <button class="text-white h-[2.625em] absolute bottom-4 left-0 right-0 mx-auto w-full max-w-[10.438em] text-sm bg-gradient-to-r from-gold-250 to-gold-450">Read More</button>
                    </div>
                </div>
            </div>
        </section>
        <section class="lg:flex w-fit mx-auto py-7">
            <img src="@/assets/images/home/Rectangle 25.png" class="w-[36.25em] mx-auto h-[21.375em]" alt="" srcset="">
            <div class="text-green-650 max-w-[45.75em] p-6 text-left">
                <SideSectionHeader class="text-green-650 after:bg-green-650" title="WHAT MAKES US" sub-title="DIFFERENT?"/>
                <div class="space-y-4 text-[1.188rem] font-extralight">
                    <p>What makes us different is that we use a unique combination of simplistic planning, investment solutions and integrated financial strategies to set Legacy Employee Benefits apart from our competition.</p>
                    <p>Benefits to our clients are clear as we provide long-term, innovative wealth management. Our goal is to help our clients achieve their personal and business financial goals.</p>
                    <p>We have truly individualized personal services from generation to generation.</p>
                </div>
            </div>
        </section>
        <section class="min-h-[33.438em] pb-[4.5em] bg-cover" :style="{ 'background-image': `url(${testimonial.testimonialsBG})` }">
            <MiddleSectionHeader class="py-[3.125em] text-white before:bg-white after:bg-white" title="CLIENT" sub-title="TESTIMONIALS"/>
            <div class="grid md:grid-cols-2 __sides grid-rows-3 md:grid-rows-2 lg:grid-rows-1 gap-[3.125em] lg:grid-cols-3 mx-auto max-w-[1200px]">
                <div class="bg-green-650 text-white p-[1.563em] space-y-3 flex flex-col items-center text-center" v-for="(item, index) in testimonial.testimonials" :key="index">
                    <h1 class="text-[1.563rem] font-playfair font-semibold">{{ item.title }}</h1>
                    <hr class="w-20">
                    <p class="text-[1.188rem] font-thin">{{ item.information }}</p>
                </div>
            </div>
        </section>
        <PartnershipsSection />
        <GetInTouchSection />
    </main>
</template>

<script>

    import service1 from '@/assets/images/home/services/services_1.png'
    import service2 from '@/assets/images/home/services/services_2.png'
    import service3 from '@/assets/images/home/services/services_3.png'
    import service4 from '@/assets/images/home/services/services_4.png'
    import service5 from '@/assets/images/home/services/services_5.png'
    import service6 from '@/assets/images/home/services/services_6.png'

    import testimonialsBG from '@/assets/images/home/home-page-testimonials-treated.png';


    import MiddleSectionHeader from '@/components/MiddleSectionHeader.vue';
    import SideSectionHeader from '@/components/SideSectionHeader.vue';
    import PartnershipsSection from '@/components/home/PartnershipsSection.vue'
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
    .hover-scale:hover {
        background-size: 120%;
    }
</style>
