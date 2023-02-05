<template>
    <footer class="bg-green-650">
        <div class="grid lg:grid-cols-3 md:grid-cols-2 py-8 w-fit mx-auto gap-20">
            <img class="h-[13.188em]" src="@/assets/images/footer/LegacyLogo@2x.png" alt="" srcset="">
            <div class="">
                <h1 class="__heading">Quick Links</h1>
                <ul class="__sub__items">
                    <li v-for="link in quickLinks" :key="link.name"><a href="#">{{ link.name }}</a></li>
                </ul>
            </div>
            <div class="__sub__items">
                <h1 class="__heading">Contact Information</h1>
                <p>Phone{{storeInformation.phone}}</p>
                <p>Email{{storeInformation.email}}</p>
                <div class="flex h-[4.75em]">
                    <img src="@/assets/images/footer/Facebookicon@2x.png" alt="" srcset="">
                    <img src="@/assets/images/footer/Twittericon@2x.png" alt="" srcset="">
                    <img src="@/assets/images/footer/LinkedINicon@2x.png" alt="" srcset="">
                </div>
                <p>{{storeInformation.slogan}}</p>
            </div>
        </div>
        <h1 class="text-center text-[1.688rem] font-thin py-2 bg-green-750 text-white">Copyright &copy; 2022 Legacy Wealth Solutions. FSP 46619. All rights reserved.</h1>
    </footer>
</template>

<script>
    import { storeInformation } from '@/utils/constants';
    export default {
        name: 'FooterComponent',
        data: () => {
            return {
                quickLinks: [
                    {name: 'Services', path: ''},
                    {name: 'Latest News', path: ''},
                    {name: 'FAQ\'', path: ''},
                    {name: 'Month\'s Focus', path: ''},
                    {name: 'Contact Us', path: ''},
                    {name: 'Privacy Policy', path: ''}
                ],
                storeInformation
            }
        }
    }
</script>

<style lang="scss" scoped>
    .__heading {
        color: white;
        font-size: 1.563rem;
        font-weight: 400;
        margin-bottom: .6em;
    }

    .__sub__items {
        color: white;
        font-weight: 100;
        font-size: 1.313rem;
    }
</style>