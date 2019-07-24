(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{303:function(t,e,a){"use strict";a.r(e);var s=a(1),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("Seo"),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"java-api-schedules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-api-schedules","aria-hidden":"true"}},[this._v("#")]),this._v(" 📖 Java API - Schedules")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Esta sección contiene la documentación y ejemplos del end point "),e("code",[this._v("schedules")]),this._v(" de la API de Java de SiteWhere.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Este ejemplo asume que usted obtiene su autenticación del "),e("em",[this._v("tenant")]),this._v(" ya sea por")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("ITenantAuthentication tenantAuthentication "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("defaultTenant")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("o por la utilización del tenant "),e("code",[this._v("default")]),this._v(".")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("ITenantAuthentication tenantAuthentication "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("forTenant")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"token"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"auth"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"busqueda-de-schedules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#busqueda-de-schedules","aria-hidden":"true"}},[this._v("#")]),this._v(" Busqueda de Schedules")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("For searching "),a("code",[t._v("Schedule")]),t._v(" you need to provide an instance of "),a("code",[t._v("ScheduleSearchCriteria")]),t._v(" and an instance of "),a("code",[t._v("ScheduleResponseFormat")]),t._v(" to the method\n"),a("code",[t._v("listSchedules")]),t._v(" of "),a("code",[t._v("com.sitewhere.spi.ISiteWhereClient")]),t._v(". The example below shows how you can query SiteWhere REST API to list the first\npage of 100 results of device groups.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("ScheduleSearchCriteria searchCriteria "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ScheduleSearchCriteria")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nScheduleResponseFormat responseFormat "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ScheduleResponseFormat")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nSearchResults"),a("span",{attrs:{class:"token generics function"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Schedule"),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" results "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("listSchedules")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" searchCriteria"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" responseFormat"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("ScheduleSearchCriteria")]),this._v(" defines the search criteria for quering "),e("code",[this._v("Schedule")]),this._v(", the following table shows the properties, with\nthier type and description, that can be set to filter the results.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Propiedad")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Tipo")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Descripción")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("setPageNumber")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Integer")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Indicar el número de pagina del dataset.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("setPageSize")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Integer")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Indicar el número de registros por página.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"obtener-un-schedule"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#obtener-un-schedule","aria-hidden":"true"}},[this._v("#")]),this._v(" Obtener un Schedule")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Para obtener un "),e("code",[this._v("Schedule")]),this._v(" por su token utilice el siguiente ejemplo.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("String token "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// GUID for the Schedule")]),t._v("\nSchedule schedule "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getScheduleByToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"creating-an-schedule"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-schedule","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating an Schedule")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("For creating an "),a("code",[t._v("Schedule")]),t._v(" you need to call "),a("code",[t._v("createSchedule")]),t._v(" passing the "),a("code",[t._v("ITenantAuthentication")]),t._v(" object and an\n"),a("code",[t._v("ScheduleCreateRequest")]),t._v(" build like in the folling example.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("String token "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// GUID for the Schedule")]),t._v("\nString name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"test schedule"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nScheduleCreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder builder "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ScheduleCreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nbuilder"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("withStartDate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbuilder"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("withSimpleSchedule")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("10000")]),t._v("l"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Build the Create Request")]),t._v("\nScheduleCreateRequest createRequest "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("build")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Create the Schedule")]),t._v("\nSchedule createdSchedule "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createSchedule")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" createRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"actualizar-un-existing-schedule"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#actualizar-un-existing-schedule","aria-hidden":"true"}},[this._v("#")]),this._v(" Actualizar un existing Schedule")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("For updating an "),a("code",[t._v("Schedule")]),t._v(" you need to call "),a("code",[t._v("updateSchedule")]),t._v(" passing the "),a("code",[t._v("ITenantAuthentication")]),t._v(" object,\nthe "),a("code",[t._v("token")]),t._v(" of the existing "),a("code",[t._v("Schedule")]),t._v(" and an "),a("code",[t._v("ScheduleCreateRequest")]),t._v(" build like in the folling example.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("String token "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// GUID for the Schedule")]),t._v("\nString name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"test schedule"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nScheduleCreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder builder "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ScheduleCreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nbuilder"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("withStartDate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbuilder"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("withSimpleSchedule")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("10000")]),t._v("l"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Build the Create Request")]),t._v("\nScheduleCreateRequest updateRequest "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("build")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Update the Schedule")]),t._v("\nSchedule updatedSchedule "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("updateSchedule")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" updateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"deleting-an-existing-schedule"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deleting-an-existing-schedule","aria-hidden":"true"}},[this._v("#")]),this._v(" Deleting an existing Schedule")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("For deleting an existing "),a("code",[t._v("Schedule")]),t._v(" you need to call "),a("code",[t._v("deleteSchedule")]),t._v(" method of "),a("code",[t._v("com.sitewhere.spi.ISiteWhereClient")]),t._v("\nproviding the "),a("code",[t._v("token")]),t._v(" of the schedule you want to delete, like the following example.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("String token "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// GUID for the Schedule")]),t._v("\nSchedule deletedSchedule "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("deleteSchedule")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="README.md";e.default=n.exports}}]);