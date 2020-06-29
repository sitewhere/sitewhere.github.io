(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{293:function(e,t,a){"use strict";a.r(t);var n=a(1),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("Seo"),e._v(" "),a("p",[e._v("In order to debug SiteWhere debug images need to be deploy on the Kubernetes clusters.\nSiteWhere debug microservices images uses "),a("a",{attrs:{href:"https://docs.oracle.com/javase/7/docs/technotes/guides/jpda/jdwp-spec.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java Debug Wire Protocol"),a("OutboundLink")],1),e._v(" for\ncommunication between a debugger and the Java virtual machine (VM) that runs\nthe microservice. To this end, each microservice exposes JDWP on port 8001 and\nthe Helm Chart translate that port as a "),a("code",[e._v("NodePort")]),e._v(" in the Kubernetes Cluster\naccording to the table below.")]),e._v(" "),e._m(1),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Please refer to "),a("router-link",{attrs:{to:"./#creating-debug-images"}},[e._v("Creating Debug Images")]),e._v(" section on\nhow to build SiteWhere debug images.")],1)]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._m(5),e._v(" "),a("p",[e._v("First, you need to have a workspace with source code version of the debug image you are running.\nYou can you Eclipse and import the sources code. It should look like the image below.")]),e._v(" "),a("InlineImage",{attrs:{src:"/images/development/debug-workspace.png",caption:"SiteWhere Workspace"}}),e._v(" "),a("p",[e._v("After that you need to forward the JDWP port of the microservice you want to connect the debugger to.\nFor example, if you want to connect the debugger to Device Management use the following command:")]),e._v(" "),e._m(6),e._m(7),e._v(" "),a("InlineImage",{attrs:{src:"/images/development/debug-create-remote-java-application.png",caption:"Create Remove Java Application Debugger"}}),e._v(" "),e._m(8),e._v(" "),a("InlineImage",{attrs:{src:"/images/development/debug-sample-remote-java-application.png",caption:"Sample Remove Java Application Debugger"}}),e._v(" "),e._m(9),e._v(" "),a("InlineImage",{attrs:{src:"/images/development/debug-connect-debugger.png",caption:"Debug Remove Java Application"}}),e._v(" "),a("p",[e._v("If you get an error like the image below, please check that you running the debug images, that you\nhave forwarded the port of the microservice you want to debug and that you have enter the hostname and port\ncorrectly.")]),e._v(" "),a("InlineImage",{attrs:{src:"/images/development/debug-fail-to-connect.png",caption:"Debug Fail to Connect"}})],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"debugging-sitewhere"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debugging-sitewhere","aria-hidden":"true"}},[this._v("#")]),this._v(" Debugging SiteWhere")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[e._v("Microservice")]),e._v(" "),a("th",[e._v("JDWP Port")]),e._v(" "),a("th",[e._v("JMX Port")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Instance Managemwnt")]),e._v(" "),a("td",[e._v("8001")]),e._v(" "),a("td",[e._v("1101")])]),e._v(" "),a("tr",[a("td",[e._v("User Management")]),e._v(" "),a("td",[e._v("8002")]),e._v(" "),a("td",[e._v("1102")])]),e._v(" "),a("tr",[a("td",[e._v("Tenant Management")]),e._v(" "),a("td",[e._v("8003")]),e._v(" "),a("td",[e._v("1103")])]),e._v(" "),a("tr",[a("td",[e._v("Device Management")]),e._v(" "),a("td",[e._v("8004")]),e._v(" "),a("td",[e._v("1104")])]),e._v(" "),a("tr",[a("td",[e._v("Event Management")]),e._v(" "),a("td",[e._v("8005")]),e._v(" "),a("td",[e._v("1105")])]),e._v(" "),a("tr",[a("td",[e._v("Asset Management")]),e._v(" "),a("td",[e._v("8006")]),e._v(" "),a("td",[e._v("1106")])]),e._v(" "),a("tr",[a("td",[e._v("Event Sources")]),e._v(" "),a("td",[e._v("8007")]),e._v(" "),a("td",[e._v("1107")])]),e._v(" "),a("tr",[a("td",[e._v("Inbound Processing")]),e._v(" "),a("td",[e._v("8008")]),e._v(" "),a("td",[e._v("1108")])]),e._v(" "),a("tr",[a("td",[e._v("Label Generation")]),e._v(" "),a("td",[e._v("8009")]),e._v(" "),a("td",[e._v("1109")])]),e._v(" "),a("tr",[a("td",[e._v("Web Rest")]),e._v(" "),a("td",[e._v("8010")]),e._v(" "),a("td",[e._v("1110")])]),e._v(" "),a("tr",[a("td",[e._v("Batch Operations")]),e._v(" "),a("td",[e._v("8011")]),e._v(" "),a("td",[e._v("1111")])]),e._v(" "),a("tr",[a("td",[e._v("Command Delivery")]),e._v(" "),a("td",[e._v("8012")]),e._v(" "),a("td",[e._v("1112")])]),e._v(" "),a("tr",[a("td",[e._v("Device Registration")]),e._v(" "),a("td",[e._v("8013")]),e._v(" "),a("td",[e._v("1113")])]),e._v(" "),a("tr",[a("td",[e._v("Device State")]),e._v(" "),a("td",[e._v("8014")]),e._v(" "),a("td",[e._v("1114")])]),e._v(" "),a("tr",[a("td",[e._v("Event Search")]),e._v(" "),a("td",[e._v("8015")]),e._v(" "),a("td",[e._v("1115")])]),e._v(" "),a("tr",[a("td",[e._v("Outbound Connectors")]),e._v(" "),a("td",[e._v("8016")]),e._v(" "),a("td",[e._v("1116")])]),e._v(" "),a("tr",[a("td",[e._v("Rule Processing")]),e._v(" "),a("td",[e._v("8017")]),e._v(" "),a("td",[e._v("1117")])]),e._v(" "),a("tr",[a("td",[e._v("Schedule Management")]),e._v(" "),a("td",[e._v("8018")]),e._v(" "),a("td",[e._v("1118")])]),e._v(" "),a("tr",[a("td",[e._v("Streaming Media")]),e._v(" "),a("td",[e._v("8019")]),e._v(" "),a("td",[e._v("1119")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"using-helm-to-install-debug-images"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-helm-to-install-debug-images","aria-hidden":"true"}},[this._v("#")]),this._v(" Using Helm to Install Debug Images")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("SiteWhere Helm Chart provides the tooling necessary to install "),a("em",[e._v("debug")]),e._v(" images on Kubernetes.\nTo install SiteWhere debug image set "),a("code",[e._v("services.debug")]),e._v(" to "),a("code",[e._v("true")]),e._v(". For example, to install\nSiteWhere "),a("em",[e._v("default")]),e._v(" profile debug images use the following command:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("helm "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" --name sitewhere --set services.image.tag"),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("2.1.0 --set services.debug"),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("true ./sitewhere\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"connecting-the-debugger-to-sitewhere"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#connecting-the-debugger-to-sitewhere","aria-hidden":"true"}},[this._v("#")]),this._v(" Connecting the debugger to SiteWhere")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("kubectl port-forward deployment/sitewhere-device-management 8004:8001\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Once you have JPWD port forwarded you need to create a Remove Java Application Debug\nConfiguration. Go to "),t("code",[this._v("Run → Debug Configuration")]),this._v(". Select "),t("code",[this._v("Remote Java Application")]),this._v(" and click\non "),t("code",[this._v("New lunch configuration")]),this._v(".")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Then select the "),a("em",[e._v("project")]),e._v(" you want to debug the "),a("em",[e._v("hostname")]),e._v(" and "),a("em",[e._v("port")]),e._v(". In the example below, the project selected is\nDevice Management, the hostname is "),a("em",[e._v("localhost")]),e._v(" since we are locally forwarding the port and "),a("em",[e._v("8004")]),e._v(" is the port\nwe are forwarding.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Once you enter this configuration, click on "),t("code",[this._v("Debug")]),this._v(" to start the debugger. You should be able to connect to the remote\nhost, add break points and see the threads running like in the image below.")])}],!1,null,null,null);r.options.__file="debug.md";t.default=r.exports}}]);