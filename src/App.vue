<template>
  <div id="app">
    <div id="menu">
      <div id="brand">
        <router-link to="/">
          <img src="/images/logo.png">
        </router-link>
      </div>
      <div id="side">
        <router-link to="/">
        <div class="menu-item browse">
          <img src="/images/home.png">
          </div>
        </router-link>
        <router-link to="/location">
          <div class="menu-item browse">
            <img src="/images/map.png">
          </div>
        </router-link>
        <router-link to="/about">
          <div class="menu-item">
            <img src="/images/about.png">
          </div>
        </router-link>
      </div>
    </div>
    <router-view />
    <footer class="footer">
  <div>Github -
    <a href="https://github.com/landontowers/CS260-CP3">landontowers</a>
  </div>
</footer>
  </div>
</template>

<style>
  * {
    box-sizing: border-box;
  }

  body {
    margin: 50px 100px;

  }

  #menu {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 5px;
    grid-template-areas: "none brand side";
    margin-bottom: 50px;
  }

  #menu a {
    color: #B84901;
  }

  #brand {
    grid-area: brand;
    display: flex;
    justify-content: center;
  }

  #brand img {
    height: 200px;
  }

  #side {
    grid-area: side;
    display: flex;
    justify-content: flex-end;
  }

  #side img {
    width: 50px;
  }

  .menu-item {
    display: flex;
    flex-direction: column;
  }

  .menu-item p {
    margin: 0px;
  }

  .browse {
    margin-right: 50px;
  }

  footer {
    margin-top: 100px;
    text-align: center;
}
</style>