(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bea2fb0"],{"0a49":function(t,r,e){var n=e("9b43"),a=e("626a"),i=e("4bf8"),s=e("9def"),o=e("cd1c");t.exports=function(t,r){var e=1==t,c=2==t,d=3==t,u=4==t,l=6==t,f=5==t||l,p=r||o;return function(r,o,v){for(var _,m,h=i(r),x=a(h),y=n(o,v,3),w=s(x.length),g=0,b=e?p(r,w):c?p(r,0):void 0;w>g;g++)if((f||g in x)&&(_=x[g],m=y(_,g,h),t))if(e)b[g]=m;else if(m)switch(t){case 3:return!0;case 5:return _;case 6:return g;case 2:b.push(_)}else if(u)return!1;return l?-1:d||u?u:b}}},1169:function(t,r,e){var n=e("2d95");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"1af6":function(t,r,e){var n=e("63b6");n(n.S,"Array",{isArray:e("9003")})},"20fd":function(t,r,e){"use strict";var n=e("d9f6"),a=e("aebd");t.exports=function(t,r,e){r in t?n.f(t,r,a(0,e)):t[r]=e}},"549b":function(t,r,e){"use strict";var n=e("d864"),a=e("63b6"),i=e("241e"),s=e("b0dc"),o=e("3702"),c=e("b447"),d=e("20fd"),u=e("7cd6");a(a.S+a.F*!e("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var r,e,a,l,f=i(t),p="function"==typeof this?this:Array,v=arguments.length,_=v>1?arguments[1]:void 0,m=void 0!==_,h=0,x=u(f);if(m&&(_=n(_,v>2?arguments[2]:void 0,2)),void 0==x||p==Array&&o(x))for(r=c(f.length),e=new p(r);r>h;h++)d(e,h,m?_(f[h],h):f[h]);else for(l=x.call(f),e=new p;!(a=l.next()).done;h++)d(e,h,m?s(l,_,[a.value,h],!0):a.value);return e.length=h,e}})},"54a1":function(t,r,e){e("6c1c"),e("1654"),t.exports=e("95d5")},7514:function(t,r,e){"use strict";var n=e("5ca1"),a=e("0a49")(5),i="find",s=!0;i in[]&&Array(1)[i](function(){s=!1}),n(n.P+n.F*s,"Array",{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),e("9c6c")(i)},"75fc":function(t,r,e){"use strict";var n=e("a745"),a=e.n(n);function i(t){if(a()(t)){for(var r=0,e=new Array(t.length);r<t.length;r++)e[r]=t[r];return e}}var s=e("774e"),o=e.n(s),c=e("c8bb"),d=e.n(c);function u(t){if(d()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return o()(t)}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){return i(t)||u(t)||l()}e.d(r,"a",function(){return f})},"774e":function(t,r,e){t.exports=e("d2d5")},"81e0":function(t,r,e){"use strict";var n=e("f51f"),a=e.n(n);a.a},9003:function(t,r,e){var n=e("6b4c");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"95d5":function(t,r,e){var n=e("40c3"),a=e("5168")("iterator"),i=e("481b");t.exports=e("584a").isIterable=function(t){var r=Object(t);return void 0!==r[a]||"@@iterator"in r||i.hasOwnProperty(n(r))}},a745:function(t,r,e){t.exports=e("f410")},c8bb:function(t,r,e){t.exports=e("54a1")},cd1c:function(t,r,e){var n=e("e853");t.exports=function(t,r){return new(n(t))(r)}},d2d5:function(t,r,e){e("1654"),e("549b"),t.exports=e("584a").Array.from},e853:function(t,r,e){var n=e("d3f4"),a=e("1169"),i=e("2b4c")("species");t.exports=function(t){var r;return a(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)||(r=void 0),n(r)&&(r=r[i],null===r&&(r=void 0))),void 0===r?Array:r}},ec95:function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-layout",[t.ongoingOrders.length>0?e("v-layout",{staticClass:"orders-container",attrs:{row:"",wrap:""}},t._l(t.ongoingOrders,function(r,n){return e("v-flex",{key:n,attrs:{xs12:"",md4:"","px-2":"","py-2":""}},[e("v-card",{staticClass:"order-card",on:{click:function(e){return t.show_order(r.id)}}},[e("v-card-title",{staticClass:"clickable",attrs:{"primary-title":""}},[e("v-flex",{attrs:{md12:"",sm12:""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{md5:"",sm5:""}},[e("h3",{staticClass:"body-2 mb-0"},[t._v("#"+t._s(r.id))])]),e("v-flex",{staticClass:"body-2",attrs:{md7:"",sm7:"","text-xs-right":""}},[e("h3",{staticClass:"secondary--text\n                  text-capitalize\n                  text--lighten-1"},[t._v("\n                  "+t._s(r.status.name)+"\n                ")])])],1),r.rider?e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{md4:"",sm4:""}},[t._v("\n                "+t._s(t._f("moment")(r.createdAt,"hh:mm A"))+"\n              ")]),e("v-flex",{directives:[{name:"show",rawName:"v-show",value:r.status_id>1,expression:"order.status_id > 1"}],staticClass:"body-2\n                text-xs-right\n                text-capitalize",attrs:{md8:"",sm8:""}},[t._v("\n                "+t._s(r.rider.first_name)+" "+t._s(r.rider.last_name)+"\n              ")])],1):t._e()],1)],1),e("v-card-text",{staticClass:"clickable",staticStyle:{"padding-top":"0"}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"subheading font-weight-bold",attrs:{md6:"",sm6:"","my-2":"","text-capitalize":""}},[t._v("\n              "+t._s(r.contact_name)+"\n            ")]),e("v-flex",{staticClass:"title text-xs-right primary--text font-weight-bold",attrs:{md6:"",sm6:"","my-2":"","text-capitalize":""}},[t._v("\n              "+t._s(t._f("currency")(r.service_fee))+"\n            ")])],1),t._l(r.locations,function(n,a){return e("v-layout",{key:n.id,attrs:{row:"",wrap:"","my-1":"","text-capitalize":""}},[e("v-flex",{attrs:{md12:"",sm12:""}},[a===r.locations.length-1?e("v-icon",{attrs:{color:"primary"}},[t._v("\n                location_on\n              ")]):e("v-icon",{attrs:{color:"primary"}},[t._v("donut_large")]),t._v("\n              "+t._s(n.address)+"\n            ")],1)],1)}),e("v-layout",{attrs:{row:"",wrap:"","my-1":"","text-capitalize":""}},[e("v-flex",{staticClass:"grey--text",attrs:{md12:"",sm12:"","my-2":""}},[t._v("\n              "+t._s(r.notes)+"\n            ")])],1)],2),e("v-card-actions",{directives:[{name:"show",rawName:"v-show",value:1===r.status.id,expression:"order.status.id === 1"}],staticClass:"secondary",on:{click:function(t){t.stopPropagation()}}},[e("v-layout",{attrs:{row:"",wrap:"","my-1":"","text-capitalize":"","justify-end":""}},[e("v-flex",{staticClass:"text-xs-right",attrs:{md3:"",sm3:""}},[e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[e("v-btn",t._g({attrs:{dark:"",color:"red darken-4"},on:{click:function(e){return t.show_reject(r.id)}}},a),[t._v("\n                    Reject\n                  ")])]}}],null,!0)},[e("span",[t._v("Reject Order")])])],1),e("v-flex",{staticClass:"text-xs-right",attrs:{md3:"",sm3:""}},[e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on;return[e("v-btn",t._g({attrs:{dark:"",color:"primary"},on:{click:function(e){return t.order_assign(r.id)}}},a),[t._v("\n                    Assign\n                  ")])]}}],null,!0)},[e("span",[t._v("Assign Rider to Order")])])],1)],1)],1)],1)],1)}),1):e("v-layout",[e("v-container",{attrs:{"fill-height":"","text-xs-center":""}},[e("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[e("v-flex",[e("p",{staticClass:"display-2 text-uppercase font-weight-bold grey--text text--lighten-1"},[t._v("\n            NO ORDERS\n          ")])])],1)],1)],1),e("v-bottom-nav",{staticClass:"secondary py-2 px-2 justify-end",attrs:{value:t.show_riders,fixed:"",dark:"",height:"120"}},[e("VuePerfectScrollbar",{staticClass:"scroll-area"},[e("v-layout",{staticClass:"non-clickable",attrs:{row:"",wrap:"","justify-end":""}},t._l(t.riders,function(r,n){return e("v-flex",{key:n,attrs:{md3:"",xs12:"","px-2":"","py-2":""}},[e("v-card",{staticClass:"rider-card",class:{clickable:t.rider_pick&&!r.current_order,"rider-hover":t.rider_pick&&!r.current_order},on:{click:function(e){return t.pick_rider(r.id)}}},[e("v-card-title",{staticStyle:{padding:"15px !important"},attrs:{"primary-title":""}},[e("v-flex",{attrs:{md12:"",sm12:""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{md5:"",sm5:""}},[e("h3",{staticClass:"body-2 mb-0"},[t._v("RIDER #"+t._s(r.id))])]),r.current_order&&r.current_order.current_location?e("v-flex",{staticClass:"body-2",attrs:{md7:"",sm7:"","text-xs-right":""}},[e("h3",{staticClass:"primary--text text-capitalize text--lighten-1"},[t._v("\n                      "+t._s(r.current_order.status.name)+" "+t._s(r.current_order.current_location.establishment)+"\n                    ")])]):t._e(),r.current_order?t._e():e("v-flex",{staticClass:"body-2",attrs:{md7:"",sm7:"","text-xs-right":""}},[e("h3",{staticClass:"secondary--text\n                      text--lighten-4"},[t._v("\n                      No Current Order\n                    ")])])],1),e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"body-2 font-weight-bold",attrs:{md7:"",sm7:"","text-capitalize":""}},[t._v("\n                    "+t._s(r.first_name)+" "+t._s(r.last_name)+"\n                  ")]),r.current_order?e("v-flex",{staticClass:"caption",attrs:{md5:"",sm5:"","text-xs-right":""}},[t._v("\n                      ORDER #"+t._s(r.current_order.id)+"\n                  ")]):t._e()],1)],1)],1)],1)],1)}),1)],1)],1),e("v-dialog",{attrs:{width:"500"},model:{value:t.dialog.reject,callback:function(r){t.$set(t.dialog,"reject",r)},expression:"dialog.reject"}},[e("v-card",[e("v-card-title",{staticClass:"title secondary white--text",attrs:{"primary-title":""}},[t._v("\n        Reject Order\n      ")]),e("v-card-text",[e("v-layout",{attrs:{row:"",wrap:""}},[t._v("\n          Are you sure you want to reject the order?\n        ")])],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"secondary",flat:""},on:{click:function(r){t.dialog.reject=!1}}},[t._v("Close")]),e("v-btn",{attrs:{color:"red",flat:""},on:{click:function(r){return t.reject_order()}}},[t._v("Reject")])],1)],1)],1),e("v-dialog",{attrs:{width:"500"},model:{value:t.dialog.order,callback:function(r){t.$set(t.dialog,"order",r)},expression:"dialog.order"}},[e("v-card",[e("v-card-title",{staticClass:"title secondary white--text",attrs:{"primary-title":""}},[t._v("\n        Order Details\n      ")]),e("v-card-text",[e("v-layout",{attrs:{row:"",wrap:""}})],1)],1)],1)],1)},a=[],i=(e("96cf"),e("3b8d")),s=(e("7514"),e("75fc")),o=e("cebe"),c=e("c1df"),d=e.n(c),u=e("9d63"),l=e.n(u),f={components:{VuePerfectScrollbar:l.a},apollo:{orders:{query:o["e"],subscribeToMore:[{document:o["g"],updateQuery:function(t,r){var e=r.subscriptionData;window.getApp.snackbar={show:!0,color:"primary",text:"Order #"+e.data.orderUpdated.id+" Updated."}}},{document:o["f"],updateQuery:function(t,r){var e=r.subscriptionData;return window.getApp.snackbar={show:!0,color:"primary",text:"New Order Created."},{orders:[].concat(Object(s["a"])(t.orders),[e.data.orderCreated])}}}]},riders:{query:o["l"],subscribeToMore:[{document:o["j"],updateQuery:function(t,r){var e=r.subscriptionData,n=e.data.riderOrderUpdated;t.riders.map(function(t){return t.id===n.rider_id&&(t.current_order=n.current_order),t})}},{document:o["i"],updateQuery:function(t,r){var e=r.subscriptionData,n=e.data.riderAssigned;t.riders.map(function(t){return t.id===n.rider_id&&(t.current_order={status:n.status,id:n.id}),t})}}]}},data:function(){return{moment:d.a,orders:[],riders:[],dialog:{order:!1,reject:!1},order:{id:null,rider_id:null},show_riders:!1,rider_pick:!1,loading:!1}},created:function(){var t=this;window.getApp.$on("RIDERS_DRAWER_TOGGLED",function(r){t.show_riders=r||!t.show_riders}),window.getApp.$on("EXIT_RIDER_PICK",function(){t.rider_pick=!1})},computed:{ongoingOrders:function(){return this.orders.filter(function(t){return 5!==t.status_id&&6!==t.status_id&&7!==t.status_id})},availableRiders:function(){return this.riders.map(function(t){return{text:t.first_name+" "+t.last_name,value:t.id}})},pickedOrder:function(){return this.orders.find(function(t){return t.id==this.order.id}.bind(this))}},methods:{show_reject:function(t){this.reject_id=t,this.dialog.reject=!0},reject_order:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var r,e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r={id:this.reject_id,status_id:7},t.next=3,this.$apollo.mutate({mutation:o["p"],variables:r}).then(function(){e.loading=!1,e.dialog.reject=!1,window.getApp.snackbar={show:!0,color:"red darken-1",text:"Order Rejected"}}).catch(function(t){var r=t.graphQLErrors;e.loading=!1,e.dialog.reject=!1,r&&(e.error=r[0].message,window.getApp.snackbar={show:!0,color:"red darken-1",text:"Rider Assignment Error"})});case 3:case"end":return t.stop()}},t,this)}));function r(){return t.apply(this,arguments)}return r}(),show_order:function(t){this.order.id=t,this.dialog.order=!0},order_assign:function(t){this.order.id=t,this.rider_pick=!0,window.getApp.$emit("RIDER_PICK")},pick_rider:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(r){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.riders.find(function(t){return t.id===r}),e.current_order||!this.rider_pick||this.loading){t.next=7;break}return this.order.rider_id=r,this.order.status_id=2,this.loading=!0,t.next=7,this.$apollo.mutate({mutation:o["p"],variables:this.order}).then(function(){n.loading=!1,window.getApp.$emit("RIDER_PICK"),window.getApp.snackbar={show:!0,color:"primary",text:"Rider Assigned"}}).catch(function(t){var r=t.graphQLErrors;n.loading=!1,window.getApp.$emit("RIDER_PICK"),r&&(n.error=r[0].message,window.getApp.snackbar={show:!0,color:"red darken-1",text:"Rider Assignment Error"})});case 7:case"end":return t.stop()}},t,this)}));function r(r){return t.apply(this,arguments)}return r}()}},p=f,v=(e("81e0"),e("2877")),_=Object(v["a"])(p,n,a,!1,null,null,null);r["default"]=_.exports},f410:function(t,r,e){e("1af6"),t.exports=e("584a").Array.isArray},f51f:function(t,r,e){}}]);
//# sourceMappingURL=chunk-2bea2fb0.f4fe7287.js.map