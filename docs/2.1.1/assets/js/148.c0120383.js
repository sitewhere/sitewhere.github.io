(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{330:function(e,t,a){"use strict";a.r(t);var i=a(1),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("Seo"),e._v(" "),a("p",[e._v("SiteWhere includes a comprehensive object model which contains\nentities intended to represent real-world objects that interact\nwith IoT applications. Many of the concepts remain fairly generic\nso that a variety of potential vertical markets may be represented\nby the same model.")]),e._v(" "),e._m(1),e._v(" "),a("p",[e._v("Most SiteWhere entities have two separate unique identifiers. The\nprimary identifier is a "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Universally_unique_identifier",target:"_blank",rel:"noopener noreferrer"}},[e._v("UUID"),a("OutboundLink")],1),e._v("\nwhich is assigned by the system when the entity is created and\ndoes not change over the lifetime of the entity. A second identifier,\nwhich is unique within the entity type, is a "),a("em",[e._v("token")]),e._v(" which is a\nstring assigned via the APIs and updated at any time. This approach\nallows the token for an entity to change over time if needed\nwithout the need to update the identifier in relations that reference\nthe entity. All API operations act on the entity token, while all\ninternal references between entities use the internal UUID.")]),e._v(" "),e._m(2),e._v(" "),a("p",[e._v("The SiteWhere object model covers many functional areas.")]),e._v(" "),e._m(3),e._v(" "),a("p",[e._v("One of the primary functions of an IoT platform is to represent\nthe devices that the platform interacts with. SiteWhere provides\na comprehensive model for capturing information about the devices\nmanaged by the system and for organizing them so that context is\nprovided around the data generated by the devices.")]),e._v(" "),e._m(4),e._v(" "),a("p",[e._v("Devices are often deployed in association with real-world assets which derive\nsome service from the device. Use cases include:")]),e._v(" "),e._m(5),e._v(" "),a("p",[e._v("SiteWhere provides an asset management model for storing assets that may be\nassociated with system devices. External asset management systems may be\nprovided based on the same set of APIs in cases where assets need to be\nmanaged externally.")]),e._v(" "),e._m(6),e._v(" "),a("p",[e._v('The event management model is used to capture temporal events related to\ndevices. This includes telemetry data and device state changes as well as\naudit data such as command invocations and responses. Device events are\nstored as time-series data and are generally persisted separately from\ndevice management data due to their temporal nature and large scale\nrelative to the "master" data.')]),e._v(" "),a("p",[e._v("All device events share common fields such as the date the event\noccurred, the date the event was received, the id of the device,\nthe current device assignment and various associations which\nmay be used to filter/aggregate event data. In addition, each device\nevent subtype contains extra data specific to its function.")])],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"object-model-overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#object-model-overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Object Model Overview")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"entity-identification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entity-identification","aria-hidden":"true"}},[this._v("#")]),this._v(" Entity Identification")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"functional-areas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#functional-areas","aria-hidden":"true"}},[this._v("#")]),this._v(" Functional Areas")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"device-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#device-management","aria-hidden":"true"}},[this._v("#")]),this._v(" Device Management")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"asset-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#asset-management","aria-hidden":"true"}},[this._v("#")]),this._v(" Asset Management")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("a tracking device associated with an automobile in the fleet-tracking vertical")]),this._v(" "),t("li",[this._v("a badge associated with a person in the security vertical")]),this._v(" "),t("li",[this._v("a heart monitor associated with a bed in a healthcare veritcal")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"event-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#event-management","aria-hidden":"true"}},[this._v("#")]),this._v(" Event Management")])}],!1,null,null,null);n.options.__file="object-model.md";t.default=n.exports}}]);