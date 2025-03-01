<template>
    <header class="header">
      <div class="container">
        <h1 class="logo">logo</h1>
        <nav>
          <ul>
            <li to="/">Главная</li>
            <li to="/about">О нас</li>
            <li to="/contact">Контакты</li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>
  .header {
    background: slategray;
    color: white;
    padding: 15px 0;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  .logo {
    font-size: 24px;
    font-weight: bold;
  }
  nav ul {
    list-style: none;
    display: flex;
    gap: 15px;
  }
  nav a {
    color: white;
    text-decoration: none;
  }
  nav a:hover {
    text-decoration: underline;
  }
  </style>