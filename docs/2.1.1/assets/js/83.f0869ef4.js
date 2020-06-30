(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{267:function(e,a,i){"use strict";i.r(a);var s=i(1),o=Object(s.a)({},(function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("Seo"),e._v(" "),i("p",[e._v("SiteWhere incluye un modelo de objeto completo que contiene\nentidades destinadas a representar objetos del mundo real que interactúan\ncon aplicaciones IoT.\nMuchos de los conceptos siguen siendo bastante genéricos, de modo\nque el mismo modelo puede representar una variedad de mercados verticales potenciales.")]),e._v(" "),e._m(1),e._v(" "),i("p",[e._v("La mayoría de las entidades de SiteWhere tienen dos identificadores únicos\nseparados. El identificador principal es un "),i("a",{attrs:{href:"https://en.wikipedia.org/wiki/Universally_unique_identifier",target:"_blank",rel:"noopener noreferrer"}},[e._v("UUID"),i("OutboundLink")],1),e._v(" ​​\nque el sistema asigna cuando se crea la entidad y no cambia durante la vida útil\nde la entidad. Un segundo identificador, que es único dentro del tipo de entidad,\nes un "),i("em",[e._v("token")]),e._v(" que es una cadena asignada a través de las API y actualizada\nen cualquier momento. Este enfoque permite que el token de una entidad cambie con\nel tiempo si es necesario sin la necesidad de actualizar el identificador en las\nrelaciones que hacen referencia a la entidad. Todas las operaciones de API actúan\nsobre el token de entidad, mientras que todas las referencias internas entre entidades usan el UUID interno.")]),e._v(" "),e._m(2),e._v(" "),i("p",[e._v("El modelo de objetos de SiteWhere cubre muchas áreas funcionales.")]),e._v(" "),e._m(3),e._v(" "),i("p",[e._v("Una de las funciones principales de una plataforma IoT es representar\nlos dispositivos con los que interactúa la plataforma. SiteWhere proporciona\nun modelo completo para capturar información sobre los dispositivos\ngestionado por el sistema y para organizarlos de modo que el contexto sea\nproporcionado alrededor de los datos generados por los dispositivos.")]),e._v(" "),e._m(4),e._v(" "),i("p",[e._v("Los dispositivos a menudo se implementan en asociación con activos del mundo\nreal que derivan algún servicio del dispositivo. Los casos de uso incluyen:")]),e._v(" "),e._m(5),e._v(" "),i("p",[e._v("SiteWhere proporciona un modelo de gestión de activos para almacenar activos\nque pueden estar asociados con dispositivos del sistema. Se pueden proporcionar\nsistemas de gestión de activos externos basados ​​en el mismo conjunto de API en los\ncasos en que los activos deban gestionarse externamente.")]),e._v(" "),e._m(6),e._v(" "),i("p",[e._v('El modelo de gestión de eventos se utiliza para capturar eventos temporales relacionados\ncon dispositivos. Esto incluye datos de telemetría y cambios de estado del dispositivo,\nasí como datos de auditoría como invocaciones de comandos y respuestas. Los eventos del\ndispositivo se almacenan como datos de series de tiempo y generalmente se conservan por\nseparado de los datos de administración del dispositivo debido a su naturaleza temporal\ny a gran escala en relación con los "maestros" de datos.')]),e._v(" "),i("p",[e._v("Todos los eventos del dispositivo comparten campos comunes, como la fecha en que ocurrió\nel evento, la fecha en que se recibió el evento, la identificación del dispositivo, la\nasignación actual del dispositivo y varias asociaciones que pueden usarse para\nfiltrar / agregar datos de eventos. Además, cada subtipo de evento de dispositivo contiene\ndatos adicionales específicos de su función.")])],1)}),[function(){var e=this.$createElement,a=this._self._c||e;return a("h1",{attrs:{id:"modelo-de-objeto-de-dominio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modelo-de-objeto-de-dominio","aria-hidden":"true"}},[this._v("#")]),this._v(" Modelo de Objeto de Dominio")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"identificacion-de-entidad"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#identificacion-de-entidad","aria-hidden":"true"}},[this._v("#")]),this._v(" Identificación de Entidad")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"areas-funcionales"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#areas-funcionales","aria-hidden":"true"}},[this._v("#")]),this._v(" Áreas Funcionales")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h3",{attrs:{id:"gestion-de-dispositivos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gestion-de-dispositivos","aria-hidden":"true"}},[this._v("#")]),this._v(" Gestión de Dispositivos")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h3",{attrs:{id:"gestion-de-activos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gestion-de-activos","aria-hidden":"true"}},[this._v("#")]),this._v(" Gestión de Activos")])},function(){var e=this.$createElement,a=this._self._c||e;return a("ul",[a("li",[this._v("un dispositivo de rastreo asociado con un automóvil en la vertical de rastreo de flota")]),this._v(" "),a("li",[this._v("una insignia asociada con una persona en la vertical de seguridad")]),this._v(" "),a("li",[this._v("un monitor cardíaco asociado con una cama en un vertical sanitario")])])},function(){var e=this.$createElement,a=this._self._c||e;return a("h3",{attrs:{id:"gestion-de-eventos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gestion-de-eventos","aria-hidden":"true"}},[this._v("#")]),this._v(" Gestión de Eventos")])}],!1,null,null,null);o.options.__file="objectmodel.md";a.default=o.exports}}]);