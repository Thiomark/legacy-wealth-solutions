<template>
    <LayoutComponent text-style="col-start-2" image="banner_contact-us.png" text="LET’S GET IN TOUCH">
        <div class="grid place-items-center md:grid-cols-3 mt-4 lg:mt-20 max-w-[1300px] mx-auto">
            <div v-for="item in info" :key="item" class="capitalize">
                <h1 class="text-[1.3rem] lg:text-[2rem] text-center text-green-650 font-playfair">{{ item }}</h1>
                <h1 class="text-[1rem] lg:text-[1.313rem]">{{ storeInformation[item] }}</h1>
            </div>
        </div>
        <div class="grid lg:grid-cols-2 lg:place-content-start gap-8 px-4 lg:px-8 lg:gap-10 max-w-[1500px] mx-auto w-full my-8 lg:my-20">
            <div>
                <form class="gap-4 grid md:grid-cols-2" action="" method="post">
                    <input type="text" class="w-full" placeholder="Name">
                    <input type="text" class="w-full" placeholder="Surname">
                    <input type="text" class="w-full" placeholder="Email address">
                    <input type="text" class="w-full" placeholder="Phone Number">
                    <textarea class="w-full h-[143px] md:col-span-2" name="message" cols="30" rows="10" placeholder="Message"></textarea>
                    <label class="lg:py-4 md:col-span-2">
                        <input type="checkbox" name="contact-consent" value="yes">
                        I consent to being contacted by Legacy Wealth Solutions
                      </label>
                    <button aria-label="contact us submit" type="submit" value="Submit" class="block mx-auto md:mx-0 btn-gold lg:mt-2 max-w-[14.813em] h-[2.5em] md:h-[2.938em]">
                        Submit
                    </button>
                </form>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114694.70319724946!2d27.987598134284326!3d-26.059409655659284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957398cbf40517%3A0xdf8bd21bf1eb74c!2sSandton!5e0!3m2!1sen!2sza!4v1675616246403!5m2!1sen!2sza" class="w-full" height="593px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </LayoutComponent>
</template>

<script>
    import LayoutComponent from '@/components/LayoutComponent.vue';
    import { storeInformation } from '@/utils/constants';
    export default {
        name: "ContactView",
        components: { 
            LayoutComponent 
        },
        data() {
            return {
                info: ['email', 'phone', 'address'],
                storeInformation
            }
        }
    }
</script>

<style lang="scss" scoped>
    form {
        
        input, textarea {
            background: #FFFFFF 0% 0% no-repeat padding-box;
            border: 1px solid #4D4D4D;
            padding: .6em;
            font-size: .8rem;
        }

        div {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: .6em;
        }

        label {
            display: inline-block;
            font-size: .8rem;
        }
    
        input[type="checkbox"] {
            vertical-align: middle;
            margin-right: 10px;
        }
    }

    @media screen and (min-width: 768px) { 
        input, textarea, label {
            font-size: 1.2rem;
        }
    }
    
</style>