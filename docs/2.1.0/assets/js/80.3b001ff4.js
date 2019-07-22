(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{219:function(t,a,n){"use strict";n.r(a);var s=n(1),e=Object(s.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("Seo"),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("This examples assume that you get your tenant authentication either by")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13)],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"java-api-command-invocation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-api-command-invocation","aria-hidden":"true"}},[this._v("#")]),this._v(" 📖 Java API - Command Invocation")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("This section contains the documentation and examples of the end point "),a("code",[this._v("invocations")]),this._v(" of SiteWhere Java API.")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("ITenantAuthentication tenantAuthentication "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("defaultTenant")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("or by using other that the "),a("code",[this._v("default")]),this._v(" tenant.")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("ITenantAuthentication tenantAuthentication "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("forTenant")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"token"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"auth"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"getting-a-command-invocation-by-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-a-command-invocation-by-id","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting a Command Invocation by Id")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("The following example shows how to get a "),a("code",[this._v("DeviceCommandInvacation")]),this._v(" by its Id")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("String id "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"someCommandInvocationId"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// Id of the command invocation")]),t._v("\nDeviceCommandInvocation commandInvocation "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getDeviceCommandInvocation")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"getting-a-command-invocation-summary-by-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-a-command-invocation-summary-by-id","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting a Command Invocation Summary by Id")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("The following example shows how to get a "),a("code",[this._v("DeviceCommandInvocationSummary")]),this._v(" by its Id")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("String id "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"someCommandInvocationId"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// Id of the command invocation")]),t._v("\nDeviceCommandInvocationSummary commandInvocationSummary "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getDeviceCommandInvocationSummary")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"listing-responses-for-command-invocation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#listing-responses-for-command-invocation","aria-hidden":"true"}},[this._v("#")]),this._v(" Listing Responses for Command Invocation")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("The following example shows how to list the "),a("code",[this._v("DeviceCommandResponse")]),this._v(" for a "),a("code",[this._v("DeviceCommandInvacation")]),this._v(".")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("String id "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"someCommandInvocationId"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// Id of the command invocation")]),t._v("\nSearchResults"),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("DeviceCommandResponse"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" results "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("listCommandResponsesForCommandInvocation")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="README.md";a.default=e.exports}}]);