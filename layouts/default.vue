<template>
  <main>
    <div id="preloader" v-if="!loaded">
      <div class="preloader-wrap">
        <svg aria-hidden="true" data-prefix="fas" data-icon="sync" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-sync fa-w-16 fa-3x"><path fill="currentColor" d="M440.935 12.574l3.966 82.766C399.416 41.904 331.674 8 256 8 134.813 8 33.933 94.924 12.296 209.824 10.908 217.193 16.604 224 24.103 224h49.084c5.57 0 10.377-3.842 11.676-9.259C103.407 137.408 172.931 80 256 80c60.893 0 114.512 30.856 146.104 77.801l-101.53-4.865c-6.845-.328-12.574 5.133-12.574 11.986v47.411c0 6.627 5.373 12 12 12h200.333c6.627 0 12-5.373 12-12V12c0-6.627-5.373-12-12-12h-47.411c-6.853 0-12.315 5.729-11.987 12.574zM256 432c-60.895 0-114.517-30.858-146.109-77.805l101.868 4.871c6.845.327 12.573-5.134 12.573-11.986v-47.412c0-6.627-5.373-12-12-12H12c-6.627 0-12 5.373-12 12V500c0 6.627 5.373 12 12 12h47.385c6.863 0 12.328-5.745 11.985-12.599l-4.129-82.575C112.725 470.166 180.405 504 256 504c121.187 0 222.067-86.924 243.704-201.824 1.388-7.369-4.308-14.176-11.807-14.176h-49.084c-5.57 0-10.377 3.842-11.676 9.259C408.593 374.592 339.069 432 256 432z" class=""></path></svg>
      </div>
    </div>
    <Navbar/>
    <nuxt />
    <Side class="d-none d-sm-block" />
    <Footer />
  </main>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import Side from '~/components/Side.vue'
export default {
  components: {    
    Navbar,
    Footer,
    Side
  },
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    this.loaded = true;
  }
}
</script>

<style>
#preloader {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
}
.preloader-wrap {
  animation: preload-2 ease-in-out infinite;
  animation-duration: 1s;
  height: 50px;
  width: 50px;
}
.fa-sync {    
  color: #666;
  animation: preload ease-in-out infinite;
  animation-duration: 1s;
}
@-webkit-keyframes preload {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
            transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(3600deg);
            transform: rotate(3600deg);
  }
}
@keyframes preload {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
            transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(3600deg);
            transform: rotate(3600deg);
  }
}


@-webkit-keyframes preload-2 {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.3);
            transform: scale(1.3);
  }
  100% {
    -webkit-transform: scale(.5);
            transform: scale(.5);
  }
}
@keyframes preload-2 {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.3);
            transform: scale(1.3);
  }
  100% {
    -webkit-transform: scale(.5);
            transform: scale(.5);
  }
}
</style>
