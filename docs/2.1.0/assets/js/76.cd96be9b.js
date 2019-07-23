(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{227:function(t,s,e){"use strict";e.r(s);var a=e(1),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("Seo"),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("This examples assume that you get your tenant authentication either by")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18)],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"java-api-assets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-api-assets","aria-hidden":"true"}},[this._v("#")]),this._v(" 📖 Java API - Assets")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This section contains the documentation and examples of the end point "),s("code",[this._v("assets")]),this._v(" of SiteWhere Java API.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("ITenantAuthentication tenantAuthentication "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("defaultTenant")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("or by using other that the "),s("code",[this._v("default")]),this._v(" tenant.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("ITenantAuthentication tenantAuthentication "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("forTenant")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v('"token"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"auth"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"searching-for-assets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#searching-for-assets","aria-hidden":"true"}},[this._v("#")]),this._v(" Searching for Assets")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("For searching "),e("code",[t._v("Asset")]),t._v(" you need to provide an instance of "),e("code",[t._v("AssetSearchCriteria")]),t._v(" to the method\n"),e("code",[t._v("listAssets")]),t._v(" of "),e("code",[t._v("com.sitewhere.spi.ISiteWhereClient")]),t._v(". The example below shows how you can query SiteWhere REST API to list the first\npage of 100 results of assets.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("AssetSearchCriteria searchCriteria "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("AssetSearchCriteria")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token number"}},[t._v("1")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token number"}},[t._v("100")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nSearchResults"),e("span",{attrs:{class:"token generics function"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Asset"),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" results "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("listAssets")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" searchCriteria"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("AssetSearchCriteria")]),this._v(" defines the search criteria for quering "),s("code",[this._v("Asset")]),this._v(", the following table shows the properties, with\nthier type and description, that can be set to filter the results.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Property")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getAssetTypeToken")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("String")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Only match assets of the given type.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getIncludeAssetType")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("Boolean")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Indicates if asset type are to be returned.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("setPageNumber")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("Integer")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Get offset from beginning of dataset.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("setPageSize")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("Integer")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Get number of records per page of data.")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"creating-an-asset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-asset","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating an Asset")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("For creating an "),e("code",[t._v("Asset")]),t._v(" you need to call "),e("code",[t._v("createAsset")]),t._v(" passing the "),e("code",[t._v("ITenantAuthentication")]),t._v(" object and an\n"),e("code",[t._v("AssetCreateRequest")]),t._v(" build like in the folling example.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("String assetTypeToken "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"cat320EL"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                "),e("span",{attrs:{class:"token comment"}},[t._v("// Token of the asset type")]),t._v("\nString token "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// GUID for the Asset")]),t._v("\nAssetCreateRequest"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder builder "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("AssetCreateRequest"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" assetTypeToken"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"my asset"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{attrs:{class:"token comment"}},[t._v("// Build the Create Request")]),t._v("\nAssetCreateRequest createRequest "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("build")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{attrs:{class:"token comment"}},[t._v("// Create the Asset")]),t._v("\nAsset createdAsset "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("createAsset")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" createRequest"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"updating-an-existing-asset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updating-an-existing-asset","aria-hidden":"true"}},[this._v("#")]),this._v(" Updating an existing Asset")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("For updating an "),e("code",[t._v("Asset")]),t._v(" you need to call "),e("code",[t._v("updateAsset")]),t._v(" passing the "),e("code",[t._v("ITenantAuthentication")]),t._v(" object,\nthe "),e("code",[t._v("token")]),t._v(" of the existing "),e("code",[t._v("Asset")]),t._v(" and an "),e("code",[t._v("AssetCreateRequest")]),t._v(" build like in the folling example.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("String assetTypeToken "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"cat320EL"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                "),e("span",{attrs:{class:"token comment"}},[t._v("// Token of the asset type")]),t._v("\nString token "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// GUID for the Asset")]),t._v("\nAssetCreateRequest"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder builder "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("AssetCreateRequest"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" assetTypeToken"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"my updated asset"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{attrs:{class:"token comment"}},[t._v("// Build the Create Request")]),t._v("\nAssetCreateRequest updateRequest "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("build")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{attrs:{class:"token comment"}},[t._v("// Update the Asset")]),t._v("\nAsset updatedAsset "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("updateAsset")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" updateRequest"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"deleting-an-existing-asset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deleting-an-existing-asset","aria-hidden":"true"}},[this._v("#")]),this._v(" Deleting an existing Asset")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("For deleting an existing "),e("code",[t._v("Asset")]),t._v(" you need to call "),e("code",[t._v("deleteAsset")]),t._v(" method of "),e("code",[t._v("com.sitewhere.spi.ISiteWhereClient")]),t._v("\nproviding the "),e("code",[t._v("token")]),t._v(" of the asset you want to delete, like the following example.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("String token "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// GUID for the Asset")]),t._v("\nAsset deletedAsset "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("deleteAsset")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="README.md";s.default=n.exports}}]);