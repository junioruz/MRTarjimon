<template>
  <div id="app">
    <header>
      <HeaderVue />
    </header>

    <main>
      <MainVue />
      <InfoVue />
    </main>
  </div>
</template>

<script>
import HeaderVue from './components/HeaderVue.vue';
import MainVue from './components/MainVue.vue';
import InfoVue from './components/InfoVue.vue'
import ModalVue from './components/ModalVue.vue'



export default {
  name: 'App',
  components: {
    HeaderVue,
    MainVue,
    InfoVue,
    ModalVue
  }
}
</script>

<style lang="scss" scoped>

</style>