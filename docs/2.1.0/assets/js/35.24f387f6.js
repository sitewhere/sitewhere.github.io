(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{269:function(e,t,s){"use strict";s.r(t);var a=s(1),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("Seo"),e._v(" "),s("p",[e._v("This document provides procedures for backing up and restoring services\nthat use persistent storage, including MongoDB and Apache Zookeeper.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._m(5),e._v(" "),e._m(6),s("p",[e._v("Save the file and apply it to the cluster.")]),e._v(" "),e._m(7),e._m(8),e._v(" "),e._m(9),e._m(10),e._v(" "),e._m(11),e._m(12),e._v(" "),e._m(13),e._m(14),e._m(15),e._v(" "),e._m(16),e._m(17),e._v(" "),e._m(18),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._m(25),e._v(" "),e._m(26),e._v(" "),e._m(27),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),e._m(31),e._v(" "),e._m(32),e._v(" "),e._m(33),e._m(34),e._v(" "),e._m(35)],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"backup-and-restore-procedures"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backup-and-restore-procedures","aria-hidden":"true"}},[this._v("#")]),this._v(" 📖 Backup and Restore Procedures")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"backup-procedure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backup-procedure","aria-hidden":"true"}},[this._v("#")]),this._v(" Backup Procedure")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"create-backup-pvc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-backup-pvc","aria-hidden":"true"}},[this._v("#")]),this._v(" Create Backup PVC")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If you plan to use "),t("code",[this._v("rook-ceph-block")]),this._v(" storageClass use:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-console extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("kubectl apply -f utils/sitewhere-mongodb-dump-pvc-rook.yaml\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If you plan to use an externa NFS Server, edit the file\n"),t("code",[this._v("utils/sitewhere-mongodb-dump-pvc-nfs.yaml")]),this._v(", set the NFS Server URL and Path.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[e._v("nfs")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[e._v("server")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" <NFS_SERVER_IP"),s("span",{attrs:{class:"token punctuation"}},[e._v(">")]),e._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[e._v("path")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{attrs:{class:"token string"}},[e._v('"<NFS_SERVER_PATH>"')]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-console extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("kubectl apply -f utils/sitewhere-mongodb-dump-pvc-nfs.yaml\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"gracefully-downscale-sitewhere-microservices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gracefully-downscale-sitewhere-microservices","aria-hidden":"true"}},[this._v("#")]),this._v(" Gracefully Downscale SiteWhere Microservices")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-console extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("kubectl scale deploy --replicas=0 -l sitewhere.io/role=microservice\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"backup-mongodb-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backup-mongodb-database","aria-hidden":"true"}},[this._v("#")]),this._v(" Backup MongoDB Database")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-console extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("kubectl apply -f utils/sitewhere-mongodb-dump-job.yaml\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Wait for "),t("code",[this._v("sitewhere-mongodump")]),this._v(" job to be completed.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-console extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("kubectl get job\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("NAME                  DESIRED   SUCCESSFUL   AGE\nsitewhere-mongodump   1         1            7s\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Alternative, you can create a "),t("code",[this._v("CronJob")]),this._v(" which will execute the backup job\nrepeatibly. You can create the "),t("code",[this._v("CronJob")]),this._v(" by executing:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-console extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("kubectl apply -f utils/sitewhere-mongodb-dump-crojob.yaml\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("By default, it will lanch a backup job once a day, at "),t("code",[this._v("12:01")]),this._v(". You can change this behaviour\nby changing the cron exepression ("),t("code",[this._v("schedule")]),this._v(") at "),t("code",[this._v("utils/sitewhere-mongodb-dump-crojob.yaml")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[e._v("apiVersion")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" batch/v1beta1\n"),s("span",{attrs:{class:"token key atrule"}},[e._v("kind")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" CronJob\n"),s("span",{attrs:{class:"token key atrule"}},[e._v("metadata")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[e._v("name")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" sitewhere"),s("span",{attrs:{class:"token punctuation"}},[e._v("-")]),e._v("mongodump\n"),s("span",{attrs:{class:"token key atrule"}},[e._v("spec")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[e._v("schedule")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{attrs:{class:"token string"}},[e._v('"*/1 * * * *"')]),e._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[e._v("jobTemplate")]),s("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"copy-backup-data-outside-of-the-cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#copy-backup-data-outside-of-the-cluster","aria-hidden":"true"}},[this._v("#")]),this._v(" Copy Backup Data Outside of the Cluster")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("If you are using "),s("code",[e._v("rook-ceph-block")]),e._v(" storage class "),s("code",[e._v("PVC")]),e._v(" you may need to extract the backup file\nfrom Kubernates. To accomplish this task we provide a "),s("code",[e._v("YAML")]),e._v(" that created a "),s("code",[e._v("Pod")]),e._v(" that mounts\nthe "),s("code",[e._v("PVC")]),e._v(" used to store the result of the backup. After you create the Pod, you can extract the\nfiles using "),s("code",[e._v("kubectl cp")]),e._v(" command. The following commands show how to extract the result of the\nbackup job/cronjob.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-console extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("kubectl apply -f utils/sitewhere-mongodb-backup-pod.yaml\nkubectl cp sitewhere-backup-admin-pod:/dump <YOUR_BACKUP_DIR>\nkubectl delete -f utils/sitewhere-mongodb-backup-pod.yaml\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[s("strong",[e._v("Note:")]),e._v(" If you are using "),s("code",[e._v("rook-ceph-block")]),e._v(", be aware of the "),s("code",[e._v("RWO")]),e._v(" limitation of this storage class.\nThis means that only one "),s("code",[e._v("Pod")]),e._v(" can have the "),s("code",[e._v("sitewhere-mongodump-pvc")]),e._v(" PVC mounted on its filesystem.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"upscale-sitewhere-microservices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upscale-sitewhere-microservices","aria-hidden":"true"}},[this._v("#")]),this._v(" Upscale SiteWhere Microservices")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-console extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("kubectl scale deploy --replicas=1 -l sitewhere.io/role=microservice\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"restore-procedure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#restore-procedure","aria-hidden":"true"}},[this._v("#")]),this._v(" Restore Procedure")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"gracefully-downscale-sitewhere-microservices-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gracefully-downscale-sitewhere-microservices-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Gracefully Downscale SiteWhere Microservices")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-console extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("kubectl scale deploy --replicas=0 -l sitewhere.io/role=microservice\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"copy-backup-data-into-the-cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#copy-backup-data-into-the-cluster","aria-hidden":"true"}},[this._v("#")]),this._v(" Copy Backup Data into the Cluster")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("If you are using "),s("code",[e._v("rook-ceph-block")]),e._v(" storage class "),s("code",[e._v("PVC")]),e._v(" you may need to copy backup file\ninto Kubernates. To accomplish this task we provide a "),s("code",[e._v("YAML")]),e._v(" that created a "),s("code",[e._v("Pod")]),e._v(" that mounts\nthe "),s("code",[e._v("PVC")]),e._v(" used to store the result of the backup. After you create the Pod, you can copy the\nfiles using "),s("code",[e._v("kubectl cp")]),e._v(" command into the cluster. The following commands show how to copy your\nbackup file into the cluster.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-console extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("kubectl apply -f utils/sitewhere-mongodb-backup-pod.yaml\nkubectl cp <YOUR_BACKUP_DIR> sitewhere-backup-admin-pod:/dump\nkubectl delete -f utils/sitewhere-mongodb-backup-pod.yaml\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[s("strong",[e._v("Note:")]),e._v(" If you are using "),s("code",[e._v("rook-ceph-block")]),e._v(", be aware of the "),s("code",[e._v("RWO")]),e._v(" limitation of this storage class.\nThis means that only one "),s("code",[e._v("Pod")]),e._v(" can have the "),s("code",[e._v("sitewhere-mongodump-pvc")]),e._v(" PVC mounted on its filesystem.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"restore-mongodb-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#restore-mongodb-database","aria-hidden":"true"}},[this._v("#")]),this._v(" Restore MongoDB Database")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-console extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("kubectl apply -f utils/sitewhere-mongodb-restore-job.yaml\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"upscale-sitewhere-microservices-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upscale-sitewhere-microservices-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Upscale SiteWhere Microservices")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-console extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("kubectl scale deploy --replicas=1 -l sitewhere.io/role=microservice\n")])])])}],!1,null,null,null);r.options.__file="backup-restore.md";t.default=r.exports}}]);