(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{276:function(t,e,a){"use strict";a.r(e);var s=a(1),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("Seo"),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"java-api-area-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-api-area-types","aria-hidden":"true"}},[this._v("#")]),this._v(" Java API - Area Types")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Esta sección contiene la documentación y ejemplos del end point "),e("code",[this._v("areatypes")]),this._v(" de la API de Java de SiteWhere.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Este ejemplo asume que usted obtiene su autenticación del "),e("em",[this._v("tenant")]),this._v(" ya sea por")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("ITenantAuthentication tenantAuthentication "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defaultTenant")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("o por la utilización del tenant "),e("code",[this._v("default")]),this._v(".")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("ITenantAuthentication tenantAuthentication "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forTenant")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auth"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"busqueda-de-area-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#busqueda-de-area-types","aria-hidden":"true"}},[this._v("#")]),this._v(" Busqueda de Area Types")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Para buscar resultados de "),a("code",[t._v("AreaType")]),t._v(" se necesita una instancia de "),a("code",[t._v("AreaTypeSearchCriteria")]),t._v(",\nla cual serán pasada al método "),a("code",[t._v("listAreaTypes")]),t._v(" de "),a("code",[t._v("com.sitewhere.spi.ISiteWhereClient")]),t._v(". El siguiente ejemplo muestra\ncomo consultar la API REST de SiteWhere para listar la primer página con 100 resultados de "),a("code",[t._v("AreaType")]),t._v(".")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("AreaTypeSearchCriteria searchCriteria "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AreaTypeSearchCriteria")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nSearchResults"),a("span",{pre:!0,attrs:{class:"token generics function"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("AreaType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" results "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listAreaTypes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" searchCriteria"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("El objeto "),e("code",[this._v("AreaTypeSearchCriteria")]),this._v(" define los criterios de búsqueda para un "),e("code",[this._v("AreaType")]),this._v(", la siguiente tabla\nmuestra las propiedades, con su tipo y desdcripción, que pueden ser usadas para filtar los resultados.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Propiedad")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Tipo")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Descripción")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("setIncludeContainedAreaTypes")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Indica si los AreaType contenidos deben ser incluidos en la respuesta.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("setPageNumber")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Integer")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Indicar el número de pagina del dataset.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("setPageSize")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Integer")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Indicar el número de registros por página.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"obtener-un-area-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#obtener-un-area-type","aria-hidden":"true"}},[this._v("#")]),this._v(" Obtener un Area Type")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Para obtener un "),e("code",[this._v("AreaType")]),this._v(" por su token utilice el siguiente ejemplo.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("String token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// GUID for the AreaType")]),t._v("\nAreaType area "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAreaTypeByToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"crear-un-area-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crear-un-area-type","aria-hidden":"true"}},[this._v("#")]),this._v(" Crear un Area Type")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Para crear un "),a("code",[t._v("AreaType")]),t._v(" se necesita llamar a "),a("code",[t._v("createAreaType")]),t._v(" pasando el objeto "),a("code",[t._v("ITenantAuthentication")]),t._v(" y una\ninstancia de "),a("code",[t._v("AreaTypeCreateRequest")]),t._v(" construido como en el siguiente ejemplo.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("String token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// GUID for the Area Type")]),t._v("\nAreaTypeCreateRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder builder "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AreaTypeCreateRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my area type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbuilder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("withDescription")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Some description"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nAreaTypeCreateRequest createRequest "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create the Area Type")]),t._v("\nAreaType createdAreaType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createAreaType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" createRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"actualizar-un-existing-area-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#actualizar-un-existing-area-type","aria-hidden":"true"}},[this._v("#")]),this._v(" Actualizar un existing Area Type")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Para actualizar un "),a("code",[t._v("AreaType")]),t._v(" se necesita llamar a "),a("code",[t._v("updateAreaType")]),t._v(" pasando el objeto "),a("code",[t._v("ITenantAuthentication")]),t._v(" y una\ninstancia de "),a("code",[t._v("AreaTypeCreateRequest")]),t._v(" construido como en el siguiente ejemplo.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("AreaTypeCreateRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder builder "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AreaTypeCreateRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my area type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbuilder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("withDescription")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Some description"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nAreaTypeCreateRequest updateRequest "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Update the Area Type")]),t._v("\nAreaType updatedArea "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateAreaType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" updateRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"deleting-an-existing-area-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deleting-an-existing-area-type","aria-hidden":"true"}},[this._v("#")]),this._v(" Deleting an existing Area Type")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Para eliminar un "),a("code",[t._v("AreaType")]),t._v(" se necesita llamar a "),a("code",[t._v("deleteAreaType")]),t._v(" pasando el objeto "),a("code",[t._v("ITenantAuthentication")]),t._v(" y el\n"),a("code",[t._v("token")]),t._v(" del "),a("code",[t._v("AreaType")]),t._v(" que se quiere eliminar, como en el siguiente ejemplo.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("String token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// GUID for the Area Type")]),t._v("\nAreaType deletedAreaType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteAreaType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="README.md";e.default=n.exports}}]);