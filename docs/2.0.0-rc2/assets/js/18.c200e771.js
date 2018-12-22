(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{192:function(a,t,s){"use strict";s.r(t);var n=s(1),e=Object(n.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[a._m(0),a._v(" "),a._m(1),a._v(" "),a._m(2),a._v(" "),a._m(3),a._v(" "),a._m(4),a._v(" "),s("p",[s("a",{attrs:{href:"http://sitewhere.io/schema/sitewhere/microservice/instance-management/current/instance-management.xsd",target:"_blank",rel:"noopener noreferrer"}},[a._v("Instance Management Configuration XML Schema"),s("OutboundLink")],1)]),a._v(" "),a._m(5),a._v(" "),a._m(6),a._m(7),a._v(" "),s("p",[a._v("El microservicio de gestión de instancias es responsable de conectarse con Zookeeper y crear\nel árbol base donde se almacenan todos los demás datos de configuración para la instancia.\nPara obtener más información sobre la conectividad con Zookeeper y cómo se completa la base\ndel árbol de configuración, consulte la "),s("router-link",{attrs:{to:"./../zookeeper-configuration.html"}},[a._v("Configuración de Apache Zookeper")]),a._v(".")],1),a._v(" "),a._m(8),a._v(" "),a._m(9),a._v(" "),a._m(10),a._m(11),a._v(" "),a._m(12),a._v(" "),a._m(13),a._v(" "),s("p",[a._v("La siguiente variable de entorno se usa para indicar qué plantilla se utilizará para\nla inicialización:")]),a._v(" "),a._m(14),a._v(" "),a._m(15),a._v(" "),a._m(16),a._v(" "),a._m(17),a._v(" "),a._m(18)])},[function(){var a=this.$createElement,t=this._self._c||a;return t("h1",{attrs:{id:"microservicio-instance-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#microservicio-instance-management","aria-hidden":"true"}},[this._v("#")]),this._v(" Microservicio Instance Management")])},function(){var a=this.$createElement,t=this._self._c||a;return t("p",[this._v("El microservicio de gestión de instancias ("),t("em",[this._v("instance management")]),this._v(") se utiliza para iniciar\nuna instancia de SiteWhere y se requiere que esté presente cuando se inicia una instancia\nSiteWhere no iniciada. El microservicio de gestión de instancias también gestiona las\nactualizaciones de configuraciones de instancias globales, como la base de datos compartida\ny las configuraciones de los conectores.")])},function(){var a=this.$createElement,t=this._self._c||a;return t("h2",{attrs:{id:"dependencias-del-microservicio"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dependencias-del-microservicio","aria-hidden":"true"}},[this._v("#")]),this._v(" Dependencias del Microservicio")])},function(){var a=this.$createElement,t=this._self._c||a;return t("ul",[t("li",[t("p",[t("strong",[this._v("User Management")]),this._v(" - Requerido para iniciar los usuarios por defecto del sistema en\nfunción de la plantilla de instancia elegida.")])]),this._v(" "),t("li",[t("p",[t("strong",[this._v("Tenant Management")]),this._v(" - Requerido para iniciar el "),t("em",[this._v("tenant")]),this._v(" por defector del sistemas\nbasado en la plantilla de instancia elegida.")])])])},function(){var a=this.$createElement,t=this._self._c||a;return t("h2",{attrs:{id:"esquema-de-configuracion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#esquema-de-configuracion","aria-hidden":"true"}},[this._v("#")]),this._v(" Esquema de Configuración")])},function(){var a=this.$createElement,t=this._self._c||a;return t("h3",{attrs:{id:"ejemplo-de-configuracion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ejemplo-de-configuracion","aria-hidden":"true"}},[this._v("#")]),this._v(" Ejemplo de Configuración")])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token prolog"}},[a._v('<?xml version="1.0" encoding="UTF-8"?>')]),a._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("<")]),a._v("beans")]),a._v(" "),s("span",{attrs:{class:"token attr-name"}},[a._v("xmlns")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{attrs:{class:"token punctuation"}},[a._v('"')]),a._v("http://www.springframework.org/schema/beans"),s("span",{attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n  "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[a._v("xmlns:")]),a._v("xsi")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{attrs:{class:"token punctuation"}},[a._v('"')]),a._v("http://www.w3.org/2001/XMLSchema-instance"),s("span",{attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[a._v("xmlns:")]),a._v("context")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{attrs:{class:"token punctuation"}},[a._v('"')]),a._v("http://www.springframework.org/schema/context"),s("span",{attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n  "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[a._v("xmlns:")]),a._v("im")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{attrs:{class:"token punctuation"}},[a._v('"')]),a._v("http://sitewhere.io/schema/sitewhere/microservice/instance-management"),s("span",{attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n  "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[a._v("xsi:")]),a._v("schemaLocation")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{attrs:{class:"token punctuation"}},[a._v('"')]),a._v("http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.1.xsd\n  http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-3.1.xsd\n  http://sitewhere.io/schema/sitewhere/microservice/instance-management\n  http://sitewhere.io/schema/sitewhere/microservice/instance-management/current/instance-management.xsd"),s("span",{attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),s("span",{attrs:{class:"token comment"}},[a._v("\x3c!-- Allow property placeholder substitution --\x3e")]),a._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{attrs:{class:"token namespace"}},[a._v("context:")]),a._v("property-placeholder")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n  "),s("span",{attrs:{class:"token comment"}},[a._v("\x3c!-- Instance global configuration --\x3e")]),a._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{attrs:{class:"token namespace"}},[a._v("im:")]),a._v("instance-management")]),s("span",{attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{attrs:{class:"token comment"}},[a._v("\x3c!-- Reusable persistence configurations --\x3e")]),a._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{attrs:{class:"token namespace"}},[a._v("im:")]),a._v("persistence-configurations")]),s("span",{attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n      "),s("span",{attrs:{class:"token comment"}},[a._v("\x3c!-- MongoDB global configuration management --\x3e")]),a._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{attrs:{class:"token namespace"}},[a._v("im:")]),a._v("mongodb-configurations")]),s("span",{attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{attrs:{class:"token comment"}},[a._v("\x3c!-- Configuration used for global services --\x3e")]),a._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{attrs:{class:"token namespace"}},[a._v("im:")]),a._v("mongodb-configuration")]),a._v(" "),s("span",{attrs:{class:"token attr-name"}},[a._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{attrs:{class:"token punctuation"}},[a._v('"')]),a._v("global"),s("span",{attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n          "),s("span",{attrs:{class:"token attr-name"}},[a._v("hostname")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{attrs:{class:"token punctuation"}},[a._v('"')]),a._v("${mongodb.host:mongodb}"),s("span",{attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n          "),s("span",{attrs:{class:"token attr-name"}},[a._v("port")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{attrs:{class:"token punctuation"}},[a._v('"')]),a._v("${mongodb.port:27017}"),s("span",{attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n          "),s("span",{attrs:{class:"token attr-name"}},[a._v("databaseName")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{attrs:{class:"token punctuation"}},[a._v('"')]),a._v("${mongodb.database:sitewhere}"),s("span",{attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n          "),s("span",{attrs:{class:"token attr-name"}},[a._v("replicaSetName")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{attrs:{class:"token punctuation"}},[a._v('"')]),a._v("${mongodb.replicaset:}"),s("span",{attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n        "),s("span",{attrs:{class:"token comment"}},[a._v("\x3c!-- Configuration used for tenant microservices --\x3e")]),a._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{attrs:{class:"token namespace"}},[a._v("im:")]),a._v("mongodb-configuration")]),a._v(" "),s("span",{attrs:{class:"token attr-name"}},[a._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{attrs:{class:"token punctuation"}},[a._v('"')]),a._v("tenant"),s("span",{attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n          "),s("span",{attrs:{class:"token attr-name"}},[a._v("hostname")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{attrs:{class:"token punctuation"}},[a._v('"')]),a._v("${mongodb.host:mongodb}"),s("span",{attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n          "),s("span",{attrs:{class:"token attr-name"}},[a._v("port")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{attrs:{class:"token punctuation"}},[a._v('"')]),a._v("${mongodb.port:27017}"),s("span",{attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n          "),s("span",{attrs:{class:"token attr-name"}},[a._v("databaseName")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{attrs:{class:"token punctuation"}},[a._v('"')]),a._v("${mongodb.tenant.prefix:tenant-[[tenant.id]]}"),s("span",{attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n          "),s("span",{attrs:{class:"token attr-name"}},[a._v("replicaSetName")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{attrs:{class:"token punctuation"}},[a._v('"')]),a._v("${mongodb.replicaset:}"),s("span",{attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("</")]),s("span",{attrs:{class:"token namespace"}},[a._v("im:")]),a._v("mongodb-configurations")]),s("span",{attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n      "),s("span",{attrs:{class:"token comment"}},[a._v("\x3c!-- InfluxDB global configuration management --\x3e")]),a._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{attrs:{class:"token namespace"}},[a._v("im:")]),a._v("influxdb-configurations")]),s("span",{attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{attrs:{class:"token comment"}},[a._v("\x3c!-- Default configuration for InfluxDB data access --\x3e")]),a._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{attrs:{class:"token namespace"}},[a._v("im:")]),a._v("influxdb-configuration")]),a._v(" "),s("span",{attrs:{class:"token attr-name"}},[a._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{attrs:{class:"token punctuation"}},[a._v('"')]),a._v("tenant"),s("span",{attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n          "),s("span",{attrs:{class:"token attr-name"}},[a._v("hostname")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{attrs:{class:"token punctuation"}},[a._v('"')]),a._v("${influxdb.host:influxdb}"),s("span",{attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n          "),s("span",{attrs:{class:"token attr-name"}},[a._v("port")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{attrs:{class:"token punctuation"}},[a._v('"')]),a._v("${influxdb.port:8086}"),s("span",{attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n          "),s("span",{attrs:{class:"token attr-name"}},[a._v("database")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{attrs:{class:"token punctuation"}},[a._v('"')]),a._v("${influxdb.database:[[tenant.id]]}"),s("span",{attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("</")]),s("span",{attrs:{class:"token namespace"}},[a._v("im:")]),a._v("influxdb-configurations")]),s("span",{attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n      "),s("span",{attrs:{class:"token comment"}},[a._v("\x3c!-- Apache Cassandra global configuration management --\x3e")]),a._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{attrs:{class:"token namespace"}},[a._v("im:")]),a._v("cassandra-configurations")]),s("span",{attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{attrs:{class:"token namespace"}},[a._v("im:")]),a._v("cassandra-configuration")]),a._v(" "),s("span",{attrs:{class:"token attr-name"}},[a._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{attrs:{class:"token punctuation"}},[a._v('"')]),a._v("tenant"),s("span",{attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n          "),s("span",{attrs:{class:"token attr-name"}},[a._v("contactPoints")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{attrs:{class:"token punctuation"}},[a._v('"')]),a._v("${cassandra.contact.points:cassandra}"),s("span",{attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n          "),s("span",{attrs:{class:"token attr-name"}},[a._v("keyspace")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{attrs:{class:"token punctuation"}},[a._v('"')]),a._v("${cassandra.keyspace:tenant_[[tenant.id]]}"),s("span",{attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("</")]),s("span",{attrs:{class:"token namespace"}},[a._v("im:")]),a._v("cassandra-configurations")]),s("span",{attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("</")]),s("span",{attrs:{class:"token namespace"}},[a._v("im:")]),a._v("persistence-configurations")]),s("span",{attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{attrs:{class:"token comment"}},[a._v("\x3c!-- Global connector configurations --\x3e")]),a._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{attrs:{class:"token namespace"}},[a._v("im:")]),a._v("connector-configurations")]),s("span",{attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("</")]),s("span",{attrs:{class:"token namespace"}},[a._v("im:")]),a._v("connector-configurations")]),s("span",{attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("</")]),s("span",{attrs:{class:"token namespace"}},[a._v("im:")]),a._v("instance-management")]),s("span",{attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("</")]),a._v("beans")]),s("span",{attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])])},function(){var a=this.$createElement,t=this._self._c||a;return t("h2",{attrs:{id:"inicio-de-zookeeper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inicio-de-zookeeper","aria-hidden":"true"}},[this._v("#")]),this._v(" Inicio de Zookeeper")])},function(){var a=this.$createElement,t=this._self._c||a;return t("h2",{attrs:{id:"plantillas-de-instancia"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plantillas-de-instancia","aria-hidden":"true"}},[this._v("#")]),this._v(" Plantillas de Instancia")])},function(){var a=this.$createElement,t=this._self._c||a;return t("p",[this._v("Una "),t("em",[this._v("plantilla de instancia")]),this._v(" se usa para especificar las secuencias de comandos que se ejecutarán\npara rellenar los usuarios y tenants predeterminados para la instancia. Una lista de plantillas de\ninstancia se empaqueta como parte de la imagen de Docker para el microservicio de gestión de instancias.\nCada plantilla tiene un descriptor JSON que incluye una identificación única que se puede pasar si\nla instancia debe ser inicializada por los scripts de esa plantilla. A continuación se muestra un\nejemplo del descriptor JSON:")])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{attrs:{class:"token property"}},[a._v('"id"')]),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{attrs:{class:"token string"}},[a._v('"default"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{attrs:{class:"token property"}},[a._v('"name"')]),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{attrs:{class:"token string"}},[a._v('"Default"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{attrs:{class:"token property"}},[a._v('"initializers"')]),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{attrs:{class:"token property"}},[a._v('"userManagement"')]),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{attrs:{class:"token string"}},[a._v('"scripts/groovy/initializer/userModel.groovy"')]),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{attrs:{class:"token property"}},[a._v('"tenantManagement"')]),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{attrs:{class:"token string"}},[a._v('"scripts/groovy/initializer/tenantModel.groovy"')]),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])},function(){var a=this.$createElement,t=this._self._c||a;return t("h3",{attrs:{id:"agregar-plantillas-de-instancia-personalizadas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#agregar-plantillas-de-instancia-personalizadas","aria-hidden":"true"}},[this._v("#")]),this._v(" Agregar Plantillas de Instancia Personalizadas")])},function(){var a=this.$createElement,t=this._self._c||a;return t("p",[this._v("Se pueden agregar plantillas de instancias adicionales montándolas en el sistema de\narchivos de la imagen Docker de "),t("em",[this._v("instance management")]),this._v(" debajo de la carpeta de "),t("em",[this._v("templates")]),this._v(".")])},function(){var a=this.$createElement,t=this._self._c||a;return t("h3",{attrs:{id:"cambiar-la-plantilla-de-instancia"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cambiar-la-plantilla-de-instancia","aria-hidden":"true"}},[this._v("#")]),this._v(" Cambiar la Plantilla de Instancia")])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[a._v("Configuración")]),a._v(" "),s("th",[a._v("Variable de Entorno")]),a._v(" "),s("th",[a._v("Valor por Defecto")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("Id Plantilla Instancia")]),a._v(" "),s("td",[a._v("sitewhere.instance.template.id")]),a._v(" "),s("td",[a._v("default")])])])])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("AVISO")]),a._v(" "),s("p",[a._v("La plantilla "),s("code",[a._v("default")]),a._v(" que se empaqueta en la imagen Docker carga los usuarios predeterminados\n"),s("code",[a._v("admin")]),a._v(" y "),s("code",[a._v("noadmin")]),a._v(" que normalmente se esperan en un nuevo sistema junto con un "),s("em",[a._v("tenant")]),a._v(" por\ndefecto basado en el tenant "),s("code",[a._v("mongo")]),a._v(" y el dataset "),s("code",[a._v("construction")]),a._v(".")])])},function(){var a=this.$createElement,t=this._self._c||a;return t("h3",{attrs:{id:"instance-data-boostrapping"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instance-data-boostrapping","aria-hidden":"true"}},[this._v("#")]),this._v(" Instance Data Boostrapping")])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("p",[a._v("Si no se encuentra un marcador "),s("code",[a._v("bootstrapped")]),a._v(" en la subcarpeta "),s("code",[a._v("state")]),a._v(" de Zookeeper para la instancia,\nel microservicio de gestión de instancias intentará utilizar la plantilla de instancia para iniciar\nlos datos del usuario y del tenat. Espera a que los microservicios de gestión de usuarios\n("),s("em",[a._v("user management")]),a._v(") y de tenants ("),s("em",[a._v("tenant management")]),a._v(") comiencen antes de ejecutar los scripts que\nenvían datos a través de las respectivas API.")])},function(){var a=this.$createElement,t=this._self._c||a;return t("p",[this._v("Una vez que se han ejecutado los scripts de inicialización, se considera que la instancia se ha\ninicializado y un marcador "),t("code",[this._v("bootstrapped")]),this._v(" se envía al Zookeeper para evitar que se vuelvan a ejecutar\nlos scripts cada vez que se inicia la instancia. Al eliminar el marcador, los datos de la plantilla\nde instancia se cargarán sobre los datos existentes, lo que puede causar problemas con las excepciones\nde clave duplicadas.")])}],!1,null,null,null);e.options.__file="instance-management.md";t.default=e.exports}}]);