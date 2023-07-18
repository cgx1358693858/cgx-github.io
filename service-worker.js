/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d0279dcb69082be9004020db51b0d773"
  },
  {
    "url": "assets/css/0.styles.f4269fec.css",
    "revision": "325ae1b3f067f52f50a2a226d829ce38"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/e46f9dc2d0bc9e5f62ab688e1675b616.e46f9dc2.png",
    "revision": "e46f9dc2d0bc9e5f62ab688e1675b616"
  },
  {
    "url": "assets/js/1.9dc2ecd5.js",
    "revision": "f40ea8f0dbc6048bd2ba56d630d4a638"
  },
  {
    "url": "assets/js/10.f68df464.js",
    "revision": "630da930d4c1087a30204d060abdaa9c"
  },
  {
    "url": "assets/js/11.d8a46e70.js",
    "revision": "7f6fa5d958c8edfc6cf23705cb8284ee"
  },
  {
    "url": "assets/js/12.e2833d1f.js",
    "revision": "b51915445ab92875f727d00a5da7caab"
  },
  {
    "url": "assets/js/13.7b490ce8.js",
    "revision": "8f3c019a36571a102b838455a7eadc4f"
  },
  {
    "url": "assets/js/14.6678d0d4.js",
    "revision": "78fc70cd08aa808044c0653c065fd077"
  },
  {
    "url": "assets/js/15.fdf189b9.js",
    "revision": "339dceebf4f9663f38cfa93408ee63cf"
  },
  {
    "url": "assets/js/16.98383b2f.js",
    "revision": "e18e8c49f5022b1d39578b5953421e3c"
  },
  {
    "url": "assets/js/3.a994bd77.js",
    "revision": "c93f9eb04649feff360f83dee6a73098"
  },
  {
    "url": "assets/js/4.95119758.js",
    "revision": "0109574f14549ad2df39338dd9dd7654"
  },
  {
    "url": "assets/js/5.0e40fe04.js",
    "revision": "47404625c0542ba8551fef118876b6fe"
  },
  {
    "url": "assets/js/6.0fee0da2.js",
    "revision": "73924d1943e8286f84fd06fc382aa5f1"
  },
  {
    "url": "assets/js/7.a8536e5d.js",
    "revision": "846ee4481295e587726bec6f4012c5aa"
  },
  {
    "url": "assets/js/8.c72dc546.js",
    "revision": "85bb20a81cf6b142715fe5492048d819"
  },
  {
    "url": "assets/js/9.463a8b9b.js",
    "revision": "94541dd409a1d7e4506baf149a28022d"
  },
  {
    "url": "assets/js/app.d18cd6c8.js",
    "revision": "46e25ad2cef6c98bead74fc05f43e4dd"
  },
  {
    "url": "auto-deploy-blog-by-github-actions.html",
    "revision": "46588d3645b26c785c42ec5ac911ffda"
  },
  {
    "url": "categories/index.html",
    "revision": "b458d2c089c200e98df37802e0699717"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "40d5511928452b44de6555b7d286759c"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "81be302a0ac7a37d86cf1474cc0032ef"
  },
  {
    "url": "how-do-i-learn-python.html",
    "revision": "d896e2db4279fe197011126a7312b9f4"
  },
  {
    "url": "index.html",
    "revision": "d9ff27ada0d0716d41a4b435f45c15f3"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "59f4a190683adb7e0d798c14e32425ee"
  },
  {
    "url": "tag/index.html",
    "revision": "c1305c56ca854726ba95239ce9cdf034"
  },
  {
    "url": "tag/Web Scraper/index.html",
    "revision": "8f92fcd9c225e3f9e6cb9e628f13f04f"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "18a38ea4b0b8bd5e8fa6d696e9659fc5"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "e6cee8eb362ec6a94d6f67dd9567c0c7"
  },
  {
    "url": "timeline/index.html",
    "revision": "0f27912148dcc067931690d73df4ff23"
  },
  {
    "url": "vuepress-github-pages.html",
    "revision": "eb5d4b895768d767492da38616ccee29"
  },
  {
    "url": "web-scraper.html",
    "revision": "180797c1f9d45a6a3c04e0dc6f507cac"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
