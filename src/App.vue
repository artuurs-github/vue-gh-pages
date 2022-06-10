<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/planner">Planner</router-link> |
    <router-link to="/animals">Animals</router-link> |
    <router-link to="/async-component">Async Component</router-link> |
    <router-link to="/event-emitter">Event Emitter</router-link> |
    <router-link to="/jokes">VuexJokes</router-link> |
    <router-link to="/students">VuexStudents</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;

  padding: 30px;

  a {
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
