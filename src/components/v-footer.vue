<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrap">
        <nav class="menu">
          <ul class="menu-list">
            <li class="menu-item">
              <a class="menu-link footer__menu-link" href="#">Каталог</a>
            </li>
            <li class="menu-item">
              <a class="menu-link footer__menu-link" href="#">Доставка</a>
            </li>
            <li class="menu-item">
              <a class="menu-link footer__menu-link" href="#">Оплата</a>
            </li>
            <li class="menu-item">
              <a class="menu-link footer__menu-link" href="#">Контакты</a>
            </li>
            <li class="menu-item">
              <a class="menu-link footer__menu-link" href="#">О компании</a>
            </li>
          </ul>
        </nav>
        <div class="footer__contacts">
          <a href="tel:+7(812)555-55-55" class="footer__contact"
            ><img src="./img/phone.svg" alt="phone-icon" />+7 (812) 555-55-55</a
          >
          <a href="#" class="footer__contact"
            ><img src="./img/point.svg" alt="point-icon" /> г. Санкт-Петербург, ул. Ефимова, 3</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'v-footer',
};
</script>

<style lang="scss" src="./comp-style/footer.scss"></style>
