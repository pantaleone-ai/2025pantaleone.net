if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let r={};const t=e=>i(e,n),d={module:{uri:n},exports:r,require:t};a[n]=Promise.all(s.map((e=>d[e]||t(e)))).then((e=>(c(...e),r)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/YO38UfwRuecXMpAnXF1QY/_buildManifest.js",revision:"f10f34a8b35cf88c9b1e0bcf5ff8c6f1"},{url:"/_next/static/YO38UfwRuecXMpAnXF1QY/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/169-8b63e9ef5a24e124.js",revision:"8b63e9ef5a24e124"},{url:"/_next/static/chunks/36d2f571-25ebcea91295c996.js",revision:"25ebcea91295c996"},{url:"/_next/static/chunks/38-6193b362a429cb1b.js",revision:"6193b362a429cb1b"},{url:"/_next/static/chunks/388-8ee3b0681ed4a8ff.js",revision:"8ee3b0681ed4a8ff"},{url:"/_next/static/chunks/3a17f596-9c7433439675685f.js",revision:"9c7433439675685f"},{url:"/_next/static/chunks/41155975-cb70f447dea8aad7.js",revision:"cb70f447dea8aad7"},{url:"/_next/static/chunks/421-f8102a6bd9c88df7.js",revision:"f8102a6bd9c88df7"},{url:"/_next/static/chunks/561-1342b52d1e099f90.js",revision:"1342b52d1e099f90"},{url:"/_next/static/chunks/5727625e-bad574a937f6fae2.js",revision:"bad574a937f6fae2"},{url:"/_next/static/chunks/69d2ed9c-196d48fad8caaf68.js",revision:"196d48fad8caaf68"},{url:"/_next/static/chunks/85d7bc83-f85f7b48ca7be3ba.js",revision:"f85f7b48ca7be3ba"},{url:"/_next/static/chunks/cb355538-e83a89eaef9988c7.js",revision:"e83a89eaef9988c7"},{url:"/_next/static/chunks/e21e5bbe-4e89b2b48fd24cb5.js",revision:"4e89b2b48fd24cb5"},{url:"/_next/static/chunks/fea29d9f-cdce2ffdc89ce621.js",revision:"cdce2ffdc89ce621"},{url:"/_next/static/chunks/framework-68af0e14243e86ef.js",revision:"68af0e14243e86ef"},{url:"/_next/static/chunks/main-c8eeddf47025e6f3.js",revision:"c8eeddf47025e6f3"},{url:"/_next/static/chunks/pages/404-6155ead3b51ef4b8.js",revision:"6155ead3b51ef4b8"},{url:"/_next/static/chunks/pages/_app-3fff0f747471085e.js",revision:"3fff0f747471085e"},{url:"/_next/static/chunks/pages/_error-77823ddac6993d35.js",revision:"77823ddac6993d35"},{url:"/_next/static/chunks/pages/blogs-513c966b8cb8f166.js",revision:"513c966b8cb8f166"},{url:"/_next/static/chunks/pages/blogs/90pc-useless-312d4359a1b8913d.js",revision:"312d4359a1b8913d"},{url:"/_next/static/chunks/pages/blogs/end-of-je-abe859f94591ba23.js",revision:"abe859f94591ba23"},{url:"/_next/static/chunks/pages/blogs/fake-minimalism-02b228986adda307.js",revision:"02b228986adda307"},{url:"/_next/static/chunks/pages/blogs/health-for-dev-ad9a2479a344d419.js",revision:"ad9a2479a344d419"},{url:"/_next/static/chunks/pages/blogs/not-code-4-fun-1efc9457a5867bb5.js",revision:"1efc9457a5867bb5"},{url:"/_next/static/chunks/pages/blogs/pair-prog-sucks-02dcd7ed1bdc4fcd.js",revision:"02dcd7ed1bdc4fcd"},{url:"/_next/static/chunks/pages/blogs/window-crash-190724-d07324d16dddbaa0.js",revision:"d07324d16dddbaa0"},{url:"/_next/static/chunks/pages/index-88b8fafe4fe68e66.js",revision:"88b8fafe4fe68e66"},{url:"/_next/static/chunks/pages/me-390ab8ce56a08fb7.js",revision:"390ab8ce56a08fb7"},{url:"/_next/static/chunks/pages/notebooks-ff167866225b3ef4.js",revision:"ff167866225b3ef4"},{url:"/_next/static/chunks/pages/notebooks/ai/bank-03f478c296a740b9.js",revision:"03f478c296a740b9"},{url:"/_next/static/chunks/pages/notebooks/ai/ollama-external-5aaa6b6de4774be3.js",revision:"5aaa6b6de4774be3"},{url:"/_next/static/chunks/pages/notebooks/misc/bank-633389af62e6c83f.js",revision:"633389af62e6c83f"},{url:"/_next/static/chunks/pages/notebooks/misc/divergent-branches-reconcile-59fad1e833a886ed.js",revision:"59fad1e833a886ed"},{url:"/_next/static/chunks/pages/notebooks/misc/gh-templates-e2d5dadfb4cabdca.js",revision:"e2d5dadfb4cabdca"},{url:"/_next/static/chunks/pages/notebooks/misc/renaming-git-remote-62eeb20f4ac9ae48.js",revision:"62eeb20f4ac9ae48"},{url:"/_next/static/chunks/pages/notebooks/mobile/bank-de22868704f0178c.js",revision:"de22868704f0178c"},{url:"/_next/static/chunks/pages/notebooks/web/bank-da69e83059dd0a1d.js",revision:"da69e83059dd0a1d"},{url:"/_next/static/chunks/pages/notebooks/web3/bank-0947b7f201407141.js",revision:"0947b7f201407141"},{url:"/_next/static/chunks/pages/showcase-e2466db407ea6029.js",revision:"e2466db407ea6029"},{url:"/_next/static/chunks/pages/showcase/bhel-6de7e1eb0c0b41c5.js",revision:"6de7e1eb0c0b41c5"},{url:"/_next/static/chunks/pages/showcase/gane-180cf358fea8eae9.js",revision:"180cf358fea8eae9"},{url:"/_next/static/chunks/pages/showcase/ghai-cbd439fedc9b2120.js",revision:"cbd439fedc9b2120"},{url:"/_next/static/chunks/pages/showcase/quillbook-e2423f12ade16509.js",revision:"e2423f12ade16509"},{url:"/_next/static/chunks/pages/stats-5d1df8df5ee73a18.js",revision:"5d1df8df5ee73a18"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-6ef43a8d4a395f49.js",revision:"6ef43a8d4a395f49"},{url:"/_next/static/css/1d7c9f29c671b1c7.css",revision:"1d7c9f29c671b1c7"},{url:"/_next/static/css/5bd03e4502676d60.css",revision:"5bd03e4502676d60"},{url:"/_next/static/css/832fecce6f2e12b4.css",revision:"832fecce6f2e12b4"},{url:"/_next/static/media/KaTeX_AMS-Regular.1608a09b.woff",revision:"1608a09b"},{url:"/_next/static/media/KaTeX_AMS-Regular.4aafdb68.ttf",revision:"4aafdb68"},{url:"/_next/static/media/KaTeX_AMS-Regular.a79f1c31.woff2",revision:"a79f1c31"},{url:"/_next/static/media/KaTeX_Caligraphic-Bold.b6770918.woff",revision:"b6770918"},{url:"/_next/static/media/KaTeX_Caligraphic-Bold.cce5b8ec.ttf",revision:"cce5b8ec"},{url:"/_next/static/media/KaTeX_Caligraphic-Bold.ec17d132.woff2",revision:"ec17d132"},{url:"/_next/static/media/KaTeX_Caligraphic-Regular.07ef19e7.ttf",revision:"07ef19e7"},{url:"/_next/static/media/KaTeX_Caligraphic-Regular.55fac258.woff2",revision:"55fac258"},{url:"/_next/static/media/KaTeX_Caligraphic-Regular.dad44a7f.woff",revision:"dad44a7f"},{url:"/_next/static/media/KaTeX_Fraktur-Bold.9f256b85.woff",revision:"9f256b85"},{url:"/_next/static/media/KaTeX_Fraktur-Bold.b18f59e1.ttf",revision:"b18f59e1"},{url:"/_next/static/media/KaTeX_Fraktur-Bold.d42a5579.woff2",revision:"d42a5579"},{url:"/_next/static/media/KaTeX_Fraktur-Regular.7c187121.woff",revision:"7c187121"},{url:"/_next/static/media/KaTeX_Fraktur-Regular.d3c882a6.woff2",revision:"d3c882a6"},{url:"/_next/static/media/KaTeX_Fraktur-Regular.ed38e79f.ttf",revision:"ed38e79f"},{url:"/_next/static/media/KaTeX_Main-Bold.b74a1a8b.ttf",revision:"b74a1a8b"},{url:"/_next/static/media/KaTeX_Main-Bold.c3fb5ac2.woff2",revision:"c3fb5ac2"},{url:"/_next/static/media/KaTeX_Main-Bold.d181c465.woff",revision:"d181c465"},{url:"/_next/static/media/KaTeX_Main-BoldItalic.6f2bb1df.woff2",revision:"6f2bb1df"},{url:"/_next/static/media/KaTeX_Main-BoldItalic.70d8b0a5.ttf",revision:"70d8b0a5"},{url:"/_next/static/media/KaTeX_Main-BoldItalic.e3f82f9d.woff",revision:"e3f82f9d"},{url:"/_next/static/media/KaTeX_Main-Italic.47373d1e.ttf",revision:"47373d1e"},{url:"/_next/static/media/KaTeX_Main-Italic.8916142b.woff2",revision:"8916142b"},{url:"/_next/static/media/KaTeX_Main-Italic.9024d815.woff",revision:"9024d815"},{url:"/_next/static/media/KaTeX_Main-Regular.0462f03b.woff2",revision:"0462f03b"},{url:"/_next/static/media/KaTeX_Main-Regular.7f51fe03.woff",revision:"7f51fe03"},{url:"/_next/static/media/KaTeX_Main-Regular.b7f8fe9b.ttf",revision:"b7f8fe9b"},{url:"/_next/static/media/KaTeX_Math-BoldItalic.572d331f.woff2",revision:"572d331f"},{url:"/_next/static/media/KaTeX_Math-BoldItalic.a879cf83.ttf",revision:"a879cf83"},{url:"/_next/static/media/KaTeX_Math-BoldItalic.f1035d8d.woff",revision:"f1035d8d"},{url:"/_next/static/media/KaTeX_Math-Italic.5295ba48.woff",revision:"5295ba48"},{url:"/_next/static/media/KaTeX_Math-Italic.939bc644.ttf",revision:"939bc644"},{url:"/_next/static/media/KaTeX_Math-Italic.f28c23ac.woff2",revision:"f28c23ac"},{url:"/_next/static/media/KaTeX_SansSerif-Bold.8c5b5494.woff2",revision:"8c5b5494"},{url:"/_next/static/media/KaTeX_SansSerif-Bold.94e1e8dc.ttf",revision:"94e1e8dc"},{url:"/_next/static/media/KaTeX_SansSerif-Bold.bf59d231.woff",revision:"bf59d231"},{url:"/_next/static/media/KaTeX_SansSerif-Italic.3b1e59b3.woff2",revision:"3b1e59b3"},{url:"/_next/static/media/KaTeX_SansSerif-Italic.7c9bc82b.woff",revision:"7c9bc82b"},{url:"/_next/static/media/KaTeX_SansSerif-Italic.b4c20c84.ttf",revision:"b4c20c84"},{url:"/_next/static/media/KaTeX_SansSerif-Regular.74048478.woff",revision:"74048478"},{url:"/_next/static/media/KaTeX_SansSerif-Regular.ba21ed5f.woff2",revision:"ba21ed5f"},{url:"/_next/static/media/KaTeX_SansSerif-Regular.d4d7ba48.ttf",revision:"d4d7ba48"},{url:"/_next/static/media/KaTeX_Script-Regular.03e9641d.woff2",revision:"03e9641d"},{url:"/_next/static/media/KaTeX_Script-Regular.07505710.woff",revision:"07505710"},{url:"/_next/static/media/KaTeX_Script-Regular.fe9cbbe1.ttf",revision:"fe9cbbe1"},{url:"/_next/static/media/KaTeX_Size1-Regular.e1e279cb.woff",revision:"e1e279cb"},{url:"/_next/static/media/KaTeX_Size1-Regular.eae34984.woff2",revision:"eae34984"},{url:"/_next/static/media/KaTeX_Size1-Regular.fabc004a.ttf",revision:"fabc004a"},{url:"/_next/static/media/KaTeX_Size2-Regular.57727022.woff",revision:"57727022"},{url:"/_next/static/media/KaTeX_Size2-Regular.5916a24f.woff2",revision:"5916a24f"},{url:"/_next/static/media/KaTeX_Size2-Regular.d6b476ec.ttf",revision:"d6b476ec"},{url:"/_next/static/media/KaTeX_Size3-Regular.9acaf01c.woff",revision:"9acaf01c"},{url:"/_next/static/media/KaTeX_Size3-Regular.a144ef58.ttf",revision:"a144ef58"},{url:"/_next/static/media/KaTeX_Size3-Regular.b4230e7e.woff2",revision:"b4230e7e"},{url:"/_next/static/media/KaTeX_Size4-Regular.10d95fd3.woff2",revision:"10d95fd3"},{url:"/_next/static/media/KaTeX_Size4-Regular.7a996c9d.woff",revision:"7a996c9d"},{url:"/_next/static/media/KaTeX_Size4-Regular.fbccdabe.ttf",revision:"fbccdabe"},{url:"/_next/static/media/KaTeX_Typewriter-Regular.6258592b.woff",revision:"6258592b"},{url:"/_next/static/media/KaTeX_Typewriter-Regular.a8709e36.woff2",revision:"a8709e36"},{url:"/_next/static/media/KaTeX_Typewriter-Regular.d97aaf4a.ttf",revision:"d97aaf4a"},{url:"/_next/static/media/bhel.81667c1b.png",revision:"fca6ff50d183795ab2cc7c95feb48e0b"},{url:"/_next/static/media/card-1.4f54665c.png",revision:"00868a0baebd11985603fe8636e0717f"},{url:"/_next/static/media/card-1.dark.efd5c446.png",revision:"4eb9f789bd0098a15b0bab8a87e80d89"},{url:"/_next/static/media/ff.e7aeabc9.png",revision:"af8cd48efe4828953d2556b9af2509ca"},{url:"/_next/static/media/full-black-bg-trans.b32cf599.png",revision:"c679925177b3ef2712c7b4e8b75fc82e"},{url:"/_next/static/media/full-white-bg-trans.ffdbd8f1.png",revision:"448ed73f6706b43ec6f17081fec69daa"},{url:"/_next/static/media/gane.d249642b.png",revision:"bf418213d9c82c935b52f7ac3c19d90e"},{url:"/_next/static/media/humans-need-not-apply.89d34c50.jpg",revision:"6332c7112349482087955165f2272df0"},{url:"/_next/static/media/llama-on-disk.6f858965.png",revision:"11bbb86f08a6c7ccfac1e57c362e2b20"},{url:"/_next/static/media/merge.bf38063f.png",revision:"d565a410bbdd6475db10b3f4b21680d6"},{url:"/_next/static/media/nvimss.59a8fc5b.webp",revision:"d09ca9228d4e7c507315bd03f31640fa"},{url:"/_next/static/media/octocat-programming.ba4330be.png",revision:"20ce8ba0f8c08e846a1f79039ab50150"},{url:"/_next/static/media/quillbook.b087ab92.png",revision:"1795ce1b9c78b32519c005c8030b9680"},{url:"/_next/static/media/rebase.8e088e87.png",revision:"f57653911672c9cf984b6896f7fd6135"},{url:"/_next/static/media/rise-of-the-robots.fd3822db.jpg",revision:"18a4d1ea5e4484cd20cc557436cad996"},{url:"/_next/static/media/sign-black.2b4a2535.svg",revision:"8b5aebab63d0624fac073c2e144946df"},{url:"/_next/static/media/sign-white.5037ce80.svg",revision:"d9b10ba6850cfc229746c8695074481e"},{url:"/_next/static/media/the-second-machine-age.768aaee7.jpg",revision:"4c8b1fc2c1c1b8a06a184286add40ca9"},{url:"/_next/static/media/win-crash-meme.5c68b41d.png",revision:"b206e45e01ace301e8943b9a08fd883b"},{url:"/_next/static/media/window_crash.cd98ad8d.png",revision:"3451d233b4912ff3f271760d423c71ab"},{url:"/assets/blog-theme.png",revision:"ebec60c9d58ce3f31c64aa0446ecfb0b"},{url:"/assets/card-1.dark.png",revision:"4eb9f789bd0098a15b0bab8a87e80d89"},{url:"/assets/card-1.png",revision:"00868a0baebd11985603fe8636e0717f"},{url:"/assets/docs-theme.png",revision:"632e0ac47583ff49de7aadac16d2b431"},{url:"/assets/docs/banner.png",revision:"b487a148d912f518bc8a991005d40c97"},{url:"/assets/docs/custom-theme.png",revision:"51a0828e8ad2c139dff2c30e00d6c264"},{url:"/assets/docs/logo.png",revision:"8c576d302ed64d076fde3ec87a26cac4"},{url:"/assets/docs/menu.png",revision:"45970f55f51b280476a707b00472e5f1"},{url:"/assets/docs/navigation.png",revision:"6cdbea067e1d26f1538537f6fd53ad1b"},{url:"/assets/docs/project-link.png",revision:"07e777b97912fb2364cbef1ef34a82ac"},{url:"/assets/docs/sidebar-customized.png",revision:"56207115e2312ee59ce090ebdc76689d"},{url:"/assets/docs/sub-docs.mp4",revision:"b05ac980f7b024f8d76709a6f3f93103"},{url:"/assets/docs/title-suffix.png",revision:"4280710f177c3e2fedfdca2e7dba9e98"},{url:"/assets/gradient-bg.jpeg",revision:"c522a2888a3be798c1019a625aa122df"},{url:"/assets/high-contrast.png",revision:"36a0f8989fd307fd5737f348160ba7a9"},{url:"/assets/index_blog.png",revision:"ee80d861726cc7be874db7a9b4e2f6fb"},{url:"/assets/index_showcase.png",revision:"bb3be52cd06d4e348bd11c920e1c22d2"},{url:"/assets/nvimss.png",revision:"0676d4a2f98d15772795d6fe01b8c0bd"},{url:"/assets/nvimss.webp",revision:"d09ca9228d4e7c507315bd03f31640fa"},{url:"/assets/routing.png",revision:"8e8f7984ae5dc0a593d025050db9a03b"},{url:"/assets/routing@1x.png",revision:"29ed39048ee3fca3c5fdae539cb56649"},{url:"/assets/search-dark.mp4",revision:"d69171e099f2b59058b1b98fca5b2b02"},{url:"/assets/search.mp4",revision:"89d84e9eac11f0743a35dda9dd08d906"},{url:"/assets/syntax-highlighting.svg",revision:"15b8b2a2af9587a93def6a0c3364ea22"},{url:"/atom.xml",revision:"16c92381352c89bcbca9d58aebd6fddf"},{url:"/blogs/books/humans-need-not-apply.jpg",revision:"6332c7112349482087955165f2272df0"},{url:"/blogs/books/rise-of-the-robots.jpg",revision:"18a4d1ea5e4484cd20cc557436cad996"},{url:"/blogs/books/the-second-machine-age.jpg",revision:"4c8b1fc2c1c1b8a06a184286add40ca9"},{url:"/blogs/win-crash-meme.png",revision:"b206e45e01ace301e8943b9a08fd883b"},{url:"/blogs/window_crash.png",revision:"3451d233b4912ff3f271760d423c71ab"},{url:"/blogs/window_crash.webp",revision:"6d16d011db370993990213b4d840d553"},{url:"/favicon.ico",revision:"c9d312dbd196f8a9557a730523da6b46"},{url:"/icon-192x192.png",revision:"bcb790ebf8874638ec94ceeb9a9a7d49"},{url:"/icon-256x256.png",revision:"b123ae2fa4679178a9d221d2514c0f89"},{url:"/icon-384x384.png",revision:"325e740a6810a0e920fdba2354b481d4"},{url:"/icon-512x512.png",revision:"2e4311854a99b813ff9e44f6f4738762"},{url:"/manifest.webmanifest",revision:"617a3f65c2e4fd816310e423d3c72841"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/notebooks/ai/llama-on-disk.png",revision:"11bbb86f08a6c7ccfac1e57c362e2b20"},{url:"/notebooks/ai/ollama-demo.png",revision:"546b5d4b187e65f95daeab6c8a3f8db5"},{url:"/notebooks/misc/git/ff.png",revision:"af8cd48efe4828953d2556b9af2509ca"},{url:"/notebooks/misc/git/merge.png",revision:"d565a410bbdd6475db10b3f4b21680d6"},{url:"/notebooks/misc/git/rebase-error-1.png",revision:"a3f8f1e1e4837eb6eefb129a0043ab13"},{url:"/notebooks/misc/git/rebase-error.png",revision:"3c4f85c16237c53f08c43a2522839b1c"},{url:"/notebooks/misc/git/rebase.png",revision:"f57653911672c9cf984b6896f7fd6135"},{url:"/notebooks/misc/octocat-programming.png",revision:"20ce8ba0f8c08e846a1f79039ab50150"},{url:"/og.jpeg",revision:"b4f4aa5f9f75ffb301b8a9b0b91e7018"},{url:"/old-og.jpeg",revision:"bd0727c3ba6f5f36807fc29e9f60e1ec"},{url:"/people/gopalverma.png",revision:"61e9ecc334e417eb6b5fc2e2ac747ba5"},{url:"/personal/full-bg-black.png",revision:"a8913f5c32601987dc27246c4669d0c1"},{url:"/personal/full-bg-white.png",revision:"8d42990a3ea1c2750829af91de374f66"},{url:"/personal/full-black-bg-trans.png",revision:"c679925177b3ef2712c7b4e8b75fc82e"},{url:"/personal/full-white-bg-trans.png",revision:"448ed73f6706b43ec6f17081fec69daa"},{url:"/personal/half-bg-black.png",revision:"aa360e251f99d876b721e8e69e6ac12f"},{url:"/personal/half-bg-white.png",revision:"4c4a7affdc84bba347950c2ba8e50340"},{url:"/personal/main-bg-black.png",revision:"672600526f9290296f8419a20d9f95b9"},{url:"/personal/main-bg-white.png",revision:"f7273c803ff671976675a3d620c1538f"},{url:"/personal/main-black-bg-trans.png",revision:"4974ff489e78c2bdfe8ca234e66bc3fb"},{url:"/personal/main-white-bg-trans.png",revision:"bdc86d05ca9d8a7e657670c53f27baee"},{url:"/personal/me/DPS.png",revision:"fa6ec3b910e9fe46382adc146a16e2f1"},{url:"/personal/me/IITM.png",revision:"35dcb10ce2ed8080c1cc3c550d3338f5"},{url:"/personal/me/PEC.png",revision:"fe845d75b030e3dbf5e836c900711e85"},{url:"/personal/me/SB.png",revision:"b1f69cb1d74492cddf5988735536652c"},{url:"/personal/me/SB_BLACK.png",revision:"4b1c049684e725dce7c004551887edf4"},{url:"/personal/me/acm.png",revision:"1283289e939443a54922bc38a7649ffb"},{url:"/personal/me/chd.jpg",revision:"ee21fb2b6a9d4c4b387273553b553b5d"},{url:"/personal/me/gopx-mobui-dark.png",revision:"28f5cc1707c8e9e4f7718d60f404ff21"},{url:"/personal/me/gopx-mobui-light.png",revision:"b24c807bc7d5d147e6a4c52895196517"},{url:"/personal/me/gopx-webui-dark.png",revision:"8153d3406906a99d91481dd37bc84499"},{url:"/personal/me/gopx-webui-light.png",revision:"1893729a2be1b166fc7a4781abf36d43"},{url:"/personal/me/gs-dark.png",revision:"06832d47bfc468bd45447d84d768c80c"},{url:"/personal/me/gs-light.png",revision:"bb8c2994e0883f3b84e022ff2ad93105"},{url:"/personal/me/sc-dark.png",revision:"2a5b98d11cb3edf2eb5f4ea9c9be7fb5"},{url:"/personal/me/sc-light.png",revision:"7bbb91ec4eb86c15cd3f058bff198d8d"},{url:"/personal/me/twitter.png",revision:"1f47638c6af8a7b2dd332a39b9dd7608"},{url:"/personal/me/utkd.jpg",revision:"2d7b9fe4a1f950b51d877a846507650b"},{url:"/personal/minimain-bg-black.png",revision:"30c88c15fb161699c4316c6e85633d0f"},{url:"/personal/minimain-bg-white.png",revision:"f7bc220fd44b6afc36a527ecc0ba149e"},{url:"/personal/sign-black.svg",revision:"8b5aebab63d0624fac073c2e144946df"},{url:"/personal/sign-white.svg",revision:"d9b10ba6850cfc229746c8695074481e"},{url:"/robots.txt",revision:"0c22f03f2651fefe06048cdb2eb107f9"},{url:"/rss.json",revision:"2da9a359df8b200123a96e4d2fcb88c9"},{url:"/rss.xml",revision:"dedee2255660555accd48366eff5055d"},{url:"/showcase/bcg.png",revision:"66635d732cd0429d09c8460493891aa4"},{url:"/showcase/bhel.png",revision:"fca6ff50d183795ab2cc7c95feb48e0b"},{url:"/showcase/cds.png",revision:"2536bd18de0d719ebf431ddfdcb3cd48"},{url:"/showcase/darkmap.png",revision:"ae026244ace7a50978204babdaf6bb09"},{url:"/showcase/dotfiles.png",revision:"353dcf47c754d6bd929bb8b9b4e6d25e"},{url:"/showcase/ec.png",revision:"7b2b8fddbb7a65399efc161f3d6dc0fa"},{url:"/showcase/gane.png",revision:"bf418213d9c82c935b52f7ac3c19d90e"},{url:"/showcase/ghai.png",revision:"4105bc441d096aaf6bf63904647b2f66"},{url:"/showcase/github-repo-tree.png",revision:"3bd426908d281dad7a52b38554554b20"},{url:"/showcase/gs.png",revision:"26bbdd768035a894ffb5e758c08125e6"},{url:"/showcase/hardmon.png",revision:"de3fa96bfe1055eaa853c2dd1b9a8066"},{url:"/showcase/kitchensinkrnr.png",revision:"3d87bd1892f0c9ca29dc571f754ddbfd"},{url:"/showcase/mobui.png",revision:"3625b49cba5ed47a50a7b8d267a9829d"},{url:"/showcase/old-devsite.png",revision:"682d98475f6651b2917f551eb27d801f"},{url:"/showcase/pictrovert.png",revision:"809a5934314a402219c1d4966d6c826b"},{url:"/showcase/quillbook.png",revision:"1795ce1b9c78b32519c005c8030b9680"},{url:"/showcase/rc.png",revision:"121296e25e6d01c9242d37bb700dda03"},{url:"/showcase/rspp.png",revision:"1bb314b407547c1023c985568ea790fd"},{url:"/showcase/squadbook.png",revision:"04bb604c7b50ae8630b0cb714d69eefd"},{url:"/showcase/taptalk.png",revision:"5a6b3db6cb9213799c7f6102fe2b72b5"},{url:"/showcase/taptick.png",revision:"7d6eca7d3b8584d49fbba266153dd1eb"},{url:"/showcase/thirdfunding.png",revision:"a6202405dceb0c6f0ae29938ea1a1031"},{url:"/showcase/unite.png",revision:"240b46c32cc4921d9d6c3a3928dfadc5"},{url:"/showcase/voguegenie.png",revision:"3cdfaeedb2b7171c2ac8e9d04542163c"},{url:"/showcase/weatherapp.png",revision:"a08d85290ea5291807dc303a15600cb0"},{url:"/showcase/webui.png",revision:"6805b3d836c465d6e8d008cdfa967e61"},{url:"/sitemap-0.xml",revision:"5b7aeb3d6c7acec5078c205c793651e5"},{url:"/sitemap.xml",revision:"2c6b547bf0b2934d127f4adf152af3f5"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
