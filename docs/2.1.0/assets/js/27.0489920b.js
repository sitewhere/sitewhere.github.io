(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{318:function(t,a,n){"use strict";n.r(a);var s=n(1),e=Object(s.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("Seo"),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14)],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"java-api-command-invocations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-api-command-invocations","aria-hidden":"true"}},[this._v("#")]),this._v(" Java API - Command Invocations")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Esta sección contiene la documentación y ejemplos del end point "),a("code",[this._v("invocations")]),this._v(" de la API de Java de SiteWhere.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Este ejemplo asume que usted obtiene su autenticación del "),a("em",[this._v("tenant")]),this._v(" ya sea por")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("ITenantAuthentication tenantAuthentication "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("defaultTenant")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("o por la utilización del tenant "),a("code",[this._v("default")]),this._v(".")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("ITenantAuthentication tenantAuthentication "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("forTenant")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"token"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"auth"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"obtener-un-command-invocation-por-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#obtener-un-command-invocation-por-id","aria-hidden":"true"}},[this._v("#")]),this._v(" Obtener un Command Invocation por Id")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("El siguiente ejemplo muestra como obtener un "),a("code",[this._v("DeviceCommandInvacation")]),this._v(" por su Id")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("String id "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"someCommandInvocationId"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// Id of the command invocation")]),t._v("\nDeviceCommandInvocation commandInvocation "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getDeviceCommandInvocation")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"obtener-un-command-invocation-summary-por-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#obtener-un-command-invocation-summary-por-id","aria-hidden":"true"}},[this._v("#")]),this._v(" Obtener un Command Invocation Summary por Id")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("El siguiente ejemplo muestra como obtener un "),a("code",[this._v("DeviceCommandInvocationSummary")]),this._v(" por su Id")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("String id "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"someCommandInvocationId"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// Id of the command invocation")]),t._v("\nDeviceCommandInvocationSummary commandInvocationSummary "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getDeviceCommandInvocationSummary")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"listar-las-respuesta-a-comandos-para-un-command-invocation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#listar-las-respuesta-a-comandos-para-un-command-invocation","aria-hidden":"true"}},[this._v("#")]),this._v(" Listar las Respuesta a Comandos para un Command Invocation")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("El siguiente ejemplo muestra cómo listar las "),a("code",[this._v("DeviceCommandResponse")]),this._v(" para un "),a("code",[this._v("DeviceCommandInvacation")]),this._v(".")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("String id "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"someCommandInvocationId"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// Id of the command invocation")]),t._v("\nSearchResults"),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("DeviceCommandResponse"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" results "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("listCommandResponsesForCommandInvocation")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="README.md";a.default=e.exports}}]);