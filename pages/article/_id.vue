<template>
  <article class="container">
    <h1>{{title}}</h1>
    <img class="img-fluid" :src="image" :alt="title">
    <p class="post-body">{{body}}</p>
    <div class="row justify-content-around">
      <nuxt-link :to="'/'" class="btn btn-outline-primary back-link" tag="button">Back</nuxt-link>
    </div>
  </article>
</template>

<script>
import axios from 'axios'

export default {
  validate ({ params }) {
    return !isNaN(+params.id)
  },
  async asyncData({params, error}){
    const {data} = await axios.get(`http://vue-rest-blog-vue-rest-blog.a3c1.starter-us-west-1.openshiftapps.com/rest.php/test/${+params.id}`)
    return data
  },
  head () {
    return {
      title: this.title
    }
  }
}

</script>
<style scoped>
.post-body {
    padding-top: 35px;
    padding-bottom: 35px;
    text-align: center;
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 500;
    font-size: 1.2em;
    color: #35495e;
    letter-spacing: 1px;
}
</style>
