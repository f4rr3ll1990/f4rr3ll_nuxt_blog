<template>
<div>
  <article class="container">
    <h1>{{article.title}}</h1>
    <img class="img-fluid" :src="article.image" :alt="article.title">
    <no-ssr>
      <p class="post-body" v-html="article.body"></p>
    </no-ssr>
    <div class="row justify-content-around">
      <nuxt-link :to="'/'" class="btn btn-outline-primary back-link" tag="button">Back</nuxt-link>
    </div>
  </article> 
</div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    // if (process.server) {

    let post = await axios({
      url: `https://nuxtrest-2bb1.restdb.io/rest/posts/${params.id}`,
      method: "get",
      headers: {
        "content-type": "application/json",
        "x-apikey": "5a91ed5116d5526228b426f0",
        "cache-control": "no-cache"
      }
    })
    return {
       article: post.data
    }
    // }
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
