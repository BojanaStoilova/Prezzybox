(function(s){function a(a){for(var e,o,r=a[0],n=a[1],l=a[2],p=0,d=[];p<r.length;p++)o=r[p],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(e in n)Object.prototype.hasOwnProperty.call(n,e)&&(s[e]=n[e]);u&&u(a);while(d.length)d.shift()();return i.push.apply(i,l||[]),t()}function t(){for(var s,a=0;a<i.length;a++){for(var t=i[a],e=!0,r=1;r<t.length;r++){var n=t[r];0!==c[n]&&(e=!1)}e&&(i.splice(a--,1),s=o(o.s=t[0]))}return s}var e={},c={app:0},i=[];function o(a){if(e[a])return e[a].exports;var t=e[a]={i:a,l:!1,exports:{}};return s[a].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=s,o.c=e,o.d=function(s,a,t){o.o(s,a)||Object.defineProperty(s,a,{enumerable:!0,get:t})},o.r=function(s){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},o.t=function(s,a){if(1&a&&(s=o(s)),8&a)return s;if(4&a&&"object"===typeof s&&s&&s.__esModule)return s;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:s}),2&a&&"string"!=typeof s)for(var e in s)o.d(t,e,function(a){return s[a]}.bind(null,e));return t},o.n=function(s){var a=s&&s.__esModule?function(){return s["default"]}:function(){return s};return o.d(a,"a",a),a},o.o=function(s,a){return Object.prototype.hasOwnProperty.call(s,a)},o.p="/Prezzybox/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],n=r.push.bind(r);r.push=a,r=r.slice();for(var l=0;l<r.length;l++)a(r[l]);var u=n;i.push([0,"chunk-vendors"]),t()})({0:function(s,a,t){s.exports=t("56d7")},"034f":function(s,a,t){"use strict";t("85ec")},"56d7":function(s,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var e=t("2b0e"),c=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"wrapper"},[t("b-row",[t("b-col",{staticClass:"imageWrap column",attrs:{xs:"12",sm:"12",md:"3"}}),t("b-col",{staticClass:"column",attrs:{xs:"12",sm:"12",md:"9"}},[t("b-carousel",{directives:[{name:"show",rawName:"v-show",value:s.showCarousel,expression:"showCarousel"}],attrs:{id:"carousel-1",controls:"","no-animation":"",interval:0},on:{"sliding-end":s.onSlideEnd},model:{value:s.slide,callback:function(a){s.slide=a},expression:"slide"}},[t("b-carousel-slide",{attrs:{"img-blank":"","img-blank-color":"white"}},[t("h5",[s._v("We'll help you find the perfect gift")]),t("h6",[s._v("I'm looking for a gift...")]),t("div",{staticClass:"buttons step1"},[t("b-button-group",{staticClass:"button-group"},[t("b-button",[s._v("FOR HER")]),t("b-button",[s._v("FOR HIM")]),t("b-button",[s._v("FOR KIDS & TEENS")])],1)],1)]),t("b-carousel-slide",{attrs:{"img-blank":"","img-blank-color":"white"}},[t("h5",[s._v("What relation are they to you?")]),t("h6",[s._v("They're my...")]),t("div",{staticClass:"buttons step2"},[t("b-button-group",{staticClass:"button-group"},[t("b-button",[s._v("DAD")]),t("b-button",[s._v("GRANDAD")]),t("b-button",[s._v("BROTHER")]),t("b-button",[s._v("BOYFRIEND")]),t("b-button",[s._v("HUSBAND")]),t("b-button",[s._v("FRIEND")])],1)],1)]),t("b-carousel-slide",{attrs:{"img-blank":"","img-blank-color":"white"}},[t("h6",[s._v("Select "),t("b",[s._v("one or more")]),s._v(" interests below and let our wizard work its magic!")]),t("div",{staticClass:"buttons step3"},[t("b-button-group",{staticClass:"button-group",on:{click:s.clickedButton}},[t("b-button",[s._v("EXPERIENCES")]),t("b-button",[s._v("FOOD")]),t("b-button",[s._v("GROOMING")]),t("b-button",[s._v("GAMING")]),t("b-button",[s._v("PERSONALISED")]),t("b-button",[s._v("PHOTOGRAPHY")]),t("b-button",[s._v("SPORTS")]),t("b-button",[s._v("STAR WARS")])],1)],1)])],1),t("div",{directives:[{name:"show",rawName:"v-show",value:s.showMagic,expression:"showMagic"}],attrs:{id:"magicView"}},[t("b-row",[t("b-col",[t("div",{staticClass:"col-wrapper"},[t("div",{staticClass:"magicPhoto"}),t("p",[s._v("One night clamping b...")]),t("b",[s._v("£55.00")]),t("div",[t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star"})])])]),t("b-col",[t("div",{staticClass:"col-wrapper"},[t("div",{staticClass:"magicPhoto"}),t("p",[s._v("Personalised Face Cus...")]),t("b",[s._v("£14.99")]),t("div",[t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star"})])])]),t("b-col",[t("div",{staticClass:"col-wrapper"},[t("div",{staticClass:"magicPhoto"}),t("p",[s._v("Storm glass")]),t("b",[s._v("£19.99")]),t("div",[t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star-half checked"})])])]),t("b-col",[t("div",{staticClass:"col-wrapper"},[t("div",{staticClass:"magicPhoto"}),t("p",[s._v("Grow it - Bonsai tree")]),t("b",[s._v("£12.99")]),t("div",[t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star-half checked"})])])]),t("b-col",[t("div",{staticClass:"col-wrapper"},[t("div",{staticClass:"magicPhoto"}),t("p",[s._v("Grow it - Bonsai tree")]),t("b",[s._v("£12.99")]),t("div",[t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star-half checked"})])])])],1),t("b-row",[t("b-col",[t("div",{staticClass:"col-wrapper"},[t("div",{staticClass:"magicPhoto"}),t("p",[s._v("One night clamping b...")]),t("b",[s._v("£55.00")]),t("div",[t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star"})])])]),t("b-col",[t("div",{staticClass:"col-wrapper"},[t("div",{staticClass:"magicPhoto"}),t("p",[s._v("Personalised Face Cus...")]),t("b",[s._v("£14.99")]),t("div",[t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star"})])])]),t("b-col",[t("div",{staticClass:"col-wrapper"},[t("div",{staticClass:"magicPhoto"}),t("p",[s._v("Storm glass")]),t("b",[s._v("£19.99")]),t("div",[t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star-half checked"})])])]),t("b-col",[t("div",{staticClass:"col-wrapper"},[t("div",{staticClass:"magicPhoto"}),t("p",[s._v("Grow it - Bonsai tree")]),t("b",[s._v("£12.99")]),t("div",[t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star-half checked"})])])]),t("b-col",[t("div",{staticClass:"col-wrapper"},[t("div",{staticClass:"magicPhoto"}),t("p",[s._v("Grow it - Bonsai tree")]),t("b",[s._v("£12.99")]),t("div",[t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star checked"}),t("span",{staticClass:"fa fa-star-half checked"})])])])],1)],1),t("b-row",{staticClass:"footer"},[t("b-col",{attrs:{xs:"12",sm:"12",md:"6"}},[t("div",{staticClass:"progress-wrapper"},[t("b-progress",{attrs:{value:s.progressValue,max:"100"}})],1),t("p",{staticClass:"progress-text"},[s._v("Step "+s._s(s.step)+"/3")])]),t("b-col",{directives:[{name:"show",rawName:"v-show",value:s.showButton,expression:"showButton"}],attrs:{xs:"12",sm:"12",md:"6"}},[t("b-button",{directives:[{name:"show",rawName:"v-show",value:s.showMagicButton,expression:"showMagicButton"}],attrs:{id:"workMagic"},on:{click:s.workYourMagic}},[s._v("WORK YOUR MAGIC")]),t("b-button",{directives:[{name:"show",rawName:"v-show",value:s.showGoBack,expression:"showGoBack"}],attrs:{id:"goBack"},on:{click:s.goBack}},[s._v("GO BACK")]),t("b-button",{directives:[{name:"show",rawName:"v-show",value:s.showViewResults,expression:"showViewResults"}],attrs:{id:"showResults"}},[s._v("VIEW ALL RESULTS")])],1)],1)],1)],1)],1)])},i=[],o=(t("585e"),{name:"App",components:{},data:function(){return{slide:0,step:1,progressValue:33.333333333,showButton:!1,showMagic:!1,showCarousel:!0,showGoBack:!1,showViewResults:!1,showMagicButton:!0}},mounted:function(){document.querySelector(".carousel-control-prev").style.visibility="hidden"},methods:{onSlideEnd:function(){2==this.slide?(document.querySelector(".carousel-control-next").style.visibility="hidden",document.querySelector(".carousel-control-prev").style.visibility="visible",this.progressValue=100,this.step=3,this.showButton=!0):0==this.slide?(document.querySelector(".carousel-control-next").style.visibility="visible",document.querySelector(".carousel-control-prev").style.visibility="hidden",this.progressValue=33.333333333,this.step=1,this.showButton=!1):(document.querySelector(".carousel-control-next").style.visibility="visible",document.querySelector(".carousel-control-prev").style.visibility="visible",this.progressValue=66.666666666,this.step=2,this.showButton=!1)},clickedButton:function(s){s.srcElement.classList.contains("active")?s.srcElement.classList.remove("active"):s.srcElement.classList.add("active")},workYourMagic:function(){this.showMagic=!0,this.showCarousel=!1,this.showGoBack=!0,this.showViewResults=!0,this.showMagicButton=!1},goBack:function(){this.showMagic=!1,this.showCarousel=!0,this.showGoBack=!1,this.showViewResults=!1,this.showMagicButton=!0}}}),r=o,n=(t("034f"),t("2877")),l=Object(n["a"])(r,c,i,!1,null,null,null),u=l.exports,p=t("5f5b");t("f9e3"),t("2dd8"),t("15f5"),t("7051");e["default"].config.productionTip=!1,e["default"].use(p["a"]),new e["default"]({render:function(s){return s(u)}}).$mount("#app")},"585e":function(s,a,t){},"85ec":function(s,a,t){}});
//# sourceMappingURL=app.cea06c90.js.map