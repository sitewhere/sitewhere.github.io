(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{203:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("MicroserviceBadge",{attrs:{text:"Multitenant Microservice",type:"multitenant"}}),t._v(" "),a("p",[t._v("The event sources microservice hosts tenant engines that may be configured\nto ingest data from many types of data producers. Some examples include consuming data\nfrom MQTT topics, CoAP requests, direct TCP/IP socket connections, WebSockets, REST calls\nvia push or pull models, and many other potential sources. After events are ingested,\nthey are decoded into a standardized data model and pushed to a tenant-specific Kafka\ntopic for further processing. Kafka topics are also registered for events that can not\nbe parsed or are detected as duplicates by deduplication processing.")]),t._v(" "),t._m(1),t._v(" "),a("table",[t._m(2),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("router-link",{attrs:{to:"./instance-management.html"}},[t._v("Instance Management")])],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Required to initially bootstrap Zookeeper data.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("router-link",{attrs:{to:"./device-management.html"}},[t._v("Device Management")])],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Used for event deduplication and Groovy scripting.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("router-link",{attrs:{to:"./event-management.html"}},[t._v("Event Management")])],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Used for event deduplication and Groovy scripting.")])])])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[a("a",{attrs:{href:"http://sitewhere.io/schema/sitewhere/microservice/event-sources/current/event-sources.xsd",target:"_blank",rel:"noopener noreferrer"}},[t._v("Event Sources Configuration XML Schema"),a("OutboundLink")],1)]),t._v(" "),t._m(5),t._v(" "),t._m(6)],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"event-sources-microservice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-sources-microservice","aria-hidden":"true"}},[this._v("#")]),this._v(" Event Sources Microservice")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"microservice-dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#microservice-dependencies","aria-hidden":"true"}},[this._v("#")]),this._v(" Microservice Dependencies")])},function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[this._v("Microservice")]),this._v(" "),s("th",{staticStyle:{"text-align":"left"}},[this._v("Dependency")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"configuration-schema"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration-schema","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration Schema")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"example-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Example Configuration")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("beans")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("xmlns")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/beans"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),a("span",{attrs:{class:"token attr-name"}},[a("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("sw")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sitewhere.io/schema/sitewhere/microservice/common"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),a("span",{attrs:{class:"token attr-name"}},[a("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("xsi")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/2001/XMLSchema-instance"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),a("span",{attrs:{class:"token attr-name"}},[a("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("context")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/context"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),a("span",{attrs:{class:"token attr-name"}},[a("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("es")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sitewhere.io/schema/sitewhere/microservice/event-sources"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),a("span",{attrs:{class:"token attr-name"}},[a("span",{attrs:{class:"token namespace"}},[t._v("xsi:")]),t._v("schemaLocation")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("\n           http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.1.xsd\n           http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-3.1.xsd\n           http://www.springframework.org/schema/security http://www.springframework.org/schema/security/spring-security-3.0.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/common http://sitewhere.io/schema/sitewhere/microservice/common/current/microservice-common.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/event-sources http://sitewhere.io/schema/sitewhere/microservice/event-sources/current/event-sources.xsd"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Allow property placeholder substitution --\x3e")]),t._v("\n\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{attrs:{class:"token namespace"}},[t._v("context:")]),t._v("property-placeholder")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n\t"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Event sources Configuration --\x3e")]),t._v("\n\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{attrs:{class:"token namespace"}},[t._v("es:")]),t._v("event-sources")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t\t"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Event source for protobuf messages over MQTT --\x3e")]),t._v("\n\t\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{attrs:{class:"token namespace"}},[t._v("es:")]),t._v("mqtt-event-source")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("sourceId")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("protobuf"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token attr-name"}},[t._v("numThreads")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("hostname")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${mqtt.host:localhost}"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token attr-name"}},[t._v("port")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${mqtt.port:1883}"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token attr-name"}},[t._v("topic")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("SiteWhere/${tenant.token}/input/protobuf"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{attrs:{class:"token namespace"}},[t._v("es:")]),t._v("protobuf-event-decoder")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),a("span",{attrs:{class:"token namespace"}},[t._v("es:")]),t._v("mqtt-event-source")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t\t"),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Event source for JSON device requests over MQTT --\x3e")]),t._v("\n\t\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{attrs:{class:"token namespace"}},[t._v("es:")]),t._v("mqtt-event-source")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("sourceId")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("json"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token attr-name"}},[t._v("numThreads")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("5"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("hostname")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${mqtt.host:localhost}"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token attr-name"}},[t._v("port")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${mqtt.port:1883}"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("topic")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("SiteWhere/${tenant.token}/input/json"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),a("span",{attrs:{class:"token namespace"}},[t._v("es:")]),t._v("mqtt-event-source")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),a("span",{attrs:{class:"token namespace"}},[t._v("es:")]),t._v("event-sources")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("beans")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="event-sources.md";s.default=e.exports}}]);