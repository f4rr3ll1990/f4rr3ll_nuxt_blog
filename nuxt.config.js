const axios = require('axios')
const routes = function() {
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
        rts.push('/articles/' + d._id)
      })
      return rts
    })
}
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

  css: [
    '~/node_modules/normalize.css/normalize.css',
    '~/assets/global.css'
  ],
  router: {
    base: ''
    // base: '/simple-blog-with-nuxt/'
  },
  generate: {
    routes: routes
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'http://f4rr3ll.cc.ua',
    cacheTime: 1000 * 60 * 15,
    generate: true, // Enable me when using nuxt generate 
    routes: routes
  },
  modules: [
    'bootstrap-vue/nuxt',
    ['@nuxtjs/sitemap', {
      path: '/sitemap.xml',
      generate: true,
      routes: routes
    }]
  ],
  build: {
    vendor: [
      'axios'
    ]
  }
}
