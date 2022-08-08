<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/dataBinding">DataBinding</router-link> |
    <router-link to="/dataBindingHTML">DataBindingHTML</router-link> |
    <router-link to="/dataBindingInput">DataBindingInput</router-link> |
    <router-link to="/dataBindingAttribue">DataBindingAttribue</router-link> |
    <router-link to="/dataBindingClass">DataBindingClass</router-link> |
    <router-link to="/dataBindingVFor">DataBindingVFor</router-link> |
    <router-link to="/dataBindingVif">DataBindingVif</router-link> |
    <router-link to="/dataBindingVOn">DataBindingVOn</router-link> |
    <router-link to="/dataBindingMock">DataBindingMock</router-link> |
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
