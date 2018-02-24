<template>
<div>  
  <Navbar :categories="categories" />
  <article class="container">
    <div class="row">
      <div class="col-sm-4 post" v-for="article in articles" v-show="article.category == $route.params.cat">
        <div class="post-wrap">
          <nuxt-link :to="'/articles/' + article.id">
            <img class="img-fluid" :src="article.image" :alt="article.title">
            <h3>{{ article.title }}</h3>
            <p>{{ article.preview }}</p>
            <span>{{ article.date }}</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </article>  
  <Footer />
</div>
</template>


<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import axios from 'axios'

export default {
  components: {    
    Navbar,
    Footer
  },
  async asyncData({ query, error }) {
    let posts = await axios.get('http://nuxt-blog-nuxt-blog.a3c1.starter-us-west-1.openshiftapps.com/rest.php/posts')
    let cats = await axios.get('http://nuxt-blog-nuxt-blog.a3c1.starter-us-west-1.openshiftapps.com/rest.php/categories')
    return {
       articles: posts.data,
       categories: cats.data
    }
  },
  head () {
    return {
      title: 'Главная'
    }
  }
}

</script>


<style scoped>
  .post h3,
  .post p,
  .post span {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;    
    font-weight: 350;
    color: #35495e;
    letter-spacing: 1px;
    padding: 15px;
  }
  .post-wrap {
    box-shadow: 0 2px 2px #aaa;
    padding: 0 0 25px 0;
  }
  .post-wrap:hover {
    box-shadow: 1px 3px 2px #aaa;
  }
  h3 {
    text-align: center;
    display: block;
  } 
  a:hover {
    color: #35495e;
    text-decoration: none !important;
  }
</style>