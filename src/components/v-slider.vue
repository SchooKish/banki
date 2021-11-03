<template>
  <div class="slider__wrapper">
    <div class="slider" :style="{ 'margin-left': '-' + 100 * currentSlideId + '%' }">
      <sliderItem v-for="item in sliderData" :key="item.index" :itemData="item" />
    </div>
    <button class="slider__btn prev" @click="prevSlide">Назад</button>
    <button class="slider__btn next" @click="nextSlide">Вперед</button>
  </div>
</template>

<script>
import sliderItem from './v-slider-item.vue';
export default {
  name: 'slider',
  components: {
    sliderItem,
  },
  props: {
    sliderData: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      currentSlideId: 0,
    };
  },

  methods: {
    prevSlide() {
      if (this.currentSlideId > 0) {
        this.currentSlideId--;
      }
    },
    nextSlide() {
      if (this.currentSlideId >= this.sliderData.length - 1) {
        this.currentSlideId = 0;
      } else {
        this.currentSlideId++;
      }
    },
  },
};
</script>

<style lang="scss" src="./comp-style/slider.scss"></style>
