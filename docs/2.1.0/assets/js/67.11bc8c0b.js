(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{325:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("Seo"),t._v(" "),a("p",[t._v("El microservicio de conectores de salida multitenant ingiere datos del tópico Kafka que\ncontienen eventos preprocesados y permite que los datos de eventos se envíen a otros puntos\nde integración de forma asíncrona. Cada conector de salida es un consumidor de Kafka que\ntiene su propio puntero en el tópico de eventos, por lo que el sistema no está bloqueado por\nconectores que ocasionalmente se procesan a velocidades más lentas que el resto del sistema.\nLos conectores están disponibles para casos de uso común, como reenviar eventos a un tópico\nMQTT conocido o eventos de indexación en Apache Solr.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[a("a",{attrs:{href:"http://sitewhere.io/schema/sitewhere/microservice/outbound-connectors/current/outbound-connectors.xsd",target:"_blank",rel:"noopener noreferrer"}},[t._v("Outbound Connectors Configuration XML Schema"),a("OutboundLink")],1)]),t._v(" "),t._m(4),t._v(" "),t._m(5)],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"outbound-connectors-microservice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outbound-connectors-microservice","aria-hidden":"true"}},[this._v("#")]),this._v(" Outbound Connectors Microservice")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"dependencias-del-microservicio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dependencias-del-microservicio","aria-hidden":"true"}},[this._v("#")]),this._v(" Dependencias del Microservicio")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("strong",[t._v("Instance Management")]),t._v(" - Requerido para arrancar inicialmente los datos de Zookeeper.")]),t._v(" "),a("li",[a("strong",[t._v("Device Management")]),t._v(" - Proporcionado como API para que los conectores salientes utilicen.")]),t._v(" "),a("li",[a("strong",[t._v("Event Management")]),t._v(" - Proporcionado como API para que los conectores salientes utilicen.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"esquema-de-configuracion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#esquema-de-configuracion","aria-hidden":"true"}},[this._v("#")]),this._v(" Esquema de Configuración")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"configuracion-de-ejemplo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuracion-de-ejemplo","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuración de Ejemplo")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("beans")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("xmlns")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/beans"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),a("span",{attrs:{class:"token attr-name"}},[a("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("sw")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sitewhere.io/schema/sitewhere/microservice/common"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),a("span",{attrs:{class:"token attr-name"}},[a("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("xsi")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/2001/XMLSchema-instance"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[a("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("context")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/context"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),a("span",{attrs:{class:"token attr-name"}},[a("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("op")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sitewhere.io/schema/sitewhere/microservice/outbound-connectors"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),a("span",{attrs:{class:"token attr-name"}},[a("span",{attrs:{class:"token namespace"}},[t._v("xsi:")]),t._v("schemaLocation")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("\n           http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.1.xsd\n           http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-3.1.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/common http://sitewhere.io/schema/sitewhere/microservice/common/current/microservice-common.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/outbound-connectors http://sitewhere.io/schema/sitewhere/microservice/outbound-connectors/current/outbound-connectors.xsd"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Allow property placeholder substitution --\x3e")]),t._v("\n\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{attrs:{class:"token namespace"}},[t._v("context:")]),t._v("property-placeholder")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n\t"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Outbound Connectors --\x3e")]),t._v("\n\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{attrs:{class:"token namespace"}},[t._v("op:")]),t._v("outbound-connectors")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t\t"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Send events via MQTT --\x3e")]),t._v("\n\t\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{attrs:{class:"token namespace"}},[t._v("op:")]),t._v("mqtt-connector")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("connectorId")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mqtt1"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token attr-name"}},[t._v("hostname")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${mqtt.host:localhost}"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("port")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${mqtt.port:1883}"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("topic")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("SiteWhere/output"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),a("span",{attrs:{class:"token namespace"}},[t._v("op:")]),t._v("outbound-connectors")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("beans")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="outbound-connectors.md";s.default=e.exports}}]);