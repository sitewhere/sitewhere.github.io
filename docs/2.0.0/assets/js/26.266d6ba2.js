(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{188:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v('The multitenant device management microservice provides the core APIs and data persistence\nfor managing the device model (customers, areas, device types, devices, etc.) for each tenant\nin a SiteWhere instance. The device model is initially populated based on the scripts included\nin the tenant template used when creating the tenant. For instance, the "Construction" template\nwill populate the data model with devices appropriate for a construction site. If using the\n"Empty" template, no device management data will be populated.')]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[s("a",{attrs:{href:"http://sitewhere.io/schema/sitewhere/microservice/device-management/current/device-management.xsd",target:"_blank",rel:"noopener noreferrer"}},[t._v("Device Management Configuration XML Schema"),s("OutboundLink")],1)]),t._v(" "),t._m(4),t._v(" "),t._m(5)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"device-management-microservice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#device-management-microservice","aria-hidden":"true"}},[this._v("#")]),this._v(" Device Management Microservice")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"microservice-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#microservice-dependencies","aria-hidden":"true"}},[this._v("#")]),this._v(" Microservice Dependencies")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("strong",[t._v("Instance Management")]),t._v(" - Required to initially bootstrap Zookeeper data.")]),t._v(" "),s("li",[s("strong",[t._v("Event Management")]),t._v(" - Used to create state change events on assignment updates.")]),t._v(" "),s("li",[s("strong",[t._v("Asset Management")]),t._v(" - Used to resolve asset associations for device assignments.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"configuration-schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-schema","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration Schema")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"example-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Example Configuration")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("beans")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("xmlns")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/beans"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("ds")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sitewhere.io/schema/sitewhere/microservice/common/datastore"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("xsi")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/2001/XMLSchema-instance"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("context")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/context"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("dm")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sitewhere.io/schema/sitewhere/microservice/device-management"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xsi:")]),t._v("schemaLocation")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("\n           http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.1.xsd\n           http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-3.1.xsd\n           http://www.springframework.org/schema/security http://www.springframework.org/schema/security/spring-security-3.0.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/common/datastore http://sitewhere.io/schema/sitewhere/microservice/common/current/datastore-common.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/device-management http://sitewhere.io/schema/sitewhere/microservice/device-management/current/device-management.xsd"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Allow property placeholder substitution --\x3e")]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("context:")]),t._v("property-placeholder")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n\t"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Device Management Configuration --\x3e")]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("dm:")]),t._v("device-management")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t\t"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Use global MongoDB tenant configuration --\x3e")]),t._v("\n\t\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("ds:")]),t._v("device-management-datastore")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("ds:")]),t._v("mongodb-datastore-reference")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tenant"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{attrs:{class:"token namespace"}},[t._v("ds:")]),t._v("device-management-datastore")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{attrs:{class:"token namespace"}},[t._v("dm:")]),t._v("device-management")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("beans")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="device-management.md";a.default=n.exports}}]);