(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{209:function(t,e,a){"use strict";a.r(e);var s=a(1),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("Seo"),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("This examples assume that you get your tenant authentication either by")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"java-api-scheduled-jobs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-api-scheduled-jobs","aria-hidden":"true"}},[this._v("#")]),this._v(" 📖 Java API - Scheduled Jobs")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This section contains the documentation and examples of the end point "),e("code",[this._v("jobs")]),this._v(" of SiteWhere Java API.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("ITenantAuthentication tenantAuthentication "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("defaultTenant")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("or by using other that the "),e("code",[this._v("default")]),this._v(" tenant.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("ITenantAuthentication tenantAuthentication "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SiteWhereClient"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("forTenant")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"token"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"auth"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"searching-for-scheduled-jobs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#searching-for-scheduled-jobs","aria-hidden":"true"}},[this._v("#")]),this._v(" Searching for Scheduled Jobs")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("For searching "),a("code",[t._v("ScheduledJob")]),t._v(" you need to provide an instance of "),a("code",[t._v("ScheduledJobSearchCriteria")]),t._v(" and\nan instance of "),a("code",[t._v("ScheduledJobResponseFormat")]),t._v(" to the method  "),a("code",[t._v("listScheduledJobs")]),t._v(" of "),a("code",[t._v("com.sitewhere.spi.ISiteWhereClient")]),t._v(".\nThe example below shows how you can query SiteWhere REST API to list the first page of 100 results of device groups.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("ScheduledJobSearchCriteria searchCriteria "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ScheduledJobSearchCriteria")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nScheduledJobResponseFormat responseFormat "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ScheduledJobResponseFormat")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nSearchResults"),a("span",{attrs:{class:"token generics function"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ScheduledJob"),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" results "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("listScheduledJobs")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" searchCriteria"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" responseFormat"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("ScheduledJobSearchCriteria")]),this._v(" defines the search criteria for quering "),e("code",[this._v("ScheduledJob")]),this._v(", the following table shows the properties, with\nthier type and description, that can be set to filter the results.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Property")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("setPageNumber")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Integer")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Get offset from beginning of dataset.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("setPageSize")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Integer")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Get number of records per page of data.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Also you can control what information is return in the results by providing an instance of "),e("code",[this._v("ScheduledJobResponseFormat")]),this._v(".\nThe following table shows the properties that can be set to control the result format of the response.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Property")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("setIncludeContext")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("Boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Indicates if context is to be included in the response.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"retrieving-an-scheduled-job"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#retrieving-an-scheduled-job","aria-hidden":"true"}},[this._v("#")]),this._v(" Retrieving an Scheduled Job")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To retrieve an "),e("code",[this._v("ScheduledJob")]),this._v(" by its token use the following example.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("String token "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// GUID for the ScheduledJob")]),t._v("\nScheduledJob schedule "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getScheduledJobByToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"creating-an-scheduled-job"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-scheduled-job","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating an Scheduled Job")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("For creating an "),a("code",[t._v("ScheduledJob")]),t._v(" you need to call "),a("code",[t._v("createScheduledJob")]),t._v(" passing the "),a("code",[t._v("ITenantAuthentication")]),t._v(" object and an\n"),a("code",[t._v("ScheduledJobCreateRequest")]),t._v(" build like in the folling example.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("String token "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// GUID for the ScheduledJob")]),t._v("\nScheduledJobCreateRequest createRequest "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ScheduledJobCreateRequest")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setJobState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ScheduledJobState"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Active"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setJobType")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ScheduledJobType"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BatchCommandInvocation"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setScheduleToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setJobConfiguration")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Collections"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("emptyMap")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Create the ScheduledJob")]),t._v("\nScheduledJob createdScheduledJob "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createScheduledJob")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" createRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"updating-an-existing-scheduled-job"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updating-an-existing-scheduled-job","aria-hidden":"true"}},[this._v("#")]),this._v(" Updating an existing Scheduled Job")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("For updating an "),a("code",[t._v("ScheduledJob")]),t._v(" you need to call "),a("code",[t._v("updateScheduledJob")]),t._v(" passing the "),a("code",[t._v("ITenantAuthentication")]),t._v(" object,\nthe "),a("code",[t._v("token")]),t._v(" of the existing "),a("code",[t._v("ScheduledJob")]),t._v(" and an "),a("code",[t._v("ScheduledJobCreateRequest")]),t._v(" build like in the folling example.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("String token "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// GUID for the ScheduledJob")]),t._v("\nScheduledJobCreateRequest createRequest "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ScheduledJobCreateRequest")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setJobState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ScheduledJobState"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Active"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setJobType")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ScheduledJobType"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BatchCommandInvocation"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setScheduleToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setJobConfiguration")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Collections"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("emptyMap")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Update the ScheduledJob")]),t._v("\nScheduledJob updatedScheduledJob "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("updateScheduledJob")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" updateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"deleting-an-existing-scheduled-job"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deleting-an-existing-scheduled-job","aria-hidden":"true"}},[this._v("#")]),this._v(" Deleting an existing Scheduled Job")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("For deleting an existing "),a("code",[t._v("ScheduledJob")]),t._v(" you need to call "),a("code",[t._v("deleteScheduledJob")]),t._v(" method of "),a("code",[t._v("com.sitewhere.spi.ISiteWhereClient")]),t._v("\nproviding the "),a("code",[t._v("token")]),t._v(" of the schedule you want to delete, like the following example.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("String token "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// GUID for the ScheduledJob")]),t._v("\nScheduledJob deletedScheduledJob "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("deleteScheduledJob")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tenantAuthentication"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="README.md";e.default=n.exports}}]);