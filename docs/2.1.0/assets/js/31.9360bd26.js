(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{312:function(t,a,e){"use strict";e.r(a);var n=e(1),s=Object(n.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("Seo"),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19)],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"java-api-device-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-api-device-commands","aria-hidden":"true"}},[this._v("#")]),this._v(" 📖 Java API - Device Commands")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Esta sección contiene la documentación y ejemplos del end point "),a("code",[this._v("commands")]),this._v(" de la API de Java de SiteWhere.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Este ejemplo asume que usted obtiene su autenticación del "),a("em",[this._v("tenant")]),this._v(" ya sea por")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("ITenantAuthentication tenantAuthentication "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("defaultTenant")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("o por la utilización del tenant "),a("code",[this._v("default")]),this._v(".")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("ITenantAuthentication tenantAuthentication "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("forTenant")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v('"token"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"auth"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"busqueda-de-device-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#busqueda-de-device-commands","aria-hidden":"true"}},[this._v("#")]),this._v(" Busqueda de Device Commands")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v("For searching "),e("code",[t._v("DeviceCommand")]),t._v(" you need to provide an instance of "),e("code",[t._v("DeviceCommandSearchCriteria")]),t._v(" to the method\n"),e("code",[t._v("listDeviceCommands")]),t._v(" of "),e("code",[t._v("com.sitewhere.spi.ISiteWhereClient")]),t._v(". The example below shows how you can query SiteWhere\nREST API to list the first page of 100 results of assets.")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("DeviceCommandSearchCriteria searchCriteria "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("DeviceCommandSearchCriteria")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token number"}},[t._v("1")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token number"}},[t._v("100")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nSearchResults"),e("span",{attrs:{class:"token generics function"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("DeviceCommand"),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" results "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("listDeviceCommands")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" searchCriteria"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("DeviceCommandSearchCriteria")]),this._v(" defines the search criteria for quering "),a("code",[this._v("DeviceCommand")]),this._v(", the following table shows the properties, with\nthier type and description, that can be set to filter the results.")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Propiedad")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Tipo")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Descripción")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getDeviceTypeToken")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("String")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Limit results by device type id.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("setPageNumber")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("Integer")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Indicar el número de pagina del dataset.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("setPageSize")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("Integer")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Indicar el número de registros por página.")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"creating-an-device-command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-device-command","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating an Device Command")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v("For creating an "),e("code",[t._v("DeviceCommand")]),t._v(" you need to call "),e("code",[t._v("createDeviceCommand")]),t._v(" passing the "),e("code",[t._v("ITenantAuthentication")]),t._v(" object and an\n"),e("code",[t._v("DeviceCommandCreateRequest")]),t._v(" build like in the folling example.")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("String token "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// GUID for the DeviceCommand")]),t._v("\nString deviceTypeToken "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"iphone6s"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nString namespace "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"default"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nString name "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"test command"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDeviceCommandCreateRequest"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder builder "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("DeviceCommandCreateRequest"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deviceTypeToken"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" namespace"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbuilder"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("withDescription")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v('"Some description"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{attrs:{class:"token comment"}},[t._v("// Build the Create Request")]),t._v("\nDeviceCommandCreateRequest createRequest "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("build")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{attrs:{class:"token comment"}},[t._v("// Create the DeviceCommand")]),t._v("\nDeviceCommand createdDeviceCommand "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("createDeviceCommand")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" createRequest"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"actualizar-un-existing-device-command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#actualizar-un-existing-device-command","aria-hidden":"true"}},[this._v("#")]),this._v(" Actualizar un existing Device Command")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v("For updating an "),e("code",[t._v("DeviceCommand")]),t._v(" you need to call "),e("code",[t._v("updateDeviceCommand")]),t._v(" passing the "),e("code",[t._v("ITenantAuthentication")]),t._v(" object,\nthe "),e("code",[t._v("token")]),t._v(" of the existing "),e("code",[t._v("DeviceCommand")]),t._v(" and an "),e("code",[t._v("DeviceCommandCreateRequest")]),t._v(" build like in the folling example.")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("String token "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// GUID for the DeviceCommand")]),t._v("\nString deviceTypeToken "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"iphone6s"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nString namespace "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"default"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nString name "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"test command"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDeviceCommandCreateRequest"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder builder "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("DeviceCommandCreateRequest"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deviceTypeToken"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" namespace"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbuilder"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("withDescription")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v('"Some updated description"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{attrs:{class:"token comment"}},[t._v("// Build the Create Request")]),t._v("\nDeviceCommandCreateRequest updateRequest "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("build")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{attrs:{class:"token comment"}},[t._v("// Update the DeviceCommand")]),t._v("\nDeviceCommand updatedDeviceCommand "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("updateDeviceCommand")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" updateRequest"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"deleting-an-existing-device-command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deleting-an-existing-device-command","aria-hidden":"true"}},[this._v("#")]),this._v(" Deleting an existing Device Command")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v("For deleting an existing "),e("code",[t._v("DeviceCommand")]),t._v(" you need to call "),e("code",[t._v("deleteDeviceCommand")]),t._v(" method of "),e("code",[t._v("com.sitewhere.spi.ISiteWhereClient")]),t._v("\nproviding the "),e("code",[t._v("token")]),t._v(" of the asset you want to delete, like the following example.")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("String token "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// GUID for the DeviceCommand")]),t._v("\nDeviceCommand deletedDeviceCommand "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("deleteDeviceCommand")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);s.options.__file="README.md";a.default=s.exports}}]);