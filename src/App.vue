<template>
  <div class="wrapper">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/v-header.vue';
import Main from './components/v-main.vue';
import Footer from './components/v-footer.vue';
export default {
  name: 'app',
  components: {
    Header,
    Main,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" src="./style.scss"></style>
