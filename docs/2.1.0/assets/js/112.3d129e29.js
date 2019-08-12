(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{209:function(e,t,r){"use strict";r.r(t);var a=r(1),s=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("Seo"),e._v(" "),r("p",[e._v("SiteWhere is a distributed system which is implemented in a microservice architecture\nand orchestrated using a "),r("a",{attrs:{href:"https://kubernetes.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes"),r("OutboundLink")],1),e._v(" infrastructure. SiteWhere\nuses "),r("a",{attrs:{href:"https://helm.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helm"),r("OutboundLink")],1),e._v(" to provide a simple, parameterized approach for launching\nand configuring the system. A separate\n"),r("a",{attrs:{href:"https://github.com/sitewhere/sitewhere-k8s",target:"_blank",rel:"noopener noreferrer"}},[e._v("sitewhere-k8s"),r("OutboundLink")],1),e._v(" repository contains\nthe Helm charts, which are released independently of the core platform\nlifecycle.")]),e._v(" "),r("p",[e._v("This guide covers the artifacts and processes invoved in deploying a SiteWhere\ninstance, including infrastructure components, data persistence technologies\nand the microservices which implement system functionality.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),r("p",[e._v("The SiteWhere Helm chart covers the following functional areas:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/sitewhere/sitewhere-k8s/tree/master/charts/sitewhere-infra-core",target:"_blank",rel:"noopener noreferrer"}},[e._v("SiteWhere Core Infrastructure"),r("OutboundLink")],1),e._v(" (e.g. Kafka, Zookeeper)")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/sitewhere/sitewhere-k8s/tree/master/charts/sitewhere-infra-database",target:"_blank",rel:"noopener noreferrer"}},[e._v("SiteWhere Database Infrastructure"),r("OutboundLink")],1),e._v(" (e.g. MongoDB, InfluxDB, Cassandra)")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/sitewhere/sitewhere-k8s/tree/master/charts/sitewhere",target:"_blank",rel:"noopener noreferrer"}},[e._v("SiteWhere Microservices"),r("OutboundLink")],1),e._v(" (Core system microservices)")])]),e._v(" "),r("p",[e._v("Note that the infrastructure charts are packaged separately and included as\ndependencies for the primary SiteWhere chart.")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),r("p",[e._v("Before installing the SiteWhere Helm charts, add the\n"),r("a",{attrs:{href:"https://sitewhere.io/helm-charts/index.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("SiteWhere helm repository"),r("OutboundLink")],1),e._v("\nto your Helm client.")]),e._v(" "),e._m(6),r("p",[e._v("Afterward, update your local Helm repository to pull the latest\nchart information from the index.")]),e._v(" "),e._m(7),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),r("p",[e._v("Please refere to "),r("router-link",{attrs:{to:"./common-issues.html"}},[e._v("Common Issues")]),e._v(" if you a problem with the Deployment of SiteWhere.")],1),e._v(" "),e._m(11),e._v(" "),r("p",[e._v("To install a version of the SiteWhere chart that uses less\nhighly-available components in order to reduce the memory footprint\nand startup time, use the following command instead.")]),e._v(" "),e._m(12),e._v(" "),e._m(13),e._m(14),e._v(" "),e._m(15),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),r("p",[e._v("This will remove sitewhere infrastructure and microservices.")]),e._v(" "),e._m(19),e._v(" "),r("p",[e._v("To remove SiteWhere Persistence Volume Claims, run the command:")]),e._v(" "),e._m(20),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),r("p",[e._v("Port-forward Kafka Manager UI")]),e._v(" "),e._m(24)],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"deployment-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deployment-guide","aria-hidden":"true"}},[this._v("#")]),this._v(" Deployment Guide")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Kubernetes 1.8+")]),this._v(" "),t("li",[this._v("Rook v0.9+")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"chart-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chart-details","aria-hidden":"true"}},[this._v("#")]),this._v(" Chart Details")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"installing-the-chart"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-chart","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing the Chart")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"add-the-sitewhere-helm-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-the-sitewhere-helm-repository","aria-hidden":"true"}},[this._v("#")]),this._v(" Add the SiteWhere Helm Repository")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("helm repo add sitewhere https://sitewhere.io/helm-charts\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("helm repo update\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"install-sitewhere-chart"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-sitewhere-chart","aria-hidden":"true"}},[this._v("#")]),this._v(" Install SiteWhere Chart")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To install the chart with the release name "),t("code",[this._v("sitewhere")]),this._v(" execute:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("helm "),t("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" --name sitewhere sitewhere/sitewhere\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"install-on-a-developer-machine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-on-a-developer-machine","aria-hidden":"true"}},[this._v("#")]),this._v(" Install on a Developer Machine")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You can install SiteWhere on a Developer Machine, using the non-HA configuration of MongoDB, Apache Kafka\nand Apache Zookeeper. In order to do this, you need to clone "),t("code",[this._v("sitewhere-k8s")]),this._v(" repository, using")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[this._v("git")]),this._v(" clone https://github.com/sitewhere/sitewhere-k8s.git\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Then, on the "),t("code",[this._v("charts")]),this._v(" folder run the command:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("helm "),t("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" --name sitewhere \\\n  -f ./sitewhere/dev-values.yaml \\\n  sitewhere\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"remove-installed-helm-chart"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remove-installed-helm-chart","aria-hidden":"true"}},[this._v("#")]),this._v(" Remove Installed Helm Chart")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The following command removes the artifacts added with the SiteWhere chart\ninstallation and releases the "),t("code",[this._v("sitewhere")]),this._v(" chart name for reuse.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("helm del sitewhere --purge\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"delete-sitewhere-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete-sitewhere-data","aria-hidden":"true"}},[this._v("#")]),this._v(" Delete SiteWhere Data")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("kubectl delete pvc -l release"),t("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("sitewhere\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"install-kafka-manager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-kafka-manager","aria-hidden":"true"}},[this._v("#")]),this._v(" Install Kafka Manager")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Assuming your sitewhere install name is "),t("code",[this._v("sitewhere")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("helm "),t("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" --name kafka-manager \\\n  --set zkHosts"),t("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("sitewhere-zookeeper:2181 stable/kafka-manager\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("kubectl port-forward deployment/kafka-manager-kafka-manager 9000 9000\n")])])])}],!1,null,null,null);s.options.__file="README.md";t.default=s.exports}}]);