(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{319:function(t,a,e){"use strict";e.r(a);var s=e(1),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("Seo"),t._v(" "),e("p",[t._v("El equipo de SiteWhere provee una API Java para acceder a la API REST de una Instancia de SiteWhere.\nEsta guía muestra cómo usar la API Java de SiteWhere para interactuqr con una Instancia de SiteWhere.")]),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("La librería de SiteWhere Java Client library está publicada en "),e("a",{attrs:{href:"https://search.maven.org/search?q=a:sitewhere-java-client",target:"_blank",rel:"noopener noreferrer"}},[t._v("Maven Central"),e("OutboundLink")],1),t._v("\npara ser utilizada con las herramientas de administración de dependencias, como ser Apache Maven o Gradle.")]),t._v(" "),e("p",[t._v("Si utiliza "),e("a",{attrs:{href:"https://maven.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache Maven"),e("OutboundLink")],1),t._v(", agregue la siguiente dependencias en su "),e("code",[t._v("pom.xml")]),t._v(".")]),t._v(" "),t._m(2),e("p",[t._v("Si utilizar "),e("a",{attrs:{href:"https://gradle.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gradle"),e("OutboundLink")],1),t._v(", agregue la siguiente dependencias en su "),e("code",[t._v("build.gradle")]),t._v(".")]),t._v(" "),t._m(3),t._m(4),t._v(" "),e("p",[t._v("Una nueva instancia del cliente con la configuración por defecto puede ser creada de la siguiente manera:")]),t._v(" "),t._m(5),e("p",[t._v("La configuración por defecto es:")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),e("p",[t._v("Para cambiar los valores por defecto de la conexión, utilice:")]),t._v(" "),t._m(9),e("p",[t._v("Par conectarse utilizando un usuario diferente, utilice:")]),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),e("p",[t._v("La siguiete imánge muestra un Diagrama de Clases UML del Modelo de Objeto de SiteWhere el cual\npuede ayudar en la comprensión de los componentes del sistema.")]),t._v(" "),e("InlineImage",{attrs:{src:"/images/guide/api/object-model.png",caption:"SiteWhere Object Model UML Class Diagram"}}),t._v(" "),t._m(13),t._v(" "),e("p",[t._v("Para las llamadas globales no es requerida información extra para poder hacer la invocación.")]),t._v(" "),t._m(14),t._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"./system-api/"}},[t._v("System API")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"./user-api/"}},[t._v("Users API")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"./tenant-api/"}},[t._v("Tenant API")])],1)]),t._v(" "),t._m(15),t._v(" "),e("p",[t._v("Para las llamadas que son específicas de los tenant, se debe proveer información relativa al tenant para\npoder realizar la invocación al método. Se debe proveer el id del tenant y el token de autenticación del mismo,\nlos cual son provistos por las cabeceras de las llamadas REST (junto con el JWT usado para todas las llamadas).")]),t._v(" "),t._m(16),t._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"./area-api/"}},[t._v("Area API")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"./area-type-api/"}},[t._v("Area Type API")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"./asset-api/"}},[t._v("Asset API")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"./asset-type-api/"}},[t._v("Asset Type API")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"./batch-operations-api/"}},[t._v("Batch Operations API")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"./command-invocations-api/"}},[t._v("Command Invocation API")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"./customer-api/"}},[t._v("Customer API")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"./customer-type-api/"}},[t._v("Customer Type API")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"./device-api/"}},[t._v("Device API")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"./assignment-api/"}},[t._v("Device Assignment API")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"./device-command-api/"}},[t._v("Device Command API")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"./device-event-api/"}},[t._v("Device Event API")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"./device-group-api/"}},[t._v("Device Group API")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"./device-state-api/"}},[t._v("Device State API")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"./device-state-api/"}},[t._v("Device Status API")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"./device-type-api/"}},[t._v("Device Type API")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"./schedule-api/"}},[t._v("Schedule API")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"./scheduled-job-api/"}},[t._v("Scheduled Job API")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"./zone-api/"}},[t._v("Zone API")])],1)])],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"usando-la-api-java-de-sitewhere"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usando-la-api-java-de-sitewhere","aria-hidden":"true"}},[this._v("#")]),this._v(" 📖 Usando la API Java de SiteWhere")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"importar-la-libreria"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#importar-la-libreria","aria-hidden":"true"}},[this._v("#")]),this._v(" Importar la Librería")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.sitewhere"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("sitewhere-java-client"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.1.x"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[this._v("implementation "),a("span",{attrs:{class:"token string"}},[this._v("'com.sitewhere:sitewhere-java-client:2.1.x'")]),this._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"creando-una-instancia-del-client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creando-una-instancia-del-client","aria-hidden":"true"}},[this._v("#")]),this._v(" Creando una instancia del client")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("ISiteWhereClient client "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("newBuilder")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("build")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("initialize")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Attribute")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Protocol")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("HTTP")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Hostname")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("localhost")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Port")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("80")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Username")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("admin")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Password")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("password")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),a("p",[this._v("Desde SiteWhere 2.1.x el "),a("code",[this._v("Port")]),this._v(" por defecto ha cambiado de 8080 a 80.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Note que el método "),a("code",[this._v("initialize()")]),this._v(" debe ser llamado antes de utilizar el cliente. Éste configura\nlos templates y se conecta al servidor para obtener un "),a("em",[this._v("JWT")]),this._v(".")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("SiteWhereClient client "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("newBuilder")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("withConnectionTo")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v('"https"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"myhost"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token number"}},[t._v("8081")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("build")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("initialize")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("SiteWhereClient client "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("newBuilder")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("forUser")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v('"myuser"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"mypassword"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("build")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("initialize")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"interactuando-con-el-modelo-de-objectos-de-sitewhere"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interactuando-con-el-modelo-de-objectos-de-sitewhere","aria-hidden":"true"}},[this._v("#")]),this._v(" Interactuando con el Modelo de Objectos de SiteWhere")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Una vez que el cliente ha sido inicializado, se puede invocar a los métodos del mismo para\ninteractuar con el modelo de objetos de SiteWhere en la instancia remota. Existen dos tipo\nde llamadas o métodos, los métodos "),a("strong",[this._v("globales")]),this._v(" y los métodos "),a("strong",[this._v("específicos del tenant")]),this._v(".")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"llamadas-globales"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#llamadas-globales","aria-hidden":"true"}},[this._v("#")]),this._v(" Llamadas Globales")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("La siguiente es la lista de llamadas "),a("strong",[this._v("Globales")]),this._v(" de la API de SiteWhere:")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"llamadas-especificas-del-tenant"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#llamadas-especificas-del-tenant","aria-hidden":"true"}},[this._v("#")]),this._v(" Llamadas Específicas del Tenant")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("La siguiente es la lista de llamadas "),a("strong",[this._v("Específicas del Tenant")]),this._v(" de la API de SiteWhere:")])}],!1,null,null,null);n.options.__file="README.md";a.default=n.exports}}]);