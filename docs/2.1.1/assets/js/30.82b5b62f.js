(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{207:function(t,e,n){"use strict";n.r(e);var a=n(1),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("To install the Postman Collection, you must first install the Postman App for Windows, Mac, or Chrome. You can download any of these from "),n("a",{attrs:{href:"https://www.getpostman.com/apps",target:"_blank",rel:"noopener noreferrer"}},[t._v("Postman Apps"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("Next, install the Collection by clicking on the relevant Run in Postman button.")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://app.getpostman.com/run-collection/78d8f4507adfab6ed0d8",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://run.pstmn.io/button.svg",alt:"Run in Postman"}}),n("OutboundLink")],1)]),t._v(" "),t._m(2),t._v(" "),n("p",[t._v("An environment is a set of variables you can use in your Postman requests. You can use environments to group related sets of values together and manage access to shared Postman data.")]),t._v(" "),n("p",[t._v("To use the imported collection, you must create a Postman Environment. See "),n("a",{attrs:{href:"https://learning.postman.com/docs/postman/variables-and-environments/managing-environments/#creating-environments",target:"_blank",rel:"noopener noreferrer"}},[t._v("Create Environment"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("This environment must have defined the following variables. See "),n("a",{attrs:{href:"https://learning.postman.com/docs/postman/variables-and-environments/managing-environments/#adding-environment-variables",target:"_blank",rel:"noopener noreferrer"}},[t._v("Add environment variables"),n("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),n("p",[t._v("The following image is a request example of obtaining a valid token")]),t._v(" "),n("InlineImage",{attrs:{src:"/images/postman/JWT_Request.png",caption:"JWT Request"}}),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),n("p",[t._v("When you request a particular tenant service, you need to add two additional headers to your Request. For that you use the following environment variables:")]),t._v(" "),t._m(11),t._v(" "),n("p",[t._v("In the postman collection if you edit the collection, you will see this in Pre-Request Script Tab.")]),t._v(" "),n("InlineImage",{attrs:{src:"/images/postman/edit_collection.png",caption:"Edit Collection"}}),t._v(" "),n("p",[t._v("This script assigns the values ​​to the environment variables and is inherited for all the requests in the collection, indicating the authentication and the tenant on which the request is made.")]),t._v(" "),t._m(12)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"postman-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postman-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Postman Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"install-postman-collection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-postman-collection","aria-hidden":"true"}},[this._v("#")]),this._v(" Install Postman Collection")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"postman-environment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postman-environment","aria-hidden":"true"}},[this._v("#")]),this._v(" Postman Environment")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("Variable")]),t._v(" "),n("th",[t._v("Sample Value")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("baseUrl")]),t._v(" "),n("td",[t._v("http://server:port/sitewhere/api")])]),t._v(" "),n("tr",[n("td",[t._v("tokenBaseUrl")]),t._v(" "),n("td",[t._v("http://server:port/sitewhere")])]),t._v(" "),n("tr",[n("td",[t._v("user")]),t._v(" "),n("td",[t._v("admin")])]),t._v(" "),n("tr",[n("td",[t._v("tenant")]),t._v(" "),n("td",[t._v("default")])]),t._v(" "),n("tr",[n("td",[t._v("tenantAuth")]),t._v(" "),n("td",[t._v("sitewhere1234567890")])]),t._v(" "),n("tr",[n("td",[t._v("token")]),t._v(" "),n("td")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"security"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#security","aria-hidden":"true"}},[this._v("#")]),this._v(" Security")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To make a request, you must first obtain a JWT token to authorize and authenticate the user, so that he can make requests. For this, the collection has an Authorization folder with a method called JWT."),e("br"),this._v("\nThis method uses an authorization of the Basic type, which requires username and password, this password must be entered in the Method authorization section in Postman, instead the username is obtained from the environment variable user."),e("br"),this._v("\nThis method uses the following variables")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("Variable")]),t._v(" "),n("th",[t._v("Sample Value")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("tokenBaseUrl")]),t._v(" "),n("td",[t._v("http://server:port/sitewhere")])]),t._v(" "),n("tr",[n("td",[t._v("user")]),t._v(" "),n("td",[t._v("admin")])]),t._v(" "),n("tr",[n("td",[t._v("token")]),t._v(" "),n("td")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The tokenBaseUrl variable is where your Sitewhere REST API instance is running."),e("br"),this._v("\nThe user variable is configured in Sitewhere security."),e("br"),this._v("\nThe token variable is automatically obtained and assigned after a successful request.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If the answer is successful in the test section the "),e("em",[this._v("token")]),this._v(" variable is assigned, using the following script")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" data"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("one")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-sitewhere-jwt'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    pm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"tenant-request-headers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tenant-request-headers","aria-hidden":"true"}},[this._v("#")]),this._v(" Tenant Request Headers")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("Variable")]),t._v(" "),n("th",[t._v("Sample Value")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("tenant")]),t._v(" "),n("td",[t._v("default")])]),t._v(" "),n("tr",[n("td",[t._v("tenantAuth")]),t._v(" "),n("td",[t._v("sitewhere1234567890")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("pm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'X-SiteWhere-Tenant-Id'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tenant'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \npm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'X-SiteWhere-Tenant-Auth'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tenantAuth'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" tokenStr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Bearer '")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" pm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \npm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tokenStr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])])}],!1,null,null,null);s.options.__file="postman-configuration.md";e.default=s.exports}}]);