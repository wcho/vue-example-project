webpackJsonp([11],{"4vsg":function(t,s,e){"use strict";var a=e("c/Tr"),n=e.n(a),i=e("Mn9/");s.a={name:"editors",components:{BackNav:i.a},mounted:function(){var t=this,s=n()(document.getElementsByClassName("title")),e=s.filter(function(s){return s.innerHTML===t.$route.query.title})[0];e?e.scrollIntoView():scroll(0,0)},data:function(){return{}},methods:{}}},"5zde":function(t,s,e){e("zQR9"),e("qyJz"),t.exports=e("FeBl").Array.from},"6awc":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"my-node-page"},[e("main",[e("back-nav",{attrs:{title:"Editors"}}),e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[t._v("In this section of the tutorial we'll discuss code editors...")]),e("div",{staticClass:"title is-4"},[t._v("Advantages of VS Code")]),t._m(0),e("div",{staticClass:"title is-4"},[t._v("Setting Up VS Code")]),e("div",{staticClass:"title is-6"},[t._v("User and Workspace Settings")]),t._m(1),t._m(2),e("strong",{staticClass:"my-italic"},[t._v(".vscode/settings.json ")]),t._m(3),e("strong",{staticClass:"my-italic"},[t._v(".vscode/extensions.json ")]),t._m(4),e("div",{staticClass:"title is-6"},[t._v("Key Bindings")]),t._m(5),t._m(6),e("strong",{staticClass:"my-italic"},[t._v("~/.config/Code/User/keybindings.json")]),t._m(7),e("b-message",{attrs:{type:"is-warning"}},[t._v("NOTE: Restart the editor and you'll see syntax highlighting, linting, and all things working nicely!")]),e("div",{staticClass:"title is-4"},[t._v("Setting Up Sublime Text 3")]),e("div",{staticClass:"title is-6"},[t._v("Install Package Control")]),t._m(8),e("div",{staticClass:"title is-6"},[t._v("Install Babel syntax definitions for ES6 JavaScript")]),t._m(9),e("div",{staticClass:"title is-6"},[t._v("Install a theme that works well with Babel")]),t._m(10),e("div",{staticClass:"title is-6"},[t._v("Setup soft tabs and 2 space indention")]),t._m(11),e("div",{staticClass:"title is-6"},[t._v("Install Stylus package for Sublime")]),t._m(12),e("div",{staticClass:"title is-6"},[t._v("Install Sublime-linter and ESLinter")]),t._m(13),e("b-message",{attrs:{type:"is-warning"}},[t._v("Note: In the next section you'll configure eslint. If you install eslint into the same directory\nyou are modifying Sublime files from (and same machine), then Sublimelinter will have no problem\nusing it. Or you can also install eslint (and all the other eslint-* packages) globally on the \nsame machine as Sublime. But if you are using a server or a virtual machine (Vagrant/Virtualbox)\nconfiguration, then you need to tell sublimelinter where eslint is. You can change the path with"),e("code",[t._v("Sublime Text -> Prefences -> Package Settings -> SublimeLinter -> Settings-User")]),t._v(".")])],1)])],1),e("main-footer")],1)},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._v("After using "),e("a",{attrs:{href:"https://www.sublimetext.com/3"}},[t._v("Sublime Text 3 ")]),t._v("extensively and dabbling in "),e("a",{attrs:{href:"https://code.visualstudio.com/"}},[t._v("Atom, ")]),t._v("I've found "),e("a",{attrs:{href:"https://github.com/Microsoft/vscode"}},[t._v("VS Code ")]),t._v("to be my choice editor."),e("ul",[e("li",[t._v("It's open source. Sublime Text 3 is not (and that's not a bad thing for software, but it's nice to have an open source editor).  ")]),e("li",[t._v(" It can  "),e("a",{attrs:{src:"https://github.com/Microsoft/vscode/issues/30180"}},[t._v("handle large files")]),t._v(".  ")]),e("li",[t._v("File explorer is built in and extensions are super easy to manage.  ")]),e("li",[t._v("Built-in Markdown support.  ")]),e("li",[t._v("Built-in TypeScript support (Microsoft are the makers of TypeScript).  ")]),e("li",[t._v("Actively maintained (Sublime Text 3 is not regularly maintained).  ")]),e("li",[t._v("Easier to setup ESLint.")]),e("li",[t._v("Built-in support for Markdown editing and preview (with split-screen).  ")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._v("If you navigate to "),e("code",[t._v("File > Preferences > Settings ")]),t._v(", VS Code will open up a tab into your "),e("code",[t._v("settings.json ")]),t._v("(User level). You'll notice the left pane lists all the defaults settings for the\neditor and also for any extensions you've installed. You can override these values in your"),e("code",[t._v("settings.json ")]),t._v("file. You can read more about this "),e("a",{attrs:{href:"https://code.visualstudio.com/docs/getstarted/settings"}},[t._v("here ")]),t._v(", but we are more focused on providing a workspace settings file in this project.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._v("VS Code provides two different scopes for settings:  "),e("ul",[e("li",[t._v(" User: These settings apply globally to any instance of VS Code you open.  ")]),e("li",[t._v(" Workspace: These settings are stored inside your workspace in a .vscode folder \nand only apply when the workspace is opened. Settings defined on this scope override the user scope.  ")])]),t._v("I've added a "),e("code",[t._v(".vscode ")]),t._v("folder to the project to hold the workspace settings. There are 2 files located there. The "),e("code",[t._v("settings.json")]),t._v("file to hold the settings for the project and the "),e("code",[t._v("extensions.json ")]),t._v("file to hold the "),e("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions"}},[t._v("recommended extensions for a project.")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{staticClass:"block"},[e("code",{staticClass:"hljs javascript"},[e("span",{staticClass:"hljs-comment"},[t._v("// Place your settings in this file to override the default and user settings")]),t._v("\n{\n    "),e("span",{staticClass:"hljs-comment"},[t._v("// Settings for .js, .vue, .styl files.")]),t._v("\n    "),e("span",{staticClass:"hljs-string"},[t._v('"[javascript]"')]),t._v(": {\n        "),e("span",{staticClass:"hljs-string"},[t._v('"editor.tabSize"')]),t._v(": "),e("span",{staticClass:"hljs-number"},[t._v("2")]),t._v(",\n        "),e("span",{staticClass:"hljs-string"},[t._v('"editor.insertSpaces"')]),t._v(": "),e("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v("\n    },\n    "),e("span",{staticClass:"hljs-string"},[t._v('"[vue]"')]),t._v(": {\n        "),e("span",{staticClass:"hljs-string"},[t._v('"editor.tabSize"')]),t._v(": "),e("span",{staticClass:"hljs-number"},[t._v("2")]),t._v(",\n        "),e("span",{staticClass:"hljs-string"},[t._v('"editor.insertSpaces"')]),t._v(": "),e("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v("\n    },\n    "),e("span",{staticClass:"hljs-string"},[t._v('"[stylus]"')]),t._v(": {\n        "),e("span",{staticClass:"hljs-string"},[t._v('"editor.tabSize"')]),t._v(": "),e("span",{staticClass:"hljs-number"},[t._v("2")]),t._v(",\n        "),e("span",{staticClass:"hljs-string"},[t._v('"editor.insertSpaces"')]),t._v(": "),e("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v("\n    },\n\n    "),e("span",{staticClass:"hljs-comment"},[t._v("// This is required for ESLint to work in Vue in VS Code.")]),t._v("\n    "),e("span",{staticClass:"hljs-string"},[t._v('"eslint.options"')]),t._v(": {\n        "),e("span",{staticClass:"hljs-string"},[t._v('"extensions"')]),t._v(": ["),e("span",{staticClass:"hljs-string"},[t._v('".html"')]),t._v(", "),e("span",{staticClass:"hljs-string"},[t._v('".js"')]),t._v(", "),e("span",{staticClass:"hljs-string"},[t._v('".vue"')]),t._v(", "),e("span",{staticClass:"hljs-string"},[t._v('".jsx"')]),t._v("]\n    },\n    "),e("span",{staticClass:"hljs-string"},[t._v('"eslint.validate"')]),t._v(": [\n        {\n            "),e("span",{staticClass:"hljs-string"},[t._v('"language"')]),t._v(": "),e("span",{staticClass:"hljs-string"},[t._v('"html"')]),t._v(",\n            "),e("span",{staticClass:"hljs-string"},[t._v('"autoFix"')]),t._v(": "),e("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v("\n        },\n        {\n            "),e("span",{staticClass:"hljs-string"},[t._v('"language"')]),t._v(": "),e("span",{staticClass:"hljs-string"},[t._v('"vue"')]),t._v(",\n            "),e("span",{staticClass:"hljs-string"},[t._v('"autoFix"')]),t._v(": "),e("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v("\n        },\n        {\n            "),e("span",{staticClass:"hljs-string"},[t._v('"language"')]),t._v(": "),e("span",{staticClass:"hljs-string"},[t._v('"javascript"')]),t._v(",\n            "),e("span",{staticClass:"hljs-string"},[t._v('"autoFix"')]),t._v(": "),e("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v("\n        },\n        {\n            "),e("span",{staticClass:"hljs-string"},[t._v('"language"')]),t._v(": "),e("span",{staticClass:"hljs-string"},[t._v('"javascriptreact"')]),t._v(",\n            "),e("span",{staticClass:"hljs-string"},[t._v('"autoFix"')]),t._v(": "),e("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v("\n        }\n    ],\n\n    "),e("span",{staticClass:"hljs-comment"},[t._v("// When you hit ctrl+e to search, you don't want node_modules to be included.")]),t._v("\n    "),e("span",{staticClass:"hljs-string"},[t._v('"search.exclude"')]),t._v(": {\n        "),e("span",{staticClass:"hljs-string"},[t._v('"**/.git"')]),t._v(": "),e("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(",\n        "),e("span",{staticClass:"hljs-string"},[t._v('"**/node_modules"')]),t._v(": "),e("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(",\n        "),e("span",{staticClass:"hljs-string"},[t._v('"**/tmp"')]),t._v(": "),e("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v("\n    }\n}\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{staticClass:"block"},[e("code",{staticClass:"hljs javascript"},[t._v("{\n  "),e("span",{staticClass:"hljs-comment"},[t._v("// See http://go.microsoft.com/fwlink/?LinkId=827846")]),t._v("\n  "),e("span",{staticClass:"hljs-comment"},[t._v("// for the documentation about the extensions.json format")]),t._v("\n  "),e("span",{staticClass:"hljs-string"},[t._v('"recommendations"')]),t._v(": [\n    "),e("span",{staticClass:"hljs-comment"},[t._v("// Extension identifier format: ${publisher}.${name}. Example: vscode.csharp")]),t._v("\n    "),e("span",{staticClass:"hljs-string"},[t._v('"dbaeumer.vscode-eslint"')]),t._v(",\n    "),e("span",{staticClass:"hljs-string"},[t._v('"sysoev.language-stylus"')]),t._v(",\n    "),e("span",{staticClass:"hljs-string"},[t._v('"octref.vetur"')]),t._v("\t\t\t\t\n  ]\n}\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._v("If there are some key shortcuts you want to change, it's super easy.\nGo to "),e("code",[t._v("File > Preferences > Keyboard Shortcuts ")]),t._v("and then search for the command you want to change. You'll also see \na link under the search bar "),e("code",[t._v(" For advanced customizations open and edit "),e("span",{staticClass:"my-underline"},[t._v("keybindings.json")]),t._v(".")]),t._v('This will open up a .json file for you to add bindings and you\'ll see a list of defaults \nopen in a tab to your left called "Default Keybindings".')])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._v('For example, I like to have a more simplified "copy line down" command and \nuse '),e("code",[t._v("ctrl+d ")]),t._v("to duplicate a line downwards:  ")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{staticClass:"block"},[e("code",{staticClass:"hljs javascript"},[e("span",{staticClass:"hljs-comment"},[t._v("// Place your key bindings in this file to overwrite the defaults")]),t._v("\n[\n    {\n        "),e("span",{staticClass:"hljs-string"},[t._v('"key"')]),t._v(": "),e("span",{staticClass:"hljs-string"},[t._v('"ctrl+d"')]),t._v(",\n        "),e("span",{staticClass:"hljs-string"},[t._v('"command"')]),t._v(": "),e("span",{staticClass:"hljs-string"},[t._v('"editor.action.copyLinesDownAction"')]),t._v(",\n        "),e("span",{staticClass:"hljs-string"},[t._v('"when"')]),t._v(": "),e("span",{staticClass:"hljs-string"},[t._v('"editorTextFocus && !editorReadonly"')]),t._v("\n    }\n]\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("a",{attrs:{href:"https://packagecontrol.io/installation"}},[t._v("https://packagecontrol.io/installation")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("ul",[e("li",[t._v(" 1. Go to "),e("code",[t._v("Preferences > Package Control > Install Package")]),t._v(" or press "),e("code",[t._v("ctrl+shift+p")]),t._v(" (Win, Linux) or "),e("code",[t._v("cmd+shift+p")]),t._v(' (OS X) and  search for "Package Control: Install Package".')]),e("li",[t._v('2. Search for the package "Babel" and install it.')]),e("li",[t._v(" 3. Open any .js file in Sublime. Then go to "),e("code",[t._v("View > Syntax > Open all with current extension as... > Babel > Javascript (Babel)")]),t._v(".")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._v("For example, here's how you can install the "),e("code",[t._v("Oceanic Next")]),t._v(" theme:"),e("ul",[e("li",[t._v(" 1. Try the Oceanic Next theme: "),e("code",[t._v("Open Package Control -> Install Package")]),t._v("and search for Oceanic Next color theme.")]),e("li",[t._v(" 2. Go to "),e("code",[t._v("Preferences > Oceanic Next Color theme > Oceanic next")]),t._v(".")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("ul",[e("li",[t._v(" 1. Open any .js file. Go to "),e("code",[t._v("Preferences > Settings - More > Syntax Specific - User")]),t._v(".")]),e("li",[t._v(" 2. It should open a file like "),e("code",[t._v("JavaScript (Babel).sublime-settings")])]),e("li",[t._v(" 3. Add these parameters to the file:"),e("pre",{staticClass:"block"},[e("code",{staticClass:"hljs javascript"},[t._v("{\n  "),e("span",{staticClass:"hljs-string"},[t._v('"extensions"')]),t._v(":\n  [\n    "),e("span",{staticClass:"hljs-string"},[t._v('"js"')]),t._v("\n  ],\n  "),e("span",{staticClass:"hljs-string"},[t._v('"tab_size"')]),t._v(": "),e("span",{staticClass:"hljs-number"},[t._v("2")]),t._v(",\n    "),e("span",{staticClass:"hljs-string"},[t._v('"translate_tabs_to_spaces"')]),t._v(": "),e("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v("\n}  ")])])]),e("li",[t._v(" 4. Open any "),e("code",[t._v(".vue")]),t._v(" file and repeat this process.")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("ul",[e("li",[t._v("Open "),e("code",[t._v("Package Control: Install Package")]),t._v(" and search for "),e("code",[t._v("Stylus")]),t._v(" and install it (should be billymoon/Stylus package).")]),e("li",[t._v("Restart Sublime.")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("ul",[e("li",[t._v(" Open "),e("code",[t._v("Package Control: Install Package")]),t._v("and search for "),e("code",[t._v("SublimeLinter")]),t._v("and install it.")]),e("li",[t._v(" Search for "),e("code",[t._v("SublimeLinter-contrib-eslint")]),t._v("and install it as well.")]),e("li",[t._v("Restart Sublime.")])])])}],i={render:a,staticRenderFns:n};s.a=i},"8bnN":function(t,s,e){"use strict";s.a={props:{title:{type:String,default:""}},data:function(){return{}},methods:{}}},"Mn9/":function(t,s,e){"use strict";function a(t){e("Sq6U")}var n=e("8bnN"),i=e("VL4h"),l=e("VU/8"),o=a,r=l(n.a,i.a,o,null,null);s.a=r.exports},NYDl:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("4vsg"),n=e("6awc"),i=e("VU/8"),l=i(a.a,n.a,null,null,null);s.default=l.exports},Sq6U:function(t,s,e){var a=e("fcGQ");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("7ecc9016",a,!0)},VL4h:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"my-back-nav"},[e("div",{staticClass:"container"},[e("nav",{staticClass:"navbar"},[e("div",{staticClass:"navbar-brand"},[e("router-link",{staticClass:"navbar-item my-brand",attrs:{to:{name:"overview"}}},[e("b-icon",{attrs:{icon:"arrow_back",type:"is-white"}})],1),e("div",{staticClass:"navbar-item subtitle has-text-white"},[t._v(t._s(t.title))])],1)])])])},n=[],i={render:a,staticRenderFns:n};s.a=i},"c/Tr":function(t,s,e){t.exports={default:e("5zde"),__esModule:!0}},fBQ2:function(t,s,e){"use strict";var a=e("evD5"),n=e("X8DO");t.exports=function(t,s,e){s in t?a.f(t,s,n(0,e)):t[s]=e}},fcGQ:function(t,s,e){s=t.exports=e("FZ+f")(!0),s.push([t.i,"#app .my-back-nav{border-bottom:1px solid hsla(0,0%,100%,.5)}#app .my-back-nav,#app .my-back-nav .navbar{background-color:#00bda0}#app .my-back-nav .navbar-item:hover .icon>i,#app .my-back-nav .navbar-item:hover>.navbar-link,#app .my-back-nav .navbar-item:hover>a{color:#0a0a0a}","",{version:3,sources:["/home/david/projects/code/vue-example-project/src/features/common/back-nav.vue"],names:[],mappings:"AACA,kBAEE,0CAA+C,CAChD,AACD,4CAHE,wBAA0B,CAK3B,AACD,sIAGE,aAAe,CAChB",file:"back-nav.vue",sourcesContent:["\n#app .my-back-nav {\n  background-color: #00bda0;\n  border-bottom: 1px solid rgba(255,255,255,0.5);\n}\n#app .my-back-nav .navbar {\n  background-color: #00bda0;\n}\n#app .my-back-nav .navbar-item:hover > a,\n#app .my-back-nav .navbar-item:hover > .navbar-link,\n#app .my-back-nav .navbar-item:hover .icon > i {\n  color: #0a0a0a;\n}"],sourceRoot:""}])},qyJz:function(t,s,e){"use strict";var a=e("+ZMJ"),n=e("kM2E"),i=e("sB3e"),l=e("msXi"),o=e("Mhyx"),r=e("QRG4"),c=e("fBQ2"),v=e("3fs2");n(n.S+n.F*!e("dY0y")(function(t){Array.from(t)}),"Array",{from:function(t){var s,e,n,_,d=i(t),u="function"==typeof this?this:Array,h=arguments.length,p=h>1?arguments[1]:void 0,m=void 0!==p,f=0,g=v(d);if(m&&(p=a(p,h>2?arguments[2]:void 0,2)),void 0==g||u==Array&&o(g))for(s=r(d.length),e=new u(s);s>f;f++)c(e,f,m?p(d[f],f):d[f]);else for(_=g.call(d),e=new u;!(n=_.next()).done;f++)c(e,f,m?l(_,p,[n.value,f],!0):n.value);return e.length=f,e}})}});
//# sourceMappingURL=editors.61b9424ebbab61f34a2e.js.map