<template>

<div class="app">
  <div class="nav">

  <router-link to="/">home</router-link>
  <router-link to="/about">about</router-link>
  <router-link to="/todo">todo</router-link>
  </div>
  <router-view></router-view>
</div>

</template>


<script>
 
</script>

<style>
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-color: gainsboro;
  }

  .nav {
    display: flex;
    justify-content: space-evenly;
  }
  
 
</style>
