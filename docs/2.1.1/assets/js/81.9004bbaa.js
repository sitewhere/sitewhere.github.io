(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{246:function(e,a,s){"use strict";s.r(a);var i=s(1),n=Object(i.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("En los últimos años, ha habido un fuerte impulso para pasar de las metodologías\nmás antiguas de entrega de software monolítico a un enfoque que admite aplicaciones ágiles,\nportátiles y con capacidad para la nube que son fáciles de escalar.")]),e._v(" "),s("p",[e._v("El equipo "),s("a",{attrs:{href:"https://www.heroku.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Heroku"),s("OutboundLink")],1),e._v(" creó una lista de doce factores que consideraron\nimportantes en el movimiento hacia estos objetivos. Lanzaron un "),s("a",{attrs:{href:"https://12factor.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("sitio web"),s("OutboundLink")],1),e._v(" que\ndescribe los doce factores en detalle y da ejemplos de cómo construir, administrar,\ny despliegue aplicaciones que se ajusten al enfoque. Las siguientes secciones discuten\ncómo la arquitectura de SiteWhere y el proceso de implementación se alinean con los de un\naplicación de doce factores.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("SiteWhere utiliza un "),s("a",{attrs:{href:"https://github.com/sitewhere/sitewhere",target:"_blank",rel:"noopener noreferrer"}},[e._v("repositorio de GitHub"),s("OutboundLink")],1),e._v(" para\nversionar su código fuente. Cada microservicio está separado en su propio submódulo de\nGradle con código común insertado en bibliotecas que se incluyen como artefactos en el\nproceso de compilación de Gradle. La misma base de código se usa en todos los tipos de\nimplementaciones.")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("SiteWhere utiliza "),s("a",{attrs:{href:"https://gradle.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gradle"),s("OutboundLink")],1),e._v(" para la administración de compilación y empaquetado\nde cada microservicio en su propio submódulo. Los módulos contienen cada uno un script de construcción\nde Gradle que define claramente las dependencias. No hay suposiciones sobre las herramientas que se\ninstalan en el sistema y ninguna biblioteca externa se empaqueta directamente en la base de código\nde SiteWhere. Además, SiteWhere utiliza el plugin "),s("a",{attrs:{href:"http://platform.spring.io/platform/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spring Platform"),s("OutboundLink")],1),e._v("\nGradle y la lista de materiales (BOM) para garantizar que las versiones de la biblioteca utilizadas\nfuncionen juntas sin problemas.")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),s("p",[e._v("SiteWhere administra la configuración del sistema mediante el uso de una combinación de\nvariables de entorno y el almacenamiento externalizado de Apache Zookeeper. Cuando se\ninician los microservicios, muchos aspectos de su comportamiento se pueden controlar\na través de variables de entorno inyectadas por los scripts Docker Compose utilizados\npara la orquestación.")]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),s("p",[e._v("Todos los servicios de respaldo, como las bases de datos, los brokers y las conexiones\nde proveedores en la nube, actúan como recursos adjuntos que pueden conectarse/desconectarse\nhaciendo que los cambios sean una configuración externalizada. SiteWhere admite el aislamiento\nde la mayoría de los elementos de configuración en el nivel de tenant, al mismo tiempo que\npermite que algunos elementos de configuración global (aún externos a la base de código)\nse usen para simplificar las instalaciones grandes de múltiples usuarios. Cada componente\ndel sistema admite un ciclo de vida completo que le permite inicializarse/iniciarse/detenerse\nindependientemente de otros aspectos del sistema, de modo que el cambio de\nconfiguración/recursos asociados para un inquilino no afecte el ciclo de vida de otros tenant activos.")]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),s("p",[e._v("Los microservicios de SiteWhere son completamente sin estado, ya que no almacenan ningún dato localmente,\nexcepto en casos de almacenamiento en caché a corto plazo. Cualquier dato persistente se almacena fuera\ndel microservicio en los servicios de persistencia y solo se accede a través de las API que eliminan las\ndependencias directas del mecanismo de almacenamiento. Toda la configuración del sistema se almacena en\nZookeeper, que proporciona redundancia y alta disponibilidad. Los datos de configuración son extraídos\npor el microservicio cuando se inician y se envían al microservicio si se actualizan externamente.")]),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),s("p",[e._v("Todos los servicios que requieren acceso a través de un puerto expuesto lo hacen aprovechando\nlos servicios de enlace de puertos de Kubernetes. Por ejemplo, el microservicio Web/REST utiliza\nun contenedor Tomcat incorporado para servir los servicios REST y la interfaz Swagger.\nEl enlace del puerto es manejado por Helm/Kubernetes y se pasa al microservicio subyacente a\ntravés de variables de entorno. En los casos en que los servicios de infraestructura deben estar\ndisponibles en puertos conocidos, Helm chart implementa tanto el servicio de infraestructura como\nla configuración de los microservicios que dependen de él para que el sistema pueda autoensamblarse.")]),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),s("p",[e._v("Los microservicios de SiteWhere se distribuyen como imágenes de Docker, cada una de las cuales se\nejecuta dentro de su propio proceso y no tiene estado y se puede escalar a múltiples instancias\nconcurrentes. Usando Kubernetes/Helm, la cantidad de instancias de microservicios puede ampliarse\nindefinidamente suponiendo que el cluster subyacente tiene recursos disponibles. A medida que se\nagregan y eliminan instancias de microservicios, la administración de conectividad subyacente\nmultiplexa las operaciones de datos en todas las instancias disponibles para asegurar que el sistema\nse adapte a las actualizaciones.")]),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),s("p",[e._v("Los microservicios centrales están diseñados para comenzar rápidamente y morir con gracia.\nEl tiempo de inicio para un solo microservicio es generalmente de unos segundos y depende de\nvarios factores, como la conexión a los recursos necesarios. En general, las tareas de larga\nejecución se ejecutan en segundo plano como subprocesos separados para permitir que los servicios\nse consideren en vivo lo antes posible. Cuando se apaga, todas las conexiones externas y los\nrecursos administrados se liberan en el orden correcto para asegurarse de que todo se cierre\nde forma limpia.")]),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),s("p",[e._v("En general, debería haber poca o ninguna diferencia entre las implementaciones\nlocales y las implementaciones de producción en términos de configuración del sistema.\nSiteWhere aprovecha a Kubernetes y Helm para hacer que la infraestructura y la\nconfiguración de la implementación sean lo más sencillas posible, a la vez que siguen\nsiendo flexibles. Tecnologías como "),s("a",{attrs:{href:"https://rook.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rook.io"),s("OutboundLink")],1),e._v(" permiten que las instalaciones\nlocales utilicen las mismas tecnologías que las implementaciones de gran producción.")]),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),s("p",[e._v("Los microservicios de SiteWhere utilizan marcos de registro de Java básicos,\nque escriben la salida en la salida estándar y en las secuencias de errores.\nLas transmisiones son administradas automáticamente por Docker/Kubernetes y pueden\ntener acceso a través de esas API. Además, la salida del registro está disponible\nen un tópico de Apache Kafka para clientes externos que deseen procesar\nla información de registro en tiempo real.")]),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),s("p",[e._v("La mayoría de las tareas administrativas para una instancia de SiteWhere\nestán cubiertas por los propios componentes de la infraestructura o pueden\nejecutarse desde microservicios externos que se ejecutan dentro del mismo\nentorno que la instancia.")])])}),[function(){var e=this.$createElement,a=this._self._c||e;return a("h1",{attrs:{id:"sitewhere-como-una-aplicacion-twelve-factor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sitewhere-como-una-aplicacion-twelve-factor","aria-hidden":"true"}},[this._v("#")]),this._v(" SiteWhere como una Aplicación Twelve-Factor")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"i-base-de-codigo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-base-de-codigo","aria-hidden":"true"}},[this._v("#")]),this._v(" I. Base de código")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("strong",[this._v('"Una base de código rastreada en control de revisión, muchas implementaciones"')])])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"ii-dependencias"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ii-dependencias","aria-hidden":"true"}},[this._v("#")]),this._v(" II. Dependencias")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("strong",[this._v('"Declarar y aislar dependencias explícitamente"')])])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"iii-configuracion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iii-configuracion","aria-hidden":"true"}},[this._v("#")]),this._v(" III. Configuración")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("strong",[this._v('"Almacene la configuración en el entorno"')])])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"iv-backing-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iv-backing-services","aria-hidden":"true"}},[this._v("#")]),this._v(" IV. Backing Services")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("strong",[this._v('"Trate los backing servicios como recursos adjuntos"')])])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"v-construir-lanzar-correr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-construir-lanzar-correr","aria-hidden":"true"}},[this._v("#")]),this._v(" V. Construir, lanzar, correr")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("strong",[this._v('"Estricta separación de las fases de contrucción y ejecución"')])])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("En la fase de "),a("strong",[this._v("construcción")]),this._v(", los scripts de compilación de Gradle incluidos se utilizan para\ncompilar y generar bibliotecas para los módulos. Una vez que el código para un lanzamiento se\nconsidera completo, los scripts de Gradle se pueden usar para "),a("strong",[this._v("liberar")]),this._v(" el código envolviendo las\nimágenes de Docker alrededor de los artefactos y empujando las imágenes resultantes en Docker Hub.\nIndependientemente de las fases de compilación y lanzamiento, Kubernetes y Helm se utilizan para\nejecutar los microservicios mediante la organización de un sistema distribuido a partir de las\nimágenes publicadas.")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"vi-procesos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vi-procesos","aria-hidden":"true"}},[this._v("#")]),this._v(" VI. Procesos")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("strong",[this._v('"Execute the app as one or more stateless processes"')])])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"vii-enlace-de-puerto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vii-enlace-de-puerto","aria-hidden":"true"}},[this._v("#")]),this._v(" VII. Enlace de puerto")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("strong",[this._v('"Exporta servicios via Enlace de Puerto"')])])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"viii-concurrencia"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#viii-concurrencia","aria-hidden":"true"}},[this._v("#")]),this._v(" VIII. Concurrencia")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("strong",[this._v('"Escala via el modelo de procesos"')])])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"ix-desechable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ix-desechable","aria-hidden":"true"}},[this._v("#")]),this._v(" IX. Desechable")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("strong",[this._v('"Maximice la robustez con un inicio rápido y un apagado correcto"')])])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"x-paridad-dev-prod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#x-paridad-dev-prod","aria-hidden":"true"}},[this._v("#")]),this._v(" X. Paridad Dev/prod")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("strong",[this._v('"Mantenga el desarrollo, staging y producción lo más similar posible"')])])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"xi-logs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xi-logs","aria-hidden":"true"}},[this._v("#")]),this._v(" XI. Logs")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("strong",[this._v('"Tratar registros como secuencias de eventos"')])])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"xii-procesos-administrativos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xii-procesos-administrativos","aria-hidden":"true"}},[this._v("#")]),this._v(" XII. Procesos Administrativos")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[a("strong",[this._v('"Ejecute tareas de administración/administración como procesos únicos"')])])}],!1,null,null,null);n.options.__file="twelve-factor.md";a.default=n.exports}}]);