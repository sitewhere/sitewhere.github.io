(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{189:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("The multitenant command delivery microservice ingests data from the Kafka topic containing\npre-processed events and, for command invocations, handles command processing. This includes\nusing configured routing constraints and command destinations that indicate how the command\nis to be encoded, which transport is to be used, and where the command is to be delivered.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[s("a",{attrs:{href:"http://sitewhere.io/schema/sitewhere/microservice/command-delivery/current/command-delivery.xsd",target:"_blank",rel:"noopener noreferrer"}},[t._v("Command Delivery Configuration XML Schema"),s("OutboundLink")],1)]),t._v(" "),t._m(4),t._v(" "),t._m(5)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"command-delivery-microservice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-delivery-microservice","aria-hidden":"true"}},[this._v("#")]),this._v(" Command Delivery Microservice")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"microservice-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#microservice-dependencies","aria-hidden":"true"}},[this._v("#")]),this._v(" Microservice Dependencies")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("strong",[this._v("Instance Management")]),this._v(" - Required to initially bootstrap Zookeeper data.")]),this._v(" "),a("li",[a("strong",[this._v("Device Management")]),this._v(" - Used to locating devices and assignments for command delivery.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"configuration-schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-schema","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration Schema")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"example-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Example Configuration")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("beans")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("xmlns")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/beans"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("xsi")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/2001/XMLSchema-instance"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("context")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/context"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("cd")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sitewhere.io/schema/sitewhere/microservice/command-delivery"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xsi:")]),t._v("schemaLocation")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("\n           http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.1.xsd\n           http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-3.1.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/command-delivery http://sitewhere.io/schema/sitewhere/microservice/command-delivery/current/command-delivery.xsd"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Allow property placeholder substitution --\x3e")]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("context:")]),t._v("property-placeholder")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n\t"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Command delivery --\x3e")]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("cd:")]),t._v("command-delivery")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t\t"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Default router --\x3e")]),t._v("\n\t\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("cd:")]),t._v("device-type-mapping-router")]),t._v("\n\t\t\t"),s("span",{attrs:{class:"token attr-name"}},[t._v("defaultDestination")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("default"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{attrs:{class:"token namespace"}},[t._v("cd:")]),t._v("device-type-mapping-router")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t\t"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Command destinations --\x3e")]),t._v("\n\t\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("cd:")]),t._v("mqtt-command-destination")]),t._v("\n\t\t\t"),s("span",{attrs:{class:"token attr-name"}},[t._v("destinationId")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("default"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("hostname")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${mqtt.host:localhost}"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t\t\t"),s("span",{attrs:{class:"token attr-name"}},[t._v("port")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${mqtt.port:1883}"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{attrs:{class:"token namespace"}},[t._v("cd:")]),t._v("mqtt-command-destination")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{attrs:{class:"token namespace"}},[t._v("cd:")]),t._v("command-delivery")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("beans")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="command-delivery.md";a.default=e.exports}}]);