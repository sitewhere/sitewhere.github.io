(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{188:function(t,a,e){"use strict";e.r(a);var s=e(1),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("Seo"),t._v(" "),t._m(0),t._v(" "),e("MicroserviceBadge",{attrs:{text:"Multitenant Microservice",type:"multitenant"}}),t._v(" "),e("p",[t._v("The device state microservice ingests data from the Kafka topic containing\npre-processed events and uses the event data to update device state. The device state\nmodel persists the most recent location, measurements, and alerts for each device as\nwell as information about when the last interaction with the device occurred.")]),t._v(" "),e("p",[t._v("Each tenant engine has a device presence manager that is responsible for determining\nwhen devices are no longer present and firing state change events that can be used to\ntrigger actions based on a device becoming present or not present.")]),t._v(" "),t._m(1),t._v(" "),e("table",[t._m(2),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[e("router-link",{attrs:{to:"./instance-management.html"}},[t._v("Instance Management")])],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Required to initially bootstrap Zookeeper data.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[e("router-link",{attrs:{to:"./device-management.html"}},[t._v("Device Management")])],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Used to locate devices and assignments for state processing.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[e("router-link",{attrs:{to:"./event-management.html"}},[t._v("Event Management")])],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Used to record device state changes for presence management.")])])])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("The following REST APIs are served by the "),e("router-link",{attrs:{to:"./web-rest.html"}},[t._v("Web/REST microservice")]),t._v(" backed by the device\nstate microservice.")],1),t._v(" "),e("table",[t._m(5),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"http://sitewhere.io/docs/2.0.0/api2/#tag/device-states",target:"_blank",rel:"noopener noreferrer"}},[e("strong",[t._v("Device State APIs")]),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("REST API methods for managing device states.")])])])]),t._v(" "),t._m(6),t._v(" "),e("p",[t._v("The device state microservice includes a gRPC server which listens on a dedicated port\n(9000) and offers high performance access to the device state APIs. In the default\nconfiguration, the port is only accessible to the other microservices. The device state\nports may be exposed via load balancer by executing the following Helm command:")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),e("p",[t._v("Java stubs are available for accessing the gRPC device state APIs. The stubs\nmay be included by using the following:")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/sitewhere/sitewhere-grpc-api",target:"_blank",rel:"noopener noreferrer"}},[e("strong",[t._v("https://github.com/sitewhere/sitewhere-grpc-api")]),e("OutboundLink")],1)]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),e("p",[e("a",{attrs:{href:"http://sitewhere.io/schema/sitewhere/microservice/device-state/current/device-state.xsd",target:"_blank",rel:"noopener noreferrer"}},[t._v("Device State Configuration XML Schema"),e("OutboundLink")],1)]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),e("p",[t._v("The following Kafka topics are used to interact with the event processing pipeline.\nFor multitenant microservices, topic names are specific to the tenant whose data\nthey contain and have a standardized format as shown below:")]),t._v(" "),e("MicroserviceBadge",{attrs:{text:"Product Id",type:"multitenant"}}),t._v(". "),e("MicroserviceBadge",{attrs:{text:"Instance Id",type:"multitenant"}}),t._v(". tenant . "),e("MicroserviceBadge",{attrs:{text:"Tenant UUID",type:"multitenant"}}),t._v(". "),e("MicroserviceBadge",{attrs:{text:"Topic Name",type:"multitenant"}}),t._v(" "),e("p",[t._v("For example, a valid topic name might be:")]),t._v(" "),t._m(19),t._v(" "),t._m(20)],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"device-state-microservice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#device-state-microservice","aria-hidden":"true"}},[this._v("#")]),this._v(" Device State Microservice")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"microservice-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#microservice-dependencies","aria-hidden":"true"}},[this._v("#")]),this._v(" Microservice Dependencies")])},function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[this._v("Microservice")]),this._v(" "),a("th",{staticStyle:{"text-align":"left"}},[this._v("Dependency")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"available-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available-apis","aria-hidden":"true"}},[this._v("#")]),this._v(" Available APIs")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"rest-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rest-apis","aria-hidden":"true"}},[this._v("#")]),this._v(" REST APIs")])},function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[this._v("API")]),this._v(" "),a("th",{staticStyle:{"text-align":"left"}},[this._v("Description")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"grpc-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grpc-apis","aria-hidden":"true"}},[this._v("#")]),this._v(" gRPC APIs")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("helm upgrade -set device_state.service.type=LoadBalancer")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"grpc-clients"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grpc-clients","aria-hidden":"true"}},[this._v("#")]),this._v(" gRPC Clients")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"gradle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gradle","aria-hidden":"true"}},[this._v("#")]),this._v(" Gradle")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-groovy extra-class"},[e("pre",{pre:!0,attrs:{class:"language-groovy"}},[e("code",[t._v("compile group"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'com.sitewhere'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'sitewhere-grpc-device-state'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" version"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'2.0.1'")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"maven"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maven","aria-hidden":"true"}},[this._v("#")]),this._v(" Maven")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.sitewhere"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("sitewhere-grpc-device-state"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.0.1"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("See the following repository for\nthe "),a("code",[this._v("proto")]),this._v(" definitions if bindings other than Java are needed:")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"configuration-schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-schema","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration Schema")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"example-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Example Configuration")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("beans")]),t._v(" "),e("span",{attrs:{class:"token attr-name"}},[t._v("xmlns")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/beans"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),e("span",{attrs:{class:"token attr-name"}},[e("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("sw")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sitewhere.io/schema/sitewhere/microservice/common"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),e("span",{attrs:{class:"token attr-name"}},[e("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("xsi")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/2001/XMLSchema-instance"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),e("span",{attrs:{class:"token attr-name"}},[e("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("context")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/context"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),e("span",{attrs:{class:"token attr-name"}},[e("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("ds")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sitewhere.io/schema/sitewhere/microservice/device-state"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),e("span",{attrs:{class:"token attr-name"}},[e("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("data")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sitewhere.io/schema/sitewhere/microservice/common/datastore"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),e("span",{attrs:{class:"token attr-name"}},[e("span",{attrs:{class:"token namespace"}},[t._v("xsi:")]),t._v("schemaLocation")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("\n           http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.1.xsd\n           http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-3.1.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/common http://sitewhere.io/schema/sitewhere/microservice/common/current/microservice-common.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/common/datastore http://sitewhere.io/schema/sitewhere/microservice/common/current/datastore-common.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/device-state http://sitewhere.io/schema/sitewhere/microservice/device-state/current/device-state.xsd"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),e("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Allow property placeholder substitution --\x3e")]),t._v("\n\t"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{attrs:{class:"token namespace"}},[t._v("context:")]),t._v("property-placeholder")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n\t"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{attrs:{class:"token namespace"}},[t._v("ds:")]),t._v("device-state")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t\t"),e("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Use global MongoDB tenant configuration --\x3e")]),t._v("\n\t\t"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{attrs:{class:"token namespace"}},[t._v("data:")]),t._v("device-state-datastore")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{attrs:{class:"token namespace"}},[t._v("data:")]),t._v("mongodb-datastore-reference")]),t._v("\n\t\t\t\t"),e("span",{attrs:{class:"token attr-name"}},[t._v("id")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tenant"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\t"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),e("span",{attrs:{class:"token namespace"}},[t._v("data:")]),t._v("device-state-datastore")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t\t"),e("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Configure presence manager --\x3e")]),t._v("\n\t\t"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{attrs:{class:"token namespace"}},[t._v("ds:")]),t._v("presence-manager")]),t._v(" "),e("span",{attrs:{class:"token attr-name"}},[t._v("checkInterval")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("10m"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{attrs:{class:"token attr-name"}},[t._v("presenceMissingInterval")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("8h"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n\t"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),e("span",{attrs:{class:"token namespace"}},[t._v("ds:")]),t._v("device-state")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("beans")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"kafka-topics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kafka-topics","aria-hidden":"true"}},[this._v("#")]),this._v(" Kafka Topics")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("em",[this._v("sitewhere.sitewhere1.tenant.53daebb2-8b54-4031-a4b9-29e3fc04b4be.inbound-enriched-events")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Topic Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Relation")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Content")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("inbound-enriched-events")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Consumer")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Enriched events used for state analysis.")])])])])}],!1,null,null,null);n.options.__file="device-state.md";a.default=n.exports}}]);