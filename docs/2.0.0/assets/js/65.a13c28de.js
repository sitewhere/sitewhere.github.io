(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{187:function(t,a,e){"use strict";e.r(a);var n=e(1),s=Object(n.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("MicroserviceBadge",{attrs:{text:"Global Microservice",type:"global"}}),t._v(" "),e("p",[t._v("The tenant management microservice provides the core APIs and data persistence for\nmanaging system tenants. It is initially used by the instance management microservice\nto bootstrap the system with base tenants. Afterward, it is called by the Web/REST\nmicroservice to allow the list of system tenants to be managed.")]),t._v(" "),t._m(1),t._v(" "),e("table",[t._m(2),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("strong",[e("router-link",{attrs:{to:"./instance-management.html"}},[t._v("Instance Management")])],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Required to initially bootstrap Zookeeper data.")])])])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("The following REST APIs are served by the "),e("router-link",{attrs:{to:"./web-rest.html"}},[t._v("Web/REST microservice")]),t._v(" backed by the tenant\nmanagement microservice.")],1),t._v(" "),e("table",[t._m(5),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"http://sitewhere.io/docs/2.0.0/api2/#tag/tenants",target:"_blank",rel:"noopener noreferrer"}},[e("strong",[t._v("Tenant APIs")]),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("REST API methods for managing tenants.")])])])]),t._v(" "),t._m(6),t._v(" "),e("p",[t._v("The tenant management microservice includes a gRPC server which listens on a dedicated port\n(9000) and offers high performance access to the tenant management APIs. In the default\nconfiguration, the port is only accessible to the other microservices. The tenant management\nports may be exposed via load balancer by executing the following Helm command:")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),e("p",[t._v("Java stubs are available for accessing the gRPC tenant management APIs. The stubs\nmay be included by using the following:")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/sitewhere/sitewhere-grpc-api",target:"_blank",rel:"noopener noreferrer"}},[e("strong",[t._v("https://github.com/sitewhere/sitewhere-grpc-api")]),e("OutboundLink")],1)]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),e("p",[e("a",{attrs:{href:"http://sitewhere.io/schema/sitewhere/microservice/tenant-management/current/tenant-management.xsd",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tenant Management Configuration XML Schema"),e("OutboundLink")],1)]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),e("p",[t._v("The following Kafka topics are used to interact with the event processing pipeline.\nFor global microservices, topic names follow a standardized format as shown below:")]),t._v(" "),e("MicroserviceBadge",{attrs:{text:"Product Id",type:"global"}}),t._v(". "),e("MicroserviceBadge",{attrs:{text:"Instance Id",type:"global"}}),t._v(". global . "),e("MicroserviceBadge",{attrs:{text:"Topic Name",type:"global"}}),t._v(" "),e("p",[t._v("For example, a valid topic name might be:")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),e("p",[t._v("When a tenant is added/updated/deleted, the tenant data is pushed to a Kafka topic\nso that other interested listeners can act on the update. By default, a listener is\nregistered to bootstrap newly created tenants by adding the expected tenant configuration\nhierarchy in ZooKeeper. This process includes copying the per-microservice XML configuration\nfiles from the tenant template into ZooKeeper, then executing the list of initialization\nscripts included with the template.")]),t._v(" "),t._m(23),t._v(" "),t._m(24)],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"tenant-management-microservice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tenant-management-microservice","aria-hidden":"true"}},[this._v("#")]),this._v(" Tenant Management Microservice")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"microservice-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#microservice-dependencies","aria-hidden":"true"}},[this._v("#")]),this._v(" Microservice Dependencies")])},function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[this._v("Microservice")]),this._v(" "),a("th",{staticStyle:{"text-align":"left"}},[this._v("Dependency")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"available-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available-apis","aria-hidden":"true"}},[this._v("#")]),this._v(" Available APIs")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"rest-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rest-apis","aria-hidden":"true"}},[this._v("#")]),this._v(" REST APIs")])},function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[this._v("API")]),this._v(" "),a("th",{staticStyle:{"text-align":"left"}},[this._v("Description")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"grpc-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grpc-apis","aria-hidden":"true"}},[this._v("#")]),this._v(" gRPC APIs")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("helm upgrade -set tenant_management.service.type=LoadBalancer")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"grpc-clients"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grpc-clients","aria-hidden":"true"}},[this._v("#")]),this._v(" gRPC Clients")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"gradle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gradle","aria-hidden":"true"}},[this._v("#")]),this._v(" Gradle")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-groovy extra-class"},[e("pre",{pre:!0,attrs:{class:"language-groovy"}},[e("code",[t._v("compile group"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'com.sitewhere'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'sitewhere-grpc-tenant-management'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" version"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'2.0.1'")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"maven"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maven","aria-hidden":"true"}},[this._v("#")]),this._v(" Maven")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.sitewhere"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("sitewhere-grpc-tenant-management"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.0.1"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("See the following repository for\nthe "),a("code",[this._v("proto")]),this._v(" definitions if bindings other than Java are needed:")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"configuration-schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-schema","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration Schema")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"example-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Example Configuration")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("beans")]),t._v(" "),e("span",{attrs:{class:"token attr-name"}},[t._v("xmlns")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/beans"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),e("span",{attrs:{class:"token attr-name"}},[e("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("ds")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sitewhere.io/schema/sitewhere/microservice/common/datastore"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),e("span",{attrs:{class:"token attr-name"}},[e("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("xsi")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/2001/XMLSchema-instance"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{attrs:{class:"token attr-name"}},[e("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("context")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/context"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),e("span",{attrs:{class:"token attr-name"}},[e("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("tm")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sitewhere.io/schema/sitewhere/microservice/tenant-management"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),e("span",{attrs:{class:"token attr-name"}},[e("span",{attrs:{class:"token namespace"}},[t._v("xsi:")]),t._v("schemaLocation")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("\n           http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.1.xsd\n           http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-3.1.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/common/datastore http://sitewhere.io/schema/sitewhere/microservice/common/current/datastore-common.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/tenant-management http://sitewhere.io/schema/sitewhere/microservice/tenant-management/current/tenant-management.xsd"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),e("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Tenant Management Configuration --\x3e")]),t._v("\n\t"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{attrs:{class:"token namespace"}},[t._v("tm:")]),t._v("tenant-management")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t\t"),e("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Use global MongoDB configuration --\x3e")]),t._v("\n\t\t"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{attrs:{class:"token namespace"}},[t._v("ds:")]),t._v("device-management-datastore")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{attrs:{class:"token namespace"}},[t._v("ds:")]),t._v("mongodb-datastore-reference")]),t._v(" "),e("span",{attrs:{class:"token attr-name"}},[t._v("id")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("global"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\t"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),e("span",{attrs:{class:"token namespace"}},[t._v("ds:")]),t._v("device-management-datastore")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),e("span",{attrs:{class:"token namespace"}},[t._v("tm:")]),t._v("tenant-management")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("beans")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"kafka-topics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kafka-topics","aria-hidden":"true"}},[this._v("#")]),this._v(" Kafka Topics")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("em",[this._v("sitewhere.sitewhere1.global.tenant-model-updates")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Topic Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Relation")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Content")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("tenant-model-updates")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Producer")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Reflects updates to the tenant model such as creating a new tenant.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("tenant-model-updates")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Consumer")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Monitors tenant updates and initializes configuration for newly added tenants.")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"runtime-behavior"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#runtime-behavior","aria-hidden":"true"}},[this._v("#")]),this._v(" Runtime Behavior")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"asynchronous-zookeeper-bootstrapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asynchronous-zookeeper-bootstrapping","aria-hidden":"true"}},[this._v("#")]),this._v(" Asynchronous Zookeeper Bootstrapping")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"tenant-engine-bootstrapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tenant-engine-bootstrapping","aria-hidden":"true"}},[this._v("#")]),this._v(" Tenant Engine Bootstrapping")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Once the initial Zookeeper bootstrap process is complete, the tenant configuration\nis marked as bootsrapped so that other microservices can react to the added tenant. For\ninstance, the device management microservice will notice that a new tenant has been configured\nand will wait for the bootstrapped indicator, then will load the "),a("code",[this._v("device-management.xml")]),this._v("\nconfiguration file to initialize a new device management tenant engine for the added tenant.\nAny time that files within a tenant are changed, the changes are broadcast to tenant engines\nrunning on all other microservices so they can react to the changes. In the previous example,\nif multiple device management microservices are running (scale > 1), each microservice will\ndetect the updates and reload the tenant engines to reflect the updates.")])}],!1,null,null,null);s.options.__file="tenant-management.md";a.default=s.exports}}]);