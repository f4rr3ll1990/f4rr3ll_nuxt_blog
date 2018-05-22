<template>
<div>
  <article class="container">
    <h1>{{article.title}}</h1>
    <img class="img-fluid" :src="article.image" :alt="article.title">
    <no-ssr>
      <p class="post-body" v-html="article.body"></p>
    </no-ssr>
    <div class="row justify-content-around">
      <button @click="$router.go(-1)" class="btn btn-outline-dark back-link">
        <svg aria-hidden="true" data-prefix="fas" data-icon="chevron-circle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-chevron-circle-left fa-w-16 fa-2x"><path fill="currentColor" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z" class=""></path></svg> Назад</button>
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
.post-body span {
  font-size: 1em;
}
.back-link svg {
  height: 0.6em;
}
</style>
