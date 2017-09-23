"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","57eb2e439222fc3a09284fcc87735e95"],["service-worker.js","2a45d2de12355504eb7537925657238b"],["static/css/app.c5be57039842aedca58ded66de347ff1.css","283e41cf89d417db80ce465cf0483464"],["static/js/app.5307b21cf3442a20cb5c.js","c993bc8fdbb85b66f53b44d0a4a782fd"],["static/js/authentication.623521035814f93f4798.js","eeb035f10a229240c35a61188abb71e9"],["static/js/editors.61b9424ebbab61f34a2e.js","8279b3120dfe8d4e11edab058a3a8e03"],["static/js/eslint.8401025d01b54127256f.js","91a1df878c51b80993ac9df1b20827b1"],["static/js/examples-login.09625bca1cf550dab33c.js","9f6891cbbfb981e2b0b540326a02c3eb"],["static/js/folders-and-files.304c296ffbbc11a367da.js","828b239814c97c165d73b083fca52308"],["static/js/global.0c18d3864a0d44321e8e.js","c4ba8014918da66317053009a3927d84"],["static/js/installation.1766471b3f4461753a84.js","35061c12516eab78ef056314af59e28b"],["static/js/intro.458b617be076686f28a4.js","c0051c6d7cac4033e5fc47cf27d3acbf"],["static/js/login.32e2f71cb3dc0a7968fc.js","2aca10f4359768d8845dd2a18546f703"],["static/js/main-entry.5eabdd1655bbd7429bc7.js","74e66df1b9a61189dd9ba7ebd06389b7"],["static/js/manifest.240f0b30a4165da5a273.js","6f0e614e18c5f481cfb3b14de86e709a"],["static/js/more-resources.46e26998a0706acf9eb2.js","2ae1151fab669d7a512a61bddcbc281a"],["static/js/node.d8d475e425720383a877.js","1470c4e9a79035cf550985b87de8f0d1"],["static/js/overview.62ac2e02045e096fe5cc.js","9ac6f0526791dae8e6680a92a10e75c8"],["static/js/pug.9f753b9303dee36d63aa.js","1c569cf7aacde63e4b180f175b95e651"],["static/js/routing.4eec0529f9e247d3db10.js","226529fb26e9efdc835d9ef14241037e"],["static/js/styles.827081d834599667f80e.js","a781163cbab12455c38f30e2b97f84f1"],["static/js/ui-frameworks.830c68d9cfc4ab92a7fb.js","449fb5542962be206ea7b313c4793bdf"],["static/js/vendor.e3ba0b0e060455fb4972.js","9f4aa57c4b89f069f13eaca48b05fd5f"],["static/js/vue-cli.3ff289ebd00d57a1455a.js","6e64ae51243283755cce6b1e07d3a7d0"],["static/js/vuex.562e55ab97a8c4c29d9b.js","c8263850543b77e4b114843ced930cd4"]],cacheName="sw-precache-v3-vue-example-project-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var s=new URL(e);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),s=createCacheKey(c,hashParamName,a,!1);return[c.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});