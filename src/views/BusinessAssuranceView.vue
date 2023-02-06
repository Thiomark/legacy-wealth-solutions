<template>
    <LayoutComponent text-style="col-start-1 text-[.9rem] mr-14" image="services_3_meet-the-team.png" textSplit="MEET THE PASSION AND" text="FOCUS BEHIND LEGACY">
        <MotivationBannerComponent image="assurance/parallex_1.png" quote="Insert quote here lorem lpsum dolor" name="- John Doe" />
        <div class="flex py-14 max-w-[1600px] mx-auto">
            <div class="___shaped_bg p-8 pr-20 flex-1 scale-110"
            :style="{ 'background-image': 'url(' + require('@/assets/images/home/patterns-gold.png') + ')' }"
            >
                <p class="text-[#1A1A1A] text-[1.625rem] mt-6">Have you ever wondered what would happen to your business if passed away today? If yes then succession planning is key to ensuring the open..</p>
                <button @click="toggleReadMore = !toggleReadMore" class="text-white py-3">{{!toggleReadMore ? 'Read More  &#x3e;&#x3e;' : 'Show Less  &#x3c;&#x3c;'}}</button>
                <ul v-if="toggleReadMore">
                    <li class="text-[#1A1A1A] flex items-center text-[1.625rem]" v-for="item of succesKeys" :key="item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi h-5 w-5 mr-4 bg-white rounded-full bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>    
                        {{ item }}
                    </li>
                </ul>
            </div>
            <img src="@/assets/images/assurance/Component.png" class="z-10 h-[32.563em] w-auto" alt="" srcset="">
        </div>
        <section class="__shaped_bg min-h-[42.125em]" 
            :style="{ 'background-image': 'url(' + require('@/assets/images/home/patterns.png') + ')' }">
            <div class="min-h-[29.188em] space-y-3 __sides">     
                <h1 class="text-white font-playfair py-10 text-[2.875rem] text-center">Frequently Asked Questions</h1>
                <div v-for="(question, index) in questionsAndAnswers" :key="index" class="max-w-[60.449em] mx-auto text-white">
                    <h1 @mouseenter="question.isQuestionOpen = true" @mouseleave="question.isQuestionOpen = false" class="px-8 cursor-pointer border font-light border-white text-[1.625rem] flex items-center justify-between py-2">
                        <span>{{question.question}}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi w-6 h-6 bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </h1>
                    <p v-if="question.isQuestionOpen" class="bg-white text-[#1A1A1A] min-h-[6em] p-4">{{ question.answer }}</p>
                </div>
            </div>
        </section>
        <ServiceComponent image="assurance/services-page-form2.png"/>
    </LayoutComponent>
</template>

<script>
    import LayoutComponent from '@/components/LayoutComponent.vue';
    import ServiceComponent from '@/components/ServiceComponent.vue';
    import MotivationBannerComponent from '@/components/MotivationBannerComponent.vue';
    
    export default {
        name: "BusinessAssuranceView",
        components: {
            LayoutComponent,
            MotivationBannerComponent,
            ServiceComponent
        },
        data() {
            return {
                toggleReadMore: false,
                succesKeys: ['Buy & Sell Cover', 'Key Man Insurance', 'Contingent'],
                questionsAndAnswers: [
                    {
                        isQuestionOpen: false,
                        question: 'Question goes here',
                        answer: 'Answer goes here Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                    },
                    {
                        isQuestionOpen: false,
                        question: 'Question goes here',
                        answer: 'Answer goes here Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                    },
                    {
                        isQuestionOpen: false,
                        question: 'Question goes here',
                        answer: 'Answer goes here Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                    },
                    {
                        isQuestionOpen: false,
                        question: 'Question goes here',
                        answer: 'Answer goes here Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.'
                    }
                ]
                
            }
        }
    }
</script>