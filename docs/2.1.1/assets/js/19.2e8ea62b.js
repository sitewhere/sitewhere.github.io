(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{191:function(e,a,o){"use strict";o.r(a);var r=o(1),t=Object(r.a)({},function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"content"},[e._m(0),e._v(" "),o("p",[o("a",{attrs:{href:"https://zookeeper.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache ZooKeeper"),o("OutboundLink")],1),e._v(" se utiliza para la administración\ncentralizada de la configuración de los microservicios de SiteWhere. Provee el almacenamiento\nde los datos de configuración en forma de una estructura de árbol confiable y de alta performance,\ny puede ser agrupado (en cluster) para ofrecer altq disponibilidad y confiabilidad.")]),e._v(" "),e._m(1),e._v(" "),o("p",[e._v("Todos los microservicios de SiteWhere depende de Zookeeper para proporcionar la información de configuración\nen tiempo de ejecución. Los microservicios usan las siguientes variables de entorno y valores por defecto\npara conectarse a Zookeeper:")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),o("p",[e._v("Una vez conectado con Zookeeper, el microservicio de gestión de instancias (instance management)\nes responsable de crear la base de la instancia del árbol de Zookeeper basado en las siguientes\nvariables y valores por defecto:")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),o("p",[e._v('Si utiliza Zookeeper dentro de una configuración de Docker Compose, la carpeta de datos de\nZookeeper debe asignarse a un volumen local para que no se pierda cuando el servicio es\ndetenido. Las recetas de infraestructura de SiteWhere tienen un volumen común de datos compartidos\nque se usa para almacenar datos persistentes de todos los servicios, como Zookeeper,\nKafka, y varias bases de datos. El volumen de datos puede ser eliminado para comenzar\ncon un sistema "limpio".')])])},[function(){var e=this.$createElement,a=this._self._c||e;return a("h1",{attrs:{id:"configuracion-de-apache-zookeeper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuracion-de-apache-zookeeper","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuración de Apache Zookeeper")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"conectividad-con-zookeeper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conectividad-con-zookeeper","aria-hidden":"true"}},[this._v("#")]),this._v(" Conectividad con Zookeeper")])},function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("table",[o("thead",[o("tr",[o("th",[e._v("Configuración")]),e._v(" "),o("th",[e._v("Variable de Entorno")]),e._v(" "),o("th",[e._v("Valor por Defecto")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Zookeeper Host")]),e._v(" "),o("td",[e._v("sitewhere.zookeeper.host")]),e._v(" "),o("td",[e._v("localhost")])]),e._v(" "),o("tr",[o("td",[e._v("Zookeeper Port")]),e._v(" "),o("td",[e._v("sitewhere.zookeeper.port")]),e._v(" "),o("td",[e._v("2181")])])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[this._v("ADVERTENCIA")]),this._v(" "),a("p",[this._v("La configuración de Docker Compose debe pasar un nombre de host de Zookeeper que se pueda\nresolver en la red Docker a la que están conectados los microservicios. Tenga en cuenta\nque las variables de entorno del Zookeeper se deben pasar para cada microservicio.")])])},function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("table",[o("thead",[o("tr",[o("th",[e._v("Configuración")]),e._v(" "),o("th",[e._v("Variable de Entorno")]),e._v(" "),o("th",[e._v("Valor por Defecto")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Product Id")]),e._v(" "),o("td",[e._v("sitewhere.product.id")]),e._v(" "),o("td",[e._v("sitewhere")])]),e._v(" "),o("tr",[o("td",[e._v("Instance Id")]),e._v(" "),o("td",[e._v("sitewhere.instance.id")]),e._v(" "),o("td",[e._v("sitewhere1")])])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("Para los valores por defecto del sistema, el árbol de Zookeeper se encontrará en la raíz "),a("code",[this._v("sitewhere/sitewhere1")]),this._v("\ny todos los demás datos de configuración de la instancia se ubicarán en relación con esa raíz. Si\nvarias instancias de SiteWhere deben ejecutarse al mismo tiempo utilizando el mismo clúster de Zookeeper,\ndeberían proporcionar valores diferentes para "),a("code",[this._v("sitewhere.instance.id")]),this._v(" para que los datos de configuración\nno se superpongan. Esto se puede lograr configurando la variable de entorno "),a("code",[this._v("sitewhere.instance.id")]),this._v("\na través de la configuración Docker Compose.")])},function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[this._v("ADVERTENCIA")]),this._v(" "),a("p",[this._v("Todos los microservicios destinados a ejecutarse en la misma instancia deben usar el mismo\nvalores para "),a("code",[this._v("sitewhere.product.id")]),this._v(" y "),a("code",[this._v("sitewhere.instance.id")]),this._v(".")])])}],!1,null,null,null);t.options.__file="zookeeper-configuration.md";a.default=t.exports}}]);