(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{298:function(e,t,s){"use strict";s.r(t);var a=s(1),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("Seo"),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._m(5),e._v(" "),e._m(6),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),s("p",[e._v("Alternative, you can use sitewhere Helm Repo with:")]),e._v(" "),e._m(10),e._m(11),e._v(" "),e._m(12),e._m(13),e._v(" "),e._m(14)],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"common-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#common-issues","aria-hidden":"true"}},[this._v("#")]),this._v(" 📖 Common Issues")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"troubleshooting-techniques"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-techniques","aria-hidden":"true"}},[this._v("#")]),this._v(" Troubleshooting Techniques")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"rook-instalation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rook-instalation","aria-hidden":"true"}},[this._v("#")]),this._v(" Rook Instalation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Verify the "),t("code",[this._v("rook-ceph-agent")]),this._v(" pods are "),t("code",[this._v("Running")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("kubectl -n rook-ceph-system get pod\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Verify that there are not error on "),t("code",[this._v("rook-ceph-agent")]),this._v(" pods by running:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("kubectl -n rook-ceph-system get pod -l app"),t("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("rook-ceph-agent -o jsonpath"),t("span",{attrs:{class:"token operator"}},[this._v("=")]),t("span",{attrs:{class:"token string"}},[this._v('\'{range .items[*]}{.metadata.name}{"\\t"}{.status.containerStatuses[0].lastState.terminated.message}{"\\n"}{end}\'')]),this._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"running-on-minikube"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-on-minikube","aria-hidden":"true"}},[this._v("#")]),this._v(" Running on MiniKube")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If you are running on "),t("code",[this._v("minikube")]),this._v(" you can skip using "),t("code",[this._v("Rook.io")]),this._v("\nand use the "),t("code",[this._v("dev-values.yaml")]),this._v(".")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("helm "),s("span",{attrs:{class:"token function"}},[e._v("install")]),e._v(" --name sitewhere \\\n-f ./sitewhere/dev-values.yaml \\\n--set sitewhere-infra-database.mongodb.persistence.storageClass"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("standard \\\n--set sitewhere-infra-core.kafka.persistence.storageClass"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("standard \\\n--set sitewhere-infra-core.kafka.zookeeper.persistence.storageClass"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("standard \\\n--set sitewhere-infra-core.kafka.external.enabled"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("false \\\n./sitewhere\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("helm "),s("span",{attrs:{class:"token function"}},[e._v("install")]),e._v(" --name sitewhere \\\n--set sitewhere-infra-core.kafka.zookeeper.replicaCount"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("1 \\\n--set sitewhere-infra-database.mongodb.replicaSet.enabled"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("false \\\n--set sitewhere-infra-database.mongodb.persistence.storageClass"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("standard \\\n--set sitewhere-infra-core.kafka.persistence.storageClass"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("standard \\\n--set sitewhere-infra-core.kafka.zookeeper.persistence.storageClass"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("standard \\\n--set sitewhere-infra-core.kafka.external.enabled"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("false \\\nsitewhere/sitewhere\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"minimal-evironment-with-hostpath-storageclass"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minimal-evironment-with-hostpath-storageclass","aria-hidden":"true"}},[this._v("#")]),this._v(" Minimal evironment with "),t("code",[this._v("hostpath")]),this._v(" storageClass")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("helm "),s("span",{attrs:{class:"token function"}},[e._v("install")]),e._v(" --name sitewhere \\\n--set services.profile"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("minimal \\\n--set sitewhere-infra-core.kafka.zookeeper.replicaCount"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("1 \\\n--set sitewhere-infra-database.mongodb.persistence.storageClass"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("hostpath \\\n--set sitewhere-infra-core.kafka.persistence.storageClass"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("hostpath \\\n--set sitewhere-infra-core.kafka.zookeeper.persistence.storageClass"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("hostpath \\\n--set sitewhere-infra-core.kafka.external.enabled"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("false \\\nsitewhere/sitewhere\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"developer-evironment-with-hostpath-storageclass"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#developer-evironment-with-hostpath-storageclass","aria-hidden":"true"}},[this._v("#")]),this._v(" Developer evironment with "),t("code",[this._v("hostpath")]),this._v(" storageClass")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("helm "),s("span",{attrs:{class:"token function"}},[e._v("install")]),e._v(" --name sitewhere \\\n-f ./sitewhere/dev-values.yaml \\\n--set sitewhere-infra-database.mongodb.persistence.storageClass"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("hostpath \\\n--set sitewhere-infra-core.kafka.persistence.storageClass"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("hostpath \\\n--set sitewhere-infra-core.kafka.zookeeper.persistence.storageClass"),s("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("hostpath \\\n./sitewhere\n")])])])}],!1,null,null,null);r.options.__file="common-issues.md";t.default=r.exports}}]);