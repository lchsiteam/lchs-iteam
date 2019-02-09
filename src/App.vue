<template>
  <div id="app">
    <sidebar/>
    <div id="app-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar'

export default {
  components: { Sidebar }
}
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  box-sizing: border-box;
  display: flex;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}

#app-view {
  width: calc(100% - 240px);
  padding-left: 240px;
  // overflow: hidden;
}
</style>
