<template>
    <footer class="footer navbar-fixed-bottom">
      <div class="container">
        <div class="row footer-row">
          <div class="flex-social">
              <a href="https://github.com/f4rr3ll1990" target="_blank"><font-awesome-icon class="icon-3d glitch" :icon="['fab', 'github']" /></a>
              <a href="tg://resolve?domain=f4rr3ll90"><font-awesome-icon class="icon-3d glitch" :icon="['fab', 'telegram']" /></a>
              <a href="https://www.linkedin.com/in/mikhail-gura-939068107" target="_blank"><font-awesome-icon class="icon-3d glitch" :icon="['fab', 'linkedin']" /></a>
              <a href="skype:michail_gura1990?chat"><font-awesome-icon class="icon-3d glitch" :icon="['fab', 'skype']" /></a>
          </div>
          <div class="copyright text-muted">©F4rr3ll - 2018</div>
        </div>
      </div>
    </footer>
</template>
<style scoped>
.footer {
  z-index: 20 !important;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 90px;
  background-color: #000;
  padding-top: 30px;
}
.flex-social,
.footer-row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  flex-direction: row;
}
.footer-row {
  -webkit-box-pack: space-between;
  -webkit-justify-content: space-between;
  -ms-flex-pack: space-between;
  justify-content: space-between;
}
.flex-social {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.flex-social svg {
  height: 30px;
  width: 30px;
  color: #666;
  margin: 0 5px;
}
.flex-social svg:hover {
  color: #fff;
}
.copyright {
  padding-right: 30px;
}
</style>

