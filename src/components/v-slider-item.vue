<template>
  <div class="slider__item">
    <img :src="itemData" />
  </div>
</template>

<script>
export default {
  name: 'slider-item',
  props: {
    itemData: {},
  },
};
</script>

<style lang="scss" src="./comp-style/slider.scss"></style>
