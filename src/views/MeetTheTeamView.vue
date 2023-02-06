<template>
    <LayoutComponent text-style="col-start-1 text-[.9rem] mr-14" image="services_3_meet-the-team.png" textSplit="MEET THE PASSION AND" text="FOCUS BEHIND LEGACY">
        <div class="mx-auto w-full max-w-[1600px] text-[#434343] text-center py-[5.429em] space-y-10 text-[1.438rem]">
            <p>Our independence means that our focus is clearly on our clients’ best interests. We are not affiliated to any product providers and we maintain our objectivity at all times to provide our clients with our best possible advice to help them achieve their personal and business goals.</p>
            <p>We believe that customer loyalty is a direct result of our dedication to helping our clients manage risk and investments, improve cash flow, and reduce or defer income. Our personal commitment to our clients is always uncompromising.</p>
        </div>
        <section class="py-20 __shaped_bg flex items-center justify-between" 
            :style="{ 'background-image': 'url(' + require('@/assets/images/home/patterns.png') + ')' }"
            >
            <div v-for="(item, index) in theTeam" :key="index" class="max-w-[1375px] text-white mx-auto text-center">
                <div class="bg-center bg-no-repeat w-[15em] h-[15em] rounded-full"
                    :style="{ 'background-image': 'url(' + require('@/assets/images/team/Group' + (index + 1) + '.png') + ')' }"
                >
                </div>
                <h1 class="font-bold mt-2 text-[1.7rem]">{{ item.name }}</h1>
                <h2 class="font-extralight  -mt-2 text-[1.4rem]">{{ item.title }} <span class="text-gold-350">&#x3e;&#x3e;</span></h2>
            </div>
        </section>
        <MoreServicesComponent />
        <ServiceFormComponent :bg-image-style="{'background-position': 'center -8em'}" background-image="team/services-page-form2.png"/>
    </LayoutComponent>
</template>

<script>
    import LayoutComponent from '@/components/LayoutComponent.vue';
    import ServiceFormComponent from '@/components/service/ServiceFormComponent.vue';
    import MoreServicesComponent from '@/components/service/MoreServicesComponent.vue';
    
    export default {
        name: "MeetTheTeamView",
        components: {
            LayoutComponent,
            ServiceFormComponent,
            MoreServicesComponent
        },
        data: () => {
            return {
                theTeam: [
                    {
                        name: 'Jane Doe',
                        title: 'Executive Director'
                    },
                    {
                        name: 'Julie Doe',
                        title: 'Director'
                    },
                    {
                        name: 'Jacob Doe',
                        title: 'Manager'
                    }
                ]
            }
        }
    }
</script>