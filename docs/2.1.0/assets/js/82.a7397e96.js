(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{239:function(t,e,a){"use strict";a.r(e);var n=a(1),i=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("This guide covers administration of global features associated with a SiteWhere\ninstance.")]),t._v(" "),a("p",[t._v("After successful login, the system administration page is displayed. This page supports\ninstance-level configuration such as adding instance users, adding/configuring tenants\nand configuring global microservices.")]),t._v(" "),a("InlineImage",{attrs:{src:"/images/guide/administration/system-administration.png",caption:"System Administration"}}),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("SiteWhere is a multitenant system which means that multiple isolated applications\nmay use the same SiteWhere instance simultaneously. Unlike many other platforms\nwhere multiple tenants share the same database, SiteWhere tenants are completely\nseparated from each other both in persistence of their data and in the underlying\nprocessing pipeline. SiteWhere tenants:")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"global-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#global-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" 📖 Global Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"tenant-management"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tenant-management","aria-hidden":"true"}},[this._v("#")]),this._v(" Tenant Management")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Use separate databases and may use different database infrastructure on a per-tenant basis.")]),this._v(" "),e("li",[this._v("Use separate Kafka processing queues so that in-flight information is not co-mingled.")]),this._v(" "),e("li",[this._v("Use separate "),e("em",[this._v("tenant engines")]),this._v(" which are configured independently and may be started/stopped without affecting other tenants")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Tenant management features may be accessed by clicking "),e("strong",[e("i",{staticClass:"fa fa-layer-group"}),this._v(" Manage Tenants")]),this._v("\nin the toolbar of the global configuration settings.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"adding-a-new-tenant"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-new-tenant","aria-hidden":"true"}},[this._v("#")]),this._v(" Adding a New Tenant")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("New tenants may be added by clicking the "),e("strong",[e("i",{staticClass:"fa fa-plus"})]),this._v(" symbol in the upper-right corner of\nthe tenant list screen")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("This guide is under active development. Check back for updates.")])])}],!1,null,null,null);i.options.__file="README.md";e.default=i.exports}}]);