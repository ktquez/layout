<template>
  <div>
    <header class="header">
      <div>
        <h1>Welcome to the Vue.js => Template Webpack + Vue Extend layout</h1>
        <a class="github-button"
          href="https://github.com/ktquez/layout"
          data-size="large"
          data-show-count="true"
          aria-label="Star ktquez/layout on GitHub">
            Star
        </a>
      </div>
    </header>
    <div class="home-container">
      <router-view />
    </div>
    <footer class="footer">
      <a href="https://github.com/ktquez/layout/tree/master/demo">See demo code</a>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'default',

    head: {
      script () {
        return [
          { a: true, defer: true, s: 'https://buttons.github.io/buttons.js' }
        ]
      }
    }
  }
</script>

<style>
@import '../assets/style.css';

.home-container {
  width: 100%;
  height: 70vh;
  position: relative;
}

.header, .footer {
  height: 15vh;
  padding: 20px;
}
</style>
