(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{248:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("Seo"),t._v(" "),t._m(0),t._v(" "),s("MicroserviceBadge",{attrs:{text:"Global Microservice",type:"global"}}),t._v(" "),s("p",[t._v("The user management microservice provides the core APIs and data persistence used\nto manage system users. It is initially used by the instance management microservice\nto bootstrap the system with base users. Afterward, it is called by the Web/REST\nmicroservice to allow the list of users to be managed.")]),t._v(" "),t._m(1),t._v(" "),s("table",[t._m(2),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("strong",[s("router-link",{attrs:{to:"./instance-management.html"}},[t._v("Instance Management")])],1)]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Required to initially bootstrap Zookeeper data.")])])])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("The following REST APIs are served by the "),s("router-link",{attrs:{to:"./web-rest.html"}},[t._v("Web/REST microservice")]),t._v(" backed by the user\nmanagement microservice.")],1),t._v(" "),s("table",[t._m(5),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"http://sitewhere.io/docs/2.0.0/api2/#tag/users",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("User APIs")]),s("OutboundLink")],1)]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("REST API methods for managing users.")])])])]),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("The user management microservice includes a gRPC server which listens on a dedicated port\n(9000) and offers high performance access to the user management APIs. In the default\nconfiguration, the port is only accessible to the other microservices. The user management\nports may be exposed via load balancer by executing the following Helm command:")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("Java stubs are available for accessing the gRPC user management APIs. The stubs\nmay be included by using the following:")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/sitewhere/sitewhere-grpc-api",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("https://github.com/sitewhere/sitewhere-grpc-api")]),s("OutboundLink")],1)]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),s("p",[s("a",{attrs:{href:"http://sitewhere.io/schema/sitewhere/microservice/user-management/current/user-management.xsd",target:"_blank",rel:"noopener noreferrer"}},[t._v("User Management Configuration XML Schema"),s("OutboundLink")],1)]),t._v(" "),t._m(16),t._v(" "),t._m(17)],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"user-management-microservice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-management-microservice","aria-hidden":"true"}},[this._v("#")]),this._v(" User Management Microservice")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"microservice-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#microservice-dependencies","aria-hidden":"true"}},[this._v("#")]),this._v(" Microservice Dependencies")])},function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[this._v("Microservice")]),this._v(" "),a("th",{staticStyle:{"text-align":"left"}},[this._v("Dependency")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"available-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available-apis","aria-hidden":"true"}},[this._v("#")]),this._v(" Available APIs")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"rest-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rest-apis","aria-hidden":"true"}},[this._v("#")]),this._v(" REST APIs")])},function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[this._v("API")]),this._v(" "),a("th",{staticStyle:{"text-align":"left"}},[this._v("Description")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"grpc-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grpc-apis","aria-hidden":"true"}},[this._v("#")]),this._v(" gRPC APIs")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("helm upgrade -set user_management.service.type=LoadBalancer")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"grpc-clients"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grpc-clients","aria-hidden":"true"}},[this._v("#")]),this._v(" gRPC Clients")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"gradle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gradle","aria-hidden":"true"}},[this._v("#")]),this._v(" Gradle")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-groovy extra-class"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[t._v("compile group"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'com.sitewhere'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'sitewhere-grpc-user-management'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" version"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'2.0.1'")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"maven"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maven","aria-hidden":"true"}},[this._v("#")]),this._v(" Maven")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.sitewhere"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("sitewhere-grpc-user-management"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.0.1"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("See the following repository for\nthe "),a("code",[this._v("proto")]),this._v(" definitions if bindings other than Java are needed:")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"configuration-schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-schema","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration Schema")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"example-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Example Configuration")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("beans")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("xmlns")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/beans"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("ds")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sitewhere.io/schema/sitewhere/microservice/common/datastore"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("xsi")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/2001/XMLSchema-instance"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("context")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/context"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("um")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sitewhere.io/schema/sitewhere/microservice/user-management"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xsi:")]),t._v("schemaLocation")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("\n           http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.1.xsd\n           http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-3.1.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/common/datastore http://sitewhere.io/schema/sitewhere/microservice/common/current/datastore-common.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/user-management http://sitewhere.io/schema/sitewhere/microservice/user-management/current/user-management.xsd"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- User Management Configuration --\x3e")]),t._v("\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("um:")]),t._v("user-management")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t\t"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Use global MongoDB configuration --\x3e")]),t._v("\n\t\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("ds:")]),t._v("device-management-datastore")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token namespace"}},[t._v("ds:")]),t._v("mongodb-datastore-reference")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("global"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{attrs:{class:"token namespace"}},[t._v("ds:")]),t._v("device-management-datastore")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{attrs:{class:"token namespace"}},[t._v("um:")]),t._v("user-management")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("beans")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="user-management.md";a.default=n.exports}}]);