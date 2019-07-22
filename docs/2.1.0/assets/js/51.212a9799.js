(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{244:function(s,t,e){"use strict";e.r(t);var a=e(1),n=Object(a.a)({},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"content"},[s._m(0),s._v(" "),e("Seo"),s._v(" "),e("p",[s._v("El microservicio de procesamiento entrante multitenant ingiere datos que fueron producidos\npor el microservicio de orígenes de eventos (después de que se haya completado la descodificación\ny la deduplicación). Este microservicio valida los datos entrantes al interactuar con el\nmicroservicio de administración de dispositivos para verificar que el evento entrante se relaciona\ncon un dispositivo registrado. La carga útil entrante se enriquece con los datos del\ndispositivo/asignación, por lo que la información se puede usar en los siguientes pasos de\nprocesamiento sin la necesidad de buscarla nuevamente. Si el dispositivo no está registrado,\nla carga útil se pasa al microservicio de registro del dispositivo para un procesamiento adicional.\nSi el dispositivo se registra como resultado, el evento se envía a un tema de reprocesamiento para\nque pueda procesarse nuevamente con el dispositivo recién registrado.")]),s._v(" "),e("p",[s._v("Una vez que el evento de entrada se ha enriquecido, se reenvía al microservicio de administración\nde eventos para su persistencia. El evento persistente finalmente se devuelve (asincrónicamente)\nal procesamiento de entrada, donde se agrega a un tema para los eventos preprocesados que, a su vez,\npueden ser consumidos por otros microservicios, como el procesamiento de reglas y los conectores de\nsalida.")]),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),e("p",[e("a",{attrs:{href:"http://sitewhere.io/schema/sitewhere/microservice/inbound-processing/current/inbound-processing.xsd",target:"_blank",rel:"noopener noreferrer"}},[s._v("Inbound Processing Configuration XML Schema"),e("OutboundLink")],1)]),s._v(" "),s._m(4),s._v(" "),s._m(5)],1)},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"inbound-processing-microservice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inbound-processing-microservice","aria-hidden":"true"}},[this._v("#")]),this._v(" 📖 Inbound Processing Microservice")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"dependencias-del-microservicio"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dependencias-del-microservicio","aria-hidden":"true"}},[this._v("#")]),this._v(" Dependencias del Microservicio")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ul",[e("li",[e("strong",[s._v("Instance Management")]),s._v(" - Requerido para arrancar inicialmente los datos de Zookeeper.")]),s._v(" "),e("li",[e("strong",[s._v("Device Management")]),s._v(" - Se utiliza para enriquecer eventos entrantes con datos del dispositivo.")]),s._v(" "),e("li",[e("strong",[s._v("Event Management")]),s._v(" - Se utiliza para la persistencia de las cargas útiles de eventos entrantes.")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"esquema-de-configuracion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#esquema-de-configuracion","aria-hidden":"true"}},[this._v("#")]),this._v(" Esquema de Configuración")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"configuracion-de-ejemplo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuracion-de-ejemplo","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuración de Ejemplo")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{attrs:{class:"token prolog"}},[s._v('<?xml version="1.0" encoding="UTF-8"?>')]),s._v("\n"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[s._v("<")]),s._v("beans")]),s._v(" "),e("span",{attrs:{class:"token attr-name"}},[s._v("xmlns")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[s._v("=")]),e("span",{attrs:{class:"token punctuation"}},[s._v('"')]),s._v("http://www.springframework.org/schema/beans"),e("span",{attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n\t"),e("span",{attrs:{class:"token attr-name"}},[e("span",{attrs:{class:"token namespace"}},[s._v("xmlns:")]),s._v("sw")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[s._v("=")]),e("span",{attrs:{class:"token punctuation"}},[s._v('"')]),s._v("http://sitewhere.io/schema/sitewhere/microservice/common"),e("span",{attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n\t"),e("span",{attrs:{class:"token attr-name"}},[e("span",{attrs:{class:"token namespace"}},[s._v("xmlns:")]),s._v("xsi")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[s._v("=")]),e("span",{attrs:{class:"token punctuation"}},[s._v('"')]),s._v("http://www.w3.org/2001/XMLSchema-instance"),e("span",{attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),e("span",{attrs:{class:"token attr-name"}},[e("span",{attrs:{class:"token namespace"}},[s._v("xmlns:")]),s._v("context")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[s._v("=")]),e("span",{attrs:{class:"token punctuation"}},[s._v('"')]),s._v("http://www.springframework.org/schema/context"),e("span",{attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n\t"),e("span",{attrs:{class:"token attr-name"}},[e("span",{attrs:{class:"token namespace"}},[s._v("xmlns:")]),s._v("ip")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[s._v("=")]),e("span",{attrs:{class:"token punctuation"}},[s._v('"')]),s._v("http://sitewhere.io/schema/sitewhere/microservice/inbound-processing"),e("span",{attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n\t"),e("span",{attrs:{class:"token attr-name"}},[e("span",{attrs:{class:"token namespace"}},[s._v("xsi:")]),s._v("schemaLocation")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[s._v("=")]),e("span",{attrs:{class:"token punctuation"}},[s._v('"')]),s._v("\n           http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.1.xsd\n           http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-3.1.xsd\n           http://www.springframework.org/schema/security http://www.springframework.org/schema/security/spring-security-3.0.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/common http://sitewhere.io/schema/sitewhere/microservice/common/current/microservice-common.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/inbound-processing http://sitewhere.io/schema/sitewhere/microservice/inbound-processing/current/inbound-processing.xsd"),e("span",{attrs:{class:"token punctuation"}},[s._v('"')])]),e("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n\t"),e("span",{attrs:{class:"token comment"}},[s._v("\x3c!-- Allow property placeholder substitution --\x3e")]),s._v("\n\t"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[s._v("<")]),e("span",{attrs:{class:"token namespace"}},[s._v("context:")]),s._v("property-placeholder")]),s._v(" "),e("span",{attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n\n\t"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[s._v("<")]),e("span",{attrs:{class:"token namespace"}},[s._v("ip:")]),s._v("inbound-processing")]),s._v(" "),e("span",{attrs:{class:"token attr-name"}},[s._v("processingThreadCount")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[s._v("=")]),e("span",{attrs:{class:"token punctuation"}},[s._v('"')]),s._v("25"),e("span",{attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),e("span",{attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n\n"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[s._v("</")]),s._v("beans")]),e("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])])])}],!1,null,null,null);n.options.__file="inbound-processing.md";t.default=n.exports}}]);