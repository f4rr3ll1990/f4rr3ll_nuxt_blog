<template>
    <div id="side">
        <div class="flex-up" @click="scrollTop">
            <svg aria-hidden="true" data-prefix="fas" data-icon="chevron-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="icon-3d svg-inline--fa fa-chevron-up fa-w-14 fa-9x"><path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z" class=""></path></svg>

        </div>

        <div class="flex-social">
            <a href="https://github.com/f4rr3ll1990" target="_blank"><font-awesome-icon class="icon-3d glitch" :icon="['fab', 'github']" /></a>
            <a href="tg://resolve?domain=f4rr3ll90"><font-awesome-icon class="icon-3d glitch" :icon="['fab', 'telegram']" /></a>
            <a href="https://www.linkedin.com/in/mikhail-gura-939068107" target="_blank"><font-awesome-icon class="icon-3d glitch" :icon="['fab', 'linkedin']" /></a>
            <a href="skype:michail_gura1990?chat"><font-awesome-icon class="icon-3d glitch" :icon="['fab', 'skype']" /></a>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'side',
    methods: {
    scrollTop: function() {
      const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
          window.requestAnimationFrame(scrollToTop);
          window.scrollTo(0, c - c / 8);
        }
      }
      scrollToTop();
    }
  }
  }
</script>

<style scoped >
a {
  color: unset;
}
.flex-up,
.flex-social {
  z-index: 2;
  width: 8vw;
  min-height: 100vh;
  position: fixed;
  background: #f0f0f0;
  color: #666;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  flex-direction: column;
}
.flex-up:hover,
.flex-social:hover {
  background-color: rgba(0,0,0,0.5);
  color: #fff;
}

.flex-up {
  top: 59px;
  left: 0;
}

.flex-social {
  top: 59px;
  right: 0;
}

.icon-3d {
  height: 70px;
  width: 70px;
  padding: 10px;
}
.glitch:hover {
  -webkit-animation-name: color-blink, color-blink-2;
          animation-name: color-blink, color-blink-2;
  -webkit-animation-duration: 1s;
          animation-duration: 1s;
  -webkit-animation-delay: 0s, .3s;
          animation-delay: 0s, .3s;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  display: block;
  -webkit-transform: skew(0deg);
          transform: skew(0deg);
}
@-webkit-keyframes color-blink {
  0% {
    -webkit-transform: skew(0deg);
            transform: skew(0deg);
    color: #fff;
  }
  19% {
    color: #fff;
    -webkit-transform: skew(-10deg);
            transform: skew(-10deg);
  }
  20% {
    color: #ff5b00;
    -webkit-transform: skew(10deg);
            transform: skew(10deg);
  }
  25% {
    color: #fff;
    -webkit-transform: skew(0deg);
            transform: skew(0deg);
  }
  39% {
    color: #fff;
    -webkit-transform: skew(-20deg);
            transform: skew(-20deg);
  }
  40% {
    color: #ff5b00;
    -webkit-transform: skew(20deg);
            transform: skew(20deg);
  }
  50% {
    color: #fff;
    -webkit-transform: skew(0deg);
            transform: skew(0deg);
  }
  100% {
    color: #fff;
    -webkit-transform: skew(0deg);
            transform: skew(0deg);
  }
}
@keyframes color-blink {
  0% {
    -webkit-transform: skew(0deg);
            transform: skew(0deg);
    color: #fff;
  }
  19% {
    color: #fff;
    -webkit-transform: skew(-10deg);
            transform: skew(-10deg);
  }
  20% {
    color: #ff5b00;
    -webkit-transform: skew(10deg);
            transform: skew(10deg);
  }
  25% {
    color: #fff;
    -webkit-transform: skew(0deg);
            transform: skew(0deg);
  }
  39% {
    color: #fff;
    -webkit-transform: skew(-20deg);
            transform: skew(-20deg);
  }
  40% {
    color: #ff5b00;
    -webkit-transform: skew(20deg);
            transform: skew(20deg);
  }
  50% {
    color: #fff;
    -webkit-transform: skew(0deg);
            transform: skew(0deg);
  }
  100% {
    color: #fff;
    -webkit-transform: skew(0deg);
            transform: skew(0deg);
  }
}


@-webkit-keyframes color-blink-2 {
  0% {
    -webkit-transform: skew(0deg);
            transform: skew(0deg);
    color: #fff;
  }
  19% {
    color: #fff;
    -webkit-transform: skew(10deg);
            transform: skew(10deg);
  }
  20% {
    color: #ff5b00;
    -webkit-transform: skew(-10deg);
            transform: skew(-10deg);
  }
  25% {
    color: #fff;
    -webkit-transform: skew(0deg);
            transform: skew(0deg);
  }
  39% {
    color: #fff;
    -webkit-transform: skew(20deg);
            transform: skew(20deg);
  }
  40% {
    color: #09cc4a;
    -webkit-transform: skew(-20deg);
            transform: skew(-20deg);
  }
  50% {
    color: #fff;
    -webkit-transform: skew(0deg);
            transform: skew(0deg);
  }
  100% {
    color: #fff;
    -webkit-transform: skew(0deg);
            transform: skew(0deg);
  }
}
@keyframes color-blink-2 {
  0% {
    -webkit-transform: skew(0deg);
            transform: skew(0deg);
    color: #fff;
  }
  19% {
    color: #fff;
    -webkit-transform: skew(10deg);
            transform: skew(10deg);
  }
  20% {
    color: #ff5b00;
    -webkit-transform: skew(-10deg);
            transform: skew(-10deg);
  }
  25% {
    color: #fff;
    -webkit-transform: skew(0deg);
            transform: skew(0deg);
  }
  39% {
    color: #fff;
    -webkit-transform: skew(20deg);
            transform: skew(20deg);
  }
  40% {
    color: #09cc4a;
    -webkit-transform: skew(-20deg);
            transform: skew(-20deg);
  }
  50% {
    color: #fff;
    -webkit-transform: skew(0deg);
            transform: skew(0deg);
  }
  100% {
    color: #fff;
    -webkit-transform: skew(0deg);
            transform: skew(0deg);
  }
}

</style>
