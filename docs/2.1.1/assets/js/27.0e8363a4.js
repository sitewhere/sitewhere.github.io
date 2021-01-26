(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{284:function(t,a,e){"use strict";e.r(a);var n=e(1),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("Seo"),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17)],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"java-api-batch-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-api-batch-operations","aria-hidden":"true"}},[this._v("#")]),this._v(" Java API - Batch Operations")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Esta sección contiene la documentación y ejemplos del end point "),a("code",[this._v("batch")]),this._v(" de la API de Java de SiteWhere.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Este ejemplo asume que usted obtiene su autenticación del "),a("em",[this._v("tenant")]),this._v(" ya sea por")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("ITenantAuthentication tenantAuthentication "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("defaultTenant")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("o por la utilización del tenant "),a("code",[this._v("default")]),this._v(".")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("ITenantAuthentication tenantAuthentication "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("forTenant")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auth"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"busqueda-de-batch-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#busqueda-de-batch-operations","aria-hidden":"true"}},[this._v("#")]),this._v(" Busqueda de Batch Operations")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v("Para buscar resultados de "),e("code",[t._v("BatchOperation")]),t._v(" se necesita una instancia de "),e("code",[t._v("BatchOperationSearchCriteria")]),t._v(",\nlas cuales serán pasadas al método "),e("code",[t._v("listBatchOperations")]),t._v(" de "),e("code",[t._v("com.sitewhere.spi.ISiteWhereClient")]),t._v(". El siguiente ejemplo muestra\ncomo consultar la API REST de SiteWhere para listar la primer página con 100 resultados de "),e("code",[t._v("BatchOperation")]),t._v(".")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("BatchOperationSearchCriteria searchCriteria "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BatchOperationSearchCriteria")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nSearchResults"),e("span",{pre:!0,attrs:{class:"token generics function"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("BatchOperation"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" batchOperations "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  client"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("listBatchOperations")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" searchCriteria"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"obtener-un-batch-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#obtener-un-batch-operations","aria-hidden":"true"}},[this._v("#")]),this._v(" Obtener un Batch Operations")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Para obtener un "),a("code",[this._v("BatchOperation")]),this._v(" por su token utilice el siguiente ejemplo.")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("String token "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// GUID for the Batch Operation")]),t._v("\nBatchOperation batchOperation "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBatchOperationByToken")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"crear-un-batch-operation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#crear-un-batch-operation","aria-hidden":"true"}},[this._v("#")]),this._v(" Crear un Batch Operation")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v("Para crear un "),e("code",[t._v("BatchOperation")]),t._v(" se necesita llamar a "),e("code",[t._v("createBatchCommandInvocation")]),t._v(" pasando el objeto "),e("code",[t._v("ITenantAuthentication")]),t._v(" y una\ninstancia de "),e("code",[t._v("BatchCommandInvocationRequest")]),t._v(" construido como en el siguiente ejemplo.")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("String token "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// GUID for the Batch Operation")]),t._v("\nBatchCommandInvocationRequest request "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BatchCommandInvocationRequest"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBuilder")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("withToken")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("withCommandToken")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ping"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addDeviceToken")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"15737-UNO-7576364"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("parameter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nBatchOperation batchOperation "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  client"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBatchCommandInvocation")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"listing-the-elements-of-a-batch-operation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#listing-the-elements-of-a-batch-operation","aria-hidden":"true"}},[this._v("#")]),this._v(" Listing the elements of a Batch Operation")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v("Para listar los elementos de un "),e("code",[t._v("BatchOperation")]),t._v(" se necesita llamar a "),e("code",[t._v("listBatchOperationElements")]),t._v(" pasando\nel objeto "),e("code",[t._v("ITenantAuthentication")]),t._v(" y el token del "),e("code",[t._v("BatchOperation")]),t._v(".")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("String token "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// GUID for the Batch Operation")]),t._v("\nSearchResults"),e("span",{pre:!0,attrs:{class:"token generics function"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("BatchElement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" batchElements "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  client"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("listBatchOperationElements")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);s.options.__file="README.md";a.default=s.exports}}]);