<template>
    <LayoutComponent text-style="col-start-1 text-[.9rem] mr-14" image="services_1_business-assurance.webp" textSplit="SOLUTIONS" text="ENTERPRISE">
        <ServiceComponent 
            quote-background-image="assurance/parallex_1.png"
            form-background-image="assurance/services-page-form2.png"
            service-image="assurance/Component.png"
        >
            <p class="text-[#1A1A1A] text-[1.625rem] mt-6">Have you ever wondered what would happen to your business if passed away today? If yes then succession planning is key to ensuring the open..</p>
            <button aria-label="read more information" @click="toggleReadMore = !toggleReadMore" class="text-white py-3">{{!toggleReadMore ? 'Read More  &#x3e;&#x3e;' : 'Show Less  &#x3c;&#x3c;'}}</button>
            <ul v-if="toggleReadMore">
                <li class="text-[#1A1A1A] flex items-center text-[1.625rem]" v-for="item of succesKeys" :key="item">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi h-5 w-5 mr-4 bg-white rounded-full bi-check-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>    
                    {{ item }}
                </li>
            </ul>
        </ServiceComponent>
    </LayoutComponent>
</template>

<script>
    import LayoutComponent from '@/components/LayoutComponent.vue';
    import ServiceComponent from '@/components/ServiceComponent.vue';
    
    export default {
        name: "BusinessAssuranceView",
        components: {
            LayoutComponent,
            ServiceComponent
        },
        data() {
            return {
                toggleReadMore: false,
                succesKeys: ['Buy & Sell Cover', 'Key Man Insurance', 'Contingent'],
            }
        }
    }
</script>