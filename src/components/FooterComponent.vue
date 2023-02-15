<template>
    <footer class="bg-green-650">
        <div class="grid lg:grid-cols-3 __sides md:grid-cols-2 py-8 w-fit md:mx-auto  gap-9 md:gap-20">
            <img loading="lazy" class="h-[10em] md:h-[13.188em]" src="@/assets/images/footer/LegacyLogo@2x.png" alt="company logo" srcset="">
            <div class="">
                <h1 class="__heading font-playfair">Quick Links</h1>
                <ul class="__sub__items">
                    <li v-for="link in quickLinks" :key="link.name"><a :href="link.path">{{ link.name }}</a></li>
                </ul>
            </div>
            <div class="__sub__items">
                <h1 class="__heading font-playfair">Contact Information</h1>
                <p class="text-sm md:text-lg">Phone {{storeInformation.phone}}</p>
                <p class="text-sm md:text-lg">Email{{storeInformation.email}}</p>
                <div class="flex h-[2.5em] md:h-[3.5em]">
                    <img loading="lazy" src="@/assets/images/footer/Facebookicon@2x.png" alt="Facebook icon" srcset="">
                    <img loading="lazy" src="@/assets/images/footer/Twittericon@2x.png" alt="" srcset="Twitter icon">
                    <img loading="lazy" src="@/assets/images/footer/LinkedINicon@2x.png" alt="" srcset="LinkedIn icon">
                </div>
                <p class="text-sm md:text-lg">{{storeInformation.slogan}}</p>
            </div>
        </div>
        <h1 class="text-center text-sm lg:text-[1.688rem] font-thin py-6 bg-green-750 text-white">Copyright &copy; 2022 Legacy Wealth Solutions. FSP 46619. All rights reserved.</h1>
    </footer>
</template>

<script>
    import { storeInformation } from '@/utils/constants';
    export default {
        name: 'FooterComponent',
        data: () => {
            return {
                quickLinks: [
                    {name: 'Services', path: '/'},
                    {name: 'Latest News', path: '/lastest_news'},
                    {name: 'FAQ\'s', path: '/faqs'},
                    {name: 'Month\'s Focus', path: '/'},
                    {name: 'Contact Us', path: '/contact'},
                    {name: 'Privacy Policy', path: '/'}
                ],
                storeInformation
            }
        }
    }
</script>

<style lang="scss" scoped>
    .__heading {
        color: white;
        font-size: 1.2rem;
        font-weight: 400;
        margin-bottom: .6em;
    }

    .__sub__items {
        color: white;
        font-weight: 100;
        font-size: 0.875rem;
    }

    @media screen and (min-width: 768px) { 
        .__heading {
            font-size: 1.563rem;
        }
    
        .__sub__items {
            font-size: 1.313rem; 
        }
    }
</style>