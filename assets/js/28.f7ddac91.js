(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{313:function(t,n,e){"use strict";e.r(n);var s=e(1),o=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"按需引用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#按需引用","aria-hidden":"true"}},[t._v("#")]),t._v(" 按需引用")]),t._v(" "),e("p",[t._v("在 webpack 入口页面 main.js 中如下配置：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import Vue from 'vue'\nimport {Button, Group, Icon} from  'coko-ui'\nimport 'coko-ui/dist/index.css'\nimport plugin from './plugin'\n\nVue.use(plugin)\nVue.component('c-button', Button)\nVue.component('c-icon', Icon)\nVue.component('c-group', ButtonGroup)\n")])])]),e("p",[t._v("需要导入样式，即在 main.js 或根组件执行")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import 'coko-ui/dist/index.css'\n")])])])])}],!1,null,null,null);o.options.__file="README.md";n.default=o.exports}}]);