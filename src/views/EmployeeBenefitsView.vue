<template>
    <LayoutComponent text-style="col-start-1 text-[.7rem] mr-14" image="services_2_employee-benefits.png" textSplit="STAFF SOLUTIONS" text="PERSONALIZED, EMPLOYEE BENEFITS MANAGEMENT AND">
        <ServiceComponent 
            quote="Employee’s come first, if you take care of your staff your staff will take care of you and your business"
            quoteBy="- Richard Branson"
            quote-background-image="benfits/parallex_1.png"
            form-background-image="benfits/services-page-form2.png"
            :form-background-image-style="{'background-position': 'center -10em'}"
            service-image="benfits/Component.png"
        >
            <p class="text-[#1A1A1A] text-[1.625rem] mt-6">As an Employer be their mentor and help manage their risk and retirement planning. Benefits Matter!</p>
            <button aria-label="Read more" @click="toggleReadMore = !toggleReadMore" class="text-white py-3">{{!toggleReadMore ? 'Read More  &#x3e;&#x3e;' : 'Show Less  &#x3c;&#x3c;'}}</button>
            <p v-if="toggleReadMore" class="text-[#1A1A1A] text-[1.625rem] pb-4">Also known as Perks or Fringe Benefits, these are additional benefits offered to employees and added to their Salary or Wage Package. Employee Benefits assist employers to consider the well-being of their employees to attract, retain, motivate & reward employees, ultimately leading to happier staff and increased production.</p>
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
        name: "EmployeeBenefitsView",
        components: {
            LayoutComponent,
            ServiceComponent
        },
        data() {
            return {
                toggleReadMore: false,
                succesKeys: [
                    'Group Scheme – Pension/ Provident Funds', 
                    'Risk, Disability, Dreaded Disease, Funeral & Education',
                    'Holistic Retirement Planning - retiring from a company', 
                    'Preservation of Retirement Funds - Resignation/Retrenchment', 
                    'Medical Insurance', 
                    'Investing'
                ],
            }
        }
    }
</script>