(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{231:function(t,a,e){"use strict";e.r(a);var s=e(1),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("Seo"),t._v(" "),e("MicroserviceBadge",{attrs:{text:"Multitenant Microservice",type:"multitenant"}}),t._v(" "),e("p",[t._v("The command delivery microservice ingests data from the Kafka topic containing\npre-processed events and, for command invocations, handles command processing. This includes\nusing configured routing constraints and command destinations that indicate how the command\nis to be encoded, which transport is to be used, and where the command is to be delivered.")]),t._v(" "),t._m(1),t._v(" "),e("table",[t._m(2),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[e("router-link",{attrs:{to:"./../instance-management/"}},[t._v("Instance Management")])],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Required to initially bootstrap Zookeeper data.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[e("router-link",{attrs:{to:"./../device-management/"}},[t._v("Device Management")])],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Used to locating devices and assignments for command delivery.")])])])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("p",[e("a",{attrs:{href:"https://sitewhere.io/schema/sitewhere/microservice/command-delivery/current/command-delivery.xsd",target:"_blank",rel:"noopener noreferrer"}},[t._v("Command Delivery Configuration XML Schema"),e("OutboundLink")],1)]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),e("p",[t._v("The following Kafka topics are used to interact with the event processing pipeline.\nFor multitenant microservices, topic names are specific to the tenant whose data\nthey contain and have a standardized format as shown below:")]),t._v(" "),e("MicroserviceBadge",{attrs:{text:"Product Id",type:"multitenant"}}),t._v(". "),e("MicroserviceBadge",{attrs:{text:"Instance Id",type:"multitenant"}}),t._v(". tenant . "),e("MicroserviceBadge",{attrs:{text:"Tenant UUID",type:"multitenant"}}),t._v(". "),e("MicroserviceBadge",{attrs:{text:"Topic Name",type:"multitenant"}}),t._v(" "),e("p",[t._v("For example, a valid topic name might be:")]),t._v(" "),t._m(8),t._v(" "),t._m(9)],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"command-delivery-microservice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-delivery-microservice","aria-hidden":"true"}},[this._v("#")]),this._v(" Command Delivery Microservice")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"microservice-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#microservice-dependencies","aria-hidden":"true"}},[this._v("#")]),this._v(" Microservice Dependencies")])},function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[this._v("Microservice")]),this._v(" "),a("th",{staticStyle:{"text-align":"left"}},[this._v("Dependency")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"configuration-schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-schema","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration Schema")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"example-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Example Configuration")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("beans")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("xmlns")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/beans"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("xsi")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/2001/XMLSchema-instance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("context")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("cd")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sitewhere.io/schema/sitewhere/microservice/command-delivery"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xsi:")]),t._v("schemaLocation")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("\n           http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.1.xsd\n           http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-3.1.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/command-delivery http://sitewhere.io/schema/sitewhere/microservice/command-delivery/current/command-delivery.xsd"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Allow property placeholder substitution --\x3e")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("context:")]),t._v("property-placeholder")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Command delivery --\x3e")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("cd:")]),t._v("command-delivery")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Default router --\x3e")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("cd:")]),t._v("device-type-mapping-router")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("defaultDestination")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("default"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("cd:")]),t._v("device-type-mapping-router")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Command destinations --\x3e")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("cd:")]),t._v("mqtt-command-destination")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("destinationId")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("default"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("hostname")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${mqtt.host:localhost}"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("port")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${mqtt.port:1883}"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("cd:")]),t._v("mqtt-command-destination")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("cd:")]),t._v("command-delivery")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("beans")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"kafka-topics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kafka-topics","aria-hidden":"true"}},[this._v("#")]),this._v(" Kafka Topics")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("em",[this._v("sitewhere.sitewhere1.tenant.53daebb2-8b54-4031-a4b9-29e3fc04b4be.inbound-enriched-command-invocations")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Topic Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Relation")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Content")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("inbound-enriched-command-invocations")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Consumer")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Enriched command invocation events to process.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("undelivered-command-invocations")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Producer")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Command invocations that could not be delivered.")])])])])}],!1,null,null,null);n.options.__file="README.md";a.default=n.exports}}]);