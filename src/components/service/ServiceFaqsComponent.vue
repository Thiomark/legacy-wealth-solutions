<template>
    <section class="__shaped_bg min-h-[42.125em]" 
        :style="{ 'background-image': 'url(' + require('@/assets/images/home/patterns.png') + ')' }">
        <div class="min-h-[29.188em] space-y-3 __sides">     
            <h1 class="text-white font-playfair py-4 lg:py-10 text-[1.6rem] lg:text-[2.875rem] text-center">Frequently Asked Questions</h1>
            <div v-for="(question, index) in questionsAndAnswers" :key="index" class="max-w-[60.449em] mx-auto text-white">
                <h1 @mouseenter="question.isQuestionOpen = true" @mouseleave="question.isQuestionOpen = false" class="px-4 lg:px-8 cursor-pointer border font-light border-white text-[1.2rem] lg:text-[1.625rem] flex items-center justify-between py-2">
                    <span>{{question.question}}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi w-6 h-6 bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </h1>
                <p v-if="question.isQuestionOpen" class="bg-white text-[#1A1A1A] min-h-[6em] p-4">{{ question.answer }}</p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'ServiceFaqsComponent',
        data: () => {
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