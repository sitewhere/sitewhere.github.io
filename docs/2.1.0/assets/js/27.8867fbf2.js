(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{285:function(t,e,s){"use strict";s.r(e);var a=s(1),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("Seo"),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("This examples assume that you get your tenant authentication either by")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"java-api-customer-type-management"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-api-customer-type-management","aria-hidden":"true"}},[this._v("#")]),this._v(" 📖 Java API - Customer Type Management")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This section contains the documentation and examples of the end point "),e("code",[this._v("customertypes")]),this._v(" of SiteWhere Java API.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("ITenantAuthentication tenantAuthentication "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("defaultTenant")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("or by using other that the "),e("code",[this._v("default")]),this._v(" tenant.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("ITenantAuthentication tenantAuthentication "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("forTenant")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"token"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"auth"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"searching-for-customer-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#searching-for-customer-types","aria-hidden":"true"}},[this._v("#")]),this._v(" Searching for Customer Types")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("For searching "),s("code",[t._v("Customer Types")]),t._v(" you need to provide an instance of "),s("code",[t._v("CustomerTypeSearchCriteria")]),t._v("  to the method\n"),s("code",[t._v("listCustomerTypes")]),t._v(" of "),s("code",[t._v("com.sitewhere.spi.ISiteWhereClient")]),t._v(". The example below shows how you can query SiteWhere REST API to\nlist the first page of 100 results of customer types.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("CustomerTypeSearchCriteria searchCriteria "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("CustomerTypeSearchCriteria")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("100")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nCustomerTypeResponseFormat responseFormat "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("CustomerTypeResponseFormat")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nSearchResults"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("CustomerType"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" results "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("listCustomerTypes")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" searchCriteria"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" responseFormat"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("CustomerTypeSearchCriteria")]),this._v(" defines the search criteria for quering "),e("code",[this._v("CustomerType")]),this._v(", the following table shows the properties, with\nthier type and description, that can be set to filter the results.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Property")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("setPageNumber")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Integer")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Get offset from beginning of dataset.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("setPageSize")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Integer")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Get number of records per page of data.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Also you can control what information is return in the results by providing an instance of "),e("code",[this._v("CustomerResponseFormat")]),this._v(".\nThe following table shows the properties that can be set to control the result format of the response.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Property")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("setIncludeContainedCustomerTypes")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("Boolean")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Indicates if contained customer types are to be returned.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"creating-an-customer-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-customer-type","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating an Customer Type")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("For creating an "),s("code",[t._v("CustomerType")]),t._v(" you need to call "),s("code",[t._v("createCustomerType")]),t._v(" passing the "),s("code",[t._v("ITenantAuthentication")]),t._v(" object and an\n"),s("code",[t._v("CustomerTypeCreateRequest")]),t._v(" build like in the folling example.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("String token "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// GUID for the Customer Type")]),t._v("\nCustomerTypeCreateRequest"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder builder "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v("  "),s("span",{attrs:{class:"token class-name"}},[t._v("CustomerTypeCreateRequest"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"my customer type"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbuilder"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("withDescription")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"Some description"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nCustomerTypeCreateRequest createRequest "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("build")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Create the Customer Type")]),t._v("\nCustomerType createdCustomerType "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createCustomerType")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" createRequest"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"updating-an-existing-customer-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updating-an-existing-customer-type","aria-hidden":"true"}},[this._v("#")]),this._v(" Updating an existing Customer Type")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("For updating an "),s("code",[t._v("CustomerType")]),t._v(" you need to call "),s("code",[t._v("updateCustomerType")]),t._v(" passing the "),s("code",[t._v("ITenantAuthentication")]),t._v(" object,\nthe "),s("code",[t._v("token")]),t._v(" of the existing "),s("code",[t._v("CustomerType")]),t._v(" and an "),s("code",[t._v("CustomerTypeCreateRequest")]),t._v(" build like in the folling example.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("CustomerTypeCreateRequest"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder builder "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v("  "),s("span",{attrs:{class:"token class-name"}},[t._v("CustomerTypeCreateRequest"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"my customer type"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbuilder"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("withDescription")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"Some description"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nCustomerTypeCreateRequest updateRequest "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("build")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Update the Customer Type")]),t._v("\nCustomerType updatedCustomer "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("updateCustomerType")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" updateRequest"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"deleting-an-existing-customer-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deleting-an-existing-customer-type","aria-hidden":"true"}},[this._v("#")]),this._v(" Deleting an existing Customer Type")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("For deleting an existing "),s("code",[t._v("CustomerType")]),t._v(" you need to call "),s("code",[t._v("deleteCustomerType")]),t._v(" method of "),s("code",[t._v("com.sitewhere.spi.ISiteWhereClient")]),t._v("\nproviding the "),s("code",[t._v("token")]),t._v(" of the customer type you want to delete, like the following example.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("String token "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// GUID for the Customer Type")]),t._v("\nCustomerType deletedCustomerType "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("deleteCustomerType")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="README.md";e.default=n.exports}}]);