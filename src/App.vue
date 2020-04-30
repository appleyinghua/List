<template>
  <div id="app" v-cloak>
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
import List from './components/List'
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    List,
    Navbar
  },
  data () {
    return {
    }
  },
  computed: {
  }
}
</script>

<style>
[v-cloak] {
  display: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
