(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{274:function(t,e,a){"use strict";a.r(e);var s=a(1),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("Seo"),t._v(" "),a("MicroserviceBadge",{attrs:{text:"Global Microservice",type:"global"}}),t._v(" "),a("p",[t._v("The Web/REST microservice includes an embedded Tomcat container which\nprovides infrastructure for all of the core REST services including Swagger user\ninterfaces. This microservice is usually connected to all other microservices in the\nsystem so that API calls may be delegated to the microservices that implement\nthe functionality. For instance, querying for a device via the REST APIs\nresults in a gRPC request (potentially cached) to the appropriate\ndevice management tenant engine on one of the device management microservices.")]),t._v(" "),t._m(1),t._v(" "),a("table",[t._m(2),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("router-link",{attrs:{to:"./../instance-management/"}},[t._v("Instance Management")])],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Required to initially bootstrap Zookeeper data.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("router-link",{attrs:{to:"./../user-management/"}},[t._v("User Management")])],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Used for processing REST invocations.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("router-link",{attrs:{to:"./../tenant-management/"}},[t._v("Tenant Management")])],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Used for processing REST invocations.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("router-link",{attrs:{to:"./../device-management/"}},[t._v("Device Management")])],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Used for processing REST invocations.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("router-link",{attrs:{to:"./../event-management/"}},[t._v("Event Management")])],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Used for processing REST invocations.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("router-link",{attrs:{to:"./../asset-management/"}},[t._v("Asset Management")])],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Used for processing REST invocations.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("router-link",{attrs:{to:"./../batch-operations/"}},[t._v("Batch Operations")])],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Used for processing REST invocations.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("router-link",{attrs:{to:"./../schedule-management/"}},[t._v("Schedule Management")])],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Used for processing REST invocations.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("router-link",{attrs:{to:"./../label-generation/"}},[t._v("Label Generation")])],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Used for processing REST invocations.")])])])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[a("a",{attrs:{href:"https://sitewhere.io/schema/sitewhere/microservice/web-rest/current/web-rest.xsd",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web/REST Configuration XML Schema"),a("OutboundLink")],1)]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"web-rest-microservice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web-rest-microservice","aria-hidden":"true"}},[this._v("#")]),this._v(" Web/REST Microservice")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"microservice-dependencies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#microservice-dependencies","aria-hidden":"true"}},[this._v("#")]),this._v(" Microservice Dependencies")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[this._v("Microservice")]),this._v(" "),e("th",{staticStyle:{"text-align":"left"}},[this._v("Dependency")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"configuration-schema"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-schema","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration Schema")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"example-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Example Configuration")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("beans")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("xmlns")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/beans"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("sw")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sitewhere.io/schema/sitewhere/microservice/common"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("xsi")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/2001/XMLSchema-instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("context")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.springframework.org/schema/context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("web")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://sitewhere.io/schema/sitewhere/microservice/web-rest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xsi:")]),t._v("schemaLocation")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("\n           http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.1.xsd\n           http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-3.1.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/common http://sitewhere.io/schema/sitewhere/microservice/common/current/microservice-common.xsd\n           http://sitewhere.io/schema/sitewhere/microservice/web-rest http://sitewhere.io/schema/sitewhere/microservice/web-rest/current/web-rest.xsd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Web/REST Configuration --\x3e")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("web:")]),t._v("web-rest")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("beans")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"runtime-behavior"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#runtime-behavior","aria-hidden":"true"}},[this._v("#")]),this._v(" Runtime Behavior")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"unavailable-services"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unavailable-services","aria-hidden":"true"}},[this._v("#")]),this._v(" Unavailable Services")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("There may be cases where the microservice required to complete a request is not available.\nIn this case, a "),e("em",[this._v("ServiceNotAvailable")]),this._v(" exception is thrown and passed back as an error to\nthe user/application that made the request. Using this approach, areas of the system may\nbe shut down to conserve resources while not affecting the functionality of the system as\na whole. Callers to the REST services should be prepared to handle cases where the\nsubsystem they are calling may be shut down.")])}],!1,null,null,null);n.options.__file="README.md";e.default=n.exports}}]);