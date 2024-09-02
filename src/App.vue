<script>
import { RouterLink, RouterView } from 'vue-router'
import FooterComponent from './components/HomeMaster/FooterComponent.vue';
import NavbarComponent from './components/HomeMaster/NavbarComponent.vue';

export default {
  components: { NavbarComponent, FooterComponent }
}
</script>

<template>
 <navbar-component></navbar-component>
  <RouterView />
  <footer-component></footer-component>
</template>

<style></style>
