(function(e){function t(t){for(var r,o,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)o=c[l],a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2112c069":"ce1e7f6f","chunk-5cd803c4":"00afa125","chunk-f9952172":"7bec69ca","chunk-ff4c8b06":"7cd6d25e","chunk-cd7a9e6e":"9a2ec519","chunk-4fbdbe30":"1928205f","chunk-2bea2fb0":"f4fe7287","chunk-68356c2e":"090cd023","chunk-6b99e47a":"261217c8"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-f9952172":1,"chunk-ff4c8b06":1,"chunk-4fbdbe30":1,"chunk-2bea2fb0":1,"chunk-68356c2e":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2112c069":"31d6cfe0","chunk-5cd803c4":"31d6cfe0","chunk-f9952172":"71e07f44","chunk-ff4c8b06":"71e07f44","chunk-cd7a9e6e":"31d6cfe0","chunk-4fbdbe30":"71e07f44","chunk-2bea2fb0":"71e07f44","chunk-68356c2e":"961a5204","chunk-6b99e47a":"31d6cfe0"}[e]+".css",a=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e),u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1162:function(e,t,n){e.exports=n.p+"img/rider-dash-logo-white.936e5288.png"},"32c8":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"appRoot"}},[e.$route.meta.public?[n("transition",[n("keep-alive",[n("router-view")],1)],1)]:[n("v-app",{staticClass:"app",attrs:{id:"inspire"}},[n("app-drawer",{staticClass:"app--drawer"}),n("app-toolbar",{staticClass:"app--toolbar"}),n("v-content",[n("div",{staticClass:"page-wrapper"},[n("router-view")],1),n("v-footer",{staticClass:"white pa-3 app--footer",attrs:{height:"auto"}},[n("span",{staticClass:"caption"},[e._v("\n            Rider Dash © "+e._s((new Date).getFullYear())+"\n          ")]),n("v-spacer")],1)],1),n("app-fab")],1)],n("div",{directives:[{name:"show",rawName:"v-show",value:e.overlay.rider_pick,expression:"overlay.rider_pick"}],staticClass:"rider-pick-overlay",attrs:{tabindex:"0"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.hide_rider_pick()}}},[n("v-container",{attrs:{bg:"","fill-height":"","grid-list-md":"","text-xs-center":""}},[n("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[n("v-flex",{staticClass:"white--text display-1 font-weight-bold text-uppercase"},[e._v("\n          Select Rider\n        ")])],1)],1)],1),n("v-snackbar",{attrs:{timeout:3e3,top:"",right:"",color:e.snackbar.color},model:{value:e.snackbar.show,callback:function(t){e.$set(e.snackbar,"show",t)},expression:"snackbar.show"}},[e._v("\n    "+e._s(e.snackbar.text)+"\n    "),n("v-btn",{attrs:{dark:"",flat:"",icon:""},nativeOn:{click:function(t){e.snackbar.show=!1}}},[n("v-icon",[e._v("close")])],1)],1)],2)},a=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-navigation-drawer",{attrs:{id:"appDrawer","mini-variant":e.mini,fixed:"",dark:e.$vuetify.dark,app:"",width:"220"},on:{"update:miniVariant":function(t){e.mini=t},"update:mini-variant":function(t){e.mini=t}},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-toolbar",{attrs:{color:"primary",dark:""}},[r("img",{attrs:{src:n("1162"),height:"50",alt:"Rider Dash"}}),r("v-toolbar-title",{staticClass:"ml-0 pl-3"},[r("span",{staticClass:"hidden-sm-and-down"},[e._v("Rider Dash")])])],1),r("vue-perfect-scrollbar",{staticClass:"drawer-menu--scroll"},[r("v-list",{attrs:{dense:"",expand:""}},[e._l(e.menus,function(t){return[r("v-list-tile",{key:t.name,attrs:{to:t.href?null:{name:t.name},href:t.href,ripple:"ripple",disabled:t.disabled,target:t.target,rel:"noopener"}},[t.icon?r("v-list-tile-action",[r("v-icon",[e._v(e._s(t.icon))])],1):e._e(),r("v-list-tile-content",[r("v-list-tile-title",[e._v(e._s(t.title))])],1),t.subAction?r("v-list-tile-action",[r("v-icon",{staticClass:"success--text"},[e._v(e._s(t.subAction))])],1):e._e()],1)]})],2)],1)],1)},c=[],s=(n("7f7f"),n("9d63")),u=n.n(s),l={name:"app-drawer",components:{VuePerfectScrollbar:u.a},props:{expanded:{type:Boolean,default:!0}},data:function(){return{mini:!1,drawer:!0,menus:[]}},created:function(){var e=this;this.$router.options.routes.filter(function(e){if(e.meta.menu){var t={title:e.name,group:"default",icon:e.icon,name:e.name};this.menus.push(t)}return!0}.bind(this)),window.getApp.$on("APP_DRAWER_TOGGLED",function(){e.drawer=!e.drawer})},methods:{genChildTarget:function(e,t){if(!t.href)return t.component?{name:t.component}:{name:"".concat(e.group,"/").concat(t.name)}}}},d=l,f=n("2877"),p=Object(f["a"])(d,i,c,!1,null,null,null),h=p.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-toolbar",{attrs:{color:"secondary",fixed:"",dark:"",app:""}},[n("v-toolbar-title",{staticClass:"ml-0 pl-3"},[n("v-toolbar-side-icon",{on:{click:function(t){return t.stopPropagation(),e.handleDrawerToggle(t)}}})],1),n("v-spacer"),n("v-toolbar-title",{directives:[{name:"show",rawName:"v-show",value:e.show_rider_button,expression:"show_rider_button"}],staticClass:"ml-0 pl-3"},[n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-btn",e._g({attrs:{flat:"",icon:"",color:"primary"},on:{click:function(t){return e.show_riders()}}},r),[n("v-icon",[e._v("motorcycle")])],1)]}}])},[n("span",[e._v("Show Riders")])])],1),n("v-menu",{attrs:{origin:"center center","offset-y":"","nudge-bottom":10,transition:"scale-transition"}},[n("v-btn",{attrs:{slot:"activator",icon:"",large:"",flat:""},slot:"activator"},[n("v-avatar",{attrs:{size:"30px"}},[n("v-icon",[e._v("expand_more")])],1)],1),n("v-list",{staticClass:"pa-0"},[n("v-list-tile",{on:{click:function(t){return e.logout()}}},[n("v-list-tile-action",[n("v-icon",[e._v("exit_to_app")])],1),n("v-list-tile-content",[n("v-list-tile-title",[e._v("Logout")])],1)],1)],1)],1)],1)},v=[],b=(n("a481"),{name:"app-toolbar",data:function(){return{dialog:{show_edit:!1},userFormValid:!1,user_id:null,rules:{required:function(e){return!!e||"Required."}},show_rider_button:!1}},watch:{$route:function(e){"dashboard"===e.name.toLowerCase()?this.show_rider_button=!0:this.show_rider_button=!1}},methods:{logout:function(){this.$store.dispatch("setToken",null),window.getApp.snackbar={show:!0,color:"green",text:"Logout successfully."},this.$router.replace({path:"/"})},handleDrawerToggle:function(){window.getApp.$emit("APP_DRAWER_TOGGLED")},show_riders:function(){window.getApp.$emit("RIDERS_DRAWER_TOGGLED")}},created:function(){this.user=this.$store.state.user}}),k=b,g=Object(f["a"])(k,m,v,!1,null,null,null),w=g.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-fab-transition",[n("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:e.fab,expression:"fab"}],attrs:{fab:"fab",small:"",dark:"dark",fixed:"fixed",bottom:"bottom",right:"right",color:"primary"},on:{click:e.toTop}},[n("v-icon",[e._v("keyboard_arrow_up")])],1)],1)},y=[],x={name:"app-fab",data:function(){return{fab:!1}},methods:{onScroll:function(){if("undefined"!==typeof window){var e=window.pageYOffset||document.documentElement.offsetTop||0;this.fab=e>300}},toTop:function(){this.$router.push({hash:""}),this.$vuetify.goTo(0)}}},A=x,E=Object(f["a"])(A,_,y,!1,null,null,null),T=E.exports,C={components:{AppDrawer:h,AppToolbar:w,AppFab:T},data:function(){return{expanded:!0,snackbar:{show:!1,text:"",color:""},overlay:{rider_pick:!1}}},created:function(){var e=this;window.getApp=this,window.getApp.$on("RIDER_PICK",function(){window.getApp.$emit("RIDERS_DRAWER_TOGGLED",!0),e.overlay.rider_pick=!e.overlay.rider_pick})},methods:{hide_rider_pick:function(){window.getApp.$emit("EXIT_RIDER_PICK",!1),window.getApp.$emit("RIDERS_DRAWER_TOGGLED",!1),this.overlay.rider_pick=!this.overlay.rider_pick}}},R=C,O=(n("83f4"),Object(f["a"])(R,o,a,!1,null,"ccee5be6",null)),D=O.exports,P=n("2f62"),S=n("0e44");r["default"].use(P["a"]);var $=new P["a"].Store({plugins:[Object(S["a"])()],strict:!0,state:{token:null,user:[]},mutations:{setToken:function(e,t){e.token=t},setUser:function(e,t){e.user=t}},getters:{getToken:function(e){return e.token},getUser:function(e){return e.user}},actions:{setToken:function(e,t){var n=e.commit;n("setToken",t)},setUser:function(e,t){var n=e.commit;n("setUser",t)}}}),j=n("8c4f"),N=[{path:"/",meta:{public:!0,menu:!1},name:"Root",component:function(){return Promise.all([n.e("chunk-2112c069"),n.e("chunk-cd7a9e6e"),n.e("chunk-68356c2e")]).then(n.bind(null,"013f"))}},{path:"/dashboard",icon:"dashboard",meta:{breadcrumb:!0,requiresAuth:!0,menu:!0},name:"Dashboard",component:function(){return Promise.all([n.e("chunk-2112c069"),n.e("chunk-cd7a9e6e"),n.e("chunk-5cd803c4"),n.e("chunk-2bea2fb0")]).then(n.bind(null,"ec95"))}},{path:"/orders",icon:"assignment",meta:{breadcrumb:!0,requiresAuth:!0,menu:!0},name:"Orders",component:function(){return Promise.all([n.e("chunk-2112c069"),n.e("chunk-5cd803c4"),n.e("chunk-f9952172")]).then(n.bind(null,"0b35"))}},{path:"/riders",icon:"motorcycle",meta:{breadcrumb:!0,requiresAuth:!0,menu:!0},name:"Riders",component:function(){return Promise.all([n.e("chunk-2112c069"),n.e("chunk-cd7a9e6e"),n.e("chunk-6b99e47a")]).then(n.bind(null,"181c"))}},{path:"/coupons",icon:"local_offer",meta:{breadcrumb:!0,requiresAuth:!0,menu:!0},name:"Coupons",component:function(){return Promise.all([n.e("chunk-2112c069"),n.e("chunk-5cd803c4"),n.e("chunk-ff4c8b06")]).then(n.bind(null,"b28b"))}},{path:"/settings",icon:"settings",meta:{breadcrumb:!0,requiresAuth:!0,menu:!0},name:"Settings",component:function(){return Promise.all([n.e("chunk-2112c069"),n.e("chunk-cd7a9e6e"),n.e("chunk-4fbdbe30")]).then(n.bind(null,"b41f"))}}];r["default"].use(j["a"]);var q=new j["a"]({base:"/",mode:"history",linkActiveClass:"active",routes:N});q.beforeEach(function(e,t,n){e.meta.requiresAuth&&!$.getters.getToken?n({path:"/"}):n()});var L=q,G=n("9483");Object(G["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var I=n("522d"),B=n("74ca"),F=n("d634"),M=n("c0cc"),U=n("4518"),W=n("478e"),V=n("c2c3"),z=n("2bf2"),K=n("ce5b"),Y=n.n(K),J=(n("bf40"),n("a294"),n("755e")),H=n("0ff2"),X=n("2ead"),Q=n.n(X),Z=n("26ae"),ee=n.n(Z),te=n("7871"),ne=n.n(te);r["default"].use(J,{load:{key:"AIzaSyBrut1TgmgMpul0RfA6h3Ryx3OoDodh_YA"}}),r["default"].use(H["a"]),r["default"].filter("truncate",ne.a),r["default"].use(Q.a),r["default"].use(ee.a,{symbol:"₱",thousandsSeparator:",",fractionCount:2,fractionSeparator:".",symbolPosition:"front",symbolSpacing:!0}),r["default"].use(Y.a,{theme:{primary:"#ff5f07",secondary:"#313131",accent:"#ff5f07"},options:{themeVariations:["primary","secondary","accent"],extra:{mainToolbar:{color:"primary"},sideNav:"primary",mainNav:"primary lighten-1",bodyBg:""}}});var re=new W["a"]({uri:"https://api.riderdash.ph"}),oe=new M["a"]({uri:"wss://api.riderdash.ph/graphql",options:{reconnect:!0,connectionParams:{authToken:"Bearer ".concat($.state.token)}}}),ae=Object(V["a"])(function(){return{headers:{authorization:"Bearer ".concat($.state.token)}}}),ie=Object(F["d"])(function(e){var t=e.query,n=Object(U["l"])(t),r=n.kind,o=n.operation;return"OperationDefinition"===r&&"subscription"===o},oe,ae.concat(re)),ce=new z["a"],se=new B["a"]({link:ie,cache:ce,connectToDevTools:!0});r["default"].use(I["a"]);var ue=new I["a"]({defaultClient:se});r["default"].config.productionTip=!1,new r["default"]({apolloProvider:ue,router:L,store:$,render:function(e){return e(D)}}).$mount("#app")},"83f4":function(e,t,n){"use strict";var r=n("32c8"),o=n.n(r);o.a},a294:function(e,t,n){}});
//# sourceMappingURL=app.050b601e.js.map