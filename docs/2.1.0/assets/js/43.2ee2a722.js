(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{209:function(e,t,a){"use strict";a.r(t);var i=a(1),r=Object(i.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),a("InlineImage",{attrs:{src:"/images/platform/microservices-diagram.png",caption:"Microservices"}}),e._v(" "),e._m(2),e._v(" "),a("p",[e._v("Todos los microservicios de SiteWhere se basan en una biblioteca personalizada definida en\nel módulo "),a("a",{attrs:{href:"https://github.com/sitewhere/sitewhere/tree/sitewhere-2.1.0/sitewhere-microservice",target:"_blank",rel:"noopener noreferrer"}},[e._v("sitewhere-microservice"),a("OutboundLink")],1),e._v("\ndel repositorio central de SiteWhere. Esta biblioteca incluye el código común utilizado\npor los microservicios de SiteWhere, incluido el ciclo de vida del servicio, la configuración,\nel registro, el descubrimiento del servicio, el rastreo distribuido y otras funcionalidades transversales.")]),e._v(" "),e._m(3),e._v(" "),a("p",[e._v("Los microservicios de SiteWhere se empaquetan como aplicaciones Spring Boot que utilizan una clase\nbase común "),a("a",{attrs:{href:"https://github.com/sitewhere/sitewhere/blob/sitewhere-2.1.0/sitewhere-microservice/src/main/java/com/sitewhere/microservice/MicroserviceApplication.java",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("MicroserviceApplication")]),a("OutboundLink")],1),e._v("\nque estandariza el comportamiento de inicio/apagado del servicio. La aplicación envuelve una subclase de la instancia\nde un "),a("a",{attrs:{href:"https://github.com/sitewhere/sitewhere/blob/sitewhere-2.1.0/sitewhere-microservice/src/main/java/com/sitewhere/microservice/Microservice.java",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Microservice")]),a("OutboundLink")],1),e._v("\nque implementa gran parte del comportamiento común, como el ciclo de vida del microservicio, el descubrimiento del servicio,\nlos servicios Kafka y gRPC comunes, así como enlaces para los comportamientos del ciclo de vida estándar.\nLas subclases de microservicio utilizan los distintos ganchos ("),a("em",[e._v("hooks")]),e._v(") para personalizar el ciclo de vida y agregar nuevas funcionalidades.")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),a("p",[e._v("Los microservicios no funcionan en un vacío y, como tal, se necesita un mecanismo RPC de alto\nrendimiento para permitir que los servicios se comuniquen. SiteWhere aprovecha "),a("a",{attrs:{href:"https://grpc.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC"),a("OutboundLink")],1),e._v("\npara mover datos entre microservicios y ofrece API binarias de rendimiento para consumidores externos.\nTodas las llamadas a la API y las entidades de datos se han puesto a disposición de gRPC a través de Google\n"),a("em",[e._v("Protocol Buffers")]),e._v(". Usar gRPC en lugar de REST para la comunicación puede aumentar el rendimiento de la API en más de 10x.")]),e._v(" "),e._m(11),e._v(" "),a("p",[e._v("Las conexiones entre microservicios no siempre son uno a uno. Por ejemplo, si una instancia de SiteWhere tiene un solo\nmicroservicio Web/REST y tres instancias del microservicio de gestión de dispositivos, el microservicio de REST debería\nser capaz de demultiplexar llamadas en las tres instancias de gestión de dispositivos para la escalabilidad y la\ntolerancia a fallos. SiteWhere 2.0 introduce el concepto de un demulitplexor de API que puede realizar una\nintrospección de la topología de instancia actual y agregar/eliminar conexiones a otros microservicios\nde forma dinámica. A medida que la cantidad de servicios aumenta o disminuye, SiteWhere conecta/desconecta\nautomáticamente la tubería entre ellos. Toda la comunicación entre microservicios ocurre a través de este mecanismo.")]),e._v(" "),e._m(12),e._v(" "),a("p",[e._v("Incluso con el alto rendimiento de gRPC, solicitar un uso frecuente de datos repetidamente a través de la\nconexión de red tiene un costo significativo. La información maestra para entidades como dispositivos,\nasignaciones y activos rara vez se actualiza y puede almacenarse localmente en el microservicio en\nlugar de incurrir en el costo de la lectura de la base de datos. SiteWhere 2.0 utiliza un "),a("a",{attrs:{href:"https://www.ehcache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ehCache"),a("OutboundLink")],1),e._v("\npara proporcionar un caché local de un subconjunto de datos maestros. Este caché se consulta antes de\nrecurrir a una solicitud gRPC remota.")]),e._v(" "),e._m(13),e._v(" "),a("p",[e._v("Los microservicios de SiteWhere hacen algunas suposiciones sobre la infraestructura subyacente en la que se ejecutan.\nComo mínimo, las instancias de "),a("a",{attrs:{href:"https://zookeeper.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache ZooKeeper"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://kafka.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Kafka"),a("OutboundLink")],1),e._v("\ny "),a("a",{attrs:{href:"https://www.consul.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hashicorp Consul"),a("OutboundLink")],1),e._v(" deben estar disponible para que el sistema funcione correctamente.\nDe forma predeterminada, SiteWhere también produce datos de seguimiento distribuidos a través del estándar\n"),a("a",{attrs:{href:"http://opentracing.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenTracing"),a("OutboundLink")],1),e._v(" para el análisis del rendimiento en tiempo de ejecución.\nUn servidor backend que soporta la API puede configurarse para almacenar y analizar los datos.")]),e._v(" "),e._m(14),e._v(" "),a("p",[e._v("Para obtener una lista de los microservicios principales incluidos con SiteWhere\ny guías detalladas para cada uno, consulte la sección\n"),a("router-link",{attrs:{to:"/es/guide/microservices/"}},[e._v("guías de microservicios")]),e._v(".")],1)],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"descripcion-de-los-microservicios"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#descripcion-de-los-microservicios","aria-hidden":"true"}},[this._v("#")]),this._v(" Descripción de los Microservicios")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Una instancia de SiteWhere consta de muchos microservicios, cada uno de los cuales maneja una\npieza específica de funcionalidad. Tras el despliegue, los microservicios se organizan en un\nsistema distribuido sobre la infraestructura de Kubernetes. Se utiliza un "),t("em",[this._v("Helm chart")]),this._v(" para\nconfigurar la lista de microservicios de SiteWhere y otros componentes que deben iniciarse\npara realizar una configuración determinada. Una vez iniciados, los microservicios se\nautoensamblan y luego se ponen a disposición de las tareas de procesamiento.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"estructura-de-microservicios"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#estructura-de-microservicios","aria-hidden":"true"}},[this._v("#")]),this._v(" Estructura de Microservicios")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"aplicacion-spring-boot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aplicacion-spring-boot","aria-hidden":"true"}},[this._v("#")]),this._v(" Aplicación Spring Boot")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("La biblioteca de microservicios de SiteWhere utiliza la configuración del entorno Spring Boot para configurar\ndiversos aspectos de cada microservicio. La configuración puede sobreescribirse inyectando variables de entorno\nal desplegar los microservicios. El "),t("em",[this._v("Helm chart")]),this._v(" predeterminado para SiteWhere lo maneja de forma transparente,\npero puede haber casos en que los valores deban ser sobrescritos manualmente. La siguiente tabla cubre la lista\nde configuraciones de entorno estándar de toda la instancia:")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("Configuración")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Por defecto")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Descripción")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere.product.id")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Nombre del nodo de nivel superior en el árbol Zookeeper.")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere.instance.id")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere1")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Nombre de instancia utilizado en Zookeeper y Kafka nombre del "),a("em",[e._v("topic")]),e._v(".")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere.instance.template.id")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("default")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Plantilla de gestión de instancias utilizada para inicializar inquilinos y usuarios del sistema.")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere.consul.host")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("consul")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Nombre de host usado para contactar a Consul para el descubrimiento del servicio.")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere.consul.port")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("8080")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Puerto usado para contactar al Cónsul para el descubrimiento del servicio.")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere.zookeeper.host")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("localhost")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Nombre de host usado para contactar a Zookeeper para la configuración.")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere.zookeeper.port")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("2181")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Puerto utilizado para contactar con Zookeeper para la configuración.")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere.kafka.bootstrap.servers")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("kafka:9092")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Lista de servidores Kafka de inicio.")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere.filesystem.storage.root")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("/var/sitewhere")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Raíz del sistema de archivos para microservicios que persisten los datos localmente para el almacenamiento en caché.")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere.grpc.port")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("9000")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Puerto utilizado para exponer API gRPC específicas de microservicio.")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere.management.grpc.port")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("9001")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Puerto utilizado para exponer la interfaz de gestión gRPC.")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere.tracer.server")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("jaeger")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Nombre de host utilizado para publicar la salida de seguimiento distribuido.")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere.log.metrics")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("false")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Indica si las métricas deben registrarse para el microservicio.")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("sitewhere.k8s.pod.ip")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("null")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Inyectado para que el microservicio sepa su IP de pod Kubernetes.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"imagen-base-de-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#imagen-base-de-docker","aria-hidden":"true"}},[this._v("#")]),this._v(" Imagen Base de Docker")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Todos los microservicios de SiteWhere se construyen sobre la misma imagen base de Docker para reducir\nla sobrecarga de tiempo de ejecución de las imágenes. La imagen "),t("code",[this._v("openjdk: 8-jre-alpine")]),this._v(" se usa actualmente\ndebido a su pequeña huella que incluye el "),t("em",[this._v("runtime")]),this._v(" de Java 8 necesario para ejecutar las aplicaciones.\nHay planes futuros para aprovechar las características de Java 9 para reducir aún más los tamaños de imagen\ny los requisitos de tiempo de ejecución para los microservicios.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"utilizacion-de-recursos-del-sistema"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#utilizacion-de-recursos-del-sistema","aria-hidden":"true"}},[this._v("#")]),this._v(" Utilización de Recursos del Sistema")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Actualmente, SiteWhere utiliza alrededor de 20 microservicios, por lo que el hardware subyacente debe ser\ncompatible con la ejecución de 20 procesos Java simultáneos, cada uno con una huella de memorua de alrededor\nde 500 MB. Los requisitos son significativos, aunque la mayoría de las computadoras de escritorio modernas\npueden ejecutar fácilmente un sistema completo. El "),t("em",[this._v("Helm Chart")]),this._v(" de SiteWhere Helm incluye un perfil "),t("code",[this._v("mínimo")]),this._v("\nque solo carga los microservicios necesarios para reducir los requisitos de recursos. Sin embargo,\nla intención de SiteWhere 2.0 es distribuir los componentes del sistema en un grupo de máquinas,\nlo que reduce los requisitos de hardware para un solo nodo y aumenta la tolerancia a fallos.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"conectividad-intra-microservicios"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conectividad-intra-microservicios","aria-hidden":"true"}},[this._v("#")]),this._v(" Conectividad Intra-Microservicios")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"demultiplexores-de-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#demultiplexores-de-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Demultiplexores de API")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"soporte-api-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#soporte-api-cache","aria-hidden":"true"}},[this._v("#")]),this._v(" Soporte API Cache")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"components-de-la-infraestructura"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#components-de-la-infraestructura","aria-hidden":"true"}},[this._v("#")]),this._v(" Components de la Infraestructura")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"lista-de-princiaples-microservicios"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lista-de-princiaples-microservicios","aria-hidden":"true"}},[this._v("#")]),this._v(" Lista de Princiaples Microservicios")])}],!1,null,null,null);r.options.__file="microservice-overview.md";t.default=r.exports}}]);