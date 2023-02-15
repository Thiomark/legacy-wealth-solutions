<template>
    <LayoutComponent text-style="col-start-1 text-[.6rem]" image="services_4_specialized-investing.png" textSplit="FOR LOCAL AND INTERNATIONAL" text="CREATING WEALTH SOLUTIONS">
        <ServiceComponent 
            quote="Don’t SAVE what is left after spending, spend what is left after SAVING"
            quoteBy="- Richard Branson"
            quote-background-image="investing/parallex_1.png"
            form-background-image="investing/services-page-form2.png"
            :form-background-image-style="{'background-position': 'center -10em'}"
            service-image="investing/Component.png"
        >
            <p class="text-[#1A1A1A] text-[1.4rem]">We offer both local and off-shore market opportunities, Legacy prides itself in wealth creation, providing a market-leading investment portfolio designed in delivering a personalized advantage to clients committed to long-term financial reliability.</p>
            <button aria-label="read more" @click="toggleReadMore = !toggleReadMore" class="text-white py-2">{{!toggleReadMore ? 'Read More  &#x3e;&#x3e;' : 'Show Less  &#x3c;&#x3c;'}}</button>
            <p v-if="toggleReadMore" class="text-[#1A1A1A] text-[1.4rem] pb-4">Tailored solutions managing individual portfolios, our clients enjoy the benefits of personalized planning and expert advice from our team. Clients are guided by our skill and knowledge to provide the best outcomes.</p>
            <div v-if="!toggleReadMore" class="grid grid-cols-2">
                <div>
                    <ul>
                        <li class="text-[#1A1A1A] flex items-center text-[1.4rem]" v-for="item of succesKeys" :key="item">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi h-5 w-5 mr-4 bg-white rounded-full bi-check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>    
                            {{ item }}
                        </li>
                    </ul>
                    <h1 class="text-[#1A1A1A] ml-9 flex items-center text-[1.4rem]">Linked Products</h1>
                    <ul class="ml-9">
                        <li class="text-[#1A1A1A] flex items-center text-[1.4rem]">
                            <span class="w-5 mr-1">-</span> Unit Trusts
                        </li>
                        <li class="text-[#1A1A1A] flex items-center text-[1.4rem]">
                            <span class="w-5 mr-1">-</span> Preservation plans
                        </li>
                        <li class="text-[#1A1A1A] flex items-center text-[1.4rem]">
                            <span class="w-5 mr-1">-</span> Living annuities and/or Guaranteed Retirement Protectors
                        </li>
                    </ul>
                </div>
                <ul>
                    <li class="text-[#1A1A1A] grid grid-cols-[auto_1fr] items-center text-[1.4rem]" v-for="item of succesKeys2" :key="item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi h-5 w-5 mr-4 bg-white rounded-full bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>    
                        {{ item }}
                    </li>
                    <!-- <li class="text-[#1A1A1A] grid grid-cols-[auto_1fr] text-[1.4rem]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi h-5 w-5 mr-4 bg-white rounded-full bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg> 
                        
                    </li> -->
                </ul>
            </div>
        </ServiceComponent>
    </LayoutComponent>
</template>

<script>
    import LayoutComponent from '@/components/LayoutComponent.vue';
    import ServiceComponent from '@/components/ServiceComponent.vue';
    
    export default {
        name: "TailorMadeInvestingView",
        components: {
            LayoutComponent,
            ServiceComponent
        },
        data() {
            return {
                toggleReadMore: false,
                succesKeys: [
                    'Endowments, 2nd Hand Endowments/',
                    'Savings/ Sinking Funds',
                    'Bonds, stocks, and structured bank products' 
                ],
                succesKeys2: [
                    'Guaranteed Growth & Income Plans',
                    'Shares, Debenture & Securities',
                    'Hedge Funds & Direct International Investing', 
                    'Specialized Shariah Investment Offerings Other Specialised Investment Plans and Alternative Investments'
                ]
            }
        }
    }
</script>