(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{222:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v('El microservicio de administración de horarios multitenant proporciona las API principales\ny la persistencia de datos para administrar los cronogramas de cada inquilino en una instancia\nde SiteWhere. El modelo de programación se completa inicialmente en función de los scripts\nincluidos en la plantilla del arrendatario que se utiliza al crear el arrendatario. La mayoría\nde las plantillas de inquilinos incluyen algunos ejemplos de horarios Si se usa la plantilla\n"Vacía", no se completarán los datos de administración de la programación.')]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[s("a",{attrs:{href:"http://sitewhere.io/schema/sitewhere/microservice/schedule-management/current/schedule-management.xsd",target:"_blank",rel:"noopener noreferrer"}},[t._v("Schedule Management Configuration XML Schema"),s("OutboundLink")],1)]),t._v(" "),t._m(4),t._v(" "),t._m(5)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"schedule-management-microservice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schedule-management-microservice","aria-hidden":"true"}},[this._v("#")]),this._v(" Schedule Management Microservice")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"dependencias-del-microservicio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependencias-del-microservicio","aria-hidden":"true"}},[this._v("#")]),this._v(" Dependencias del Microservicio")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("strong",[this._v("Instance Management")]),this._v(" - Requerido para arrancar inicialmente los datos de Zookeeper.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"esquema-de-configuracion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esquema-de-configuracion","aria-hidden":"true"}},[this._v("#")]),this._v(" Esquema de Configuración")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"configuracion-de-ejemplo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuracion-de-ejemplo","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuración de Ejemplo")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("beans")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("xmlns")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/beans"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("ds")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sitewhere.io/schema/sitewhere/microservice/common/datastore"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("xsi")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/2001/XMLSchema-instance"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("context")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/context"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("sm")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sitewhere.io/schema/sitewhere/microservice/schedule-management"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xsi:")]),t._v("schemaLocation")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("\n           http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.1.xsd\n           http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-3.1.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/common/datastore http://sitewhere.io/schema/sitewhere/microservice/common/current/datastore-common.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/schedule-management http://sitewhere.io/schema/sitewhere/microservice/schedule-management/current/schedule-management.xsd"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Allow property placeholder substitution --\x3e")]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("context:")]),t._v("property-placeholder")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n\t"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Schedule Management --\x3e")]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("sm:")]),t._v("schedule-management")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t\t"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Use global MongoDB tenant configuration --\x3e")]),t._v("\n\t\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("ds:")]),t._v("device-management-datastore")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("ds:")]),t._v("mongodb-datastore-reference")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tenant"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{attrs:{class:"token namespace"}},[t._v("ds:")]),t._v("device-management-datastore")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{attrs:{class:"token namespace"}},[t._v("sm:")]),t._v("schedule-management")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("beans")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="schedule-management.md";a.default=e.exports}}]);