<template>
  <div id="app">
    <div>
      <router-link class="link" to="/unicorn">UNICORN PAGE</router-link>
    </div>
    <img src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
#app {
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.link {
  color: #42b983;
}
</style>
