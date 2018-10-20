(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{186:function(e,t,o){"use strict";o.r(t);var r=o(1),i=Object(r.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[e._m(0),e._v(" "),o("p",[o("a",{attrs:{href:"https://zookeeper.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache ZooKeeper"),o("OutboundLink")],1),e._v(" is used for centralized configuration\nmanagement in SiteWhere microservices. It supports storage of configuration data in a\nhigh-performance, reliable tree structure and may be clustered to offer high availability\nand reliability.")]),e._v(" "),e._m(1),e._v(" "),o("p",[e._v("All SiteWhere microservices rely on Zookeeper to provide configuration information\nat runtime. The microservices use the following environment variables and default\nvalues for connecting to Zookeeper:")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),o("p",[e._v("Once connected to Zookeeper, the instance management microservice is responsible\nfor creating the base of the instance Zookeeper tree based on the following\nvariables and default values:")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),o("p",[e._v('If using Zookeeper within a Docker Compose configuration, the Zookeeper data folder\nshould be mapped to a local volume so that it is not lost when the service is\nstopped. The SiteWhere infrastructure recipes have a common shared data volume\nthat is used to store persistent data from all services such as Zookeeper,\nKafka, and various databases. The data volume may be deleted in order to start\nwith a "clean" system.')])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"apache-zookeeper-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apache-zookeeper-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Apache Zookeeper Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"zookeeper-connectivity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-connectivity","aria-hidden":"true"}},[this._v("#")]),this._v(" Zookeeper Connectivity")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("table",[o("thead",[o("tr",[o("th",[e._v("Setting")]),e._v(" "),o("th",[e._v("Environment Variable")]),e._v(" "),o("th",[e._v("Default Value")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Zookeeper Host")]),e._v(" "),o("td",[e._v("sitewhere.zookeeper.host")]),e._v(" "),o("td",[e._v("localhost")])]),e._v(" "),o("tr",[o("td",[e._v("Zookeeper Port")]),e._v(" "),o("td",[e._v("sitewhere.zookeeper.port")]),e._v(" "),o("td",[e._v("2181")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),t("p",[this._v("The Docker Compose configuration should pass a Zookeeper hostname that can be resolved\non the Docker network that the microservices are attached to. Note that the Zookeeper\nenvironment variables must be passed for every microservice.")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("table",[o("thead",[o("tr",[o("th",[e._v("Setting")]),e._v(" "),o("th",[e._v("Environment Variable")]),e._v(" "),o("th",[e._v("Default Value")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Product Id")]),e._v(" "),o("td",[e._v("sitewhere.product.id")]),e._v(" "),o("td",[e._v("sitewhere")])]),e._v(" "),o("tr",[o("td",[e._v("Instance Id")]),e._v(" "),o("td",[e._v("sitewhere.instance.id")]),e._v(" "),o("td",[e._v("sitewhere1")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("For the default system values, the Zookeeper tree will be rooted at "),t("code",[this._v("sitewhere/sitewhere1")]),this._v("\nand all other instance configuration data will be located relative to that root. If\nmultiple instances of SiteWhere are to be run concurrently using the same Zookeeper cluster,\nthey should provide different values for "),t("code",[this._v("sitewhere.instance.id")]),this._v(" so that the configuration data\ndoes not overlap. This can be accomplished by setting the "),t("code",[this._v("sitewhere.instance.id")]),this._v("\nenvironment variable via the Docker Compose configuration.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),t("p",[this._v("All of the microservices intended to run in the same instance should use the same\nvalues for "),t("code",[this._v("sitewhere.product.id")]),this._v(" and "),t("code",[this._v("sitewhere.instance.id")]),this._v(".")])])}],!1,null,null,null);i.options.__file="zookeeper-configuration.md";t.default=i.exports}}]);