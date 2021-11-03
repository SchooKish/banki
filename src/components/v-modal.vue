<template>
  <div class="modal__wrap">
    <div class="modal">
      <h1 class="modal__title">{{ info.name }}</h1>
      <div class="modal__slider">
        <slider :sliderData="sliderImg" />
        <!-- <slider :v-for="product in sliderInfo" :key="product.id" :interval="2000" /> -->
      </div>
      <p class="modal__info">
        {{ info.modalText }}
      </p>
      <span class="main__card-price">{{ info.price }}</span>
      <button class="main__card-btn" @click="closeModal">Закрыть</button>
    </div>
  </div>
</template>

<script>
import slider from './v-slider.vue';
import img1 from './img/cat1.jpg';
import img2 from './img/cat2.jpg';
import img3 from './img/cat3.jpg';
export default {
  name: 'v-modal',

  components: {
    slider,
  },
  props: ['info'],

  data() {
    return {
      sliderImg: [img1, img2, img3],
    };
  },

  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
  },
};
</script>

<style lang="scss" src="./comp-style/modal.scss"></style>
