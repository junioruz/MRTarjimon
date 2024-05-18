<template>
  <div id="app">
    <header>
      <HeaderVue />
    </header>

    <main>
      <MainVue />
    </main>
  </div>
</template>

<script>
import HeaderVue from './components/HeaderVue.vue';
import MainVue from './components/MainVue.vue';


export default {
  name: 'App',
  components: {
    HeaderVue,
    MainVue
  }
}
</script>

<style lang="scss" scoped>

</style>