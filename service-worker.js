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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4b151e41e704e09d074636d0ccfdd9d0"
  },
  {
    "url": "about/index.html",
    "revision": "f67ab196305298540031623dd3c12f23"
  },
  {
    "url": "assets/css/0.styles.064928ce.css",
    "revision": "9b28ea127695cf26a580af8843d9b826"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.76b07ea0.js",
    "revision": "8d8c73e9e47b5256df5d59039543cd7e"
  },
  {
    "url": "assets/js/3.3201551a.js",
    "revision": "c9232183abf9a181daed81ca66d4ed8a"
  },
  {
    "url": "assets/js/4.6fcb3ccc.js",
    "revision": "0bd611ffb04670a293882577a979346e"
  },
  {
    "url": "assets/js/5.31460d47.js",
    "revision": "28f1e96012d169d479c7c62760b345ef"
  },
  {
    "url": "assets/js/6.910c28b1.js",
    "revision": "afe5312071d4ad86aadf91e7748e6f7a"
  },
  {
    "url": "assets/js/7.e8ea0b3b.js",
    "revision": "12bd5bfaa79aa785dfe8a3a9747e354f"
  },
  {
    "url": "assets/js/8.cd1e7b6a.js",
    "revision": "e7377439e6c659579a5e6643d471a1bf"
  },
  {
    "url": "assets/js/9.6566a371.js",
    "revision": "a056aa71c5b6c0dff16b530bbe5168d5"
  },
  {
    "url": "assets/js/app.ca9f63e5.js",
    "revision": "87c6c35ea2aa708287c4a55d85ab15c1"
  },
  {
    "url": "blog/aaaa.html",
    "revision": "05a688a151eaff5a5ff68f0516f5b401"
  },
  {
    "url": "blog/ddd.html",
    "revision": "fb158393f635de62e5bcef3073c2385f"
  },
  {
    "url": "blog/hello.html",
    "revision": "7510ce4e98e968a48db10c73b449e2e3"
  },
  {
    "url": "img/home.gif",
    "revision": "c1cf7dff0b60d2dfe61f39efdf377f30"
  },
  {
    "url": "img/logo.jpg",
    "revision": "ccb01465424bb0964747e5371d9a9918"
  },
  {
    "url": "img/logo.png",
    "revision": "6eff31aa92ee6d233df8874ac4de6b8d"
  },
  {
    "url": "index.html",
    "revision": "bdd7d1e1f8f863809db52e6cb1904053"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
