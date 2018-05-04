<template>
  <header class="main-header">
        <nav class="main-nav">
          <ul class="nav-links">
            <nuxt-link to="/" tag="li" class="nav-link"><a>All Posts</a></nuxt-link>
            <nuxt-link to="/about" tag="li" class="nav-link"><a>About</a></nuxt-link>
          </ul>
        </nav>
      <section class="container">
        <nuxt-link to="/users">Users</nuxt-link>
        <div>
          <logo/>
          <h1 class="title">
            Acin
          </h1>
          <h2 class="subtitle">
            Software Help System
          </h2>
          <div class="links">
            <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
            <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
          </div>
          <input type="text" v-model="userId">
          <button @click="onLoadUser">Load User</button>
        </div>
      </section>
  </header>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  data(){
    return{
      userId: ''
    }
  },
  methods:{
    onLoadUser(){
      this.$router.push('/users' + this.userId)
    }
  }
}
</script>

<style scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #022d30;
  height: 4.5rem;
}

.main-nav {
  height: 100%;
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.nav-link{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  padding: 0.3rem;
}

.nav-link a {
  display: block;
  text-decoration: none;
  color: white;
}

.nav-link a:hover, .nav-link a:active, .nav-link.nuxt-link-active a {
  color: #06c4d1;
}

.nav-link.nuxt-link-active{
  border-bottom: 3px solid #06c4d1;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>
