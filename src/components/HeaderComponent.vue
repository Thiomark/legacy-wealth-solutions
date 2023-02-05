<template>
    <header class="fixed w-full h-[11.625em] top-0 flex items-center justify-center z-40 px-10">
        <div class="flex items-center h-[8.938em] justify-between max-w-[1700px] w-full rounded-[2em] opacity-90 px-12 m-auto bg-green-650">
            <RouterLink to="/">
                <img class="h-[5.25em] w-auto" src="../../public/Legacy-Website.png" loading="lazy" />
            </RouterLink>
            <div class="flex items-center space-x-12">
                <nav v-if="showMenu" class="space-x-4 hidden lg:block font-semibold text-gray-50">
                    <RouterLink to="/"><a class="text-gray-50">Home</a></RouterLink>
                    <RouterLink to="/about"><a class="text-gray-50">Services</a></RouterLink>
                    <RouterLink to="/about"><a class="text-gray-50">Latest News</a></RouterLink>
                    <RouterLink to="/faqs"><a class="text-gray-50">FAQ's</a></RouterLink>
                    <RouterLink to="/about"><a class="text-gray-50">Our Focus</a></RouterLink>
                    <RouterLink to="/contact"><a class="text-gray-50">Contact Us</a></RouterLink>
                </nav>
                <button @click.prevent="toggleMenu" >
                    <IconBuger :class="!showMenu ? 'w-8 h-8 text-white' : 'w-10 h-10 text-gold-350'" />
                </button>
            </div>
        </div>
    </header>
</template>

<script>
    import IconBuger from './icons/IconBuger.vue';
    export default {
        name: 'HomeView',
        components : {
            IconBuger
        },
        data() {
            return {
                showMenu: false
            }
        },
        methods: {
            toggleMenu() {
                this.showMenu = !this.showMenu
            }
        }
    }

</script>

<style lang="scss" scoped>

</style>