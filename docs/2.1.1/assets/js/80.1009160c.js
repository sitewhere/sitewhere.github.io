(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{273:function(e,a,n){"use strict";n.r(a);var s=n(1),o=Object(s.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),n("Seo"),e._v(" "),n("p",[e._v('El modelo de gestión de eventos se utiliza para capturar eventos temporales relacionados\ncon dispositivos.\nEsto incluye datos de telemetría y cambios de estado del dispositivo, así como datos de\nauditoría como invocaciones de comandos y respuestas.\nLos eventos del dispositivo se almacenan como datos de series de tiempo y generalmente\nse conservan por separado de los datos de administración del dispositivo debido a su\nnaturaleza temporal y a gran escala en relación con los "maestros" de datos.')]),e._v(" "),n("p",[e._v("Todos los eventos del dispositivo comparten campos comunes, como la fecha en que ocurrió\nel evento, la fecha en que se recibió el evento, la identificación del dispositivo, la\nasignación actual del dispositivo y varias asociaciones que pueden usarse para filtrar / agregar\ndatos de eventos. Además, cada subtipo de evento de dispositivo contiene datos adicionales\nespecíficos de su función.")]),e._v(" "),e._m(1),e._v(" "),n("p",[e._v("Los eventos de medición contienen un nombre de medición y un valor de medición y se\nutilizan para capturar datos de telemetría de los dispositivos. Ejemplos incluyen:")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),n("p",[e._v("Los eventos de ubicación rastrean la ubicación (latitud / longitud / elevación) de un\ndispositivo en un punto específico en el tiempo.\nLos eventos de ubicación se pueden usar junto con áreas y zonas para realizar la lógica\nen respuesta a un dispositivo que entra / sale de los límites establecidos.")]),e._v(" "),e._m(4),e._v(" "),n("p",[e._v("Los eventos de alerta indican que se ha producido una condición excepcional. Un alerta\nincluye un tipo de alerta, mensaje, nivel de alerta y otra información que proporciona\ncontexto en cuanto a la condición que ocurrió. Las alertas se pueden usar para activar\notras acciones del sistema basadas en la lógica empresarial agregada a la canalización\nde procesamiento de eventos.")]),e._v(" "),e._m(5),e._v(" "),n("p",[e._v("Cada vez que se invoca un comando a través de las API de SiteWhere, se registra un\nevento de invocación de comando.\nLa canalización de procesamiento de eventos pasa el evento al microservicio de entrega\nde comandos, que se encarga de empaquetar el comando en el formato correcto y entregar\nel comando al dispositivo de destino. Los eventos de invocación de comandos también\nproporcionan una pista de auditoría de los comandos emitidos junto con cómo se invocaron\ny quién los invocó.")]),e._v(" "),e._m(6),e._v(" "),n("p",[e._v("Cuando se envían comandos a los dispositivos, hay casos en los que el dispositivo envía\ndatos en respuesta al comando. En los casos en que se envía una identificación de evento\nde origen junto con otros datos de evento, el evento se registra como una respuesta de\ncomando, por lo que la respuesta puede correlacionarse nuevamente con el evento que la\noriginó. Esto permite rastrear si se han recibido comandos en los casos en que se\nrequiere un reconocimiento.")]),e._v(" "),e._m(7),e._v(" "),n("p",[e._v("Los eventos de cambio de estado se utilizan para transmitir cambios en el estado interno\ndel dispositivo, así como otros cambios de estado a nivel del sistema, como las\nactualizaciones de detección de presencia. Los dispositivos pueden enviar eventos de\ncambio de estado para casos como entrar en modo de suspensión o detectar un estado de\nbatería baja.")])],1)}),[function(){var e=this.$createElement,a=this._self._c||e;return a("h1",{attrs:{id:"modelo-de-gestion-de-eventos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modelo-de-gestion-de-eventos","aria-hidden":"true"}},[this._v("#")]),this._v(" Modelo de Gestión de Eventos")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"eventos-de-medicion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eventos-de-medicion","aria-hidden":"true"}},[this._v("#")]),this._v(" Eventos de medición")])},function(){var e=this.$createElement,a=this._self._c||e;return a("ul",[a("li",[this._v("Lecturas de combustible de equipo pesado en un sitio de construcción")]),this._v(" "),a("li",[this._v("Frecuencia cardíaca para un monitor cardíaco en un centro de salud")]),this._v(" "),a("li",[this._v("Velocidad registrada para un vehículo en una aplicación de seguimiento de flota")])])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"eventos-de-ubicacion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eventos-de-ubicacion","aria-hidden":"true"}},[this._v("#")]),this._v(" Eventos de Ubicación")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"eventos-de-alerta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eventos-de-alerta","aria-hidden":"true"}},[this._v("#")]),this._v(" Eventos de alerta")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"eventos-de-invocacion-de-comandos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eventos-de-invocacion-de-comandos","aria-hidden":"true"}},[this._v("#")]),this._v(" Eventos de Invocación de Comandos")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"eventos-de-respuesta-de-comando"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eventos-de-respuesta-de-comando","aria-hidden":"true"}},[this._v("#")]),this._v(" Eventos de Respuesta de Comando")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"eventos-de-cambio-de-estado"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eventos-de-cambio-de-estado","aria-hidden":"true"}},[this._v("#")]),this._v(" Eventos de Cambio de Estado")])}],!1,null,null,null);o.options.__file="event-management.md";a.default=o.exports}}]);