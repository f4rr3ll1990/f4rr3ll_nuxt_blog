<template>
<div>
  <section class="hero">
    <div class="hero__content container">
      <h3 class="hero__content-header noselect">Web-Developer</h3>
      <p class="hero__content-description noselect">
        WEB-РАЗРАБОТЧИК / HTML-ВЕРСТАЛЬЩИК <br>
        СПЕЦИАЛИСТ CMS OPENCART / ModX <br>
        ПРОГРАММИСТ PHP / JAVASCRIPT</p>
    </div>
    <no-ssr>
      <vue-particles
        color="#c2e9fb"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#c2e9fb"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="6"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        style="z-index: 0;">
      </vue-particles>
    </no-ssr> 
  </section>
  <Stack />
  <hr> 
  <About />
</div>
</template>


<script>
import Stack from '~/components/Stack'
import About from '~/components/About'
export default {
  components: {
    Stack,
    About
  },
  head() {
    return {
      title: "Главная"
    };
  }
};
</script>

<style lang="sass" scoped>

  @import url('https://fonts.googleapis.com/css?family=Raleway:100')

  a:hover
    color: #35495e
    text-decoration: none !important

  #particles-js
    background: linear-gradient(310deg, #204158 30%, transparent 30%), linear-gradient(340deg, transparent 58%, #0A253E 58%), #16334A
    background-size: cover
    position: absolute    
    top: 0
    left: 0
    width: 100%
    height: 100vh    
    z-index: 20 !important;


  .hero
    display: -webkit-box
    display: -moz-box
    display: -ms-flexbox
    display: -webkit-flex
    display: flex
    align-items: center
    justify-content: center
    height: 100vh

    &__content
      color: #fff
      text-align: center
      z-index: 999

      &-header
        font-size: 7rem
        font-family: 'Raleway', sans-serif
        text-shadow: 8px 8px #000
        text-transform: uppercase
        margin: 0
        @media (max-width: 767px)    
          font-size: 3rem


      &-description
        font-size: 1.3rem
        font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif  
        font-weight: 350
        letter-spacing: 1px
        padding: 15px
        text-align: center
        display: block

</style>
