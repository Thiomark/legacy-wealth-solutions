<template>
    <div class="bg-cover bg-no-repeat" :style="{ ...bgImageStyle, 'background-image': 'url(' + require('@/assets/images/' + backgroundImage ) + ')' }"
        >
        <div class="text-white text-center">
            <h1 class="text-[2.875rem] font-playfair pt-10">Let's get in touch</h1>
            <h2 class="text-[1.938rem] font-extralight">Contact us for assistance</h2>
        </div>
        <form class="max-w-[1404px] __sides mx-auto py-16" action="" method="post">
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
</template>

<script>
    export default {
        name: 'ServiceFormComponent',
        props: {
            backgroundImage: String,
            bgImageStyle: String,
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