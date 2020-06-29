(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{228:function(t,e,a){"use strict";a.r(e);var n=a(1),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("Seo"),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("This examples assume that you get your tenant authentication either by")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"java-api-device-events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-api-device-events","aria-hidden":"true"}},[this._v("#")]),this._v(" Java API - Device Events")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This section contains the documentation and examples of the end point "),e("code",[this._v("events")]),this._v(" of SiteWhere Java API.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("ITenantAuthentication tenantAuthentication "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defaultTenant")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("or by using other that the "),e("code",[this._v("default")]),this._v(" tenant.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("ITenantAuthentication tenantAuthentication "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forTenant")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auth"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"getting-a-device-event-by-its-id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-a-device-event-by-its-id","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting a Device Event by its Id")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The following example shows how to get a "),e("code",[this._v("DeviceEvent")]),this._v(" by its id.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("String id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"someDeviceEnventId"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDeviceEventWithAsset deviceEvent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDeviceEventById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"getting-a-device-event-by-its-alternate-id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-a-device-event-by-its-alternate-id","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting a Device Event by its Alternate Id")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The following example shows how to get a "),e("code",[this._v("DeviceEvent")]),this._v(" by its alternate id.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("String id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"someDeviceEnventId"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDeviceEventWithAsset deviceEvent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDeviceEventByAlternateId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);s.options.__file="README.md";e.default=s.exports}}]);