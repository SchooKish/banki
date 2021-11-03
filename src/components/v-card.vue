<template>
  <div class="main__card">
    <Modal v-if="isModalVisible" @closeModal="closeModal" v-bind:info="info" />
    <div class="main__card-img">
      <img :src="info.img" alt="product1" />
    </div>
    <h2 class="main__card-name" @click="showModal">{{ info.name }}</h2>
    <div class="main__card-bottom">
      <p class="main__card-price">
        <span class="main__card-discount">{{ info.oldprice }}</span>
        {{ info.price }}
      </p>
      <button
        class="main__card-btn"
        :class="{ btn_active: info.active }"
        @click="info.active === false ? buy() : del()"
      >
        <img class="main__card-btn-loading" v-if="loading" src="./img/loading.gif" alt="loading" />
        <span v-if="info.active">
          <img src="./img/incart.svg" alt="incart" />
          В корзине</span
        >
        <span v-else>Купить</span>
      </button>
    </div>
  </div>
</template>

<script>
import Modal from './v-modal.vue';

export default {
  name: 'card',
  components: {
    Modal,
  },
  data() {
    return {
      loading: false,
      isModalVisible: false,
      id: this.info.id,
    };
  },

  props: ['info', 'counter'],

  methods: {
    buy() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
      setTimeout(() => {
        this.$emit('save', this.id);
      }, 2000);
    },

    del() {
      this.$emit('del', this.id);
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },

  mounted() {},
};
</script>

<style lang="scss" src="./comp-style/main.scss"></style>
