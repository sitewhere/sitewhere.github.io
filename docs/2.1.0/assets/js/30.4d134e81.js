(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{317:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("Seo"),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43)],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"java-api-devices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-api-devices","aria-hidden":"true"}},[this._v("#")]),this._v(" Java API - Devices")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Esta sección contiene la documentación y ejemplos del end point "),a("code",[this._v("devices")]),this._v(" de la API de Java de SiteWhere.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Este ejemplo asume que usted obtiene su autenticación del "),a("em",[this._v("tenant")]),this._v(" ya sea por")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("ITenantAuthentication tenantAuthentication "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("defaultTenant")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("o por la utilización del tenant "),a("code",[this._v("default")]),this._v(".")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("ITenantAuthentication tenantAuthentication "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("forTenant")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"token"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"auth"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"busqueda-de-devices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#busqueda-de-devices","aria-hidden":"true"}},[this._v("#")]),this._v(" Busqueda de Devices")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("Para buscar resultados de "),s("code",[t._v("Devices")]),t._v(" se necesita una instancia de "),s("code",[t._v("DeviceSearchCriteria")]),t._v(" y una instancia de "),s("code",[t._v("DeviceResponseFormat")]),t._v(",\nlas cuales serán pasadas al método "),s("code",[t._v("listDevices")]),t._v(" de "),s("code",[t._v("com.sitewhere.spi.ISiteWhereClient")]),t._v(". El siguiente ejemplo muestra\ncomo consultar la API REST de SiteWhere para listar la primer página con 100 resultados de "),s("code",[t._v("Devices")]),t._v(".")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("DeviceSearchCriteria searchCriteria "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("DeviceSearchCriteria")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("100")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" null"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" null"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDeviceResponseFormat responseFormat "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("DeviceResponseFormat")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nSearchResults"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Device"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" results "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("listDevices")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" searchCriteria"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" responseFormat"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("El objeto "),a("code",[this._v("DeviceSearchCriteria")]),this._v(" define los criterios de búsqueda para un "),a("code",[this._v("Device")]),this._v(", la siguiente tabla\nmuestra las propiedades, con su tipo y desdcripción, que pueden ser usadas para filtar los resultados.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Propiedad")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Tipo")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Descripción")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("setDeviceTypeToken")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("String")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Filtrar por Device Type.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("setExcludeAssigned")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("boolean")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Indica si los dispositivos asignados deben ser excluidos.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("setStartDate")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Date")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Fecha de inicio del rango.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("setEndDate")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Date")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Fecha de fin del range.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("setPageNumber")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Integer")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Indicar el número de pagina del dataset.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("setPageSize")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Integer")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Indicar el número de registros por página.")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Además se puede controlar que información es retornada en los resultados proveyendo una instancia de\n"),a("code",[this._v("DeviceResponseFormat")]),this._v(". La siguiente tabla muestra las propiedades que pueden ser establecidas para controlar\nel formato del resultado de la respuesta.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Propiedad")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Tipo")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Descripción")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("setIncludeDeviceType")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Boolean")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Indica si la información de los Device Type deben ser incluidos.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("setIncludeAssignment")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Boolean")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Indica si la información de las asignaciones deben ser incluidas.")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"obtener-un-device"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#obtener-un-device","aria-hidden":"true"}},[this._v("#")]),this._v(" Obtener un Device")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Para obtener un "),a("code",[this._v("Device")]),this._v(" por su token utilice el siguiente ejemplo.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("String token "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// GUID for the Device")]),t._v("\nDevice device "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getDeviceByToken")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"creating-an-device"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-device","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating an Device")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("Para crear un "),s("code",[t._v("Device")]),t._v(" se necesita llamar a "),s("code",[t._v("createDevice")]),t._v(" pasando el objeto "),s("code",[t._v("ITenantAuthentication")]),t._v(" y una\ninstancia de "),s("code",[t._v("DeviceCreateRequest")]),t._v(" construido como en el siguiente ejemplo.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("String token "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// GUID for the Device")]),t._v("\nString deviceType "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"iphone6s"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDeviceCreateRequest"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder builder "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("DeviceCreateRequest"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deviceType"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDeviceCreateRequest createRequest "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("build")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Create the Device")]),t._v("\nDevice createdDevice "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createDevice")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" createRequest"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"actualizar-un-existing-device"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#actualizar-un-existing-device","aria-hidden":"true"}},[this._v("#")]),this._v(" Actualizar un existing Device")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("Para actualizar un "),s("code",[t._v("Device")]),t._v(" se necesita llamar a "),s("code",[t._v("updateDevice")]),t._v(" pasando el objeto "),s("code",[t._v("ITenantAuthentication")]),t._v(",\nel "),s("code",[t._v("token")]),t._v(" de un "),s("code",[t._v("Device")]),t._v(" y una instancia de "),s("code",[t._v("DeviceCreateRequest")]),t._v(" construido como en el siguiente ejemplo.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("String token "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// GUID for the Device")]),t._v("\nString deviceType "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"iphone6s"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDeviceCreateRequest"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder builder "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("DeviceCreateRequest"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deviceType"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDeviceCreateRequest updateRequest "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("build")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Update the Device")]),t._v("\nDevice updatedDevice "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("updateDevice")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" updateRequest"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"deleting-an-existing-device"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deleting-an-existing-device","aria-hidden":"true"}},[this._v("#")]),this._v(" Deleting an existing Device")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("Para eliminar un "),s("code",[t._v("Device")]),t._v(" se necesita llamar a "),s("code",[t._v("deleteDevice")]),t._v(" pasando el objeto "),s("code",[t._v("ITenantAuthentication")]),t._v(" y el\n"),s("code",[t._v("token")]),t._v(" del "),s("code",[t._v("Device")]),t._v(" que se quiere eliminar, como en el siguiente ejemplo.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("String token "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// GUID for the Device")]),t._v("\nDevice deletedDevice "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("deleteDevice")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"llamadas-de-api-asociadas-al-device"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#llamadas-de-api-asociadas-al-device","aria-hidden":"true"}},[this._v("#")]),this._v(" Llamadas de API asociadas al Device")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"obtener-assignments-asociados-al-device"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#obtener-assignments-asociados-al-device","aria-hidden":"true"}},[this._v("#")]),this._v(" Obtener Assignments asociados al Device")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("El siguiente ejemplo recupera las primeras 100 "),a("code",[this._v("DeviceAssignment")]),this._v("s asociadas con un "),a("code",[this._v("Device")]),this._v("\ndel último año.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("String token "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// GUID for the Device")]),t._v("\nDeviceAssignmentSearchCriteria searchCriteria "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("DeviceAssignmentSearchCriteria")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("100")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDeviceAssignmentResponseFormat responseFormat "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("DeviceAssignmentResponseFormat")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nSearchResults"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("MarshaledDeviceAssignment"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" assignments "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("listDeviceAssignmentsForDevice")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  tenantAuthentication"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" searchCriteria"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" responseFormat"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"agregar-multiple-eventso-al-device"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#agregar-multiple-eventso-al-device","aria-hidden":"true"}},[this._v("#")]),this._v(" Agregar Múltiple eventso al Device")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("El siguiente ejemplo muestra cómo crear múltiple evento a un "),a("code",[this._v("Device")]),this._v(" usand una sóla llamada a la API.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("String deviceToken "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"60737-MT90-4178968"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDeviceEventBatch batch "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("DeviceEventBatch")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbatch"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setDeviceToken")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deviceToken"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbatch"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getLocations")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("add")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("DeviceLocationCreateRequest"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("22.2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("33.3")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("build")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Add other events to DeviceEventBatch")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Submit and create the Batch Response")]),t._v("\nDeviceEventBatchResponse response "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  client"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addMultipleEventsForDevice")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deviceToken"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" batch"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"crear-un-mapeo-de-dispositivo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#crear-un-mapeo-de-dispositivo","aria-hidden":"true"}},[this._v("#")]),this._v(" Crear un Mapeo de Dispositivo")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("El siguiente ejemplo muestra cómo crear un "),a("code",[this._v("DeviceElementMapping")]),this._v(" para un "),a("code",[this._v("Device")]),this._v(".")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("String token "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// GUID for the Device")]),t._v("\nDeviceElementMapping request "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("DeviceElementMapping")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrequest"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setDeviceToken")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrequest"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setDeviceElementSchemaPath")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"someschema"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nMarshaledDevice device "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createDeviceMappings")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" request"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"borrar-un-mepeo-de-dispositivo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#borrar-un-mepeo-de-dispositivo","aria-hidden":"true"}},[this._v("#")]),this._v(" Borrar un Mepeo de Dispositivo")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("El siguiente ejemplo muestra cómo borrar un "),a("code",[this._v("DeviceElementMapping")]),this._v(" para un "),a("code",[this._v("Device")]),this._v(".")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("String token "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// GUID for the Device")]),t._v("\nMarshaledDevice device "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("deleteDeviceMappings")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"someschema"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"listar-dispositivos-por-grupo-de-dispositivo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#listar-dispositivos-por-grupo-de-dispositivo","aria-hidden":"true"}},[this._v("#")]),this._v(" Listar Dispositivos por Grupo de Dispositivo")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("El siguiente ejemplo muestra cómo listar "),a("code",[this._v("Devices")]),this._v(" que están asociados a un "),a("code",[this._v("DeviceGroup")]),this._v(".")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("String groupToken "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"e137a55b-7c50-42f9-9dd7-c0c02e84b80e"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDeviceSearchCriteria searchCriteria "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("DeviceSearchCriteria")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("100")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" null"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" null"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDeviceByGroupResponseFormat responseFormat "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("DeviceByGroupResponseFormat")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nSearchResults"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Device"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" result "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("listDevicesByDeviceGroup")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" groupToken"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  searchCriteria"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" responseFormat"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"listar-dispositivos-por-grupo-de-dispositivo-con-un-role"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#listar-dispositivos-por-grupo-de-dispositivo-con-un-role","aria-hidden":"true"}},[this._v("#")]),this._v(" Listar Dispositivos por Grupo de Dispositivo con un Role")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("El siguiente ejemplo muestra cómo listar "),a("code",[this._v("Devices")]),this._v(" que están asociados a un "),a("code",[this._v("DeviceGroup")]),this._v(" con un "),a("code",[this._v("Role")]),this._v(".")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("String role "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"master"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDeviceSearchCriteria searchCriteria "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("DeviceSearchCriteria")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("100")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" null"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" null"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDeviceByGroupResponseFormat responseFormat "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("DeviceByGroupResponseFormat")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nSearchResults"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Device"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" result "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("listDevicesByDeviceGroupWithRole")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" role"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  searchCriteria"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" responseFormat"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="README.md";a.default=n.exports}}]);