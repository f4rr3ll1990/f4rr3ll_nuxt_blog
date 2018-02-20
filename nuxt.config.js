const axios = require('axios')

module.exports = {
  head: {
    titleTemplate: '%s - F4rr3LL Blog',
    meta: [
            {charset: 'utf8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {hid: 'description', name: 'description', content: 'Meta description' }
    ],
    link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: [
    'bootstrap-vue/nuxt'
  ],
  css: [
    '~/node_modules/normalize.css/normalize.css',
    '~/assets/global.css'
  ],
  router: {
    base: ''
    // base: '/simple-blog-with-nuxt/'
  },
  generate: {
    routes () {
      return axios.get('http://vue-rest-blog-vue-rest-blog.a3c1.starter-us-west-1.openshiftapps.com/rest.php/test/')
        .then((res) => {
          var rts = []
          res.data.forEach((d) => {
            rts.push('/article/' + d.id)
          })
          return rts
        })
    }
  },
  build: {
    vendor: [
      'axios'
    ]
  }
}
