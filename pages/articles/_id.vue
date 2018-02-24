<template>
<div>
  <Navbar :categories="categories" />
  <article class="container">
    <h1>{{article.title}}</h1>
    <img class="img-fluid" :src="article.image" :alt="article.title">
    <p class="post-body" v-html="article.body"></p>
    <div class="row justify-content-around">
      <nuxt-link :to="'/'" class="btn btn-outline-primary back-link" tag="button">Back</nuxt-link>
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
  validate ({ params }) {
    return !isNaN(+params.id)
  },
  async asyncData({ query, error }) {
    let post = await axios.get('http://nuxt-blog-nuxt-blog.a3c1.starter-us-west-1.openshiftapps.com/rest.php/posts/${+params.id}`')
    let cats = await axios.get('http://nuxt-blog-nuxt-blog.a3c1.starter-us-west-1.openshiftapps.com/rest.php/categories')
    return {
       article: post.data[0],
       categories: cats.data
    }
  },
  head () {
    return {
      title: this.article.title,
      meta: [
        { hid: 'og-title', property: 'og:title', content: this.article.title },
        {
          hid: `og:image`,
          property: 'og:image',
          content: this.article.image
        }
      ]
    }
  }
}

</script>
<style scoped>
.post-body {
    font-weight: 400;
    font-style: normal;
    text-rendering: optimizeLegibility;
    font-family: "-apple-system",BlinkMacSystemFont,Arial,sans-serif;
    padding-top: 35px;
    padding-bottom: 35px;
    text-align: left;
    display: block;
    font-size: 1.2em;
    color: #35495e;
}
</style>
