(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{268:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("Seo"),t._v(" "),a("p",[t._v("El microservicio de búsqueda de eventos multitenant proporciona una API para buscar fuentes\nde datos externas que contienen información de eventos de SiteWhere en un formato no estándar.\nPor ejemplo, cuando los eventos se indexan en Apache Solr a través de un conector de salida,\nes posible que sea necesario consultar directamente a Solr para realizar consultas complejas\nque no pueden ser admitidas genéricamente a través de las API de SiteWhere. Los motores de los\ninquilinos para este microservicio pueden configurarse para realizar consultas de proxy al\nservicio subyacente y devolver los resultados al microservicio Web/REST para su uso por\nclientes externos.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[a("a",{attrs:{href:"http://sitewhere.io/schema/sitewhere/microservice/event-search/current/event-search.xsd",target:"_blank",rel:"noopener noreferrer"}},[t._v("Event Search Configuration XML Schema"),a("OutboundLink")],1)]),t._v(" "),t._m(4),t._v(" "),t._m(5)],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"event-search-microservice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-search-microservice","aria-hidden":"true"}},[this._v("#")]),this._v(" Event Search Microservice")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"dependencias-del-microservicio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dependencias-del-microservicio","aria-hidden":"true"}},[this._v("#")]),this._v(" Dependencias del Microservicio")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("strong",[this._v("Instance Management")]),this._v(" - Requerido para arrancar inicialmente los datos de Zookeeper.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"esquema-de-configuracion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#esquema-de-configuracion","aria-hidden":"true"}},[this._v("#")]),this._v(" Esquema de Configuración")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"configuracion-de-ejemplo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuracion-de-ejemplo","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuración de Ejemplo")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("beans")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("xmlns")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/beans"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),a("span",{attrs:{class:"token attr-name"}},[a("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("sw")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sitewhere.io/schema/sitewhere/microservice/common"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),a("span",{attrs:{class:"token attr-name"}},[a("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("xsi")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/2001/XMLSchema-instance"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),a("span",{attrs:{class:"token attr-name"}},[a("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("context")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/context"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),a("span",{attrs:{class:"token attr-name"}},[a("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("es")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sitewhere.io/schema/sitewhere/microservice/event-search"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),a("span",{attrs:{class:"token attr-name"}},[a("span",{attrs:{class:"token namespace"}},[t._v("xsi:")]),t._v("schemaLocation")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("\n           http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.1.xsd\n           http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-3.1.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/common http://sitewhere.io/schema/sitewhere/microservice/common/current/microservice-common.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/event-search http://sitewhere.io/schema/sitewhere/microservice/event-search/current/event-search.xsd"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Allow property placeholder substitution --\x3e")]),t._v("\n\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{attrs:{class:"token namespace"}},[t._v("context:")]),t._v("property-placeholder")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n\t"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Event Search --\x3e")]),t._v("\n\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{attrs:{class:"token namespace"}},[t._v("es:")]),t._v("event-search")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t\t"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- List of available search providers --\x3e")]),t._v("\n\t\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{attrs:{class:"token namespace"}},[t._v("es:")]),t._v("search-providers")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),a("span",{attrs:{class:"token namespace"}},[t._v("es:")]),t._v("search-providers")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),a("span",{attrs:{class:"token namespace"}},[t._v("es:")]),t._v("event-search")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("beans")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="event-search.md";s.default=n.exports}}]);