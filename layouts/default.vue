<template>
  <main>
    <Navbar/>
    <nuxt />
    <Side />
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
  }
}
</script>