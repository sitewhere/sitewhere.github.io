(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{198:function(t,e,a){"use strict";a.r(e);var s=a(1),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("Seo"),t._v(" "),a("MicroserviceBadge",{attrs:{text:"Multitenant Microservice",type:"multitenant"}}),t._v(" "),a("p",[t._v('The event management microservice provides the core APIs and data persistence\nfor managing device events (locations, measurements, alerts, command invocations, etc) for\neach tenant in a SiteWhere instance. The device event model is initially populated based on\nthe scripts included in the tenant template used when creating the tenant. For instance, the\n"Construction" template populates example location, measurement and alert data relevant to\nmachines at a construction site. If using the "Empty" template, no event management data\nwill be populated.')]),t._v(" "),t._m(1),t._v(" "),a("table",[t._m(2),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("router-link",{attrs:{to:"./../instance-management/"}},[t._v("Instance Management")])],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Required to initially bootstrap Zookeeper data.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("router-link",{attrs:{to:"./../device-management/"}},[t._v("Device Management")])],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Used to look up device assignment information.")])])])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("The following REST APIs are served by the "),a("router-link",{attrs:{to:"./../web-rest/"}},[t._v("Web/REST microservice")]),t._v(" backed by the event\nmanagement microservice.")],1),t._v(" "),a("table",[t._m(5),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"http://sitewhere.io/docs/2.1.0/api2/#tag/areas",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("Area APIs")]),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("REST API methods for events associated with areas.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"http://sitewhere.io/docs/2.1.0/api2/#tag/customers",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("Customer APIs")]),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("REST API methods for events associated with customers.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"http://sitewhere.io/docs/2.1.0/api2/#tag/assignments",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("Device Assignment APIs")]),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("REST API methods for events associated with device assignments.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"http://sitewhere.io/docs/2.1.0/api2/#tag/device-events",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("Event APIs")]),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("REST API methods for managing device events.")])])])]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("The event management microservice includes a gRPC server which listens on a dedicated port\n(9000) and offers high performance access to the event management APIs. In the default\nconfiguration, the port is only accessible to the other microservices. The event management\nports may be exposed via load balancer by executing the following Helm command:")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("Java stubs are available for accessing the gRPC event management APIs. The stubs\nmay be included by using the following:")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/sitewhere/sitewhere-grpc-api",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("https://github.com/sitewhere/sitewhere-grpc-api")]),a("OutboundLink")],1)]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),a("p",[a("a",{attrs:{href:"https://sitewhere.io/schema/sitewhere/microservice/event-management/current/event-management.xsd",target:"_blank",rel:"noopener noreferrer"}},[t._v("Event Management Configuration XML Schema"),a("OutboundLink")],1)]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),a("p",[t._v("The following Kafka topics are used to interact with the event processing pipeline.\nFor multitenant microservices, topic names are specific to the tenant whose data\nthey contain and have a standardized format as shown below:")]),t._v(" "),a("MicroserviceBadge",{attrs:{text:"Product Id",type:"multitenant"}}),t._v(". "),a("MicroserviceBadge",{attrs:{text:"Instance Id",type:"multitenant"}}),t._v(". tenant . "),a("MicroserviceBadge",{attrs:{text:"Tenant UUID",type:"multitenant"}}),t._v(". "),a("MicroserviceBadge",{attrs:{text:"Topic Name",type:"multitenant"}}),t._v(" "),a("p",[t._v("For example, a valid topic name might be:")]),t._v(" "),t._m(19),t._v(" "),t._m(20)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"event-management-microservice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event-management-microservice","aria-hidden":"true"}},[this._v("#")]),this._v(" Event Management Microservice")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"microservice-dependencies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#microservice-dependencies","aria-hidden":"true"}},[this._v("#")]),this._v(" Microservice Dependencies")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[this._v("Microservice")]),this._v(" "),e("th",{staticStyle:{"text-align":"left"}},[this._v("Dependency")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"available-apis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#available-apis","aria-hidden":"true"}},[this._v("#")]),this._v(" Available APIs")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"rest-apis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rest-apis","aria-hidden":"true"}},[this._v("#")]),this._v(" REST APIs")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[this._v("API")]),this._v(" "),e("th",{staticStyle:{"text-align":"left"}},[this._v("Description")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"grpc-apis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grpc-apis","aria-hidden":"true"}},[this._v("#")]),this._v(" gRPC APIs")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("helm upgrade -set event_management.service.type=LoadBalancer")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"grpc-clients"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grpc-clients","aria-hidden":"true"}},[this._v("#")]),this._v(" gRPC Clients")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"gradle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gradle","aria-hidden":"true"}},[this._v("#")]),this._v(" Gradle")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[t._v("compile group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'com.sitewhere'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sitewhere-grpc-event-management'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2.0.4'")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"maven"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maven","aria-hidden":"true"}},[this._v("#")]),this._v(" Maven")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.sitewhere"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("sitewhere-grpc-event-management"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.0.4"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("See the following repository for\nthe "),e("code",[this._v("proto")]),this._v(" definitions if bindings other than Java are needed:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"configuration-schema"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-schema","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration Schema")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"example-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Example Configuration")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("beans")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("xmlns")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/beans"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("ds")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sitewhere.io/schema/sitewhere/microservice/common/datastore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("xsi")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/2001/XMLSchema-instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("context")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("em")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sitewhere.io/schema/sitewhere/microservice/event-management"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xsi:")]),t._v("schemaLocation")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("\n           http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.1.xsd\n           http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-3.1.xsd\n           http://www.springframework.org/schema/security http://www.springframework.org/schema/security/spring-security-3.0.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/common/datastore http://sitewhere.io/schema/sitewhere/microservice/common/current/datastore-common.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/event-management http://sitewhere.io/schema/sitewhere/microservice/event-management/current/event-management.xsd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Allow property placeholder substitution --\x3e")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("context:")]),t._v("property-placeholder")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Event Management Configuration --\x3e")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("em:")]),t._v("event-management")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Use global MongoDB tenant configuration --\x3e")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ds:")]),t._v("event-management-datastore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ds:")]),t._v("mongodb-datastore-reference")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tenant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ds:")]),t._v("event-management-datastore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("em:")]),t._v("event-management")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("beans")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"kafka-topics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kafka-topics","aria-hidden":"true"}},[this._v("#")]),this._v(" Kafka Topics")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("sitewhere.sitewhere1.tenant.53daebb2-8b54-4031-a4b9-29e3fc04b4be.inbound-persisted-events")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Topic Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Relation")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Content")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("inbound-persisted-events")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Producer")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Forwards events to consumers after they have been persisted.")])])])])}],!1,null,null,null);n.options.__file="README.md";e.default=n.exports}}]);