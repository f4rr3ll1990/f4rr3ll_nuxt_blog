<template>
<div>  
  <Navbar :categories="categories" />
  <article class="container">
    <div class="row article-row">
      <div class="col-sm-4 post" v-for="article in articles">
        <div class="post-wrap">
          <nuxt-link :to="'/articles/' + article._id">
            <img class="img-fluid" :src="article.image" :alt="article.title">
            <h3>{{ article.title }}</h3>
            <p>{{ article.preview }}</p>
            <span>{{ article.date | dateFilter }}</span>
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
import moment from 'moment'

export default {
  components: {    
    Navbar,
    Footer
  },
  async asyncData({ query, error }) {
    let posts = await axios({
      url: `https://nuxtrest-2bb1.restdb.io/rest/posts`,
      method: "get",
      headers: {
        "content-type": "application/json",
        "x-apikey": "5a91ed5116d5526228b426f0",
        "cache-control": "no-cache"
      }
    })
    let cats = await axios({
      url: `https://nuxtrest-2bb1.restdb.io/rest/categories`,
      method: "get",
      headers: {
        "content-type": "application/json",
        "x-apikey": "5a91ed5116d5526228b426f0",
        "cache-control": "no-cache"
      }
    })
    return {
       articles: posts.data,
       categories: cats.data
    }
  },
  head () {
    return {
      title: 'Главная'
    }
  },
  filters: {
    dateFilter (value) {
      if (value) {
        return moment(String(value)).format('MM/DD/YYYY hh:mm')
      }
    }
  }
}

</script>


<style scoped>
  .article-row {
    padding-top: 30px;
  }
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