<template>
    <div>
        <div :style="{ 'background-image': 'url(' + require('@/assets/images/news/Rectangle.png') + ')' }" class="w-full mx-auto max-w-[112.185em] h-[37.245em] my-10"></div>
        <div class="mx-auto max-w-[112.185em]">
            <h2 class="text-[1.25rem] text-[#1A1A1A] mt-20">10 June 2022</h2>
            <h1 class="text-green-650 font-playfair text-[2.625rem]">Tips on how to choose the right medical aid or hospital plan for you and your family!</h1>
            <div class="grid grid-cols-2 mb-10 my-8 gap-10">
                <div>
                    <ul class=" list-disc ml-4">
                        <li>Look at your healthcare needs</li>
                        <li>Look at your past medical aid claims and expenses</li>
                        <li>Decide if you want to use a network of preferred providers</li>
                        <li>Evaluate your medical plan options!</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                    <p class="mb-8"> Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea .</p> 
                    <p>Dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et . Contact Us At Legacy Employee Benefits,To Assist You Choosing The Right Medical Plan For You & Your Loved Ones!</p>
                </div>
                <div class="space-y-8">
                    <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. rerum odit voluptas illum! Eaque quibusdam voluptas sunt doloribus, aliquam ab quis culpa quos natus. Ab nihil quod, quis quaerat fugit deleniti suscipit, sit saepe, non vero soluta provident! Id sit culpa tempora? ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatum perferendis ut, cumque cum pariatur deserunt totam debitis, facere itaque quae veritatis laboriosam rem velit asperiores animi delectus. Laudantium asperiores minus, deserunt suscipit exercitationem modi accusamus atque odit molestias eum eaque aspernatur? Hic velit placeat impedit expedita, aliquid perferendis obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum voluptate, eum aliquid officia, nostrum aliquam quia nobis placeat libero accusantium aspernatur fugit repudiandae aperiam deleniti tempora, earum amet ex. Soluta sed quidem est nulla, aliquam fugit eveniet alias minus! Culpa, a illo numquam doloribus quisquam excepturi placeat reprehenderit sed unde?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quo reprehenderit obcaecati? Quasi, in voluptatem. Inventore fuga culpa cupiditate expedita repellat voluptatem soluta odit sunt. Delectus a veritatis odio, aut repellat facere totam itaque ex. Delectus doloribus est amet beatae!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi. Odio dolorem tempore harum, quasi dolores rerum et. Maiores, quasi!</p>
                </div>
            </div>
            <MiddleSectionHeader class="py-8 text-green-650 before:bg-green-650 after:bg-green-650" title="Related" sub-title="NEWS"/>
            <div class="w-fit __sides mx-auto gap-4 grid md:grid-cols-2 lg:grid-cols-3 mb-20">
                <div class="border w-full flex flex-col max-w-[34.438em]" v-for="(card, index) in cards" :key="index">
                    <div class="h-[22.625em] w-full" :style="{ 'background-image': 'url(' + require('@/assets/images/news/' + card.image + '.png') + ')' }" />
                    <div class="p-4 flex-1 flex flex-col">
                        <h1 class="text-green-650 text-[2.688rem] flex-1 font-playfair text-center">{{ card.title }}</h1>
                        <button class="btn-gold max-w-[13.813em] mx-auto h-[3.5em] mt-10">Read More</button>
                    </div>
                </div>
            </div>
        </div>
        <GetInTouchSection />
    </div>
</template>

<script>
    import GetInTouchSection from '@/components/GetInTouchSection.vue';
import MiddleSectionHeader from '@/components/MiddleSectionHeader.vue';
    export default {
        name: "FaqsView",
        components: {
            GetInTouchSection,
            MiddleSectionHeader
        },
        data: () => {
            return {
                cards: [
                    {
                        title: 'Did You Know?',
                        image: 'news1'
                    }, 
                    {
                        title: 'Easy 6 Financial Planning Tips!',
                        image: 'news2'
                    },
                    { 
                        title: 'Tips on how to choose the right medical aid or hospital plan.',
                        image: 'news4'
                    }
                ]
            }
        }
    }
</script>