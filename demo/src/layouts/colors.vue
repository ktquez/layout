<template>
  <div class="colors">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'layoutColors'
  }
</script>

<style>
@import '../assets/style.css';

.colors {
  width: 100vw;
  height: 100vh;
  color: white;
  background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, purple);
}
</style>
