<template>
    <header class="relative">
        <div class="bg-green-650 h-[8em] lg:h-[11.625em]"></div>
        <div class="fixed w-full h-[8em] lg:h-[11.625em] top-0 flex items-center justify-center z-40 px-2 lg:px-10">            
            <div class="flex items-center px-4 h-[5em] lg:h-[8.938em] justify-between max-w-[1700px] w-full rounded-[2em] opacity-90 2xl:px-10 m-auto bg-green-650">
                <RouterLink to="/">
                    <img alt="Copany logo" class="lg:h-[5.25em] h-12 w-auto" src="../../public/Legacy-Website.png" loading="lazy" />
                </RouterLink>
                <div class="flex items-center space-x-12">
                    <nav v-if="showMenu" class="space-x-4 w-full hidden xl:block font-extralight text-[1.563rem] text-gray-50">
                        <RouterLink to="/"><a class="text-gray-50">Home</a></RouterLink>
                        <a v-click-outside="hide" class="text-gray-50 cursor-pointer relative" @click.prevent="toggleSubMenu">
                            <span>Services 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="showSubMenu && 'rotate-180'" class="bi transition duration-300 ease-in-out inline-block w-4 h-4 bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </span>
                            <ul v-if="showSubMenu" class="z-40 absolute p-4 left-0 w-[17em]" style="background: #03353A 0% 0% no-repeat padding-box;">
                                <li><RouterLink to="/holistic_financial_planning"><a class="text-gray-50">Holistic Financial Planning</a></RouterLink></li>
                                <li><RouterLink to="/tailor_made_investing"><a class="text-gray-50">Tailor-Made Investing</a></RouterLink></li>
                                <li><RouterLink to="/employee_benefits"><a class="text-gray-50">Employee Beneﬁts</a></RouterLink></li>
                                <li><RouterLink to="/medical_cover"><a class="text-gray-50">Medical Cover</a></RouterLink></li>
                                <li><RouterLink to="/business_assurance"><a class="text-gray-50">Business Assurance</a></RouterLink></li>
                                <li><RouterLink to="/meet_the_team"><a class="text-gray-50">Meet The Team</a></RouterLink></li>
                                <li><RouterLink to="/indiv_latest_news"><a class="text-gray-50">Indiv Latest News</a></RouterLink></li>
                            </ul>
                        </a>
                        <RouterLink to="/lastest_news"><a class="text-gray-50">Latest News</a></RouterLink>
                        <RouterLink to="/faqs"><a class="text-gray-50">FAQ's</a></RouterLink>
                        <RouterLink to="/out_focus"><a class="text-gray-50">Our Focus</a></RouterLink>
                        <RouterLink to="/contact"><a class="text-gray-50">Contact Us</a></RouterLink>
                    </nav>
                    <button aria-label="toggle menu" @click.prevent="toggleMenu" >
                        <IconBuger :class="!showMenu ? 'w-8 h-8 text-white' : 'w-10 h-10 text-gold-350'" />
                    </button>
                </div>
            </div>
        </div>
        <nav class="fixed bg-green-650 xl:hidden border-t border-teal-900 z-50 lg:top-[11.625em] top-32 w-full" v-if="showMenu">
            <div class="z-40 p-6" v-if="showMenu && !showSubMenu">
                <RouterLink to="/"><a class="text-gray-50 py-1 flex items-center justify-between w-full">Home</a></RouterLink>
                <button class="w-full" @click.prevent="toggleSubMenu">
                    <a class="text-gray-50 py-1 flex items-center justify-between w-full">
                        <span>Services</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi transition -rotate-90 duration-300 ease-in-out w-4 h-4 bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </a>
                </button>
                <RouterLink to="/lastest_news"><a class="text-gray-50 py-1 flex items-center justify-between w-full">Latest News</a></RouterLink>
                <RouterLink to="/faqs"><a class="text-gray-50 py-1 flex items-center justify-between w-full">FAQ's</a></RouterLink>
                <RouterLink to="/out_focus"><a class="text-gray-50 py-1 flex items-center justify-between w-full">Our Focus</a></RouterLink>
                <RouterLink to="/contact"><a class="text-gray-50 py-1 flex items-center justify-between w-full">Contact Us</a></RouterLink>
            </div>
            <ul class="z-50 p-6 space-y-1.5" v-if="showSubMenu">
                <button @click.prevent="toggleSubMenu" class="text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi transition rotate-90 duration-300 ease-in-out w-6 h-6 bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg></button>
                <li><RouterLink to="/holistic_financial_planning"><a class="text-gray-50">Holistic Financial Planning</a></RouterLink></li>
                <li><RouterLink to="/tailor_made_investing"><a class="text-gray-50">Tailor-Made Investing</a></RouterLink></li>
                <li><RouterLink to="/employee_benefits"><a class="text-gray-50">Employee Beneﬁts</a></RouterLink></li>
                <li><RouterLink to="/medical_cover"><a class="text-gray-50">Medical Cover</a></RouterLink></li>
                <li><RouterLink to="/business_assurance"><a class="text-gray-50">Business Assurance</a></RouterLink></li>
                <li><RouterLink to="/meet_the_team"><a class="text-gray-50">Meet The Team</a></RouterLink></li>
                <li><RouterLink to="/indiv_latest_news"><a class="text-gray-50">Indiv Latest News</a></RouterLink></li>
            </ul>
        </nav>
    </header>
</template>

<script>
    import IconBuger from './icons/IconBuger.vue';
    import ClickOutside from 'vue-click-outside'

    export default {
        name: 'HomeView',
        components : {
            IconBuger
        },
        data() {
            return {
                showMenu: false,
                showSubMenu: false
            }
        },
        methods: {
            toggleMenu() {
                this.showMenu = !this.showMenu
            },
            toggleSubMenu() {
                this.showSubMenu = !this.showSubMenu
                console.log(this.showSubMenu)
            },
            hide () {
                if(this.showMenu === false) return;
                this.showSubMenu = false;
            }
        },
        directives: {
            ClickOutside
        }
    }

</script>

<style lang="scss" scoped>

</style>