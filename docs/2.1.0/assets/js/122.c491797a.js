(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{254:function(e,t,s){"use strict";s.r(t);var r=s(1),a=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("Seo"),e._v(" "),s("p",[e._v("In recent years, there has been a strong push to move from older methodologies\nof delivering monolithic software to an approach that supports agile, portable,\ncloud-capable applications that are easy to scale.")]),e._v(" "),s("p",[e._v("The "),s("a",{attrs:{href:"https://www.heroku.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Heroku"),s("OutboundLink")],1),e._v("\nteam came up with a list of twelve factors that they considered important in moving\ntoward these goals. They released a "),s("a",{attrs:{href:"https://12factor.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("website"),s("OutboundLink")],1),e._v(" that\ndescribes the twelve factors in detail and gives examples of how to build, manage,\nand deploy applications that conform to the approach. The sections below discuss\nhow SiteWhere's architecture and deployment process align with those of a\ntwelve-factor application.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("SiteWhere uses a "),s("a",{attrs:{href:"https://github.com/sitewhere/sitewhere",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub repository"),s("OutboundLink")],1),e._v(" for versioning\nits source code. Each microservice is separated into its own Gradle submodule with common code\npushed into libraries that are included as artifacts in the Gradle build process.\nThe same codebase is used across all types of deployments.")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("SiteWhere uses "),s("a",{attrs:{href:"https://gradle.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gradle"),s("OutboundLink")],1),e._v(" for build management and packages each microservice\ninto its own submodule. The modules each contain a Gradle build script which clearly defines the\ndependencies. There are no assumptions about tools being installed on the system\nand no external libraries are directly packaged into the SiteWhere code base. In addition,\nSiteWhere uses the "),s("a",{attrs:{href:"http://platform.spring.io/platform/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spring Platform's"),s("OutboundLink")],1),e._v("\nGradle plugin and BOM to assure that library versions used work together without issues.")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),s("p",[e._v("SiteWhere manages system configuration by using a combination of environment variables and\nexternalized Apache Zookeeper storage. When microservices are started, many aspects of their\nbehavior may be controlled via environment variables injected by the Docker Compose\nscripts used for orchestration.")]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),s("p",[e._v("All backing services such as databases, brokers, and cloud provider connections act as\nattached resources that may be connected/disconnected by making changes an externalized\nconfiguration. SiteWhere supports isolation of most configuration elements at the tenant\nlevel while also allowing for some global configuration elements (still external to the\ncodebase) to be used to simplify large multitenant installations. Each system component\nsupports a full lifecycle that allows it to be intialized/started/stopped independently\nof other aspects of the system so that changing configuration/attached resources for\none tenant does not affect the lifecycle of other running tenants.")]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),s("p",[e._v("SiteWhere microservices are completely stateless in that they do not store\nany data locally except in cases of short-term caching. Any persistent data is stored\noutside of the microservice in persistence services and only accessed via APIs which\nremove direct dependencies on the storage mechanism. All system configuration is\nstored in Zookeeper, which provides redundancy and high-availability. Configuration\ndata is pulled by the microservice when it is started and pushed to the microservice\nif it is updated externally.")]),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),s("p",[e._v("All services which require access via an exposed port do so by leveraging the\nport binding services of Kubernetes. For instance, the Web/REST microservice\nuses an embedded Tomcat container to serve the REST services and Swagger\ninterface. The port binding is handled by Helm/Kubernetes and is passed\ninto the underlying microservice via environment variables. In cases where\ninfrastructure services need to be aviailable on well-known ports, the Helm\nchart deploys both the infrastructure service and the configuration of the\nmicroservices that depend on it so that the system can self-assemble.")]),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),s("p",[e._v("SiteWhere microservices are distrubuted as Docker images, each of which runs\nwithin its own process and is stateless and able to be scaled to multiple\nconcurrent instances. Using Kubernetes/Helm, the number of instances of a\nmicroservices may be scaled up indefinitely assuming that the underlying\ncluster has available resources. As instances of microservices are added\nand removed, the underlying connectivity management multiplexes data operations\nacross all available instances to assure the system scales with the updates.")]),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),s("p",[e._v("The core microservices are designed to start quickly and die gracefully.\nStartup time for a single microservice is generally a few seconds and\ndepends on various factors such as connecting to required resources. In\ngeneral, long-running tasks are run in the background as separate threads\nto allow the services to be considered live as soon as possible. When\nshutting down, all external connections and managed resources are released\nin the correct order to make sure that everything shuts down cleanly.")]),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),s("p",[e._v("There should generally be little or no difference between local deployments\nand production deployments in terms of system configuration. SiteWhere leverages\nKubernetes and Helm to make the deployment infrastructure and configuration\nas straightforward as possible while still being flexible. Technologies\nsuch as "),s("a",{attrs:{href:"https://rook.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rook.io"),s("OutboundLink")],1),e._v(" allow local installations to use the\nsame technologies as large production deployments.")]),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),s("p",[e._v("SiteWhere microservices use commodity Java logging frameworks, which write\noutput to the standard output and error streams. The streams are automatically\nmanaged by Docker/Kubernetes and may be access via those APIs. In addition,\nlog output is made available on an Apache Kafka topic for external clients\nthat wish to process the log information in real-time.")]),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),s("p",[e._v("Most administrative tasks for a SiteWhere instance are covered either by\nthe infrastructure components themselves or may be run from external microservices\nthat run inside the same environement as the instance.")])],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"sitewhere-as-a-twelve-factor-app"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sitewhere-as-a-twelve-factor-app","aria-hidden":"true"}},[this._v("#")]),this._v(" SiteWhere as a Twelve-Factor App")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"i-codebase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i-codebase","aria-hidden":"true"}},[this._v("#")]),this._v(" I. Codebase")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v('"One codebase tracked in revision control, many deploys"')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"ii-dependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ii-dependencies","aria-hidden":"true"}},[this._v("#")]),this._v(" II. Dependencies")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v('"Explicitly declare and isolate dependencies"')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"iii-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iii-config","aria-hidden":"true"}},[this._v("#")]),this._v(" III. Config")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v('"Store config in the environment"')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"iv-backing-services"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iv-backing-services","aria-hidden":"true"}},[this._v("#")]),this._v(" IV. Backing Services")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v('"Treat backing services as attached resources"')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"v-build-release-run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-build-release-run","aria-hidden":"true"}},[this._v("#")]),this._v(" V. Build, release, run")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v('"Strictly separate build and run stages"')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In the "),t("strong",[this._v("build")]),this._v(" phase, the included Gradle build scripts are used to\ncompile and generate libraries for the modules. Once code for a release is\nconsidered complete, the Gradle scripts may be used to "),t("strong",[this._v("release")]),this._v(" the code\nby wrapping Docker images around the artifacts and pushing the resulting images\ninto Docker Hub. Independently of the build and release phases, Kubernetes\nand Helm are used to "),t("strong",[this._v("run")]),this._v(" the microservices by orchestrating a distributed\nsystem from the released images.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"vi-processes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vi-processes","aria-hidden":"true"}},[this._v("#")]),this._v(" VI. Processes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v('"Execute the app as one or more stateless processes"')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"vii-port-binding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vii-port-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" VII. Port Binding")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v('"Export services via port binding"')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"viii-concurrency"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#viii-concurrency","aria-hidden":"true"}},[this._v("#")]),this._v(" VIII. Concurrency")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v('"Scale out via the process model"')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"ix-disposability"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ix-disposability","aria-hidden":"true"}},[this._v("#")]),this._v(" IX. Disposability")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v('"Maximize robustness with fast startup and graceful shutdown"')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"x-dev-prod-parity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#x-dev-prod-parity","aria-hidden":"true"}},[this._v("#")]),this._v(" X. Dev/prod parity")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v('"Keep development, staging, and production as similar as possible"')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"xi-logs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xi-logs","aria-hidden":"true"}},[this._v("#")]),this._v(" XI. Logs")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v('"Treat logs as event streams"')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"xii-admin-processes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xii-admin-processes","aria-hidden":"true"}},[this._v("#")]),this._v(" XII. Admin processes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v('"Run admin/management tasks as one-off processes"')])])}],!1,null,null,null);a.options.__file="twelve-factor.md";t.default=a.exports}}]);