<template>

<b-navbar toggleable="md" type="dark" sticky>

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <nuxt-link :to="'/'" tag="a" class="navbar-brand"><img src="~/assets/f4.png" alt="" class="logo img-fluid"></nuxt-link>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <li class="nav-item">
        <nuxt-link :to="'/'" tag="a" class="nav-link">Главная</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link :to="'/blog'" tag="a" class="nav-link">Блог</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link :to="'/portfolio'" tag="a" class="nav-link">Портфолио</nuxt-link>
      </li>
    </b-navbar-nav>
  </b-collapse>
</b-navbar>
</template>

<style scoped>
.navbar {
  background-color: rgba(0,0,0,0.5);
}
.logo {
  max-height: 30px; 
}
.nav-link {
  color: #fff !important;
}

</style>