(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{191:function(e,t,r){"use strict";r.r(t);var n=r(1),s=Object(n.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("Because SiteWhere 2.0 uses a microservices architecture, the number of\nprocesses running concurrently has increased, which in turn requires\nmore memory and processing power. The minimum hardware specifications\nfor a single machine running a SiteWhere instance is:")]),e._v(" "),e._m(2),e._v(" "),r("p",[e._v("When distributing microservices across multiple machines using\n"),r("a",{attrs:{href:"https://github.com/docker/swarm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Swarm"),r("OutboundLink")],1),e._v(" or other orchestration\ntechnologies, the per-machine requirements can be lower since the load\nis distributed.")]),e._v(" "),r("p",[e._v("Another consideration in deploying SiteWhere is whether the\n"),r("a",{attrs:{href:"https://kafka.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Kafka"),r("OutboundLink")],1),e._v(" and\n"),r("a",{attrs:{href:"https://zookeeper.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache ZooKeeper"),r("OutboundLink")],1),e._v(" instances are running\nin Docker or managed separately. In production environments, Kafka and\nZooKeeper clusters should be managed externally from the SiteWhere instance\nusing best practices defined by the individual technologies. The SiteWhere\nteam will release more information on preferred topologies as the 2.0\narchitecture nears general availability.")]),e._v(" "),e._m(3),e._v(" "),r("p",[e._v("SiteWhere 2.0 uses Docker as the core deployment model since the technology\nis supported in all major cloud environments in addition to being easy to\nuse for on-premise installations. For single-machine installations, Docker\nEngine can be installed based on the process detailed in the link below:")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://docs.docker.com/engine/installation/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install Docker Engine"),r("OutboundLink")],1)]),e._v(" "),e._m(4),e._v(" "),r("p",[e._v("In Addition to Docker Engine, some form of orchestration engine should be installed\nto allow for many Docker services to be deployed at once rather than manually\ndeploying them individually. In production deployments, SiteWhere 2.0 will leverage\nthe new "),r("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/stack_deploy/",target:"_blank",rel:"noopener noreferrer"}},[e._v("stack"),r("OutboundLink")],1),e._v("\nsupport in Docker Swarm to launch the system. For a local installation, it is often easier to use\n"),r("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Compose"),r("OutboundLink")],1),e._v(" which provides a simple\nmethodology for deploying many services at once while aggregating logs to the console\nfor easier debugging. Start by downloading and installing Docker Compose as detailed below:")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install Docker Compose"),r("OutboundLink")],1)]),e._v(" "),e._m(5),e._v(" "),r("p",[e._v("Some aspects of the deployment process require features such as overlay networks that are\nonly available in Docker Swarm. Since Swarm is included in the Docker Engine, it can\nbe enabled and used in single-machine local deployments without the need for building\nmore complex topologies. Enable Swarm mode using the following command:")]),e._v(" "),e._m(6),e._m(7),e._v(" "),e._m(8),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/sitewhere/sitewhere-recipes",target:"_blank",rel:"noopener noreferrer"}},[e._v("SiteWhere Recipes Repository"),r("OutboundLink")],1)]),e._v(" "),e._m(9),e._v(" "),r("p",[e._v("Open a terminal and start by cloning the recipes repository to the machine\nwhere you have the Docker environment configured. The repository can be cloned\nwith the following command:")]),e._v(" "),e._m(10),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),r("p",[e._v("Docker compose will begin launching the SiteWhere microservices. The log output is a\ncombination of the output for all of the individual microservices and supporting technologies.")]),e._v(" "),e._m(18),e._v(" "),r("p",[e._v("The log output for SiteWhere 2.x is significantly different than 1.x due to the\ndistributed nature of the system and the fact that every microservice runs in a\nseparate Java process. The microservices can start in any order and use Apache ZooKeeper\nas a central point for coordination. In many cases, there are dependencies between\nmicroservices such as the need for bootstrapping system data or providing access to\nparts of the data model. Log messages such as "),r("strong",[e._v("Waiting for tenant management API to become available")]),e._v("\nare common during the bootstrapping process. For more detailed information about the\nsystem startup process, see the "),r("router-link",{attrs:{to:"./../guide/"}},[e._v("startup and bootstrap")]),e._v(" document.")],1)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"deploying-sitewhere-on-docker-swarm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploying-sitewhere-on-docker-swarm","aria-hidden":"true"}},[this._v("#")]),this._v(" Deploying SiteWhere on Docker Swarm")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"system-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" System Requirements")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("Resource")]),e._v(" "),r("th",[e._v("Min Value")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Memory")]),e._v(" "),r("td",[e._v("16GB RAM")])]),e._v(" "),r("tr",[r("td",[e._v("CPU")]),e._v(" "),r("td",[e._v("2 CPUs")])]),e._v(" "),r("tr",[r("td",[e._v("Hard Disk/SSD")]),e._v(" "),r("td",[e._v("80GB")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"installing-docker-and-docker-compose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-docker-and-docker-compose","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing Docker and Docker Compose")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"install-docker-compose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-docker-compose","aria-hidden":"true"}},[this._v("#")]),this._v(" Install Docker Compose")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"enable-swarm-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enable-swarm-mode","aria-hidden":"true"}},[this._v("#")]),this._v(" Enable Swarm Mode")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("docker swarm init\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"using-sitewhere-recipes-to-build-an-instance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-sitewhere-recipes-to-build-an-instance","aria-hidden":"true"}},[this._v("#")]),this._v(" Using SiteWhere Recipes to Build an Instance")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Since the architecture and system configuration for SiteWhere allow for many\ndifferent combinations of components for developing custom systems, the\nSiteWhere team provides a list of "),t("em",[this._v("recipes")]),this._v(" for common system configurations\nthat act as a starting point for building instances. The repository for\nSiteWhere 2.0 recipes can be accessed via the link below:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"clone-the-recipes-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clone-the-recipes-repository","aria-hidden":"true"}},[this._v("#")]),this._v(" Clone the Recipes Repository")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("git clone https://github.com/sitewhere/sitewhere-recipes.git\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Once the repository has been cloned, navigate into the "),t("strong",[this._v("sitewhere-recipes/docker-compose")]),this._v("\nsubdirectory. This directory contains sample configurations for many common SiteWhere\ndeployment scenarios.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"start-infrastructure-services"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-infrastructure-services","aria-hidden":"true"}},[this._v("#")]),this._v(" Start Infrastructure Services")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To better emulate a production environment, separate recipes are provided for\ninfrastructure services such as Apache ZooKeeper, Kafka, MQTT brokers, databases, and\nother non-SiteWhere components. To start the infrastructure containers, navigate to the\n"),t("strong",[this._v("sitewhere-recipes/docker-compose/infrastructure_default")]),this._v(" subdirectory (or one of the other\nrecipes depending on which components should be loaded). Execute the following command which\nwill start the infrastructure based on the configuration outlined in the\n"),t("strong",[this._v("docker-compose.yml")]),this._v(" file.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("docker-compose up\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"start-sitewhere-microservices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-sitewhere-microservices","aria-hidden":"true"}},[this._v("#")]),this._v(" Start SiteWhere Microservices")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In a separate terminal, navigate to the "),t("strong",[this._v("sitewhere-recipes/docker-compose/default")]),this._v("\nsubdirectory. This recipe contains all of the SiteWhere microservices and expects\nother infrastructure services to already be running. As with the infrastructure recipe,\nrun the following command to start SiteWhere:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("docker-compose up\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"system-log-output"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-log-output","aria-hidden":"true"}},[this._v("#")]),this._v(" System Log Output")])}],!1,null,null,null);s.options.__file="docker.md";t.default=s.exports}}]);