(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{253:function(e,t,r){"use strict";r.r(t);var i=r(1),s=Object(i.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("Seo"),e._v(" "),r("p",[e._v("A SiteWhere instance is comprised of many microservices, each handling a\nspecific piece of functionality. Upon deployment, the microservices\nare orchestrated into a distributed system on top of the Kubernetes\ninfrastucture. A Helm chart is used to configure the list of SiteWhere\nmicroservices and other components which need to be started in order to\nrealize a given configuration. Once started, the microservices self-assemble\nand then make themselves available for processing tasks.")]),e._v(" "),r("MicroservicesDiagram",{attrs:{base:e.$withBase("test"),uid:"msdiagram"}}),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("All SiteWhere microservices are based on a custom library defined in\nthe "),r("a",{attrs:{href:"https://github.com/sitewhere/sitewhere/tree/sitewhere-2.0.0/sitewhere-microservice",target:"_blank",rel:"noopener noreferrer"}},[e._v("sitewhere-microservice"),r("OutboundLink")],1),e._v("\nmodule of the core SiteWhere repository. This library includes the common\ncode used for SiteWhere microservices including service lifecycle, configuration,\nlogging, service discovery, distributed tracing, and other cross-cutting concerns.")]),e._v(" "),e._m(2),e._v(" "),r("p",[e._v("SiteWhere microservices are packaged as Spring Boot applications which use a common\nbase class "),r("a",{attrs:{href:"https://github.com/sitewhere/sitewhere/blob/sitewhere-2.0.0/sitewhere-microservice/src/main/java/com/sitewhere/microservice/MicroserviceApplication.java",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("MicroserviceApplication")]),r("OutboundLink")],1),e._v(" that standardizes the service startup/shutdown\nbehavior. The application wraps an instance of a "),r("a",{attrs:{href:"https://github.com/sitewhere/sitewhere/blob/sitewhere-2.0.0/sitewhere-microservice/src/main/java/com/sitewhere/microservice/Microservice.java",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("Microservice")]),r("OutboundLink")],1),e._v(" subclass\nwhich implements much of the common behavior such as microservice lifecycle,\nservice discovery, common Kafka and gRPC services, as well as hooks for\nthe standard lifecycle behaviors. Microservice subclasses use the\nvarious hooks to customize the lifecycle to add new functionality.")]),e._v(" "),r("p",[e._v("The SiteWhere microservice library uses Spring Boot environment settings\nto configure various aspects of each microservice. The settings may be overridden\nby injecting environment variables when deploying the microservices. The default\nHelm chart for SiteWhere handles this transparently, but there may be cases\nwhere the values need to be overridden manually. The table below covers the list of\nstandard instance-wide environment settings:")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),r("p",[e._v("Microservices do not operate in a vacuum and, as such, a high-performance RPC mechanism\nis needed to allow the services to communicate. SiteWhere leverages "),r("a",{attrs:{href:"https://grpc.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC"),r("OutboundLink")],1),e._v("\nfor moving data between microservices and offers performant binary APIs to external consumers.\nAll API calls and data entities have been made available to gRPC via the Google\nProtocol Buffers data format. Using gRPC rather than REST for communication can increase API\nperformance by more than 10x.")]),e._v(" "),e._m(9),e._v(" "),r("p",[e._v("Connections between microservices are not always one-to-one. For instance, if a SiteWhere instance\nhas a single Web/REST microservice and three instances of the Device Management microservice, the\nREST microservice should be able to demultiplex calls across all three Device Management instances\nfor scalability and fault tolerance. SiteWhere 2.0 introduces the concept of an API demulitplexor\nwhich is able to introspect the current instance topology and add/remove connections to other\nmicroservices dynamically. As the number of services is scaled up/down SiteWhere automatically\nconnects/disconnects the piping between them. All inter-microservice communication happens via\nthis mechanism.")]),e._v(" "),e._m(10),e._v(" "),r("p",[e._v("Even with the high performance of gRPC, requesting commonly used data repeatedly across\nthe network connection has a significant cost. Master information for entites such as devices,\nassignments, and assets is rarely updated and may be cached locally in the microservice\nrather than incurring the cost of reading from the database. SiteWhere 2.0 uses a ehCache\nto provide a local cache of a subset of master data. This cache is queried before\nfalling back to a remote gRPC request.")]),e._v(" "),e._m(11),e._v(" "),r("p",[e._v("SiteWhere microservices make a few assumptions about the underlying infrastructure\nthat they are running on. At a minimum, instances of\n"),r("a",{attrs:{href:"https://zookeeper.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache ZooKeeper"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://kafka.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Kafka"),r("OutboundLink")],1),e._v(" and\n"),r("a",{attrs:{href:"https://www.consul.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hashicorp Consul"),r("OutboundLink")],1),e._v(" must be available in order for the system\nto function properly. By default, SiteWhere also produces distributed tracing data via the\n"),r("a",{attrs:{href:"http://opentracing.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("open tracing"),r("OutboundLink")],1),e._v(" standard for runtime performance analysis.\nA server backend that supports the API may be configured to store and analyze the data.")]),e._v(" "),e._m(12),e._v(" "),r("p",[e._v("For a list of the core microservices included with SiteWhere and detailed guides for each,\nsee the "),r("router-link",{attrs:{to:"/guide/microservices/"}},[e._v("microservice guides")]),e._v(" section.")],1)],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"microservices-overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#microservices-overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Microservices Overview")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"microservice-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#microservice-structure","aria-hidden":"true"}},[this._v("#")]),this._v(" Microservice Structure")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"spring-boot-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-application","aria-hidden":"true"}},[this._v("#")]),this._v(" Spring Boot Application")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[e._v("Setting")]),e._v(" "),r("th",{staticStyle:{"text-align":"left"}},[e._v("Default")]),e._v(" "),r("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere.product.id")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Name of top-level node in Zookeeper tree")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere.instance.id")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere1")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Instance name used in Zookeeper and Kafka topic naming")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere.instance.template.id")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("default")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Template from instance management used to initialize system tenants and users")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere.consul.host")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("consul")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Hostname used to contact Consul for service discovery")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere.consul.port")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("8080")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Port used to contact Consul for service discovery")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere.zookeeper.host")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("localhost")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Hostname used to contact Zookeeper for configuration")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere.zookeeper.port")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("2181")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Port used to contact Zookeeper for configuration")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere.kafka.bootstrap.servers")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("kafka:9092")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Kafka bootstrap servers list")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere.filesystem.storage.root")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("/var/sitewhere")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("File system root for microservices that persist data locally for caching")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere.grpc.port")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("9000")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Port used to expose microservice-specific gRPC APIs")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere.management.grpc.port")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("9001")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Port used to expose gRPC management interface")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere.tracer.server")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("jaeger")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Hostname used for publishing distributed tracing output")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere.log.metrics")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("false")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Indicates whether metrics should be logged for microservice")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere.k8s.pod.ip")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("null")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Injected to let microservice know its Kubernetes pod IP")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"base-docker-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#base-docker-image","aria-hidden":"true"}},[this._v("#")]),this._v(" Base Docker Image")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("All SiteWhere microservices are built on top of the same base Docker image to\nlower the runtime overhead of the images. The "),t("code",[this._v("openjdk:8-jre-alpine")]),this._v(" image is\ncurrently used due to its small footprint which includes the Java 8 runtime\nneeded to execute the applications. There are future plans to leverage features\nof Java 9 to further reduce the image sizes and runtime requirements for\nthe microservices.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"system-resource-usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-resource-usage","aria-hidden":"true"}},[this._v("#")]),this._v(" System Resource Usage")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("SiteWhere currently uses around 20 microservices, so the underlying hardware should be\nable to support running 20 concurrent Java processes, each with a footprint of around\n500MB. The requirements are significant, though most modern desktop computers can easily\nrun a complete system. The SiteWhere Helm chart includes a "),t("code",[this._v("minimal")]),this._v(" profile which\nonly loads the required microservices in order to lower the resource requirements.\nHowever, the intent for SiteWhere 2.0 is to distribute the system components\nacross a cluster of machines, which lowers the hardware requirements\nfor a single node and increases fault-tolerance.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"inter-microservice-connectivity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inter-microservice-connectivity","aria-hidden":"true"}},[this._v("#")]),this._v(" Inter-Microservice Connectivity")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"api-demultiplexors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api-demultiplexors","aria-hidden":"true"}},[this._v("#")]),this._v(" API Demultiplexors")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"api-cache-support"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api-cache-support","aria-hidden":"true"}},[this._v("#")]),this._v(" API Cache Support")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"infrastructure-components"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#infrastructure-components","aria-hidden":"true"}},[this._v("#")]),this._v(" Infrastructure Components")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"list-of-core-microservices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list-of-core-microservices","aria-hidden":"true"}},[this._v("#")]),this._v(" List of Core Microservices")])}],!1,null,null,null);s.options.__file="microservice-overview.md";t.default=s.exports}}]);