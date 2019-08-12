(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{302:function(t,e,a){"use strict";a.r(e);var s=a(1),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("Seo"),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"java-api-scheduled-jobs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-api-scheduled-jobs","aria-hidden":"true"}},[this._v("#")]),this._v(" Java API - Scheduled Jobs")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Esta sección contiene la documentación y ejemplos del end point "),e("code",[this._v("jobs")]),this._v(" de la API de Java de SiteWhere.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Este ejemplo asume que usted obtiene su autenticación del "),e("em",[this._v("tenant")]),this._v(" ya sea por")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("ITenantAuthentication tenantAuthentication "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("defaultTenant")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("o por la utilización del tenant "),e("code",[this._v("default")]),this._v(".")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("ITenantAuthentication tenantAuthentication "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("forTenant")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"token"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"auth"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"busqueda-de-scheduled-jobs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#busqueda-de-scheduled-jobs","aria-hidden":"true"}},[this._v("#")]),this._v(" Busqueda de Scheduled Jobs")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Para buscar resultados de "),a("code",[t._v("ScheduledJob")]),t._v(" se necesita una instancia de "),a("code",[t._v("ScheduledJobSearchCriteria")]),t._v(" y una instancia de "),a("code",[t._v("ScheduledJobResponseFormat")]),t._v(",\nlas cuales serán pasadas al método "),a("code",[t._v("listScheduledJobs")]),t._v(" de "),a("code",[t._v("com.sitewhere.spi.ISiteWhereClient")]),t._v(". El siguiente ejemplo muestra\ncomo consultar la API REST de SiteWhere para listar la primer página con 100 resultados de "),a("code",[t._v("ScheduledJob")]),t._v(".")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("ScheduledJobSearchCriteria searchCriteria "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ScheduledJobSearchCriteria")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nScheduledJobResponseFormat responseFormat "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ScheduledJobResponseFormat")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nSearchResults"),a("span",{attrs:{class:"token generics function"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ScheduledJob"),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" results "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("listScheduledJobs")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" searchCriteria"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" responseFormat"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("El objeto "),e("code",[this._v("ScheduledJobSearchCriteria")]),this._v(" define los criterios de búsqueda para un "),e("code",[this._v("ScheduledJob")]),this._v(", la siguiente tabla\nmuestra las propiedades, con su tipo y desdcripción, que pueden ser usadas para filtar los resultados.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Propiedad")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Tipo")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Descripción")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("setPageNumber")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Integer")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Indicar el número de pagina del dataset.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("setPageSize")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Integer")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Indicar el número de registros por página.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Además se puede controlar que información es retornada en los resultados proveyendo una instancia de\n"),e("code",[this._v("ScheduledJobResponseFormat")]),this._v(". La siguiente tabla muestra las propiedades que pueden ser establecidas para controlar\nel formato del resultado de la respuesta.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Propiedad")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Tipo")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Descripción")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("setIncludeContext")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Indica si el contexto debe ser incluido en los resultados.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"obtener-un-scheduled-job"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#obtener-un-scheduled-job","aria-hidden":"true"}},[this._v("#")]),this._v(" Obtener un Scheduled Job")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Para obtener un "),e("code",[this._v("ScheduledJob")]),this._v(" por su token utilice el siguiente ejemplo.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("String token "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// GUID for the ScheduledJob")]),t._v("\nScheduledJob schedule "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getScheduledJobByToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"crear-un-scheduled-job"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crear-un-scheduled-job","aria-hidden":"true"}},[this._v("#")]),this._v(" Crear un Scheduled Job")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Para crear un "),a("code",[t._v("ScheduledJob")]),t._v(" se necesita llamar a "),a("code",[t._v("createScheduledJob")]),t._v(" pasando el objeto "),a("code",[t._v("ITenantAuthentication")]),t._v(" y una\ninstancia de "),a("code",[t._v("ScheduledJobCreateRequest")]),t._v(" construido como en el siguiente ejemplo.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("String token "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// GUID for the ScheduledJob")]),t._v("\nScheduledJobCreateRequest createRequest "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ScheduledJobCreateRequest")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setJobState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ScheduledJobState"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Active"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setJobType")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ScheduledJobType"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BatchCommandInvocation"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setScheduleToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setJobConfiguration")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Collections"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("emptyMap")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Create the ScheduledJob")]),t._v("\nScheduledJob createdScheduledJob "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createScheduledJob")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" createRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"actualizar-un-scheduled-job-existente"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#actualizar-un-scheduled-job-existente","aria-hidden":"true"}},[this._v("#")]),this._v(" Actualizar un Scheduled Job existente")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Para actualizar un "),a("code",[t._v("ScheduledJob")]),t._v(" se necesita llamar a "),a("code",[t._v("updateScheduledJob")]),t._v(" pasando el objeto "),a("code",[t._v("ITenantAuthentication")]),t._v(",\nel "),a("code",[t._v("token")]),t._v(" de un "),a("code",[t._v("ScheduledJob")]),t._v(" y una instancia de "),a("code",[t._v("ScheduledJobCreateRequest")]),t._v(" construido como en el siguiente ejemplo.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("String token "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// GUID for the ScheduledJob")]),t._v("\nScheduledJobCreateRequest createRequest "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ScheduledJobCreateRequest")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setJobState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ScheduledJobState"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Active"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setJobType")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ScheduledJobType"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BatchCommandInvocation"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setScheduleToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setJobConfiguration")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Collections"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("emptyMap")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Update the ScheduledJob")]),t._v("\nScheduledJob updatedScheduledJob "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("updateScheduledJob")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" updateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"borrar-un-scheduled-job-existente"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#borrar-un-scheduled-job-existente","aria-hidden":"true"}},[this._v("#")]),this._v(" Borrar un Scheduled Job existente")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Para eliminar un "),a("code",[t._v("ScheduledJob")]),t._v(" se necesita llamar a "),a("code",[t._v("deleteScheduledJob")]),t._v(" pasando el objeto "),a("code",[t._v("ITenantAuthentication")]),t._v(" y el\n"),a("code",[t._v("token")]),t._v(" del "),a("code",[t._v("ScheduledJob")]),t._v(" que se quiere eliminar, como en el siguiente ejemplo.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("String token "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// GUID for the ScheduledJob")]),t._v("\nScheduledJob deletedScheduledJob "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("deleteScheduledJob")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="README.md";e.default=n.exports}}]);