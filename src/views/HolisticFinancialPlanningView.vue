<template>
    <LayoutComponent text-style="col-start-1" image="services_5-holistic-financial-planning.webp" text="HOLISTIC FINANCIAL" textSplit="PLANNING">
        <ServiceComponent 
            quote="Don’t be Afraid, Be Focused, Be Determined, Be Hopeful, Be Empowered”"
            quoteBy="- Michelle Obama"
            quote-background-image="planning/parallex_1.png"
            form-background-image="planning/services-page-form2.png"
            service-image="planning/holistic-financial-planning.png"
        >
            <p class="text-[#1A1A1A] text-[1.4rem]">Legacy offers Holistic Finacial Planning that is tailor made to your specific needs, risk insurance, investment, retirement planning, tax consulting, wills and trusts and many other associated services.</p>
            <button aria-label="Read more" @click="toggleReadMore = !toggleReadMore" class="text-white py-2">{{!toggleReadMore ? 'Read More  &#x3e;&#x3e;' : 'Show Less  &#x3c;&#x3c;'}}</button>
            <p v-if="toggleReadMore" class="text-[#1A1A1A] text-[1.4rem] pb-4">We offer a boutique service that buildson wealth accumulation and preservation.</p>
            <div v-if="toggleReadMore" class="grid grid-cols-2">
                <div>
                    <ul>
                        <li class="text-[#1A1A1A] flex items-center text-[1.4rem]" v-for="item of succesKeys" :key="item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi h-5 w-5 mr-4 bg-white rounded-full bi-check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>    
                            {{ item }}
                        </li>
                    </ul>
                    <ul class="ml-9">
                        <li class="text-[#1A1A1A] flex items-center text-[1.4rem]">
                            <span class="w-5 mr-1">-</span> Covid-19, Heart Attack 
                        </li>
                        <li class="text-[#1A1A1A] flex items-center text-[1.4rem]">
                            <span class="w-5 mr-1">-</span> (Bypass), Strokes etc.
                        </li>
                    </ul>
                </div>
                <ul>
                    <li class="text-[#1A1A1A] flex items-center text-[1.4rem]" v-for="item of succesKeys2" :key="item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi h-5 w-5 mr-4 bg-white rounded-full bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>    
                        {{ item }}
                    </li>
                </ul>
            </div>
        </ServiceComponent>
    </LayoutComponent>
</template>

<script>
    import LayoutComponent from '@/components/LayoutComponent.vue';
    import ServiceComponent from '@/components/ServiceComponent.vue';
    
    export default {
        name: "HolisticFinancialPlanningView",
        components: {
            LayoutComponent,
            ServiceComponent
        },
        data() {
            return {
                toggleReadMore: false,
                succesKeys: [
                    'Life/Risk Cover/Funeral Cover',
                    'Education Protector',
                    'Dreaded Disease - Cancer' 
                ],
                succesKeys2: [
                    'Disability - Lumpsum & Income Protection',
                    'My Cover - Estate Protection Plan',
                    'Sharish Estate Planning',
                    'Estate Planning - Wills & Trusts',
                    'Tax Consulting', 
                    'Short Term Insurance'
                ]
            }
        }
    }
</script>