<template>
    <header class="fixed w-full top-0 h-32 flex items-center justify-center z-40">
        <div class="flex items-center justify-between max-w-[1800px] w-full px-10 rounded-3xl py-3 m-auto bg-purple-650">
            <RouterLink to="/">
                <img class="h-[5.25em] w-auto" src="../../public/Legacy-Website.png" loading="lazy" />
            </RouterLink>
            <div class="flex items-center space-x-12">
                <nav v-if="showMenu" class="space-x-4 hidden lg:block font-semibold text-gray-50">
                    <RouterLink to="/"><a class="text-gray-50">Home</a></RouterLink>
                    <RouterLink to="/about"><a class="text-gray-50">Services</a></RouterLink>
                    <RouterLink to="/about"><a class="text-gray-50">Latest News</a></RouterLink>
                    <RouterLink to="/about"><a class="text-gray-50">FAQ's</a></RouterLink>
                    <RouterLink to="/about"><a class="text-gray-50">Our Focus</a></RouterLink>
                    <RouterLink to="/about"><a class="text-gray-50">Contact Us</a></RouterLink>
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