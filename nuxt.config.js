const axios = require('axios')

module.exports = {
  loading: {
    color: '#7A0B76',
    height: '5px'
  },
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
      return axios({
        url: "https://nuxtrest-2bb1.restdb.io/rest/posts",
        method: "get",
        headers: {
          "content-type": "application/json",
          "x-apikey": "5a91ed5116d5526228b426f0",
          "cache-control": "no-cache"
        }
      })
        .then((res) => {
          var rts = []
          res.data.forEach((d) => {
            rts.push('/articles/' + d.id)
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
