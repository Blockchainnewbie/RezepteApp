<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav ul {
  list-style-type: none;
  display: flex;
  gap: 10px;
}
</style>
