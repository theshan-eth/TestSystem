<template>
    <div class="welcome">
      <h1>Welcome</h1>
      <p>Please <router-link to="/login">Login</router-link> or <router-link to="/register">Register</router-link> to continue.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "WelcomePage",
  };
  </script>
  