(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{192:function(t,e,s){"use strict";s.r(e);var a=s(1),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("Seo"),t._v(" "),s("MicroserviceBadge",{attrs:{text:"Multitenant Microservice",type:"multitenant"}}),t._v(" "),s("p",[t._v("The outbound connectors microservice ingests data from the Kafka topic containing\npre-processed events and allows the event data to be forwarded to other integration points\nasynchronously. Each outbound connector is a Kafka consumer that has its own pointer into\nthe events topic, so the system is not blocked by connectors that occasionally process at\nslower rates than the rest of the system. Connectors are available for common use cases such\nas forwarding events to a well-known MQTT topic or indexing events in Apache Solr.")]),t._v(" "),t._m(1),t._v(" "),s("table",[t._m(2),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("strong",[s("router-link",{attrs:{to:"./../instance-management/"}},[t._v("Instance Management")])],1)]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Required to initially bootstrap Zookeeper data.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("strong",[s("router-link",{attrs:{to:"./../device-management/"}},[t._v("Device Management")])],1)]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Provided as API for outbound connectors to use.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("strong",[s("router-link",{attrs:{to:"./../event-management/"}},[t._v("Event Management")])],1)]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Provided as API for outbound connectors to use.")])])])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[s("a",{attrs:{href:"https://sitewhere.io/schema/sitewhere/microservice/outbound-connectors/current/outbound-connectors.xsd",target:"_blank",rel:"noopener noreferrer"}},[t._v("Outbound Connectors Configuration XML Schema"),s("OutboundLink")],1)]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),s("p",[t._v("The following Kafka topics are used to interact with the event processing pipeline.\nFor multitenant microservices, topic names are specific to the tenant whose data\nthey contain and have a standardized format as shown below:")]),t._v(" "),s("MicroserviceBadge",{attrs:{text:"Product Id",type:"multitenant"}}),t._v(". "),s("MicroserviceBadge",{attrs:{text:"Instance Id",type:"multitenant"}}),t._v(". tenant . "),s("MicroserviceBadge",{attrs:{text:"Tenant UUID",type:"multitenant"}}),t._v(". "),s("MicroserviceBadge",{attrs:{text:"Topic Name",type:"multitenant"}}),t._v(" "),s("p",[t._v("For example, a valid topic name might be:")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"outbound-connectors-microservice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#outbound-connectors-microservice","aria-hidden":"true"}},[this._v("#")]),this._v(" Outbound Connectors Microservice")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"microservice-dependencies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#microservice-dependencies","aria-hidden":"true"}},[this._v("#")]),this._v(" Microservice Dependencies")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[this._v("Microservice")]),this._v(" "),e("th",{staticStyle:{"text-align":"left"}},[this._v("Dependency")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"configuration-schema"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-schema","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration Schema")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"example-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Example Configuration")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("beans")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("xmlns")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/beans"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("sw")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sitewhere.io/schema/sitewhere/microservice/common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("xsi")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/2001/XMLSchema-instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("context")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("op")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sitewhere.io/schema/sitewhere/microservice/outbound-connectors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xsi:")]),t._v("schemaLocation")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("\n           http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.1.xsd\n           http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-3.1.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/common http://sitewhere.io/schema/sitewhere/microservice/common/current/microservice-common.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/outbound-connectors http://sitewhere.io/schema/sitewhere/microservice/outbound-connectors/current/outbound-connectors.xsd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Allow property placeholder substitution --\x3e")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("context:")]),t._v("property-placeholder")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Outbound Connectors --\x3e")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("op:")]),t._v("outbound-connectors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Send events via MQTT --\x3e")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("op:")]),t._v("mqtt-connector")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("connectorId")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mqtt1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("hostname")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${mqtt.host:localhost}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("${mqtt.port:1883}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("topic")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("SiteWhere/output"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("op:")]),t._v("outbound-connectors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("beans")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"kafka-topics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kafka-topics","aria-hidden":"true"}},[this._v("#")]),this._v(" Kafka Topics")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("sitewhere.sitewhere1.tenant.53daebb2-8b54-4031-a4b9-29e3fc04b4be.inbound-enriched-events")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Topic Name")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Relation")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Content")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("inbound-enriched-events")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Consumer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Enriched event stream used by outbound connectors.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("Outbound connectors work differently than Kafka processors in most other microservices. Each outbound\nconnector has its own Kafka consumer group that processes the stream of enriched events independently.\nThis allows many connectors to process the event stream concurrently with each keeping its\nown index into the stream. This prevents a slow outbound processor from blocking the progress\nof other processors.")])])}],!1,null,null,null);n.options.__file="README.md";e.default=n.exports}}]);