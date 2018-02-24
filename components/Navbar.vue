<template>
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <nuxt-link :to="'/'" tag="a" class="navbar-brand"><img src="~/assets/f4.png" alt="" class="logo img-fluid"></nuxt-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <nuxt-link :to="'/'" tag="a" class="nav-link">Главная</nuxt-link>
      </li>
      <li v-for="category in categories" class="nav-item">
        <nuxt-link :to="'/categories/' + category.cat_id" tag="a" class="nav-link">{{ category.cat_name }}</nuxt-link>
      </li>
    </ul>
  </div>
</nav>
</template>
<script>
export default {
  props: ['categories']
}
</script>


<style scoped>
.logo {
  max-height: 30px; 
}
.nav-link {
  color: #fff !important;
}
</style>