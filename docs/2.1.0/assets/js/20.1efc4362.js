(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{293:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("Seo"),t._v(" "),s("p",[t._v("SiteWhere provides a Java API for accessing the REST API of SiteWhere. This guide shows how to use\nSiteWhere Java API to interact with an instance of SiteWhere.")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("SiteWhere Java Client library is published on "),s("a",{attrs:{href:"https://search.maven.org/search?q=a:sitewhere-java-client",target:"_blank",rel:"noopener noreferrer"}},[t._v("Maven Central"),s("OutboundLink")],1),t._v("\nfor using dependency management tools, such as Apache Maven or Gradle.")]),t._v(" "),s("p",[t._v("If you are using "),s("a",{attrs:{href:"https://maven.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache Maven"),s("OutboundLink")],1),t._v(", add the following dependency to your "),s("code",[t._v("pom.xml")]),t._v(".")]),t._v(" "),t._m(2),s("p",[t._v("If you are using "),s("a",{attrs:{href:"https://gradle.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gradle"),s("OutboundLink")],1),t._v(", add the following dependency to your "),s("code",[t._v("build.gradle")]),t._v(".")]),t._v(" "),t._m(3),t._m(4),t._v(" "),s("p",[t._v("A new client with the default settings may be created as follows:")]),t._v(" "),t._m(5),s("p",[t._v("The default settings are:")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("To change the default connection settings use:")]),t._v(" "),t._m(9),s("p",[t._v("To connect as a different user user:")]),t._v(" "),t._m(10),t._m(11),t._v(" "),s("p",[t._v("Once the client has been initialized, methods on it may be invoked to interact with the data\nmodel on the remote SiteWhere instance. There are two types of calls, global calls and\ntenant-specific calls.")]),t._v(" "),s("p",[t._v("The image below shows an UML Class Diagram of SiteWhere Object Model that can help you undestand\nthe component of the system.")]),t._v(" "),s("InlineImage",{attrs:{src:"/images/guide/api/object-model.png",caption:"SiteWhere Object Model UML Class Diagram"}}),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("For global calls, no extra information is required in order to make the invocation.")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"./system/"}},[t._v("System API")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"./users/"}},[t._v("Users API")])],1)]),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("For calls that are tenant-specific, more information must be passed along with each method invocation.\nYou must provide the tenant id and tenant authentication token which are passed as headers to the REST\ncall (along with the JWT used for all calls).")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"./area-api/"}},[t._v("Area Management API")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"./area-type-api/"}},[t._v("Area Type Management API")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"./asset-api/"}},[t._v("Asset Management API")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"./asset-type-api/"}},[t._v("Asset Type Management API")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"./batch-operations-api/"}},[t._v("Batch Operations API")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"./customer-api/"}},[t._v("Customer Management API")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"./customer-type-api/"}},[t._v("Customer Type Management API")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"./device-command-api/"}},[t._v("Device Commands API")])],1)])],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"using-sitewhere-java-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-sitewhere-java-api","aria-hidden":"true"}},[this._v("#")]),this._v(" 📖 Using SiteWhere Java API")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"importing-the-library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#importing-the-library","aria-hidden":"true"}},[this._v("#")]),this._v(" Importing the Library")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.sitewhere"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("sitewhere-java-client"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.1.x"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[this._v("implementation "),a("span",{attrs:{class:"token string"}},[this._v("'com.sitewhere:sitewhere-java-client:2.1.x'")]),this._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"creating-a-client-instance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-client-instance","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating a client instance")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("ISiteWhereClient client "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("newBuilder")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("build")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("initialize")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Attribute")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Protocol")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("HTTP")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Hostname")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("localhost")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Port")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("80")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Username")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("admin")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Password")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("password")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),a("p",[this._v("Since SiteWhere 2.1.x the default "),a("code",[this._v("Port")]),this._v(" number changed from 8080 to 80.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Note that the "),a("code",[this._v("initialize()")]),this._v(" method must be called before using the client. This sets\nup the template and connects to the server to acquire a JWT.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("SiteWhereClient client "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("newBuilder")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("withConnectionTo")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"https"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"myhost"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("8081")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("build")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("initialize")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("SiteWhereClient client "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("newBuilder")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("forUser")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"myuser"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"mypassword"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("build")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("initialize")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"interacting-with-sitewhere-object-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interacting-with-sitewhere-object-model","aria-hidden":"true"}},[this._v("#")]),this._v(" Interacting with SiteWhere Object Model")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"global-calls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global-calls","aria-hidden":"true"}},[this._v("#")]),this._v(" Global Calls")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"tenant-calls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tenant-calls","aria-hidden":"true"}},[this._v("#")]),this._v(" Tenant Calls")])}],!1,null,null,null);n.options.__file="README.md";a.default=n.exports}}]);