(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4617b70e"],{"0a49":function(t,r,e){var a=e("9b43"),i=e("626a"),n=e("4bf8"),s=e("9def"),o=e("cd1c");t.exports=function(t,r){var e=1==t,c=2==t,d=3==t,l=4==t,u=6==t,p=5==t||u,v=r||o;return function(r,o,f){for(var _,m,h=n(r),w=i(h),x=a(o,f,3),g=s(w.length),y=0,b=e?v(r,g):c?v(r,0):void 0;g>y;y++)if((p||y in w)&&(_=w[y],m=x(_,y,h),t))if(e)b[y]=m;else if(m)switch(t){case 3:return!0;case 5:return _;case 6:return y;case 2:b.push(_)}else if(l)return!1;return u?-1:d||l?l:b}}},1169:function(t,r,e){var a=e("2d95");t.exports=Array.isArray||function(t){return"Array"==a(t)}},7514:function(t,r,e){"use strict";var a=e("5ca1"),i=e("0a49")(5),n="find",s=!0;n in[]&&Array(1)[n](function(){s=!1}),a(a.P+a.F*s,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),e("9c6c")(n)},"81e0":function(t,r,e){"use strict";var a=e("f51f"),i=e.n(a);i.a},cd1c:function(t,r,e){var a=e("e853");t.exports=function(t,r){return new(a(t))(r)}},e853:function(t,r,e){var a=e("d3f4"),i=e("1169"),n=e("2b4c")("species");t.exports=function(t){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)||(r=void 0),a(r)&&(r=r[n],null===r&&(r=void 0))),void 0===r?Array:r}},ec95:function(t,r,e){"use strict";e.r(r);var a=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-layout",[t.ongoingOrders.length>0?e("v-layout",{staticClass:"orders-container",attrs:{row:"",wrap:""}},t._l(t.ongoingOrders,function(r,a){return e("v-flex",{key:a,attrs:{xs12:"",md4:"","px-2":"","py-2":""}},[e("v-card",{staticClass:"order-card",on:{click:function(e){return t.show_order(r.id)}}},[e("v-card-title",{staticClass:"clickable",attrs:{"primary-title":""}},[e("v-flex",{attrs:{md12:"",sm12:""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{md5:"",sm5:""}},[e("h3",{staticClass:"body-2 mb-0"},[t._v("#"+t._s(r.id))])]),e("v-flex",{staticClass:"body-2",attrs:{md7:"",sm7:"","text-xs-right":""}},[e("h3",{staticClass:"secondary--text\n                  text-capitalize\n                  text--lighten-1"},[t._v("\n                  "+t._s(r.status.name)+"\n                ")])])],1),r.rider?e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{md4:"",sm4:""}},[t._v("\n                "+t._s(t._f("moment")(r.createdAt,"hh:mm A"))+"\n              ")]),e("v-flex",{directives:[{name:"show",rawName:"v-show",value:r.status_id>1,expression:"order.status_id > 1"}],staticClass:"body-2\n                text-xs-right\n                text-capitalize",attrs:{md8:"",sm8:""}},[t._v("\n                "+t._s(r.rider.first_name)+" "+t._s(r.rider.last_name)+"\n              ")])],1):t._e()],1)],1),e("v-card-text",{staticClass:"clickable",staticStyle:{"padding-top":"0"}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"subheading font-weight-bold",attrs:{md6:"",sm6:"","my-2":"","text-capitalize":""}},[t._v("\n              "+t._s(r.contact_name)+"\n            ")]),e("v-flex",{staticClass:"title text-xs-right primary--text font-weight-bold",attrs:{md6:"",sm6:"","my-2":"","text-capitalize":""}},[t._v("\n              "+t._s(t._f("currency")(r.service_fee))+"\n            ")])],1),t._l(r.locations,function(a,i){return e("v-layout",{key:a.id,attrs:{row:"",wrap:"","my-1":"","text-capitalize":""}},[e("v-flex",{attrs:{md12:"",sm12:""}},[i===r.locations.length-1?e("v-icon",{attrs:{color:"primary"}},[t._v("\n                location_on\n              ")]):e("v-icon",{attrs:{color:"primary"}},[t._v("donut_large")]),t._v("\n              "+t._s(a.address)+"\n            ")],1)],1)}),e("v-layout",{attrs:{row:"",wrap:"","my-1":"","text-capitalize":""}},[e("v-flex",{staticClass:"grey--text",attrs:{md12:"",sm12:"","my-2":""}},[t._v("\n              "+t._s(r.notes)+"\n            ")])],1)],2),e("v-card-actions",{directives:[{name:"show",rawName:"v-show",value:1===r.status.id,expression:"order.status.id === 1"}],staticClass:"secondary",on:{click:function(t){t.stopPropagation()}}},[e("v-layout",{attrs:{row:"",wrap:"","my-1":"","text-capitalize":"","justify-end":""}},[e("v-flex",{staticClass:"text-xs-right",attrs:{md3:"",sm3:""}},[e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[e("v-btn",t._g({attrs:{dark:"",color:"red darken-4"},on:{click:function(e){return t.show_reject(r.id)}}},i),[t._v("\n                    Reject\n                  ")])]}}],null,!0)},[e("span",[t._v("Reject Order")])])],1),e("v-flex",{staticClass:"text-xs-right",attrs:{md3:"",sm3:""}},[e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[e("v-btn",t._g({attrs:{dark:"",color:"primary"},on:{click:function(e){return t.order_assign(r.id)}}},i),[t._v("\n                    Assign\n                  ")])]}}],null,!0)},[e("span",[t._v("Assign Rider to Order")])])],1)],1)],1)],1)],1)}),1):e("v-layout",[e("v-container",{attrs:{"fill-height":"","text-xs-center":""}},[e("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[e("v-flex",[e("p",{staticClass:"display-2 text-uppercase font-weight-bold grey--text text--lighten-1"},[t._v("\n            NO ORDERS\n          ")])])],1)],1)],1),e("v-bottom-nav",{staticClass:"secondary py-2 px-2 justify-end",attrs:{value:t.show_riders,fixed:"",dark:"",height:"120"}},[e("VuePerfectScrollbar",{staticClass:"scroll-area"},[e("v-layout",{staticClass:"non-clickable",attrs:{row:"",wrap:"","justify-end":""}},t._l(t.riders,function(r,a){return e("v-flex",{key:a,attrs:{md3:"",xs12:"","px-2":"","py-2":""}},[e("v-card",{staticClass:"rider-card",class:{clickable:t.rider_pick&&!r.current_order,"rider-hover":t.rider_pick&&!r.current_order},on:{click:function(e){return t.pick_rider(r.id)}}},[e("v-card-title",{staticStyle:{padding:"15px !important"},attrs:{"primary-title":""}},[e("v-flex",{attrs:{md12:"",sm12:""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{md5:"",sm5:""}},[e("h3",{staticClass:"body-2 mb-0"},[t._v("RIDER #"+t._s(r.id))])]),r.current_order&&r.current_order.current_location?e("v-flex",{staticClass:"body-2",attrs:{md7:"",sm7:"","text-xs-right":""}},[e("h3",{staticClass:"primary--text text-capitalize text--lighten-1"},[t._v("\n                      "+t._s(r.current_order.status.name)+" "+t._s(r.current_order.current_location.establishment)+"\n                    ")])]):t._e(),r.current_order?t._e():e("v-flex",{staticClass:"body-2",attrs:{md7:"",sm7:"","text-xs-right":""}},[e("h3",{staticClass:"secondary--text\n                      text--lighten-4"},[t._v("\n                      No Current Order\n                    ")])])],1),e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"body-2 font-weight-bold",attrs:{md7:"",sm7:"","text-capitalize":""}},[t._v("\n                    "+t._s(r.first_name)+" "+t._s(r.last_name)+"\n                  ")]),r.current_order?e("v-flex",{staticClass:"caption",attrs:{md5:"",sm5:"","text-xs-right":""}},[t._v("\n                      ORDER #"+t._s(r.current_order.id)+"\n                  ")]):t._e()],1)],1)],1)],1)],1)}),1)],1)],1),e("v-dialog",{attrs:{width:"500"},model:{value:t.dialog.reject,callback:function(r){t.$set(t.dialog,"reject",r)},expression:"dialog.reject"}},[e("v-card",[e("v-card-title",{staticClass:"title secondary white--text",attrs:{"primary-title":""}},[t._v("\n        Reject Order\n      ")]),e("v-card-text",[e("v-layout",{attrs:{row:"",wrap:""}},[t._v("\n          Are you sure you want to reject the order?\n        ")])],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"secondary",flat:""},on:{click:function(r){t.dialog.reject=!1}}},[t._v("Close")]),e("v-btn",{attrs:{color:"red",flat:""},on:{click:function(r){return t.reject_order()}}},[t._v("Reject")])],1)],1)],1),e("v-dialog",{attrs:{width:"500"},model:{value:t.dialog.order,callback:function(r){t.$set(t.dialog,"order",r)},expression:"dialog.order"}},[e("v-card",[e("v-card-title",{staticClass:"title secondary white--text",attrs:{"primary-title":""}},[t._v("\n        Order Details\n      ")]),e("v-card-text",[e("v-layout",{attrs:{row:"",wrap:""}})],1)],1)],1)],1)},i=[],n=(e("96cf"),e("3b8d")),s=(e("7514"),e("75fc")),o=e("cebe"),c=e("c1df"),d=e.n(c),l=e("9d63"),u=e.n(l),p={components:{VuePerfectScrollbar:u.a},apollo:{orders:{query:o["c"],subscribeToMore:[{document:o["e"],updateQuery:function(t,r){var e=r.subscriptionData;window.getApp.snackbar={show:!0,color:"primary",text:"Order #"+e.data.orderUpdated.id+" Updated."}}},{document:o["d"],updateQuery:function(t,r){var e=r.subscriptionData;return window.getApp.snackbar={show:!0,color:"primary",text:"New Order Created."},{orders:[].concat(Object(s["a"])(t.orders),[e.data.orderCreated])}}}]},riders:{query:o["i"],subscribeToMore:[{document:o["h"],updateQuery:function(t,r){var e=r.subscriptionData,a=e.data.riderOrderUpdated;t.riders.map(function(t){return t.id===a.rider_id&&(t.current_order=a.current_order),t})}},{document:o["g"],updateQuery:function(t,r){var e=r.subscriptionData,a=e.data.riderAssigned;t.riders.map(function(t){return t.id===a.rider_id&&(t.current_order={status:a.status,id:a.id}),t})}}]}},data:function(){return{moment:d.a,orders:[],riders:[],dialog:{order:!1,reject:!1},order:{id:null,rider_id:null},show_riders:!1,rider_pick:!1,loading:!1}},created:function(){var t=this;window.getApp.$on("RIDERS_DRAWER_TOGGLED",function(r){t.show_riders=r||!t.show_riders}),window.getApp.$on("EXIT_RIDER_PICK",function(){t.rider_pick=!1})},computed:{ongoingOrders:function(){return this.orders.filter(function(t){return 5!==t.status_id&&6!==t.status_id&&7!==t.status_id})},availableRiders:function(){return this.riders.map(function(t){return{text:t.first_name+" "+t.last_name,value:t.id}})},pickedOrder:function(){return this.orders.find(function(t){return t.id==this.order.id}.bind(this))}},methods:{show_reject:function(t){this.reject_id=t,this.dialog.reject=!0},reject_order:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var r,e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r={id:this.reject_id,status_id:7},t.next=3,this.$apollo.mutate({mutation:o["l"],variables:r}).then(function(){e.loading=!1,e.dialog.reject=!1,window.getApp.snackbar={show:!0,color:"red darken-1",text:"Order Rejected"}}).catch(function(t){var r=t.graphQLErrors;e.loading=!1,e.dialog.reject=!1,r&&(e.error=r[0].message,window.getApp.snackbar={show:!0,color:"red darken-1",text:"Rider Assignment Error"})});case 3:case"end":return t.stop()}},t,this)}));function r(){return t.apply(this,arguments)}return r}(),show_order:function(t){this.order.id=t,this.dialog.order=!0},order_assign:function(t){this.order.id=t,this.rider_pick=!0,window.getApp.$emit("RIDER_PICK")},pick_rider:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(r){var e,a=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.riders.find(function(t){return t.id===r}),e.current_order||!this.rider_pick||this.loading){t.next=7;break}return this.order.rider_id=r,this.order.status_id=2,this.loading=!0,t.next=7,this.$apollo.mutate({mutation:o["l"],variables:this.order}).then(function(){a.loading=!1,window.getApp.$emit("RIDER_PICK"),window.getApp.snackbar={show:!0,color:"primary",text:"Rider Assigned"}}).catch(function(t){var r=t.graphQLErrors;a.loading=!1,window.getApp.$emit("RIDER_PICK"),r&&(a.error=r[0].message,window.getApp.snackbar={show:!0,color:"red darken-1",text:"Rider Assignment Error"})});case 7:case"end":return t.stop()}},t,this)}));function r(r){return t.apply(this,arguments)}return r}()}},v=p,f=(e("81e0"),e("2877")),_=Object(f["a"])(v,a,i,!1,null,null,null);r["default"]=_.exports},f51f:function(t,r,e){}}]);
//# sourceMappingURL=chunk-4617b70e.4cd16639.js.map