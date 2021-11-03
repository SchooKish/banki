<template>
  <main class="main container">
    <h1 class="main__title">Картины эпохи Возрождения</h1>
    <div class="main__products">
      <Card v-for="card in info" :key="card.id" :info="card" @save="saveStore" @del="delStore" />
    </div>
  </main>
</template>

<script>
import Card from './v-card.vue';
import image1 from './img/product1.jpg';
import image2 from './img/product2.jpg';
import image3 from './img/product3.jpg';
import image4 from './img/product4.jpg';
export default {
  name: 'v-main',

  components: {
    Card,
  },

  data() {
    return {
      info: {
        card1: {
          id: '1',
          img: image1,
          name: '«Рождение Венеры» Сандро Боттичелли',
          oldprice: '2 000 000 $',
          price: '1 000 000 $',
          active: false,
          modalText:
            '«Рождение Венеры» (итал. Nascita di Venere) — картина итальянского художника тосканской школы Сандро Боттичелли. Представляет собой живопись темперой на холсте размером 172,5 × 278,5 см. В настоящее время хранится в галерее Уффици, Флоренция.',
        },
        card2: {
          id: '2',
          img: image2,
          name: '«Тайная вечеря»  Леонардо да Винчи',
          price: '3 000 000 $',
          active: false,
          modalText:
            '«Та́йная ве́черя» (итал. Il Cenacolo или L’Ultima Cena) — монументальная роспись (ошибочно называемая фреской) работы Леонардо да Винчи, изображающая сцену последней трапезы Христа со своими учениками. Создана в 1495—1498 годы в доминиканском монастыре Санта-Мария-делле-Грацие в Милане.',
        },
        card3: {
          id: '3',
          img: image3,
          name: '«Сотворение Адама» Микеланджело',
          oldprice: '6 000 000 $',
          price: '5 000 000 $',
          active: false,
          modalText:
            '«Сотворение Адама» (итал. La creazione di Adamo) — фреска Микеланджело, написанная около 1511 года.',
        },
        card4: {
          id: '4',
          img: image4,
          name: '«Урок анатомии»  Рембрандт',
          price: '2 000 000 $',
          active: false,
          modalText: '«Урок анатомии доктора Тульпа» — картина Рембрандта, написанная в 1632 году.',
        },
      },
      cardCounter: 0,
    };
  },

  methods: {
    saveStore(id) {
      if (id == 1) {
        this.info.card1.active = true;
        localStorage.active1 = this.info.card1.active;
      }
      if (id == 2) {
        this.info.card2.active = true;
        localStorage.active2 = this.info.card2.active;
      }
      if (id == 3) {
        this.info.card3.active = true;
        localStorage.active3 = this.info.card3.active;
      }
      if (id == 4) {
        this.info.card4.active = true;
        localStorage.active4 = this.info.card4.active;
      }
    },

    delStore(id) {
      if (id == 1) {
        this.info.card1.active = false;
        localStorage.active1 = this.info.card1.active;
      }
      if (id == 2) {
        this.info.card2.active = false;
        localStorage.active2 = this.info.card2.active;
      }
      if (id == 3) {
        this.info.card3.active = false;
        localStorage.active3 = this.info.card3.active;
      }
      if (id == 4) {
        this.info.card4.active = false;
        localStorage.active4 = this.info.card4.active;
      }
    },
  },

  mounted() {
    this.cardCounter = Object.keys(this.info).length;

    if (localStorage.active1) {
      this.info.card1.active = localStorage.active1;
    }
    if (localStorage.active2) {
      this.info.card2.active = localStorage.active2;
    }
    if (localStorage.active3) {
      this.info.card3.active = localStorage.active3;
    }
    if (localStorage.active4) {
      this.info.card4.active = localStorage.active4;
    }
  },
};
</script>

<style lang="scss" src="./comp-style/main.scss"></style>
