(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{235:function(a,e,s){"use strict";s.r(e);var t=s(1),n=Object(t.a)({},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"content"},[a._m(0),a._v(" "),s("Seo"),a._v(" "),s("p",[a._v("El microservicio global Web/REST incluye un contenedor Tomcat incorporado que\nproporciona infraestructura para todos los servicios REST principales, incluidas\nlas interfaces de usuario Swagger. Este microservicio suele estar conectado a todos\nlos demás microservicios del sistema, de modo que las llamadas a la API pueden delegarse\na los microservicios que implementan la funcionalidad. Por ejemplo, la consulta de un\ndispositivo a través de las API REST da como resultado una solicitud gRPC (potencialmente\nalmacenada en caché) al motor de inquilino de administración de dispositivo apropiado en\nuno de los microservicios de administración de dispositivos.")]),a._v(" "),a._m(1),a._v(" "),a._m(2),a._v(" "),a._m(3),a._v(" "),a._m(4),a._v(" "),s("p",[s("a",{attrs:{href:"http://sitewhere.io/schema/sitewhere/microservice/web-rest/current/web-rest.xsd",target:"_blank",rel:"noopener noreferrer"}},[a._v("Web/REST Configuration XML Schema"),s("OutboundLink")],1)]),a._v(" "),a._m(5),a._v(" "),a._m(6)],1)},[function(){var a=this.$createElement,e=this._self._c||a;return e("h1",{attrs:{id:"web-rest-microservice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web-rest-microservice","aria-hidden":"true"}},[this._v("#")]),this._v(" 📖 Web/REST Microservice")])},function(){var a=this.$createElement,e=this._self._c||a;return e("p",[this._v("Puede haber casos en que el microservicio requerido para completar una solicitud no esté\ndisponible. En este caso, se lanza una excepción de "),e("em",[this._v("ServiceNotAvailable")]),this._v(" y se devuelve\ncomo un error al usuario/aplicación que realizó la solicitud. Usando este enfoque,\nlas áreas del sistema pueden cerrarse para conservar recursos sin afectar la funcionalidad\ndel sistema en su totalidad. Las personas que llaman a los servicios REST deben estar\npreparadas para manejar los casos en que el subsistema al que están llamando puede cerrarse.")])},function(){var a=this.$createElement,e=this._self._c||a;return e("h2",{attrs:{id:"dependencias-del-microservicio"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dependencias-del-microservicio","aria-hidden":"true"}},[this._v("#")]),this._v(" Dependencias del Microservicio")])},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ul",[s("li",[s("strong",[a._v("Instance Management")]),a._v(" - Requerido para arrancar inicialmente los datos de Zookeeper.")]),a._v(" "),s("li",[s("strong",[a._v("User Management")]),a._v(" - Se utiliza para procesar invocaciones REST.")]),a._v(" "),s("li",[s("strong",[a._v("Tenant Management")]),a._v(" - Se utiliza para procesar invocaciones REST.")]),a._v(" "),s("li",[s("strong",[a._v("Device Management")]),a._v(" - Se utiliza para procesar invocaciones REST.")]),a._v(" "),s("li",[s("strong",[a._v("Event Management")]),a._v(" - Se utiliza para procesar invocaciones REST.")]),a._v(" "),s("li",[s("strong",[a._v("Asset Management")]),a._v(" - Se utiliza para procesar invocaciones REST.")]),a._v(" "),s("li",[s("strong",[a._v("Batch Management")]),a._v(" - Se utiliza para procesar invocaciones REST.")]),a._v(" "),s("li",[s("strong",[a._v("Schedule Management")]),a._v(" - Se utiliza para procesar invocaciones REST.")]),a._v(" "),s("li",[s("strong",[a._v("Label Generation")]),a._v(" - Se utiliza para procesar invocaciones REST.")]),a._v(" "),s("li",[s("strong",[a._v("Device State")]),a._v(" - Se utiliza para procesar invocaciones REST.")])])},function(){var a=this.$createElement,e=this._self._c||a;return e("h2",{attrs:{id:"esquema-de-configuracion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#esquema-de-configuracion","aria-hidden":"true"}},[this._v("#")]),this._v(" Esquema de Configuración")])},function(){var a=this.$createElement,e=this._self._c||a;return e("h3",{attrs:{id:"configuracion-de-ejemplo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuracion-de-ejemplo","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuración de Ejemplo")])},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token prolog"}},[a._v('<?xml version="1.0" encoding="UTF-8"?>')]),a._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("<")]),a._v("beans")]),a._v(" "),s("span",{attrs:{class:"token attr-name"}},[a._v("xmlns")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{attrs:{class:"token punctuation"}},[a._v('"')]),a._v("http://www.springframework.org/schema/beans"),s("span",{attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n\t"),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[a._v("xmlns:")]),a._v("sw")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{attrs:{class:"token punctuation"}},[a._v('"')]),a._v("http://sitewhere.io/schema/sitewhere/microservice/common"),s("span",{attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n\t"),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[a._v("xmlns:")]),a._v("xsi")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{attrs:{class:"token punctuation"}},[a._v('"')]),a._v("http://www.w3.org/2001/XMLSchema-instance"),s("span",{attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[a._v("xmlns:")]),a._v("context")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{attrs:{class:"token punctuation"}},[a._v('"')]),a._v("http://www.springframework.org/schema/context"),s("span",{attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n\t"),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[a._v("xmlns:")]),a._v("web")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{attrs:{class:"token punctuation"}},[a._v('"')]),a._v("http://sitewhere.io/schema/sitewhere/microservice/web-rest"),s("span",{attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n\t"),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[a._v("xsi:")]),a._v("schemaLocation")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{attrs:{class:"token punctuation"}},[a._v('"')]),a._v("\n           http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.1.xsd\n           http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-3.1.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/common http://sitewhere.io/schema/sitewhere/microservice/common/current/microservice-common.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/web-rest http://sitewhere.io/schema/sitewhere/microservice/web-rest/current/web-rest.xsd"),s("span",{attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n\n\t"),s("span",{attrs:{class:"token comment"}},[a._v("\x3c!-- Web/REST Configuration --\x3e")]),a._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{attrs:{class:"token namespace"}},[a._v("web:")]),a._v("web-rest")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("</")]),a._v("beans")]),s("span",{attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])])}],!1,null,null,null);n.options.__file="web-rest.md";e.default=n.exports}}]);