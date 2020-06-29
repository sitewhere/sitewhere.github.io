(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{276:function(t,a,e){"use strict";e.r(a);var s=e(1),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("Seo"),t._v(" "),e("p",[t._v("El microservicio de estado de dispositivo multitenant ingiere datos del tópico de Kafka\nque contiene eventos preprocesados y utiliza los datos de eventos para actualizar el\nestado del dispositivo. El modelo de estado del dispositivo conserva la ubicación,\nlas mediciones y las alertas más recientes para cada dispositivo, así como la información\nsobre cuándo ocurrió la última interacción con el dispositivo.")]),t._v(" "),e("p",[t._v("Cada motor inquilino tiene un administrador de presencia de dispositivo que es responsable\nde determinar cuándo ya no están presentes los dispositivos y de activar eventos de cambio\nde estado que pueden usarse para desencadenar acciones basadas en la presencia o ausencia\nde un dispositivo.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("p",[e("a",{attrs:{href:"http://sitewhere.io/schema/sitewhere/microservice/device-state/current/device-state.xsd",target:"_blank",rel:"noopener noreferrer"}},[t._v("Device State Configuration XML Schema"),e("OutboundLink")],1)]),t._v(" "),t._m(4),t._v(" "),t._m(5)],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"device-state-microservice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#device-state-microservice","aria-hidden":"true"}},[this._v("#")]),this._v(" Device State Microservice")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"dependencias-del-microservicio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependencias-del-microservicio","aria-hidden":"true"}},[this._v("#")]),this._v(" Dependencias del Microservicio")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",[e("li",[e("strong",[t._v("Instance Management")]),t._v(" - Requerido para arrancar inicialmente los datos de Zookeeper.")]),t._v(" "),e("li",[e("strong",[t._v("Device Management")]),t._v(" - Se utiliza para localizar dispositivos y asignaciones para procesamiento de estado.")]),t._v(" "),e("li",[e("strong",[t._v("Event Management")]),t._v(" - Se utiliza para registrar los cambios de estado del dispositivo para la gestión de presencia.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"esquema-de-configuracion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esquema-de-configuracion","aria-hidden":"true"}},[this._v("#")]),this._v(" Esquema de Configuración")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"configuracion-de-ejemplo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuracion-de-ejemplo","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuración de Ejemplo")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("beans")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("xmlns")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/beans"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("sw")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sitewhere.io/schema/sitewhere/microservice/common"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("xsi")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/2001/XMLSchema-instance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("context")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("ds")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sitewhere.io/schema/sitewhere/microservice/device-state"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("data")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sitewhere.io/schema/sitewhere/microservice/common/datastore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xsi:")]),t._v("schemaLocation")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("\n           http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.1.xsd\n           http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-3.1.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/common http://sitewhere.io/schema/sitewhere/microservice/common/current/microservice-common.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/common/datastore http://sitewhere.io/schema/sitewhere/microservice/common/current/datastore-common.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/device-state http://sitewhere.io/schema/sitewhere/microservice/device-state/current/device-state.xsd"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Allow property placeholder substitution --\x3e")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("context:")]),t._v("property-placeholder")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ds:")]),t._v("device-state")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Use global MongoDB tenant configuration --\x3e")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("data:")]),t._v("device-state-datastore")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("data:")]),t._v("mongodb-datastore-reference")]),t._v("\n\t\t\t\t"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tenant"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("data:")]),t._v("device-state-datastore")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Configure presence manager --\x3e")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ds:")]),t._v("presence-manager")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("checkInterval")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("10m"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("presenceMissingInterval")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("8h"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ds:")]),t._v("device-state")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("beans")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="device-state.md";a.default=n.exports}}]);