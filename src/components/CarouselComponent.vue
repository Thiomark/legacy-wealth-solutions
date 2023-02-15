<template>
  <div class="carousel">
    <transition name="slide" mode="out-in">
      <img alt="carousel image" loading="lazy" :src="require(`@/assets/images/home/banner${slides[currentSlide].banner}.png`)" />
    </transition>
    <div class="indicators">
      <div v-for="(slide, index) in slides" :key="index" class="indicator" @click="setActiveSlide(index)" :style="{ backgroundColor: index === currentSlide ? 'transparent' : 'white', border: index === currentSlide ? '2px solid white' : '1px solid white' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      slides: [
        { banner: 1 },
        { banner: 2 },
        { banner: 3 },
        { banner: 4 }
      ]
    }
  },
  methods: {
    setActiveSlide(index) {
      this.currentSlide = index;
    }
  },
  mounted() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 4000)
  }
}
</script>

<style scoped>
  .carousel {
    width: 100%;
    height: calc(100vh - 8em);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .carousel img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .indicators {
    display: flex;
    width: 100%;
    justify-content: center;
    position: absolute;
    bottom: 2em;
  }
  .indicator {
    width: .9em;
    height: .9em;
    border-radius: 50%;
    margin: 0 10px;
    border: 1px solid white;
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 2s;
  }
  .slide-enter, .slide-leave-to {
    transform: translateX(-100%);
  }

  @media screen and (min-width: 1024px) { 
    .carousel {
      height: calc(100vh - 11.625em);
    }

    .indicator {
      width: 1.25em;
      height: 1.25em;
    }
  }
</style>
