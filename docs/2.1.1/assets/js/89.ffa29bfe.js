(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{238:function(t,e,a){"use strict";a.r(e);var s=a(1),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("Seo"),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("This examples assume that you get your tenant authentication either by")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"java-api-area-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-api-area-types","aria-hidden":"true"}},[this._v("#")]),this._v(" Java API - Area Types")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This section contains the documentation and examples of the end point "),e("code",[this._v("areatypes")]),this._v(" of SiteWhere Java API.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("ITenantAuthentication tenantAuthentication "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defaultTenant")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("or by using other that the "),e("code",[this._v("default")]),this._v(" tenant.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("ITenantAuthentication tenantAuthentication "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forTenant")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auth"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"searching-for-area-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#searching-for-area-types","aria-hidden":"true"}},[this._v("#")]),this._v(" Searching for Area Types")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("For searching "),a("code",[t._v("Area Types")]),t._v(" you need to provide an instance of "),a("code",[t._v("AreaTypeSearchCriteria")]),t._v(" to the method\n"),a("code",[t._v("listAreaTypes")]),t._v(" of "),a("code",[t._v("com.sitewhere.spi.ISiteWhereClient")]),t._v(". The example below shows how you can query SiteWhere REST API to\nlist the first page of 100 results of area types.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("AreaTypeSearchCriteria searchCriteria "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AreaTypeSearchCriteria")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nSearchResults"),a("span",{pre:!0,attrs:{class:"token generics function"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("AreaType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" results "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listAreaTypes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" searchCriteria"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("AreaTypeSearchCriteria")]),this._v(" defines the search criteria for quering "),e("code",[this._v("AreaType")]),this._v(", the following table shows the properties, with\nthier type and description, that can be set to filter the results.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Property")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("setIncludeContainedAreaTypes")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Indicates if contained area types are to be returned.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("setPageNumber")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Integer")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Get offset from beginning of dataset.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("setPageSize")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Integer")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Get number of records per page of data.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"retrieving-an-area-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#retrieving-an-area-type","aria-hidden":"true"}},[this._v("#")]),this._v(" Retrieving an Area Type")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To retrieve an "),e("code",[this._v("AreaType")]),this._v(" by its token use the following example.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("String token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// GUID for the AreaType")]),t._v("\nAreaType area "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAreaTypeByToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"creating-an-area-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-area-type","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating an Area Type")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("For creating an "),a("code",[t._v("AreaType")]),t._v(" you need to call "),a("code",[t._v("createAreaType")]),t._v(" passing the "),a("code",[t._v("ITenantAuthentication")]),t._v(" object and an\n"),a("code",[t._v("AreaTypeCreateRequest")]),t._v(" build like in the folling example.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("String token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// GUID for the Area Type")]),t._v("\nAreaTypeCreateRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder builder "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AreaTypeCreateRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my area type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbuilder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("withDescription")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Some description"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nAreaTypeCreateRequest createRequest "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create the Area Type")]),t._v("\nAreaType createdAreaType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createAreaType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" createRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"updating-an-existing-area-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updating-an-existing-area-type","aria-hidden":"true"}},[this._v("#")]),this._v(" Updating an existing Area Type")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("For updating an "),a("code",[t._v("AreaType")]),t._v(" you need to call "),a("code",[t._v("updateAreaType")]),t._v(" passing the "),a("code",[t._v("ITenantAuthentication")]),t._v(" object,\nthe "),a("code",[t._v("token")]),t._v(" of the existing "),a("code",[t._v("AreaType")]),t._v(" and an "),a("code",[t._v("AreaTypeCreateRequest")]),t._v(" build like in the folling example.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("AreaTypeCreateRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder builder "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AreaTypeCreateRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my area type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbuilder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("withDescription")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Some description"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nAreaTypeCreateRequest updateRequest "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Update the Area Type")]),t._v("\nAreaType updatedArea "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateAreaType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" updateRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"deleting-an-existing-area-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deleting-an-existing-area-type","aria-hidden":"true"}},[this._v("#")]),this._v(" Deleting an existing Area Type")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("For deleting an existing "),a("code",[t._v("AreaType")]),t._v(" you need to call "),a("code",[t._v("deleteAreaType")]),t._v(" method of "),a("code",[t._v("com.sitewhere.spi.ISiteWhereClient")]),t._v("\nproviding the "),a("code",[t._v("token")]),t._v(" of the area type you want to delete, like the following example.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("String token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// GUID for the Area Type")]),t._v("\nAreaType deletedAreaType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteAreaType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="README.md";e.default=n.exports}}]);