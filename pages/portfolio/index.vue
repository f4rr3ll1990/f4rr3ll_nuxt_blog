<template>
  <div id="portfolio">
    <article class="container">
      <h1 class="pages-header">Портфолио</h1>
      <div class="row article-row">
        <Pcard v-for="port in portfolio" :key="port._id" :data="port"></Pcard>
      </div>
    </article>
  </div>
</template>


<script>
import axios from 'axios'
import Pcard from '@/components/Pcard'

export default {
  components: {
    Pcard
  },
  async asyncData({ query, error }) {
    let portfolio = await axios({
      url: `https://nuxtrest-2bb1.restdb.io/rest/portfolio`,
      method: "get",
      headers: {
        "content-type": "application/json",
        "x-apikey": "5a91ed5116d5526228b426f0",
        "cache-control": "no-cache"
      }
    })
    
    return {
       portfolio: portfolio.data
    }
  },
  head () {
    return {
      title: 'Портфолио'
    }
  }
}

</script>


<style scoped>
  .article-row {
    padding-top: 30px;
  }
</style>