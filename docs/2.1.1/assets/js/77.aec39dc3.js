(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{279:function(e,a,n){"use strict";n.r(a);var r=n(1),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),n("Seo"),e._v(" "),n("p",[e._v("SiteWhere ha sido diseñado desde cero para aprovechar lo último\nTecnologías para escalar eficientemente a las cargas esperadas en grandes proyecto de IoT.\nEn lugar de utilizar una arquitectura monolítica, SiteWhere promueve una arquitectura completamente\ndistribuida utilizando "),n("a",{attrs:{href:"https://kubernetes.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes"),n("OutboundLink")],1),e._v(" como infraestructura y una variedad de\nmicroservicios para construir el sistema. Este enfoque permite la personalización y escalar en un nivel más fino\npara que el sistema se pueda adaptar a muchos casos posibles de uso de IoT. SiteWhere está construido con un\nenfoque de framework utilizando API claramente definidas para que las nuevas tecnologías pueden integrarse\nfácilmente a medida que evoluciona el ecosistema de IoT.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),n("p",[e._v("Cada microservicio es una entidad completamente autónoma que tiene su\nEsquema de configuración propio, componentes internos, persistencia de datos y\nInteracciones con el pipeline de procesamiento de eventos. SiteWhere microservicios\nse construyen sobre un marco de microservicio personalizado y se ejecutan por separado\nProcesos "),n("a",{attrs:{href:"https://projects.spring.io/spring-boot/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spring Boot"),n("OutboundLink")],1),e._v(", cada uno\ncontenido en su propia imagen "),n("a",{attrs:{href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("Separar la lógica del sistema en microservicios permite las interacciones\nEntre varias áreas del sistema para ser definido más claramente. Esta\nLa transición ha dado lugar a una forma más comprensible y mantenible\nsistema y debe seguir pagando dividendos a medida que se agregan más características.")]),e._v(" "),e._m(4),e._v(" "),n("p",[e._v("La arquitectura de microservicio permite escalar áreas funcionales individuales del sistema.\nIndependientemente o se deja completamente fuera. En casos de uso donde el procesamiento REST tiende a\nSi se trata de un cuello de botella, se pueden ejecutar múltiples microservicios REST al mismo tiempo para manejar la carga.\nPor el contrario, servicios como la gestión de presencia que pueden no ser necesarios pueden dejarse\npara que la potencia de procesamiento se pueda dedicar a otros aspectos del sistema.")]),e._v(" "),e._m(5),e._v(" "),n("p",[e._v("SiteWhere está compuesto de microservicios basados ​​en Java que se construyen como\nimágenes "),n("a",{attrs:{href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker"),n("OutboundLink")],1),e._v(" y se desplieguan en Kubernetes para\norquestación. Para simplificar la implementación, se utiliza "),n("a",{attrs:{href:"https://helm.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helm"),n("OutboundLink")],1),e._v(" para\nproporcionar plantillas estándar para varios escenarios de implementación. Los Helm\n"),n("a",{attrs:{href:"https://github.com/sitewhere/sitewhere-recipes/tree/master/charts",target:"_blank",rel:"noopener noreferrer"}},[e._v("charts"),n("OutboundLink")],1),e._v("\nsuministran todas las dependencias necesarias para ejecutar una instancia de SiteWhere completa,\nincluyendo tanto los microservicios y los componentes de infraestructura como Apache Zookeeper,\nApache Kafka y Mosquitto MQTT broker.")]),e._v(" "),e._m(6),e._v(" "),n("p",[e._v("Al implementar SiteWhere, la combinación de la infraestructura requerida para ejecutar\nel sistema y los microservicios que manejan el procesamiento se denominan instancia de SiteWhere.\nSe supone que toda la infraestructura y los microservicios para una instancia se ejecutan en el mismo\nclúster de Kubernetes, aunque el sistema puede extenderse a decenas o cientos de máquinas para distribuir\nla carga de procesamiento.")]),e._v(" "),n("p",[e._v("En lugar de reinventar la rueda, SiteWhere utiliza una serie de tecnologías comprobadas como\nparte de la infraestructura para su arquitectura de microservicios. Las siguientes tecnologías\nabordan problemas transversales que son comunes a todo el sistema de microservicios.")]),e._v(" "),e._m(7),e._v(" "),n("p",[e._v("SiteWhere aprovecha Istio para proporcionar un service mesh para los microservicios del sistema.\nEsto permite que la plataforma se escale dinámicamente al tiempo que proporciona un gran control\nsobre cómo se enrutan los datos. Istio permite que se utilicen métodos modernos como canary testing\ny la inyección de fallas para proporcionar un sistema más robusto y tolerante a fallas.\nTambién permite un monitoreo y seguimiento detallados de los datos que fluyen entre microservicios.")]),e._v(" "),e._m(8),e._v(" "),n("p",[e._v("La configuración de SiteWhere se almacena en Apache ZooKeeper para permitir un enfoque escalable\ny externo a la gestión de la configuración. ZooKeeper contiene una estructura jerárquica que\nrepresenta la configuración para una o más instancias de SiteWhere y todos los microservicios\nque se utilizan para realizarlas. La configuración se replica para una alta disponibilidad.")]),e._v(" "),n("p",[e._v("Cada microservicio tiene una conexión directa a ZooKeeper y utiliza el\nJerarquía para determinar su configuración en tiempo de ejecución. Los microservicios escuchan los cambios.\nA los datos de configuración y reaccionar dinámicamente a las actualizaciones. Sin configuracion\nse almacena localmente dentro del microservicio, lo que evita problemas con\nmanteniendo los servicios sincronizados a medida que se actualiza la configuración del sistema.")]),e._v(" "),e._m(9),e._v(" "),n("p",[e._v("Muchos componentes del sistema como Zookeeper, Kafka y varias\nbases de datos requieren acceso al almacenamiento persistente que está disponible para todos\nnodos en el clúster de Kubernetes. Esto proporciona resiliencia en casos donde\nun nodo de Kubernetes falla y los pods se programan en otros nodos para restaurar\nel sistema a un estado de ejecución. SiteWhere usa "),n("a",{attrs:{href:"https://rook.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rook.io"),n("OutboundLink")],1),e._v("\npara proporcionar un enfoque coherente para el almacenamiento escalable. Rook provee\nalmacenamiento de bloque replicado distribuido que es resiliente a fallas de hardware mientras\ntambién ofrece buenas características de rendimiento. Como las necesidades de almacenamiento y rendimiento\naumentan con el tiempo, se pueden poner a disposición nuevos dispositivos de almacenamiento\ndinamicamente. La arquitectura subyacente "),n("a",{attrs:{href:"https://ceph.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ceph"),n("OutboundLink")],1),e._v("\nutilizado por Rook.io puede manejar "),n("em",[e._v("exobytes")]),e._v(" de datos mientras permite datos\nser resiliente a fallas a nivel de nodo, rack o incluso datacenter.")]),e._v(" "),e._m(10),e._v(" "),n("p",[e._v("SiteWhere coordina el procesamiento de eventos del dispositivo organizando microservicios en\nuna tubería con cada microservicio que gestiona una etapa específica del proceso.\nEste enfoque permite que los eventos se procesen de forma incremental y también permite\nla carga de procesamiento se distribuirá a través del hardware y se escalará a un nivel más detallado.")]),e._v(" "),n("p",[e._v("La canalización de procesamiento de eventos utiliza "),n("a",{attrs:{href:"https://kafka.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Kafka"),n("OutboundLink")],1),e._v("\npara proporcionar un mecanismo resiliente y de alto rendimiento para mover datos de eventos del dispositivo\nentre los microservicios que conforman la tubería. Los microservicios se conectan\nen los puntos clave de la tubería de procesamiento de eventos, leyendo datos de tópicos de entrada conocidos,\nprocesando estos datos, luego envíando estos datos a tópicos salientes bien conocidos.\nEntidades externas que están interesadas en datos en cualquier punto de la tubería\npueden actuar como consumidores de SiteWhere en los tópicos para consumir los datos a medida que se mueven\na través del sistema.")]),e._v(" "),e._m(11),e._v(" "),n("p",[e._v("La tubería de procesamiento de eventos de SiteWhere aprovecha las construcciones de mensajes de Kafka para permitir\ndatos de eventos del dispositivo que se procesarán de forma asincrónica. Si un microservicio se apaga y no otro,\nlas réplicas están disponibles para procesar la carga, los datos se pondrán en cola hasta que arranque una réplica\ny comience a procesar nuevamente. Esto actúa como una garantía contra la pérdida de datos, ya que los datos son siempre\nrespaldado por el almacenamiento de alto rendimiento de Kafka. Los microservicios de SiteWhere aprovechan el concepto grupo de consumidores de Kafka\npara distribuir la carga entre múltiples consumidores y escalar el procesamiento en consecuencia.")]),e._v(" "),n("p",[e._v('El uso de Kafka también tiene otras ventajas que son aprovechadas por SiteWhere. Dado que todos los datos para\nEl registro distribuido se almacena en el disco, es posible "reproducir" la secuencia de eventos basada\nen datos previamente recopilados. Esto es extremadamente valioso para aspectos como la depuración,\nlógica de procesamiento o prueba de carga del sistema.')]),e._v(" "),e._m(12),e._v(" "),n("p",[e._v("Mientras que los datos de eventos del dispositivo generalmente fluyen en una tubería desde microservicio a microservicio en\nTemas de Kafka, también hay operaciones de API que deben ocurrir en tiempo real entre los\nmicroservicios Por ejemplo, las funciones de gestión de dispositivos y gestión de eventos están\ncontenidas en sus propios microservicios, pero son requeridos por muchos otros componentes del sistema.\nMuchos de los microservicios de SiteWhere ofrecen API a las que pueden acceder otros microservicios\npara soportar aspectos tales como almacenar datos persistentes o iniciar servicios específicos de microservicios.")]),e._v(" "),e._m(13),e._v(" "),n("p",[e._v("En lugar de utilizar únicamente los servicios REST basados ​​en HTTP 1.x, que tienden a tener una\nsobrecarga de conexión, SiteWhere utiliza "),n("a",{attrs:{href:"https://grpc.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC"),n("OutboundLink")],1),e._v(" para establecer una\nConexión entre microservicios que necesitan comunicarse entre sí. Desde que usa gRPC\nconexiones HTTP2 persistentes, la sobrecarga de las interacciones se reduce considerablemente, lo que permite\npara desacoplar sin una penalización de rendimiento significativa. Istio también permite\nque las conexiones gRPC se multiplexen en múltiples réplicas de un microservicio para escalar el procesamiento\ny ofrecer redundancia.")]),e._v(" "),n("p",[e._v("Todo el SiteWhere "),n("a",{attrs:{href:"https://github.com/sitewhere/sitewhere-java-api",target:"_blank",rel:"noopener noreferrer"}},[e._v("modelo de datos"),n("OutboundLink")],1),e._v(" se ha capturado en\nFormato de "),n("a",{attrs:{href:"https://developers.google.com/protocol-buffers/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Protocol Buffers"),n("OutboundLink")],1),e._v(" para que\npueda ser utilizado dentro de los servicios de GRPC. Todas las API de SiteWhere ahora se exponen directamente como\nservicios gRPC también permiten un acceso de alto rendimiento y baja latencia a todas las funciones de la API.\nLas API REST todavía están disponibles a través del microservicio Web / REST,\npero utilizan las "),n("a",{attrs:{href:"https://github.com/sitewhere/sitewhere-grpc-api",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC API"),n("OutboundLink")],1),e._v(" debajo\npara proporcionar un enfoque coherente para acceder a los datos.")]),e._v(" "),e._m(14),e._v(" "),n("p",[e._v("SiteWhere está diseñado para proyectos de IoT a gran escala que pueden involucrar a muchos inquilinos del sistema\ncompartir una sola instancia de SiteWhere. Una clave diferenciadora de SiteWhere en comparación con la mayoría\nlas plataformas IoT es que cada inquilino (tenant) se ejecuta de forma aislada de otros inquilinos. Por defecto, los inquilinos\nno comparten los recursos de la base de datos o el proceso de canalización y tienen una configuración de ciclo de vida completamente separado.\nCon este enfoque, cada inquilino puede usar su propia tecnología base de datos, integraciones externas y otras opciones de configuración.\nPartes del inquilino como la tubería de procesamiento puede reconfigurarse / reiniciarse sin causar una interrupción\na otros inquilinos.")]),e._v(" "),e._m(15),e._v(" "),n("p",[e._v("Una consecuencia importante de la forma en que SiteWhere maneja la multitenancy es que los datos de cada inquilino\nestán separados de los datos de otros inquilinos. La mayoría de las plataformas que ofrecen multitenancy\nalmacenan datos para todos los inquilinos en tablas compartidas, diferenciadas solo por una identificación de inquilino.\nEl enfoque compartido abre la posibilidad de que los datos de un inquilino corrompan a otro, lo que no es\nun riesgo aceptable en muchas implementaciones de IoT. Además, cada inquilino tiene sus propios canales de procesamiento,\npor lo que los datos nunca se mezclan.")]),e._v(" "),n("p",[e._v('Tener recursos dedicados para los inquilinos puede ser costoso en términos de memoria y recursos de procesamiento, por lo que SiteWhere también ofrece el concepto de "clientes" dentro de cada inquilino.\nLos clientes permiten que los datos se diferencien dentro de un inquilino, pero sin tener una base de datos y canalizaciones dedicadas por separado.\nEn los casos en que los datos colocados son aceptables, el inquilino puede tener cualquier número de clientes, que comparten la misma base de datos y canalización de procesamiento.\nEsto permite lo mejor de ambos mundos en términos de seguridad y escalabilidad.')])],1)}),[function(){var e=this.$createElement,a=this._self._c||e;return a("h1",{attrs:{id:"arquitectura-del-sistema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arquitectura-del-sistema","aria-hidden":"true"}},[this._v("#")]),this._v(" Arquitectura del sistema")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"microservicios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#microservicios","aria-hidden":"true"}},[this._v("#")]),this._v(" Microservicios")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("Una "),a("em",[this._v("instancia")]),this._v(" de SiteWhere es un sistema distribuido compuesto de muchos microservicios,\ncada uno de los cuales cumple una función específica y está completamente desacoplado de\nLos otros servicios. Los microservicios utilizan un mecanismo de descubrimiento de servicios para\nauto-ensamblar en un sistema de trabajo.")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h3",{attrs:{id:"separacion-de-intereses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#separacion-de-intereses","aria-hidden":"true"}},[this._v("#")]),this._v(" Separación de intereses")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h3",{attrs:{id:"escala-lo-que-necesitas-deja-fuera-lo-que-no"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#escala-lo-que-necesitas-deja-fuera-lo-que-no","aria-hidden":"true"}},[this._v("#")]),this._v(" Escala lo que necesitas. Deja fuera lo que no")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"kubernetes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes","aria-hidden":"true"}},[this._v("#")]),this._v(" Kubernetes")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"tecnologias-centrales"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tecnologias-centrales","aria-hidden":"true"}},[this._v("#")]),this._v(" Tecnologías Centrales")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h3",{attrs:{id:"service-mesh-con-istio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-mesh-con-istio","aria-hidden":"true"}},[this._v("#")]),this._v(" Service Mesh con Istio")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h3",{attrs:{id:"gestion-de-configuracion-centralizada-con-apache-zookeeper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gestion-de-configuracion-centralizada-con-apache-zookeeper","aria-hidden":"true"}},[this._v("#")]),this._v(" Gestión de configuración centralizada con Apache ZooKeeper")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h3",{attrs:{id:"almacenamiento-distribuido-con-rook-io"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#almacenamiento-distribuido-con-rook-io","aria-hidden":"true"}},[this._v("#")]),this._v(" Almacenamiento distribuido con Rook.io")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"canalizacion-de-procesamiento-de-datos-de-eventos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#canalizacion-de-procesamiento-de-datos-de-eventos","aria-hidden":"true"}},[this._v("#")]),this._v(" Canalización de procesamiento de datos de eventos")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h3",{attrs:{id:"procesamiento-de-tuberia-completamente-asincrono"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#procesamiento-de-tuberia-completamente-asincrono","aria-hidden":"true"}},[this._v("#")]),this._v(" Procesamiento de tubería completamente asíncrono")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"conectividad-de-api-persistente-entre-microservicios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conectividad-de-api-persistente-entre-microservicios","aria-hidden":"true"}},[this._v("#")]),this._v(" Conectividad de API persistente entre microservicios")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h3",{attrs:{id:"usando-grpc-para-un-aumento-de-rendimiento"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usando-grpc-para-un-aumento-de-rendimiento","aria-hidden":"true"}},[this._v("#")]),this._v(" Usando gRPC para un aumento de rendimiento")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"microservicios-multitenant"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#microservicios-multitenant","aria-hidden":"true"}},[this._v("#")]),this._v(" Microservicios Multitenant")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h3",{attrs:{id:"privacidad-de-datos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#privacidad-de-datos","aria-hidden":"true"}},[this._v("#")]),this._v(" Privacidad de Datos")])}],!1,null,null,null);s.options.__file="architecture.md";a.default=s.exports}}]);