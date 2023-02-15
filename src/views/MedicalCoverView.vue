<template>
    <LayoutComponent text-style="col-start-1 text-[.9rem] mr-14" image="services_6_medical-cover.webp" textSplit="YOUR WELLNESS" text="IS OUR PRIDE">
        <ServiceComponent 
            quote-background-image="medical/parallex_1.png"
            form-background-image="medical/services-page-form2.png"
            service-image="medical/Component.png"
        >
            <p class="text-[#1A1A1A] text-[1.625rem] mt-6">Your Health is important… <br> It is vital to have medical cover as life happens and you never know when you may need it… We offer a range of Medical Solutions to suit your need.</p>
            <button aria-label="read more" @click="toggleReadMore = !toggleReadMore" class="text-white py-3">{{!toggleReadMore ? 'Read More  &#x3e;&#x3e;' : 'Show Less  &#x3c;&#x3c;'}}</button>
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
        name: "MedicalCoverView",
        components: {
            LayoutComponent,
            ServiceComponent
        },
        data() {
            return {
                toggleReadMore: false,
                succesKeys: ['Medical', 'Gap Cover', 'Group Cover', 'Medical Insurance'],
            }
        }
    }
</script>