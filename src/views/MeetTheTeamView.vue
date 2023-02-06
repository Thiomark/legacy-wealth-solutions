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
        <h1 class="font-playfair text-[#1A1A1A] text-[2.875rem] text-center pt-8 pb-16 ">More Services</h1>
        <div class="relative max-w-[1600px] mx-auto">
            <div class="absolute text-green-650 text-[1.938em] flex items-center justify-between h-full w-full">
                <button>&#x3c;</button>
                <button>&#x3e;</button>
            </div>
            <div class="w-fit gap-20 mx-auto __sides mb-20 grid grid-cols-[auto_auto_auto]">
                <CardComponent :class="index % 2 !== 0 && 'scale-[115%]'" v-for="(cardItem, index) in moreServices" :key="cardItem.title" :title="cardItem.title" :image="cardItem.image" />
            </div>
        </div>
        <div 
           class="bg-cover bg-no-repeat" style="background-position: center -8em;" :style="{ 'background-image': 'url(' + require('@/assets/images/team/services-page-form2.png') + ')' }"
        >
            <div class="text-white text-center">
                <h1 class="text-[2.875rem] font-playfair pt-10">Let's get in touch</h1>
                <h2 class="text-[1.938rem] font-extralight">Contact us for assistance</h2>
            </div>
            <form class="max-w-[1404px] mx-auto py-16" action="" method="post">
                <div>
                    <input type="text" placeholder="Name">
                    <input type="text" placeholder="Surname">
                    <input type="text" placeholder="Email address">
                    <input type="text" placeholder="Phone Number">
                    <textarea class="w-full h-[143px] col-span-2" name="message" cols="30" rows="10" placeholder="Message"></textarea>
                </div>
                <label class="py-4 text-white">
                    <input type="checkbox" name="contact-consent" value="yes">
                    I consent to being contacted by Legacy Wealth Solutions
                  </label>
                <button type="submit" value="Submit" class="block btn-gold mt-2 h-[2.938em]">
                    Submit
                </button>
            </form>
        </div>
    </LayoutComponent>
</template>

<script>
    import LayoutComponent from '@/components/LayoutComponent.vue';
    import CardComponent from '@/components/CardComponent.vue'
    export default {
        name: "MeetTheTeamView",
        components: {
            LayoutComponent,
            CardComponent
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
                ],
                moreServices: [
                    {
                        title: 'HOLISTIC FINANCIAL PLANNING',
                        image: 'home/services/services_1.png'
                    },
                    {
                        title: 'TAILOR-MADE INVESTING',
                        image: 'home/services/services_2.png'
                    },
                    {
                        title: 'EMPLOYEE BENEFITS',
                        image: 'home/services/services_3.png'
                    }
                ],
            }
        }
    }
</script>

<style lang="scss">
    form {
            
        input, textarea {
            background: transparent;
            border: 1px solid #ffffff;
            padding: .6em;

            &::placeholder {
                color: #ffffffce
            }
        }

        div {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: .6em;
        }

        label {
            display: inline-block;
        }

        input[type="checkbox"] {
            vertical-align: middle;
            margin-right: 10px;
        }
    }
</style>