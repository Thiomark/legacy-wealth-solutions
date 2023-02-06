<template>
    <div>
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
           class="bg-cover bg-no-repeat" :style="{ ...bgImageStyle, 'background-image': 'url(' + require('@/assets/images/' + image ) + ')' }"
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
    </div>
</template>

<script>
    import CardComponent from '@/components/CardComponent.vue'
    export default {
        name: 'ServiceComponent',
        components: {
            CardComponent
        },
        props: {
            image: String,
            bgImageStyle: String
        },
        data: () => {
            return {
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
                ]
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