(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{205:function(e,t,a){"use strict";a.r(t);var n=a(1),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("Seo"),e._v(" "),a("p",[e._v("Below is a list of the core SiteWhere microservices. Each service handles\na specific area of system functionality and is independent of other microservices in terms of\nruntime processing, data storage and configuration. Some microservices do, however, have\ndependencies on the APIs offered by other services and can not run in isolation. Below is a\nhigh-level overview of the individual services along with links to more detailed\nexplanations of each service.")]),e._v(" "),a("p"),e._m(1),a("p"),e._v(" "),e._m(2),e._v(" "),a("p",[e._v("Global microservices are used for managing aspects of a SiteWhere instance that\nare not configurable at the tenant level.")]),e._v(" "),e._m(3),e._v(" "),a("p",[e._v("The instance management microservice is used to bootstrap a SiteWhere instance with\nthe initial Zookeeper configuration structure required by the other microservices.\nAll other microservices wait for the Zookeeper data to be initialized before\nstarting, so the instance management microservice must be present in an uninitialized\nSiteWhere instance or all other microservices will fail to start.")]),e._v(" "),a("p",[e._v("See the "),a("router-link",{attrs:{to:"./instance-management/"}},[e._v("guide")]),e._v(" for more details.")],1),e._v(" "),e._m(4),e._v(" "),a("p",[e._v("The global tenant management microservice provides the core APIs and data persistence for\nmanaging system tenants. It is initially used by the instance management microservice\nto bootstrap the system with base tenants. Afterward, it is called by the Web/REST\nmicroservice to allow the list of system tenants to be managed.")]),e._v(" "),a("p",[e._v("See the "),a("router-link",{attrs:{to:"./tenant-management/"}},[e._v("guide")]),e._v(" for more details.")],1),e._v(" "),e._m(5),e._v(" "),a("p",[e._v("The global user management microservice provides the core APIs and data persistence used\nto manage system users. It is initially used by the instance management microservice\nto bootstrap the system with base users. Afterward, it is called by the Web/REST\nmicroservice to allow the list of users to be managed.")]),e._v(" "),a("p",[e._v("See the "),a("router-link",{attrs:{to:"./user-management/"}},[e._v("guide")]),e._v(" for more details.")],1),e._v(" "),e._m(6),e._v(" "),a("p",[e._v("The global Web/REST microservice includes an embedded Tomcat container which\nprovides infrastructure for all of the core REST services including Swagger user\ninterfaces. This microservice is usually connected to all other microservices in the\nsystem so that API calls may be delegated to the microservices that implement\nthe functionality. For instance, querying for a device via the REST APIs\nresults in a gRPC request (potentially cached) to the appropriate\ndevice management tenant engine on one of the device management microservices.")]),e._v(" "),a("p",[e._v("See the "),a("router-link",{attrs:{to:"./web-rest/"}},[e._v("guide")]),e._v(" for more details.")],1),e._v(" "),e._m(7),e._v(" "),a("p",[e._v("Multitenant microservices can contain many separate tenant engines which may be\nconfigured separately and started/stopped independently of each other.")]),e._v(" "),e._m(8),e._v(" "),a("p",[e._v('The multitenant asset management microservice provides the core APIs and data persistence\nfor managing assets for each tenant in a SiteWhere instance. The asset model is initially\npopulated based on the scripts included in the tenant template used when creating the tenant.\nFor instance, the "Construction" template populates assets such as heavy equipment, storage\ntrailers, and various types of tracking devices. If using the "Empty" template, no asset\nmanagement data will be populated.')]),e._v(" "),a("p",[e._v("See the "),a("router-link",{attrs:{to:"./asset-management/"}},[e._v("guide")]),e._v(" for more details.")],1),e._v(" "),e._m(9),e._v(" "),a("p",[e._v("The multitenant batch operations microservice provides the core APIs and data persistence\nfor managing batch operations for each tenant in a SiteWhere instance. The batch operations\nmodel is empty upon tenant initialization, but may be populated by invoking APIs that\nproduce batch operations (such as batch command invocations).")]),e._v(" "),a("p",[e._v("See the "),a("router-link",{attrs:{to:"./batch-operations/"}},[e._v("guide")]),e._v(" for more details.")],1),e._v(" "),e._m(10),e._v(" "),a("p",[e._v("The multitenant command delivery microservice ingests data from the Kafka topic containing\npre-processed events and, for command invocations, handles command processing. This includes\nusing configured routing constraints and command destinations that indicate how the command\nis to be encoded, which transport is to be used, and where the command is to be delivered.")]),e._v(" "),a("p",[e._v("See the "),a("router-link",{attrs:{to:"./command-delivery/"}},[e._v("guide")]),e._v(" for more details.")],1),e._v(" "),e._m(11),e._v(" "),a("p",[e._v('The multitenant device management microservice provides the core APIs and data persistence\nfor managing the device model (customers, areas, device types, devices, etc.) for each tenant\nin a SiteWhere instance. The device model is initially populated based on the scripts included\nin the tenant template used when creating the tenant. For instance, the "Construction" template\nwill populate the data model with devices appropriate for a construction site. If using the\n"Empty" template, no device management data will be populated.')]),e._v(" "),a("p",[e._v("See the "),a("router-link",{attrs:{to:"./device-management/"}},[e._v("guide")]),e._v(" for more details.")],1),e._v(" "),e._m(12),e._v(" "),a("p",[e._v("The multitenant device state microservice ingests data from the Kafka topic containing\npre-processed events and uses the event data to update device state. The device state\nmodel persists the most recent location, measurements, and alerts for each device as\nwell as information about when the last interaction with the device occurred.")]),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),a("p",[e._v("The multitenant device registration microservice ingests data from a Kafka topic\npopulated by the inbound processing microservice and acts on events where the device token\nindicates a device that is not currently registered in the system. Each tenant engine has\na device registration manager which may be configured to indicate how unregistered\ndevices are to be treated. The device registration manager processes each inbound\nevent and can potentially register the device automatically before adding the event\nto a re-processing topic to have it processed by the inbound processing microservice.")]),e._v(" "),a("p",[e._v("See the "),a("router-link",{attrs:{to:"./device-registration/"}},[e._v("guide")]),e._v(" for more details.")],1),e._v(" "),e._m(15),e._v(" "),a("p",[e._v('The multitenant event management microservice provides the core APIs and data persistence\nfor managing device events (locations, measurements, alerts, command invocations, etc) for\neach tenant in a SiteWhere instance. The device event model is initially populated based on\nthe scripts included in the tenant template used when creating the tenant. For instance, the\n"Construction" template populates example location, measurement and alert data relevant to\nmachines at a construction site. If using the "Empty" template, no event management data\nwill be populated.')]),e._v(" "),a("p",[e._v("See the "),a("router-link",{attrs:{to:"./event-management/"}},[e._v("guide")]),e._v(" for more details.")],1),e._v(" "),e._m(16),e._v(" "),a("p",[e._v("The multitenant event search microservice provides an API for searching external data sources\nthat contain SiteWhere event information in a non-standard format. For instance, when events\nare indexed into Apache Solr via an outbound connector, there may be a need to query Solr directly\nto do complex faceted queries that can not be generically supported via the SiteWhere APIs. The\ntenant engines for this microservice may be configured to proxy queries to the underlying service\nand return the results to the Web/REST microservice for use by external clients.")]),e._v(" "),a("p",[e._v("See the "),a("router-link",{attrs:{to:"./event-search/"}},[e._v("guide")]),e._v(" for more details.")],1),e._v(" "),e._m(17),e._v(" "),a("p",[e._v("The multitenant event sources microservice hosts tenant engines that may be configured\nto ingest data from many types of data producers. Some examples include consuming data\nfrom MQTT topics, CoAP requests, direct TCP/IP socket connections, WebSockets, REST calls\nvia push or pull models, and many other potential sources. After events are ingested,\nthey are decoded into a standardized data model and pushed to a tenant-specific Kafka\ntopic for further processing. Kafka topics are also registered for events that can not\nbe parsed or are detected as duplicates by deduplication processing.")]),e._v(" "),a("p",[e._v("See the "),a("router-link",{attrs:{to:"./event-sources/"}},[e._v("guide")]),e._v(" for more details.")],1),e._v(" "),e._m(18),e._v(" "),a("p",[e._v("The multitenant inbound processing microservice ingests data that was produced by the\nevent sources microservice (after decoding and deduplication has completed). This microservice\nvalidates the inbound data by interacting with the device management microservice to\nverify that the inbound event relates to a registered device. The inbound payload is enriched\nwith device/assignment data so the information may be used by subsequent processing steps\nwithout the need to look it up again. If the device is not registered, the payload is\npassed to the device registration microservice for additional processing. If the device becomes\nregistered as a result, the event is pushed onto a re-processing topic so that it may be\nprocessed again with the newly registered device.")]),e._v(" "),a("p",[e._v("See the "),a("router-link",{attrs:{to:"./inbound-processing/"}},[e._v("guide")]),e._v(" for more details.")],1),e._v(" "),e._m(19),e._v(" "),a("p",[e._v("The multitenant label generation microservice responds to API requests for label resources such\nas QR codes, bar codes, or custom device labels. Each tenant engine has a symbol generation\nmanager that may be customized to generate specific types of output unique to the tenant.")]),e._v(" "),a("p",[e._v("See the "),a("router-link",{attrs:{to:"./label-generation/"}},[e._v("guide")]),e._v(" for more details.")],1),e._v(" "),e._m(20),e._v(" "),a("p",[e._v("The multitenant outbound connectors microservice ingests data from the Kafka topic containing\npre-processed events and allows the event data to be forwarded to other integration points\nasynchronously. Each outbound connector is a Kafka consumer that has its own pointer into\nthe events topic, so the system is not blocked by connectors that occasionally process at\nslower rates than the rest of the system. Connectors are available for common use cases such\nas forwarding events to a well-known MQTT topic or indexing events in Apache Solr.")]),e._v(" "),a("p",[e._v("See the "),a("router-link",{attrs:{to:"./outbound-connectors/"}},[e._v("guide")]),e._v(" for more details.")],1),e._v(" "),e._m(21),e._v(" "),a("p",[e._v("The multitenant rule processing microservice ingests data from the Kafka topic containing\npre-processed events and applies conditional logic to further process the events. Tenant engines\ncan use embedded complex event processing (WSO2 Siddhi) to detect patterns in the event\nstream and fire new events as the result.")]),e._v(" "),a("p",[e._v("See the "),a("router-link",{attrs:{to:"./rule-processing/"}},[e._v("guide")]),e._v(" for more details.")],1),e._v(" "),e._m(22),e._v(" "),a("p",[e._v('The multitenant schedule management microservice provides the core APIs and data persistence\nfor managing schedules for each tenant in a SiteWhere instance. The schedule model is initially\npopulated based on the scripts included in the tenant template used when creating the tenant.\nMost tenant templates include a few example schedules. If using the "Empty" template, no schedule\nmanagement data will be populated.')]),e._v(" "),a("p",[e._v("See the "),a("router-link",{attrs:{to:"./schedule-management/"}},[e._v("guide")]),e._v(" for more details.")],1),e._v(" "),e._m(23),e._v(" "),a("p",[e._v("The multitenant streaming media microservice is intended to allow streaming storage of binary\ndata such as audio and video streams. This feature is under development.")]),e._v(" "),a("p",[e._v("See the "),a("router-link",{attrs:{to:"./streaming-media/"}},[e._v("guide")]),e._v(" for more details.")],1)],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"microservice-guides"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#microservice-guides","aria-hidden":"true"}},[this._v("#")]),this._v(" Microservice Guides")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#global-microservices"}},[e._v("Global Microservices")]),a("ul",[a("li",[a("a",{attrs:{href:"#instance-management"}},[e._v("Instance Management")])]),a("li",[a("a",{attrs:{href:"#tenant-management"}},[e._v("Tenant Management")])]),a("li",[a("a",{attrs:{href:"#user-management"}},[e._v("User Management")])]),a("li",[a("a",{attrs:{href:"#web-rest"}},[e._v("Web/REST")])])])]),a("li",[a("a",{attrs:{href:"#multitenant-microservices"}},[e._v("Multitenant Microservices")]),a("ul",[a("li",[a("a",{attrs:{href:"#asset-management"}},[e._v("Asset Management")])]),a("li",[a("a",{attrs:{href:"#batch-operations"}},[e._v("Batch Operations")])]),a("li",[a("a",{attrs:{href:"#command-delivery"}},[e._v("Command Delivery")])]),a("li",[a("a",{attrs:{href:"#device-management"}},[e._v("Device Management")])]),a("li",[a("a",{attrs:{href:"#device-state"}},[e._v("Device State")])]),a("li",[a("a",{attrs:{href:"#device-registration"}},[e._v("Device Registration")])]),a("li",[a("a",{attrs:{href:"#event-management"}},[e._v("Event Management")])]),a("li",[a("a",{attrs:{href:"#event-search"}},[e._v("Event Search")])]),a("li",[a("a",{attrs:{href:"#event-sources"}},[e._v("Event Sources")])]),a("li",[a("a",{attrs:{href:"#inbound-processing"}},[e._v("Inbound Processing")])]),a("li",[a("a",{attrs:{href:"#label-generation"}},[e._v("Label Generation")])]),a("li",[a("a",{attrs:{href:"#outbound-connectors"}},[e._v("Outbound Connectors")])]),a("li",[a("a",{attrs:{href:"#rule-processing"}},[e._v("Rule Processing")])]),a("li",[a("a",{attrs:{href:"#schedule-management"}},[e._v("Schedule Management")])]),a("li",[a("a",{attrs:{href:"#streaming-media"}},[e._v("Streaming Media")])])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"global-microservices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#global-microservices","aria-hidden":"true"}},[this._v("#")]),this._v(" Global Microservices")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"instance-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instance-management","aria-hidden":"true"}},[this._v("#")]),this._v(" Instance Management")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"tenant-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tenant-management","aria-hidden":"true"}},[this._v("#")]),this._v(" Tenant Management")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"user-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user-management","aria-hidden":"true"}},[this._v("#")]),this._v(" User Management")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"web-rest"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web-rest","aria-hidden":"true"}},[this._v("#")]),this._v(" Web/REST")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"multitenant-microservices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multitenant-microservices","aria-hidden":"true"}},[this._v("#")]),this._v(" Multitenant Microservices")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"asset-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#asset-management","aria-hidden":"true"}},[this._v("#")]),this._v(" Asset Management")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"batch-operations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#batch-operations","aria-hidden":"true"}},[this._v("#")]),this._v(" Batch Operations")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"command-delivery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#command-delivery","aria-hidden":"true"}},[this._v("#")]),this._v(" Command Delivery")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"device-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#device-management","aria-hidden":"true"}},[this._v("#")]),this._v(" Device Management")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"device-state"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#device-state","aria-hidden":"true"}},[this._v("#")]),this._v(" Device State")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("See the "),t("a",{attrs:{href:"./device-state"}},[this._v("guide")]),this._v(" for more details.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"device-registration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#device-registration","aria-hidden":"true"}},[this._v("#")]),this._v(" Device Registration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"event-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#event-management","aria-hidden":"true"}},[this._v("#")]),this._v(" Event Management")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"event-search"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#event-search","aria-hidden":"true"}},[this._v("#")]),this._v(" Event Search")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"event-sources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#event-sources","aria-hidden":"true"}},[this._v("#")]),this._v(" Event Sources")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"inbound-processing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inbound-processing","aria-hidden":"true"}},[this._v("#")]),this._v(" Inbound Processing")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"label-generation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#label-generation","aria-hidden":"true"}},[this._v("#")]),this._v(" Label Generation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"outbound-connectors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#outbound-connectors","aria-hidden":"true"}},[this._v("#")]),this._v(" Outbound Connectors")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"rule-processing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rule-processing","aria-hidden":"true"}},[this._v("#")]),this._v(" Rule Processing")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"schedule-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#schedule-management","aria-hidden":"true"}},[this._v("#")]),this._v(" Schedule Management")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"streaming-media"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#streaming-media","aria-hidden":"true"}},[this._v("#")]),this._v(" Streaming Media")])}],!1,null,null,null);i.options.__file="README.md";t.default=i.exports}}]);