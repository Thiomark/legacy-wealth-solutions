<template>
    <LayoutComponent text-style="col-start-1 text-[4em]" image="services_3_meet-the-team.png" textSplit="MEET THE PASSION AND" text="FOCUS BEHIND LEGACY">
        <div class="mx-auto w-full max-w-[1600px] text-[#434343] text-center py-[5.429em] space-y-10 text-[1.438rem]">
            <p>Our independence means that our focus is clearly on our clients’ best interests. We are not affiliated to any product providers and we maintain our objectivity at all times to provide our clients with our best possible advice to help them achieve their personal and business goals.</p>
            <p>We believe that customer loyalty is a direct result of our dedication to helping our clients manage risk and investments, improve cash flow, and reduce or defer income. Our personal commitment to our clients is always uncompromising.</p>
        </div>
        <section class="py-20 __shaped_bg flex items-center justify-between" 
            :style="{ 'background-image': 'url(' + require('@/assets/images/home/patterns.png') + ')' }"
            >
            <div v-for="item in theTeam" :key="item.name" class="max-w-[1375px] text-white mx-auto text-center">
                <div class="bg-red-500 w-[16.551em] h-[16.551em] rounded-full">

                </div>
                <h1 class="font-bold text-[1.7rem]">{{ item.name }}</h1>
                <h2 class="font-extralight text-[1.4rem]">{{ item.title }} <span class="text-gold-350">&#x3e;&#x3e;</span></h2>
            </div>
        </section>
    </LayoutComponent>
</template>

<script>
    import LayoutComponent from '@/components/LayoutComponent.vue';
    export default {
        name: "MeetTheTeamView",
        components: { 
            LayoutComponent 
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