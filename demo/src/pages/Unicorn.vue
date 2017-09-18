<template>
  <div class="unicorn">
    <div>
      <router-link class="link" to="/">HOME</router-link>
    </div>
    <img src="../assets/unicorn.png" alt="Unicorn - Ktquez Playground">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.link {
  color: white;
}

.unicorn {
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
</style>
