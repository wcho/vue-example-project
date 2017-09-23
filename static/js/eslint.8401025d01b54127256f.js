webpackJsonp([0],{"/AdF":function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a("n0Nb"),n=a("MsOJ"),i=a("VU/8"),l=i(e.a,n.a,null,null,null);t.default=l.exports},"5zde":function(s,t,a){a("zQR9"),a("qyJz"),s.exports=a("FeBl").Array.from},"8bnN":function(s,t,a){"use strict";t.a={props:{title:{type:String,default:""}},data:function(){return{}},methods:{}}},DccK:function(s,t,a){"use strict";var e=a("c/Tr"),n=a.n(e),i=a("Mn9/");t.a={name:"pwa-configuration",components:{BackNav:i.a},mounted:function(){var s=this,t=n()(document.getElementsByClassName("title")),a=t.filter(function(t){return t.innerHTML===s.$route.query.title})[0];a?a.scrollIntoView():scroll(0,0)},data:function(){return{}},methods:{}}},"Mn9/":function(s,t,a){"use strict";function e(s){a("Sq6U")}var n=a("8bnN"),i=a("VL4h"),l=a("VU/8"),o=e,r=l(n.a,i.a,o,null,null);t.a=r.exports},MsOJ:function(s,t,a){"use strict";var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"my-node-page"},[a("main",[a("back-nav",{attrs:{title:"ESLint"}}),s._m(0)],1),a("main-footer")],1)},n=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("div",{staticClass:"content"},[s._v("In this section of the tutorial we'll discuss linting with ESLint...")]),a("div",{staticClass:"title is-4"},[s._v("Configure ESLint")]),a("div",{staticClass:"content"},[s._v("Most projects I've seen prefer the "),a("a",{attrs:{href:"https://standardjs.com/"}},[s._v("Standard")]),s._v(' preset (aka "The one without semicolons") so I\'ve selected that for this example project.\nVue also has some recommended rules that you can add via the beta '),a("code",[s._v("eslint-plugin-vue")]),s._v(" , but I did not use this plugin yet because unfortunately Pug templates are not working at the moment (see "),a("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/issues/165"}},[s._v("issue #165")]),s._v(").")]),a("div",{staticClass:"content"},[s._v("Now open up your "),a("code",[s._v("eslintrc.js ")]),s._v("file and you'll see what Vue cli generated for this project:")]),a("strong",{staticClass:"my-italic"},[s._v("eslintrc.js ")]),a("pre",{staticClass:"block"},[a("code",{staticClass:"hljs javascript"},[a("span",{staticClass:"hljs-comment"},[s._v("// http://eslint.org/docs/user-guide/configuring")]),s._v("\n\n"),a("span",{staticClass:"hljs-built_in"},[s._v("module")]),s._v(".exports = {\n  root: "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n  parser: "),a("span",{staticClass:"hljs-string"},[s._v("'babel-eslint'")]),s._v(",\n  parserOptions: {\n    sourceType: "),a("span",{staticClass:"hljs-string"},[s._v("'module'")]),s._v("\n  },\n  env: {\n    browser: "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n  },\n  "),a("span",{staticClass:"hljs-comment"},[s._v("// https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style")]),s._v("\n  extends: "),a("span",{staticClass:"hljs-string"},[s._v("'standard'")]),s._v(",\n  "),a("span",{staticClass:"hljs-comment"},[s._v("// required to lint *.vue files")]),s._v("\n  plugins: [\n    "),a("span",{staticClass:"hljs-string"},[s._v("'html'")]),s._v("\n  ],\n  "),a("span",{staticClass:"hljs-comment"},[s._v("// add your custom rules here")]),s._v("\n  "),a("span",{staticClass:"hljs-string"},[s._v("'rules'")]),s._v(": {\n    "),a("span",{staticClass:"hljs-comment"},[s._v("// allow paren-less arrow functions")]),s._v("\n    "),a("span",{staticClass:"hljs-string"},[s._v("'arrow-parens'")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(",\n    "),a("span",{staticClass:"hljs-comment"},[s._v("// allow async-await")]),s._v("\n    "),a("span",{staticClass:"hljs-string"},[s._v("'generator-star-spacing'")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(",\n    "),a("span",{staticClass:"hljs-comment"},[s._v("// allow debugger during development")]),s._v("\n    "),a("span",{staticClass:"hljs-string"},[s._v("'no-debugger'")]),s._v(": process.env.NODE_ENV === "),a("span",{staticClass:"hljs-string"},[s._v("'production'")]),s._v(" ? "),a("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(" : "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("\n  }\n}\n")])]),a("div",{staticClass:"content"},[a("ul",[a("li",[s._v(" The parser is Babel's ESLint plugin (we'll talk about Babel and its configuration later in this tutorial).\nWe're using the "),a("code",[s._v("Standard")]),s._v(" preset.")]),a("li",[a("code",[s._v("env.browser")]),s._v("to true so we can use browser globals (such as "),a("code",[s._v("window")]),s._v(" or "),a("code",[s._v("localStorage")]),s._v(") and the linter will not complain that it is undefined. ")]),a("li",[s._v(" Some small customizations added.")])])]),a("div",{staticClass:"title is-6"},[s._v("ESLint Ignore File")]),a("div",{staticClass:"content"},[s._v("You can tell ESLint to "),a("a",{attrs:{href:"http://eslint.org/docs/user-guide/configuring.html#ignoring-files-and-directories"}},[s._v("ignore specific files and directories")]),s._v(" by using an "),a("code",[s._v(".eslintignore ")]),s._v("file in your project’s root directory: ")]),a("strong",{staticClass:"my-italic"},[s._v(".eslintignore")]),a("pre",{staticClass:"block"},[a("code",{staticClass:"hljs"},[s._v("build/"),a("span",{staticClass:"hljs-keyword"},[s._v("*")]),s._v(".js\nconfig/"),a("span",{staticClass:"hljs-keyword"},[s._v("*")]),s._v(".js\n")])])])])}],i={render:e,staticRenderFns:n};t.a=i},Sq6U:function(s,t,a){var e=a("fcGQ");"string"==typeof e&&(e=[[s.i,e,""]]),e.locals&&(s.exports=e.locals);a("rjj0")("7ecc9016",e,!0)},VL4h:function(s,t,a){"use strict";var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"my-back-nav"},[a("div",{staticClass:"container"},[a("nav",{staticClass:"navbar"},[a("div",{staticClass:"navbar-brand"},[a("router-link",{staticClass:"navbar-item my-brand",attrs:{to:{name:"overview"}}},[a("b-icon",{attrs:{icon:"arrow_back",type:"is-white"}})],1),a("div",{staticClass:"navbar-item subtitle has-text-white"},[s._v(s._s(s.title))])],1)])])])},n=[],i={render:e,staticRenderFns:n};t.a=i},XgH4:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a("DccK"),n=a("eXBR"),i=a("VU/8"),l=i(e.a,n.a,null,null,null);t.default=l.exports},"c/Tr":function(s,t,a){s.exports={default:a("5zde"),__esModule:!0}},eXBR:function(s,t,a){"use strict";var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"my-node-page"},[a("main",[a("back-nav",{attrs:{title:"PWA Configuration"}}),s._m(0)],1),a("main-footer")],1)},n=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("div",{staticClass:"content"},[s._v("In this section of the tutorial we'll discuss what's involved in a PWA...")]),a("div",{staticClass:"title is-4"},[s._v("Understanding PWA")]),a("div",{staticClass:"content"},[s._v("There's lots of information available on the Web about PWA's so I won't try to duplicate that\nhere. Here's some of the links you can take a look at:  "),a("ul",[a("li",[a("a",{attrs:{href:"https://developers.google.com/web/progressive-web-apps/"}},[s._v("Google Main Page for PWA")])]),a("li",[a("a",{attrs:{href:"https://developers.google.com/web/progressive-web-apps/checklist"}},[s._v("Google's PWA checklist")])]),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/Apps/Progressive"}},[s._v("PWA on MDN")])])])]),a("div",{staticClass:"content"},[s._v("In summary, a PWA is an app that can easily be added to the homescreen and used without a browser bar.  \nThe app feels and acts like a Native app.  We'll look at how to tackle some things in a PWA \napp through different examples later in the Examples section of the Tutorial (ie. offline error handling). ")]),a("div",{staticClass:"content"},[s._v("Let's first look at each piece of a PWA so that you know which adjustments you need to make. Then \nwe'll need to test it out on your mobile phone..."),a("ul",[a("li",[s._v("The Manifest (not to be confused with Webpack's Chunk Manifest): manifest.json")]),a("li",[s._v("The Service Worker: service-worker.js")]),a("li",[s._v("index.html")]),a("li",[s._v("Icon files")]),a("li",[s._v("The Viewport (Meta tag)")]),a("li",[s._v("Install Banners")])])]),a("div",{staticClass:"title is-4"},[s._v("The Manifest")]),a("div",{staticClass:"content"},[s._v("The Manifest file is used to configure your PWA (not to be confused with your \nWebpack Chunk Manifest file). The file gets copied from your "),a("code",[s._v("static")]),s._v("folder (and also the icons in "),a("code",[s._v("static/img/")]),s._v(" ):")]),a("strong",{staticClass:"my-italic"},[s._v("static/manifest.json ")]),a("pre",{staticClass:"block"},[a("code",{staticClass:"hljs javascript"},[s._v("{\n  "),a("span",{staticClass:"hljs-string"},[s._v('"name"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"vue-example-project"')]),s._v(",\n  "),a("span",{staticClass:"hljs-string"},[s._v('"short_name"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"example"')]),s._v(",\n  "),a("span",{staticClass:"hljs-string"},[s._v('"icons"')]),s._v(": [\n    {\n      "),a("span",{staticClass:"hljs-string"},[s._v('"src"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"/vue-example-project/static/img/icons/android-chrome-192x192.png"')]),s._v(",\n      "),a("span",{staticClass:"hljs-string"},[s._v('"sizes"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"192x192"')]),s._v(",\n      "),a("span",{staticClass:"hljs-string"},[s._v('"type"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"image/png"')]),s._v("\n    },\n    {\n      "),a("span",{staticClass:"hljs-string"},[s._v('"src"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"/vue-example-project/static/img/icons/android-chrome-512x512.png"')]),s._v(",\n      "),a("span",{staticClass:"hljs-string"},[s._v('"sizes"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"512x512"')]),s._v(",\n      "),a("span",{staticClass:"hljs-string"},[s._v('"type"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"image/png"')]),s._v("\n    }\n  ],\n  "),a("span",{staticClass:"hljs-string"},[s._v('"start_url"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"/vue-example-project/"')]),s._v(",\n  "),a("span",{staticClass:"hljs-string"},[s._v('"scope"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"/vue-example-project/"')]),s._v(",\n  "),a("span",{staticClass:"hljs-string"},[s._v('"display"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"standalone"')]),s._v(",\n  "),a("span",{staticClass:"hljs-string"},[s._v('"background_color"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"#000000"')]),s._v(",\n  "),a("span",{staticClass:"hljs-string"},[s._v('"theme_color"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"#00d1b2"')]),s._v("\n}\n")])]),a("div",{staticClass:"title is-4"},[s._v("The Service Worker")]),a("div",{staticClass:"content"},[s._v("The Service Worker allows for offline mode and is generated by the Webpack plugin: ")]),a("strong",{staticClass:"my-italic"},[s._v("build/webpack.prod.conf.js ")]),a("pre",{staticClass:"block"},[a("code",{staticClass:"hljs javascript"},[a("span",{staticClass:"hljs-comment"},[s._v("// ...")]),s._v("\n\n  plugins: [\n\n    "),a("span",{staticClass:"hljs-comment"},[s._v("// ...")]),s._v("\n\n    "),a("span",{staticClass:"hljs-comment"},[s._v("// service worker caching")]),s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" SWPrecacheWebpackPlugin({\n      cacheId: "),a("span",{staticClass:"hljs-string"},[s._v("'vue-example-project'")]),s._v(",   "),a("span",{staticClass:"hljs-comment"},[s._v("// <-- Update this id for your app.")]),s._v("\n      filename: "),a("span",{staticClass:"hljs-string"},[s._v("'service-worker.js'")]),s._v(",\n      staticFileGlobs: ["),a("span",{staticClass:"hljs-string"},[s._v("'dist/**/*.{js,html,css}'")]),s._v("],\n      minify: "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n      stripPrefix: "),a("span",{staticClass:"hljs-string"},[s._v("'dist/'")]),s._v("\n    })\n")])]),a("div",{staticClass:"content"},[s._v("After you "),a("code",[s._v("npm run build")]),s._v(" for production you'll see it appear in your "),a("code",[s._v("/dist")]),s._v("folder.")]),a("div",{staticClass:"title is-4"},[s._v("The View Port")]),a("div",{staticClass:"content"},[s._v("The proper view port (so that both desktop and mobile devices scale correctly) has been set\nvia a meta tag in "),a("code",[s._v("index.html")])]),a("strong",{staticClass:"my-italic"},[s._v("index.html")]),a("pre",{staticClass:"block"},[a("code",{staticClass:"hljs html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-title"},[s._v("meta")]),s._v(" "),a("span",{staticClass:"hljs-attribute"},[s._v("name")]),s._v("="),a("span",{staticClass:"hljs-value"},[s._v('"viewport"')]),s._v(" "),a("span",{staticClass:"hljs-attribute"},[s._v("content")]),s._v("="),a("span",{staticClass:"hljs-value"},[s._v('"width=device-width, initial-scale=1"')]),s._v(">")]),s._v("\n")])]),a("div",{staticClass:"title is-4"},[s._v("Setting Up HTTPS")]),a("div",{staticClass:"content"},[s._v("To take full advantage of a PWA (so that mobile devices will correctly consider your app a PWA\nand service works can work) \nyou will need to serve your app over HTTPS.")]),a("div",{staticClass:"title is-6"},[s._v("CloudFlare Free HTTPS ")]),a("div",{staticClass:"content"},[s._v("CloudFlare offers free HTTPS. Here are the steps you'll need to take: "),a("ul",[a("li",[s._v(" 1. Make sure you setup your-name.github.io to allow for your-custom-domain. You'll go\nto settings in your-name.github.io repo and add www.your-custom-domain.com there. You'll\nalso need to add a file named "),a("code",[s._v("CNAME ")]),s._v("that contains www.your-custom-domain.com.")]),a("li",[s._v("2. Sign up for free CloudFlare account for www.your-custom-domain.com. ")]),a("li",[s._v("3. Go to CloudFlares DNS tab: ")]),a("ul",[a("li",[s._v(" 3.1 Copy CloudFlare's nameservers and go to your registrar (where you purchased your-custom-domain)\nand add them there so your registrar will now point to CloudFlare's NameServers to resolve.")]),a("li",[s._v(" 3.2 Add a flat CNAME rule, for example: "),a("code",[s._v("CNAME * your-name.github.io")]),s._v(" .")])]),a("li",[s._v(' 4. Make sure you have turned on SSL. See the section "Domain Summary" in the Overview tab. \nMake sure you have it set for '),a("code",[s._v("full")]),s._v(" .")]),a("li",[s._v(" 5. Go to CloudFlare's Page Rules tab and add the rule "),a("code",[s._v("http://*.your-custom-domain.com/* ")]),s._v("with settings as "),a("code",[s._v("Always Use HTTPS")])]),a("li",[s._v("6. Wait for a few hours (up to 24) and then Github should pick it up and it should work.")])])]),a("div",{staticClass:"title is-4"},[s._v("Install Banners and Add to Home Screen")]),a("div",{staticClass:"content"},[s._v('You can read about install banners and "Add to Home Screen" here (includes notes on "testing"\nfor them as well): '),a("a",{attrs:{href:"https://developers.google.com/web/fundamentals/engage-and-retain/app-install-banners/"}},[s._v(" https://developers.google.com/web/fundamentals/engage-and-retain/app-install-banners/")]),s._v("Basically, it's just a popup indication from the mobile device that allows users to more easily\nadd your app to their homescreen (allows for shortcut and opens without a browser bar).\nThe restrictions are: "),a("ul",[a("li",[s._v("Has a web app manifest file with:")]),a("ul",[a("li",[s._v("a short_name (used on the home screen)")]),a("li",[s._v("a name (used in the banner)")]),a("li",[s._v("a 144x144 png icon (the icon declarations must include a mime type of image/png)")]),a("li",[s._v("a start_url that loads")])]),a("li",[s._v("Has a service worker registered on your site.")]),a("li",[s._v("Is served over HTTPS (a requirement for using service worker).")]),a("li",[s._v("Is visited at least twice, with at least five minutes between visits.")])])]),a("strong",{staticClass:"my-italic"},[s._v("index.html")]),a("pre",{staticClass:"block"},[a("code",{staticClass:"hljs html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-title"},[s._v("meta")]),s._v(" "),a("span",{staticClass:"hljs-attribute"},[s._v("name")]),s._v("="),a("span",{staticClass:"hljs-value"},[s._v('"viewport"')]),s._v(" "),a("span",{staticClass:"hljs-attribute"},[s._v("content")]),s._v("="),a("span",{staticClass:"hljs-value"},[s._v('"width=device-width, initial-scale=1"')]),s._v(">")]),s._v("\n\n")])])])])}],i={render:e,staticRenderFns:n};t.a=i},fBQ2:function(s,t,a){"use strict";var e=a("evD5"),n=a("X8DO");s.exports=function(s,t,a){t in s?e.f(s,t,n(0,a)):s[t]=a}},fcGQ:function(s,t,a){t=s.exports=a("FZ+f")(!0),t.push([s.i,"#app .my-back-nav{border-bottom:1px solid hsla(0,0%,100%,.5)}#app .my-back-nav,#app .my-back-nav .navbar{background-color:#00bda0}#app .my-back-nav .navbar-item:hover .icon>i,#app .my-back-nav .navbar-item:hover>.navbar-link,#app .my-back-nav .navbar-item:hover>a{color:#0a0a0a}","",{version:3,sources:["/home/david/projects/code/vue-example-project/src/features/common/back-nav.vue"],names:[],mappings:"AACA,kBAEE,0CAA+C,CAChD,AACD,4CAHE,wBAA0B,CAK3B,AACD,sIAGE,aAAe,CAChB",file:"back-nav.vue",sourcesContent:["\n#app .my-back-nav {\n  background-color: #00bda0;\n  border-bottom: 1px solid rgba(255,255,255,0.5);\n}\n#app .my-back-nav .navbar {\n  background-color: #00bda0;\n}\n#app .my-back-nav .navbar-item:hover > a,\n#app .my-back-nav .navbar-item:hover > .navbar-link,\n#app .my-back-nav .navbar-item:hover .icon > i {\n  color: #0a0a0a;\n}"],sourceRoot:""}])},n0Nb:function(s,t,a){"use strict";var e=a("c/Tr"),n=a.n(e),i=a("Mn9/");t.a={name:"editors",components:{BackNav:i.a},mounted:function(){var s=this,t=n()(document.getElementsByClassName("title")),a=t.filter(function(t){return t.innerHTML===s.$route.query.title})[0];a?a.scrollIntoView():scroll(0,0)},data:function(){return{}},methods:{}}},qyJz:function(s,t,a){"use strict";var e=a("+ZMJ"),n=a("kM2E"),i=a("sB3e"),l=a("msXi"),o=a("Mhyx"),r=a("QRG4"),c=a("fBQ2"),v=a("3fs2");n(n.S+n.F*!a("dY0y")(function(s){Array.from(s)}),"Array",{from:function(s){var t,a,n,u,d=i(s),p="function"==typeof this?this:Array,_=arguments.length,h=_>1?arguments[1]:void 0,m=void 0!==h,g=0,f=v(d);if(m&&(h=e(h,_>2?arguments[2]:void 0,2)),void 0==f||p==Array&&o(f))for(t=r(d.length),a=new p(t);t>g;g++)c(a,g,m?h(d[g],g):d[g]);else for(u=f.call(d),a=new p;!(n=u.next()).done;g++)c(a,g,m?l(u,h,[n.value,g],!0):n.value);return a.length=g,a}})}});
//# sourceMappingURL=eslint.8401025d01b54127256f.js.map