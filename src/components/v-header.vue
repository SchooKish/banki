<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <nav class="menu">
          <ul class="menu-list">
            <li class="menu-item">
              <a class="menu-link" href="#">Каталог</a>
            </li>
            <li class="menu-item">
              <a class="menu-link" href="#">Доставка</a>
            </li>
            <li class="menu-item">
              <a class="menu-link" href="#">Оплата</a>
            </li>
            <li class="menu-item">
              <a class="menu-link" href="#">Контакты</a>
            </li>
            <li class="menu-item">
              <a class="menu-link" href="#">О компании</a>
            </li>
          </ul>
        </nav>
        <div class="header__search">
          <input type="text" class="header__search-area" placeholder="Поиск по названию картины" />
          <button class="header__search-btn">Найти</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'v-header',
};
</script>

<style lang="scss" src="./comp-style/header.scss"></style>
