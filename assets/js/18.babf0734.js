(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{254:function(t,n,o){},287:function(t,n,o){"use strict";var c=o(254);o.n(c).a},301:function(t,n,o){"use strict";o.r(n);o(25),o(95);var c=o(263),s=o(206);o(0).a.use(c.a);var e={components:{"c-button":s.a},data:function(){return{content:"\n          <c-button @click=\"onClickButton\">top</c-button>\n\n          methods: {\n            onClickButton () {\n              this.$toast('你知道么', {\n                closeButton: {\n                  text: '知道了',\n                  callback: () => {\n                    console.log('知道知道了')\n                  }\n                }\n              })\n            }\n          },\n        ".replace(/^ {10}/gm,"").trim()}},methods:{onClickButton:function(){this.$toast("你知道么",{closeButton:{text:"知道了",callback:function(){console.log("知道知道了")}}})}}},i=(o(287),o(1)),a=Object(i.a)(e,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"example-box"},[n("div",[n("c-button",{on:{click:this.onClickButton}},[this._v("top")])],1),this._v(" "),n("pre",[n("code",[this._v(this._s(this.content))])])])},[],!1,null,"72a0d954",null);a.options.__file="toast-demos-2.vue";n.default=a.exports}}]);