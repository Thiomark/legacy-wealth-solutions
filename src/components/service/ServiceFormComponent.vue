<template>
    <div class="bg-cover bg-no-repeat" :style="{ ...bgImageStyle, 'background-image': 'url(' + require('@/assets/images/' + backgroundImage ) + ')' }"
        >
        <div class="text-white text-center">
            <h1 class="text-[1.3rem] lg:text-[2rem] font-playfair pt-10">Let's get in touch</h1>
            <h2 class="text-[1rem] lg:text-[1.313rem] font-extralight">Contact us for assistance</h2>
        </div>
        <form class="max-w-[1404px] gap-4 grid md:grid-cols-2 __sides mx-auto py-16" action="" method="post">
            <input type="text" class="w-full" placeholder="Name">
            <input type="text" class="w-full" placeholder="Surname">
            <input type="text" class="w-full" placeholder="Email address">
            <input type="text" class="w-full" placeholder="Phone Number">
            <textarea class="w-full h-[143px] md:col-span-2" name="message" cols="30" rows="10" placeholder="Message"></textarea>
            <label class="lg:py-4 md:col-span-2 text-white">
                <input type="checkbox" name="contact-consent" value="yes">
                I consent to being contacted by Legacy Wealth Solutions
                </label>
            <button aria-label="submit the contact us form" type="submit" value="Submit" class="block btn-gold h-[2.4em] lg:h-[2.938em]">
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
            font-size: .8rem;

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