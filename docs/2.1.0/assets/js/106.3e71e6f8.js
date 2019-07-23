(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{215:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("Seo"),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),a("p",[t._v("The following table show the autorities you can assign to a user")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12)],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"java-api-users"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-api-users","aria-hidden":"true"}},[this._v("#")]),this._v(" 📖 Java API - Users")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This section contains the documentation and examples of the end point "),s("code",[this._v("users")]),this._v(" of SiteWhere Java API.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"listing-system-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#listing-system-user","aria-hidden":"true"}},[this._v("#")]),this._v(" Listing system user")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("SearchResults"),a("span",{attrs:{class:"token generics function"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("User"),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" users "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("listUsers")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"creating-a-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-user","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating a User")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Create a UserCreateRequest")]),t._v("\nUserCreateRequest createRequest "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("UserCreateRequest")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setFirstName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"John"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setLastName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Doe"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setStatus")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AccountStatus"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Active"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setUsername")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"johndoe"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setPassword")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"1234"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nList"),a("span",{attrs:{class:"token generics function"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" authorities "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ArrayList")]),a("span",{attrs:{class:"token generics function"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nauthorities"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"GRP_SERVER"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setAuthorities")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("authorities"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Create the User")]),t._v("\nUser createdUser "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createUser")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("createRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Authority")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("GRP_SERVER")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Server administration")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("AUTH_VIEW_SERVER_INFO")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("View global server information")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("GRP_ACCESS")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Remote access")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("AUTH_REST")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("REST services access")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("AUTH_ADMIN_CONSOLE")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Administrative console login")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("GRP_USERS")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Users")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("AUTH_ADMINISTER_USERS")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Administer all users")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("AUTH_ADMINISTER_USER_SELF")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Administer own user profile")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("GRP_TENANTS")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Tenants")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("AUTH_ADMINISTER_TENANTS")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Administer all tenants")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("AUTH_ADMINISTER_TENANT_SELF")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Administer own tenant")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("GRP_SCHEDULES")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Schedules")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("AUTH_ADMINISTER_SCHEDULES")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Administer schedules")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("AUTH_SCHEDULE_COMMANDS")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Schedule batch or individial commands")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"updating-a-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updating-a-user","aria-hidden":"true"}},[this._v("#")]),this._v(" Updating a User")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Create a UserCreateRequest")]),t._v("\nUserCreateRequest createRequest "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("UserCreateRequest")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setToken")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setFirstName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"John"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setLastName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Doe"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setStatus")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AccountStatus"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Active"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setUsername")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"johndoe"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setPassword")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"1234"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nList"),a("span",{attrs:{class:"token generics function"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" authorities "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ArrayList")]),a("span",{attrs:{class:"token generics function"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nauthorities"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"GRP_SERVER"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncreateRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setAuthorities")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("authorities"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Update the User")]),t._v("\nUser updatedUser "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("updateUser")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("createRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"deleting-a-user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deleting-a-user","aria-hidden":"true"}},[this._v("#")]),this._v(" Deleting a User")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("User deletedUser "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("deleteUser")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"getting-user-authorities"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-user-authorities","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting User Authorities")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("SearchResults"),a("span",{attrs:{class:"token generics function"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("GrantedAuthority"),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" auths "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("listUserAuthorities")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"e2ce4ffe-2d9c-4103-b519-1e07c58a2886"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="README.md";s.default=e.exports}}]);