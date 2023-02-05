<template>
    <LayoutComponent image="contact/banner_contact-us.png" text="LET’S GET IN TOUCH">
        <div class="grid grid-cols-3 mt-20 max-w-[1300px] mx-auto">
            <div v-for="item in info" :key="item" class="capitalize">
                <h1 class="text-[2rem] font-playfair">{{ item }}</h1>
                <h1 class="text-[1.313rem]">{{ storeInformation[item] }}</h1>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-8 max-w-[1500px] mx-auto w-full my-20">
            <form class="" action="" method="post">
                <div>
                    <input type="text" placeholder="Name">
                    <input type="text" placeholder="Surname">
                    <input type="text" placeholder="Email address">
                    <input type="text" placeholder="Phone Number">
                </div>
                <textarea class="w-full h-[143px]" name="message" cols="30" rows="10" placeholder="Message"></textarea>
                <label>
                    <input type="checkbox" name="contact-consent" value="yes">
                    I consent to being contacted by Legacy Wealth Solutions
                  </label>
                <button type="submit" value="Submit" class="block btn-gold mt-2 max-w-[14.813em] h-[2.938em]">
                    Submit
                </button>
            </form>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114694.70319724946!2d27.987598134284326!3d-26.059409655659284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957398cbf40517%3A0xdf8bd21bf1eb74c!2sSandton!5e0!3m2!1sen!2sza!4v1675616246403!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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