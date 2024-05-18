<template>
  <div class="header">
    <div class="header__left">
      <i class='bx bx-menu-alt-left'></i>
      <h2 class="header__logo">
        MRTarjimon
      </h2>
    </div>
    <div class="header__right">
      <button @click="toggleDropdown" class="header__dropdown">
        {{ selectedLanguage }}
        <i class='bx bx-chevron-down'></i>
      </button>
      <ul v-if="isOpen" class="header__lang-items">
        <li class="header__lang-item" v-for="language in languages" :key="language.code"
          @click="selectLanguage(language)">
          {{ language.name }}
        </li>
      </ul>
      <div class="header__theme">
        <button class="theme-btn">
          <span class="day-btn">
            <i class='bx bxs-sun'></i>
          </span>
          <span class="night-btn">
            <i class='bx bx-moon'></i>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">

import { ref } from 'vue'
    const languages = ref([
      { name: 'Ўз', code: 'kiril'},
      { name: 'Ru', code: 'ru'},
      { name: 'En', code: 'en'}
    ]);
    let selectedLanguage = ref('O`z');
    let isOpen = ref(false);

    function toggleDropdown() {
      isOpen.value = !isOpen.value
    };

    function selectLanguage(language) {
      selectedLanguage = language.name;
      isOpen.value = false;
    }


</script>

<style lang="scss" scoped>

.header {

  width: 100%;
  background: #353535;
  padding: 20px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  // .header__left

  &__left {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  // .header__logo

  &__logo {
    color: #FFF;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 25.5px;
  }

  // .header__right

  &__right {
    position: relative;
    display: flex;
    align-items: center;
    gap: 15px;
  }

  // .header__dropdown

  &__dropdown {
    display: flex;
    align-items: center;
    // font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 25.5px;
    background: none;
    gap: 3px;
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    padding: 6px;
    border-radius: 6px;

    &:focus{
      outline: none;
    }
  }

  // .header__lang-items

  &__lang-items {
    // display: none;
    list-style: none;
    position: absolute;
    z-index: 1000;
    top: 35px;
    background: #1f1f1f;
    padding: 8px 6px;
    width: 80px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    
  }

  // .header__lang-item

  &__lang-item {
    font-family: Roboto;
    color: rgba(255, 255, 255, 0.7);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 25.5px;
    width: 100%;
    height: 30px;
    padding-left: 12px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    &:hover {
      background: #1D2C36;
    }
  }
  
  &__theme {
  }
}

.theme-btn {
  display: flex;
  align-items: center;
  border-radius: 12px;
  gap: 10px;
  background: #1f1f1f;
  padding: 6px;

  span {
    display: flex;
    align-items: center;
  }
}

.day-btn {}

.bx {}

.bxs-sun, .bx-moon {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
}

.night-btn {}


.bx {}

.bx-menu-alt-left {
  color: #FFF;
  font-size: 35px;
}

</style>