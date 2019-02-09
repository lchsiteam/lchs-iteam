<template>
  <div id="sidebar">
    <div class="sidebar-logo">
      <h3>iTeam</h3>
    </div>
    <ul class="sidebar-list">
      <li :class="{ selected: currentRouteName == 'Home' } " @click="goToPage('Home')">Home</li>
      <li :class="{ selected: currentRouteName == 'AboutUs' }" @click="goToPage('AboutUs')">About Us</li>
      <li :class="{ selected: currentRouteName == 'OurWork' }" @click="goToPage('OurWork')">Our Work</li>
      <li :class="{ selected: currentRouteName == 'JoinUs' }" @click="goToPage('JoinUs')">Join Us</li>
      <li :class="{ selected: currentRouteName == 'Podcasts' }" @click="goToPage('Podcasts')">Podcasts</li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      currentRouteName () {
        return this.$route.name
      }
    },
    methods: {
      goToPage(name) {
        this.$router.push({ name: name })
      }
    },
  }
</script>

<style scoped lang="scss">
#sidebar {
  background-color: #eee;
  width: 240px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}

.sidebar-logo {
  font-size: 1.2em;
  text-align: center;
}

.sidebar-list {
  cursor: pointer;
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0;

  li {
    padding: 10px 16px;
    margin: 0;
    transition: 100ms ease;

    &:hover {
      background-color: #3498db;
      color: #fff;
    }

    &.selected {
      background-color: #3498db;
      color: #fff;
    }
  }
}

</style>
