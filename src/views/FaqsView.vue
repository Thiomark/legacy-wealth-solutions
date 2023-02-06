<template>
    <LayoutComponent text-style="text-center" image="banner_faqs.png" text="FREQUENTLY ASKED QUESTIONS">
        <div class="banner_faq1 space-y-3 py-24 __sides">     
            <div v-for="(question, index) in questionsAndAnswers" :key="index" class="max-w-[66.375em] cursor-pointer mx-auto text-white">
                <h1 @mouseenter="question.isQuestionOpen = true" @mouseleave="question.isQuestionOpen = false" :class="!question.isQuestionOpen ? 'bg-green-650': 'border border-[#151515] text-[#151515]'" class="px-3 flex items-center justify-between py-1">
                    <span>{{question.question}}</span>
                    <span v-if="!question.isQuestionOpen">&#x3e;</span>
                </h1>
                <p v-if="question.isQuestionOpen" class="btn-gold min-h-[6em] p-4">{{ question.answer }}</p>
            </div>
        </div>
        <GetInTouchSection />
    </LayoutComponent>
</template>

<script>
    import GetInTouchSection from '@/components/GetInTouchSection.vue';
    import LayoutComponent from '@/components/LayoutComponent.vue';
    export default {
        name: "FaqsView",
        components: {
            LayoutComponent,
            GetInTouchSection
        },
        data() {
            return {
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