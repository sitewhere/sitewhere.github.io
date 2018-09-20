(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{190:function(e,a,t){"use strict";t.r(a);var r=t(1),n=Object(r.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[e._m(0),e._v(" "),t("p",[t("a",{attrs:{href:"https://kafka.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Kafka"),t("OutboundLink")],1),e._v(" is used by SiteWhere to provide a\nhigh-performance data processing pipeline between microservices. Kafka relies\non Apache Zookeeper for saving its state and is generally configured to share\nthe same Zookeeper instance used for storing SiteWhere configuration data.")]),e._v(" "),e._m(1),e._v(" "),t("p",[e._v("All SiteWhere microservices have some level of reliance on Kafka and must\nbe configured to access a shared Kafka cluster. The microservices use the\nfollowing environment variables and default values for connecting to Kafka:")]),e._v(" "),e._m(2),e._v(" "),t("p",[e._v("The information Kafka uses to connect to Zookeeper is configured in the Docker\nCompose file service descriptor (or in the Kafka configuration if not running\nKafka within Docker).")]),e._v(" "),e._m(3),e._v(" "),t("p",[e._v('If using Kafka within a Docker Compose configuration, the Kafka data folder\nshould be mapped to a local volume so that it is not lost when the service is\nstopped. The SiteWhere infrastructure recipes have a common shared data volume\nthat is used to store persistent data from all services such as Zookeeper,\nKafka, and various databases. The data volume may be deleted in order to start\nwith a "clean" system.')])])},[function(){var e=this.$createElement,a=this._self._c||e;return a("h1",{attrs:{id:"apache-kafka-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache-kafka-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Apache Kafka Configuration")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"kafka-connectivity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kafka-connectivity","aria-hidden":"true"}},[this._v("#")]),this._v(" Kafka Connectivity")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[e._v("Setting")]),e._v(" "),t("th",[e._v("Environment Variable")]),e._v(" "),t("th",[e._v("Default Value")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Kafka Bootstrap Servers")]),e._v(" "),t("td",[e._v("sitewhere.kafka.bootstrap.servers")]),e._v(" "),t("td",[e._v("kafka:9092")])])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"kafka-data-persistence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kafka-data-persistence","aria-hidden":"true"}},[this._v("#")]),this._v(" Kafka Data Persistence")])}],!1,null,null,null);n.options.__file="kafka-configuration.md";a.default=n.exports}}]);