<template>
  <article class="container">
    <h1>Главная</h1>
    <div class="row">
      <div class="col-sm-4"v-for="article in articles">
        <nuxt-link :to="'/article/' + article.id">
          <img class="img-fluid" :src="article.image" :alt="article.title">
          <h3>{{ article.title }}</h3>
        </nuxt-link>
      </div>
    </div>
  </article>  
</template>


<script>
import axios from 'axios'

export default {
  async asyncData () {
    const {data} = await axios.get('http://vue-rest-blog-vue-rest-blog.a3c1.starter-us-west-1.openshiftapps.com/rest.php/test')
    return {articles:data}
  },
  head () {
    return {
      title: 'Главная'
    }
  }
}

</script>


<style scoped>
  h3 {
    text-align: center;
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    color: #35495e;
    letter-spacing: 1px;
  } 
  a:hover {
    color: #35495e;
    text-decoration: none !important;
  }
</style>