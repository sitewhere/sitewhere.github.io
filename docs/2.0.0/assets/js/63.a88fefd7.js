(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{192:function(t,e,s){"use strict";s.r(e);var n=s(1),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("Seo"),t._v(" "),s("MicroserviceBadge",{attrs:{text:"Multitenant Microservice",type:"multitenant"}}),t._v(" "),s("p",[t._v("The inbound processing microservice handles post-processing of events that have\nentered the system via event sources or REST API calls. Events from event sources\nare looked up to verify they correspond to a registered device with an active\nassignment. This microservice also handles the enrichment of persisted events\nby adding device and assignment information to the payload before making it\navailable to consumers interested in event information.")]),t._v(" "),t._m(1),t._v(" "),s("table",[t._m(2),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("strong",[s("router-link",{attrs:{to:"./../instance-management/"}},[t._v("Instance Management")])],1)]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Required to initially bootstrap Zookeeper data.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("strong",[s("router-link",{attrs:{to:"./../device-management/"}},[t._v("Device Management")])],1)]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Used to enrich inbound events with device data.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("strong",[s("router-link",{attrs:{to:"./../event-management/"}},[t._v("Event Management")])],1)]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Used for persistence of inbound event payloads.")])])])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[s("a",{attrs:{href:"https://sitewhere.io/schema/sitewhere/microservice/inbound-processing/current/inbound-processing.xsd",target:"_blank",rel:"noopener noreferrer"}},[t._v("Inbound Processing Configuration XML Schema"),s("OutboundLink")],1)]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),s("p",[t._v("The following Kafka topics are used to interact with the event processing pipeline.\nFor multitenant microservices, topic names are specific to the tenant whose data\nthey contain and have a standardized format as shown below:")]),t._v(" "),s("MicroserviceBadge",{attrs:{text:"Product Id",type:"multitenant"}}),t._v(". "),s("MicroserviceBadge",{attrs:{text:"Instance Id",type:"multitenant"}}),t._v(". tenant . "),s("MicroserviceBadge",{attrs:{text:"Tenant UUID",type:"multitenant"}}),t._v(". "),s("MicroserviceBadge",{attrs:{text:"Topic Name",type:"multitenant"}}),t._v(" "),s("p",[t._v("For example, a valid topic name might be:")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("The inbound processing microservice ingests data that was produced by the\n"),s("router-link",{attrs:{to:"./event-sources.html"}},[t._v("event sources")]),t._v(" microservice after decoding and deduplication\nhas completed. The inbound data is validated by interacting with the\n"),s("router-link",{attrs:{to:"./device-management.html"}},[t._v("device management")]),t._v(" microservice to verify that\nthe inbound event relates to a registered device with an active device assignment.")],1),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("If an event is found not to have a corresponding registered device with an\nactive assignment, the payload is passed to the "),s("router-link",{attrs:{to:"./device-registration.html"}},[t._v("device registration")]),t._v("\nmicroservice for additional processing. If the device becomes registered as a result,\nthe event is pushed onto a re-processing topic so that it may be processed again with\nthe newly registered device.")],1),t._v(" "),t._m(14),t._v(" "),s("p",[t._v("After initial validation, event data is persisted via the event persistence\nAPIs. Once event storage is complete, the "),s("router-link",{attrs:{to:"./event-management.html"}},[t._v("event management")]),t._v("\nmicroservice adds persisted events to a topic which is consumed by the inbound\nprocessing microservice. This allows for combined handling of both data from\nevent sources and data added via the REST APIs. The persisted payload is enriched\nwith device/assignment data so the information may be used by subsequent processing\nsteps without the need to look it up again. The resulting payload is pushed to\na Kafka topic that contains events which have been persisted and enriched so that\nthey may be processed by other microservices.")],1)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"inbound-processing-microservice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inbound-processing-microservice","aria-hidden":"true"}},[this._v("#")]),this._v(" 📖 Inbound Processing Microservice")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"microservice-dependencies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#microservice-dependencies","aria-hidden":"true"}},[this._v("#")]),this._v(" Microservice Dependencies")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[this._v("Microservice")]),this._v(" "),e("th",{staticStyle:{"text-align":"left"}},[this._v("Dependency")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"configuration-schema"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-schema","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration Schema")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"example-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Example Configuration")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("beans")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("xmlns")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/beans"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("sw")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sitewhere.io/schema/sitewhere/microservice/common"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("xsi")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/2001/XMLSchema-instance"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("context")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/context"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("ip")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sitewhere.io/schema/sitewhere/microservice/inbound-processing"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xsi:")]),t._v("schemaLocation")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("\n           http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.1.xsd\n           http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-3.1.xsd\n           http://www.springframework.org/schema/security http://www.springframework.org/schema/security/spring-security-3.0.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/common http://sitewhere.io/schema/sitewhere/microservice/common/current/microservice-common.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/inbound-processing http://sitewhere.io/schema/sitewhere/microservice/inbound-processing/current/inbound-processing.xsd"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Allow property placeholder substitution --\x3e")]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("context:")]),t._v("property-placeholder")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("ip:")]),t._v("inbound-processing")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("processingThreadCount")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("25"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("beans")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"kafka-topics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kafka-topics","aria-hidden":"true"}},[this._v("#")]),this._v(" Kafka Topics")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("sitewhere.sitewhere1.tenant.53daebb2-8b54-4031-a4b9-29e3fc04b4be.event-source-decoded-events")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Topic Name")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Relation")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Content")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("event-source-decoded-events")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Consumer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Non-enriched events which have been decoded by event sources.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("inbound-reprocess-events")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Consumer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Non-enriched events which are queued for reprocessing.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("inbound-persisted-events")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Consumer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Events which have been persisted via event sources or REST APIs.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("inbound-unregistered-device-events")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Producer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Contains events for devices not registered in the system.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("inbound-enriched-events")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Producer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Events which have been enriched with device/assignment information.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("inbound-enriched-command-invocations")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Producer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Command invocations which have been enriched with device/assignment information.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"runtime-behavior"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#runtime-behavior","aria-hidden":"true"}},[this._v("#")]),this._v(" Runtime Behavior")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"inbound-event-processing-logic"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inbound-event-processing-logic","aria-hidden":"true"}},[this._v("#")]),this._v(" Inbound Event Processing Logic")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"validation-of-events-from-event-sources"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#validation-of-events-from-event-sources","aria-hidden":"true"}},[this._v("#")]),this._v(" Validation of Events from Event Sources")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"handling-of-unregistered-devices"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#handling-of-unregistered-devices","aria-hidden":"true"}},[this._v("#")]),this._v(" Handling of Unregistered Devices")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"persistence-of-event-source-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#persistence-of-event-source-data","aria-hidden":"true"}},[this._v("#")]),this._v(" Persistence of Event Source Data")])}],!1,null,null,null);a.options.__file="README.md";e.default=a.exports}}]);