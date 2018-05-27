<template>
<div>
  <article class="container">
    <h1 class="pages-header">Блог</h1>
    <div class="row article-row">
      <div class="col-sm-4 post" v-for="article in articles" :key="article._id">
        <div class="post-wrap">
          <nuxt-link :to="'/blog/' + article._id">
            <img class="img-fluid" :src="article.image" :alt="article.title">
            <div class="today-box">
              <h4>{{ article.title }}</h4>
              <span>{{ article.date | dateFilter }}</span>
            </div>
            <p>{{ article.preview }}</p>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="row text-center" v-if="isPending">
      <div class="preloader-wrap pending">
        <svg aria-hidden="true" data-prefix="fas" data-icon="sync" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-sync fa-w-16 fa-3x"><path fill="currentColor" d="M440.935 12.574l3.966 82.766C399.416 41.904 331.674 8 256 8 134.813 8 33.933 94.924 12.296 209.824 10.908 217.193 16.604 224 24.103 224h49.084c5.57 0 10.377-3.842 11.676-9.259C103.407 137.408 172.931 80 256 80c60.893 0 114.512 30.856 146.104 77.801l-101.53-4.865c-6.845-.328-12.574 5.133-12.574 11.986v47.411c0 6.627 5.373 12 12 12h200.333c6.627 0 12-5.373 12-12V12c0-6.627-5.373-12-12-12h-47.411c-6.853 0-12.315 5.729-11.987 12.574zM256 432c-60.895 0-114.517-30.858-146.109-77.805l101.868 4.871c6.845.327 12.573-5.134 12.573-11.986v-47.412c0-6.627-5.373-12-12-12H12c-6.627 0-12 5.373-12 12V500c0 6.627 5.373 12 12 12h47.385c6.863 0 12.328-5.745 11.985-12.599l-4.129-82.575C112.725 470.166 180.405 504 256 504c121.187 0 222.067-86.924 243.704-201.824 1.388-7.369-4.308-14.176-11.807-14.176h-49.084c-5.57 0-10.377 3.842-11.676 9.259C408.593 374.592 339.069 432 256 432z" class=""></path></svg>
      </div>
    </div>
  </article>
</div>
</template>


<script>
import axios from 'axios'
 
import dayjs from 'dayjs'
import ru from 'dayjs/locale/ru'
dayjs.locale('ru')
 
export default {
  data() {
    return {
      position: 0,
      offset: 6,
      isPending: false,
      articles: [],
      noData: false
    }
  },
  async asyncData({ query, error }) {
    let sortquery = {"$orderby": {"date": -1}};
    let posts = await axios({
      url: `https://nuxtrest-2bb1.restdb.io/rest/posts?max=6&h=${JSON.stringify(sortquery)}`,
      method: "get",
      headers: {
        "content-type": "application/json",
        "x-apikey": "5a91ed5116d5526228b426f0",
        "cache-control": "no-cache"
      }
    })
    
    return {
       articles: posts.data
    }
    this.position = document.documentElement.scrollTop;
  },
  mounted() {
    window.addEventListener('scroll', e => {

      let scroll = document.documentElement.scrollTop;
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight;
      if (scroll > this.position && bottomOfWindow && !this.isPending && !this.noData) {

        this.isPending = true;
        console.log(this.oldScroll > this.scrollY);
        this.oldScroll = this.scrollY;

        this.loadData();


      }
    }, false)
  },
  methods: {
    async loadData() {
        let sortquery = {"$orderby": {"date": -1}};
        await axios({
          url: `https://nuxtrest-2bb1.restdb.io/rest/posts?max=2&skip=${this.offset}&h=${JSON.stringify(sortquery)}`,
          method: "get",
          headers: {
            "content-type": "application/json",
            "x-apikey": "5a91ed5116d5526228b426f0",
            "cache-control": "no-cache"
          }
        }).then( (res) => {
          this.isPending = false;
          console.log(res.data.length);
          if(res.data.length !== 0) {
            this.offset += 6;
          }  else {
            this.noData = true;
          }

          if(res.data.length < 6) {
            this.noData = true;
          }
          
          console.log(res.data);
          res.data.forEach(doc => {
            const data = {
              _id: doc._id,
              title: doc.title,
              preview: doc.preview,
              image: doc.image,
              category: doc.category,
              body: doc.body,
              postid: doc.postid,
              date: doc.date
            };
            this.articles.push(data);
          })

        });      

    }
  },
  head () {
    return {
      title: 'Блог'
    }
  },
  filters: {
    dateFilter (value) {
      if (value) {
        return dayjs(value).format('DD MMMM YYYY')
      }
    }
  }
}

</script>


<style scoped>
  .post {
    padding-top: 30px;
  },
  .post p {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;    
    font-weight: 350;
    color: #35495e;
    letter-spacing: 1px;
    padding: 15px;
  }
  .post-wrap {
    box-shadow: 0 2px 2px #aaa;
    transition: all 0.3s ease;
  }
  .post-wrap:hover {
    box-shadow: 4px 4px 4px #aaa;
  }
  h3 {
    text-align: center;
    display: block;
  } 
  a:hover {
    color: #35495e;
    text-decoration: none !important;
  }
  .pending {
    margin: 50px auto;
  }


  .today-box {
  background: linear-gradient(to left, #43436d, #4b548f8e), #5d5d5f;
  color: #FFF;
  padding: 37px 40px;
  position: relative;
  box-shadow: 0px 0px 40px -9px #485fed;
  margin-bottom: 50px;
}
.today-box::before {
  content: "";
  background: linear-gradient(to left, #485fed, rgba(255, 44, 118, 0.25)), #485fed;
  opacity: 0.4;
  z-index: -1;
  /*negative*/
  /* relative with .mobile-wrapper*/
  display: block;
  width: 100%;
  height: 40px;
  margin: auto;
  position: absolute;
  bottom: -13px;
  left: 50%;
  transform: translatex(-50%);
  border-radius: 50%;
  box-shadow: 0px 0px 40px 0 #485fed;
}

 .today-box {
   color: #fff;
 }
</style>