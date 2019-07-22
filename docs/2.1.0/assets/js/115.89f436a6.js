(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{257:function(e,t,a){"use strict";a.r(t);var n=a(1),i=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("Seo"),e._v(" "),a("p",[e._v("Beyond the core architectural changes, the SiteWhere 2.0 platform introduces\na number of new features intended to make the system easier to use while improving\nsecurity and streamlining common tasks.")]),e._v(" "),e._m(1),e._v(" "),a("p",[e._v("Upon administrative login, the landing page now shows global system functionality\nrather than skipping directly to tenant configuration. This allows aspects such as\nthe configuration of global microservices, users and tenants to be handled\nseparately.")]),e._v(" "),a("InlineImage",{attrs:{src:"/images/platform/tenant-management.png",caption:"Tenant Management"}}),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),a("p",[e._v("With the introduction of the concept of a SiteWhere instance in 2.x,\nmany settings can now be configured at a global level and referenced by\ntenants, allowing for centralized management.")]),e._v(" "),e._m(5),e._v(" "),a("p",[e._v("Configuration settings for data persistence are now available at the instance level,\nallowing database details to be specified globally and reused in tenants. The\ntenants can reference the configurations by id and are automatically updated\nif changes are made globally. There is still the option of configuring database\nsettings locally for tenants if global configuration is not needed. The\nmicroservices architecture also allows persistence settings to be controlled\nat a finer level (e.g. different databases for tenant device management and\nasset management) if desired.")]),e._v(" "),a("InlineImage",{attrs:{src:"/images/platform/persistence-configurations.png",caption:"Persistence Configuration"}}),e._v(" "),e._m(6),e._v(" "),a("p",[e._v("When configuring database connectivity settings such as hostname and database\nname, SiteWhere now allows for the use of variable substitution in names,\nallowing for per-tenant settings that are derived from a global expression.\nFor instance, this supports the existing approach of using a database per\ntenant when configuring MongoDB, but also supports other approaches such as\nhaving a separate MongoDB instance for each tenant by using variable substitution\nin the hostname.")]),e._v(" "),a("p",[e._v("The user interface also now directly supports the mapping of system environment\nvariables to override configuration settings. Using this approach, the microservice\ncan be configured externally (e.g. via Helm chart) to pass variables to configure\nSiteWhere components.")]),e._v(" "),a("InlineImage",{attrs:{src:"/images/platform/db-variable-substitution.png",caption:"Variable Sustitution"}}),e._v(" "),e._m(7),e._v(" "),a("p",[e._v("The 1.x implementation of InfluxDB for event management did not fully support\nmultitenancy. In the 2.0 platform, InfluxDB may be configured globally using\nvariable substitution so that each tenant has its own InfluxDB database. The\nupdates also include an upgrade to the latest version of the InfluxDB Java\nclient to support that latest bug fixes and performance improvements.")]),e._v(" "),e._m(8),e._v(" "),a("p",[e._v("SiteWhere 2.0 features a new administrative user interface based on\n"),a("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue"),a("OutboundLink")],1),e._v(" along with "),a("a",{attrs:{href:"https://vuetifyjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vuetify"),a("OutboundLink")],1),e._v("\nfor a look that is more consistent with Google "),a("a",{attrs:{href:"https://material.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Material Design"),a("OutboundLink")],1),e._v("\nguidelines. The interface is built in a component-oriented fashion for a\nmore efficient development workflow. The longer-term plan is to release\nreusable component libraries so that SiteWhere UI/API components can easily\nbe used in other Vue projects.")]),e._v(" "),a("InlineImage",{attrs:{src:"/images/platform/vue-user-interface.png",caption:"Vue User Interface"}}),e._v(" "),e._m(9),e._v(" "),a("p",[e._v("Many aspects of the SiteWhere platform leverage pluggable scripts to support\ncustomization of processing behaviors. SiteWhere 2.0 provides comprehensive\nsupport for scripting and adds many new script management features. A library\nof custom scripts can be quickly developed directly from within the SiteWhere\nadministrative application and shared across the entire distributed system\nwithout any manual intervention.")]),e._v(" "),e._m(10),e._v(" "),a("p",[e._v("Scripts are now stored in the central ZooKeeper tree, which allows for a\npublish/subscribe strategy where nodes can listen for script updates they\nare interested in. In addition to the script content, a metadata structure\nhas been added so that other aspects such as a human-readable name, description,\nscript language, and other attributes may be captured. New APIs have been added,\nallowing scripts to be managed remotely without the need for direct interactions\nwith ZooKeeper.")]),e._v(" "),e._m(11),e._v(" "),a("p",[e._v("In addition to the core metadata for a script, the system now tracks versioning\ninformation for scripts as updates are made over time. New versions can be added\nvia the APIs, then activated so that they are broadcast to dependent microservices.\nThe new versioning mechanism allows scripts to be rolled back to previous versions\nif an update causes issues.")]),e._v(" "),e._m(12),e._v(" "),a("p",[e._v("The admistrative user interface now fully supports script management. Both metadata\nand content for new scripts can be added via the user interface, which supports\nsyntax highlighting and many other features. New script versions may be added from\nscratch or by cloning existing scripts and modifying them via the user interface.")]),e._v(" "),a("InlineImage",{attrs:{src:"/images/platform/scripting-ui.png",caption:"Scripting User Interface"}}),e._v(" "),e._m(13),e._v(" "),a("p",[e._v("The SiteWhere 2.0 data model adds a number of new concepts which improve the\nability to model common use cases. In addition, some of the existing entities\nfrom the previous framework have been renamed and/or reorganized based on\nobservations of real-world use.")]),e._v(" "),e._m(14),e._v(" "),a("p",[e._v("Customer entities allow for a hierarchical representation of device ownership\nand help to organize devices into logical groupings. Any number of devices\nmay be assigned to a customer and customer assignments may change over time\n(with retained assignment history). Telemetry data acquired from devices\nmay be queried based on the customer that was assigned at the time the\ndata was received.")]),e._v(" "),a("p",[e._v('Customers are defined relative to the concept of a "customer type", which\nallows customers to be organized by cross-cutting concerns.')]),e._v(" "),e._m(15),e._v(" "),a("p",[e._v("Area entities allow for a hierarchical representation of devices by location.\nAreas include geospatial information such as a bounding polygon that defines\nthe border of the area. Devices may be assigned to areas, allowing the system\nto handle tasks such as monitoring entry/exit from an area. Telemetry data\nacquired from devices may be queried based on area assigned when the data\nwas received.")]),e._v(" "),a("p",[e._v('Areas are defined relative to the concept of an "area type", which allows\nareas to be organized by cross-cutting concerns.')]),e._v(" "),e._m(16),e._v(" "),a("p",[e._v('The concept of "device specifications" from the previous framework has been\nre-introduced as "device types" in SiteWhere 2.0. Device types contain\ninformation about a class of devices including commands that can be issued\nand custom status indicators.')]),e._v(" "),e._m(17),e._v(" "),a("p",[e._v("SiteWhere 2.0 expands the asset model from the previous framework to include\nboth assets and asset types. Asset types contain metadata about a class of\nassets. Assets are unique instances of an asset type.")]),e._v(" "),e._m(18),e._v(" "),a("p",[e._v("A common complaint with the SiteWhere 1.x data model was that the unique ids for\nobjects (e.g. hardware id for a device) could not be changed after initial creation.\nIn 2.0, all core objects now have a UUID in addition to user-facing ids so that\nuser-facing identifiers may be changed without violating data integrity. With the\nupdate, device hardware ids, assignment tokens, etc may be updated without breaking\nreferential integrity.")]),e._v(" "),e._m(19),e._v(" "),a("p",[e._v("System security is always a high priority for SiteWhere and the 2.0 release contains\na number of updates that bolster the existing infrastructure.")]),e._v(" "),e._m(20),e._v(" "),a("p",[e._v("The SiteWhere REST APIs have moved from HTTP basic authentication to using\n"),a("a",{attrs:{href:"https://jwt.io/introduction/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JWT"),a("OutboundLink")],1),e._v(" to provide identity information. A separate\nREST API is now available that allows an application/user to obtain a time-limited\ntoken based on their system credentials. All REST calls must now contain the JWT to\nprovide authentication information. The JWT is passed from the REST gateway into\nthe microservices that satisfy the requests so that all nested calls have user\ncontext information. As such, any direct access via gRPC channels must also provide\na valid JWT.")]),e._v(" "),e._m(21),e._v(" "),a("p",[e._v("SiteWhere 2.0 requires three headers to be passed with each REST call. The JWT\nheader is required for user authentication. Another header contains the token for\nthe tenant the operation applies to. A third header contains an authentication\ntoken specific to the tenant which verifies access to the tenant information\nindependently of the user authentication. Changing the authentication token on a\nregular basis may be used as a strategy for preventing unauthorized devices\nfrom registering with the system.")])],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"new-features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-features","aria-hidden":"true"}},[this._v("#")]),this._v(" New Features")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"separate-configuration-of-global-services"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#separate-configuration-of-global-services","aria-hidden":"true"}},[this._v("#")]),this._v(" Separate Configuration of Global Services")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"tenant-configuration-and-data-templates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tenant-configuration-and-data-templates","aria-hidden":"true"}},[this._v("#")]),this._v(" Tenant Configuration and Data Templates")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("When creating a new system tenant, there are now separate templates for\nthe tenant configuration and the default data loaded into the configuration.\nThis allows common configurations for infrastructure without forcing a\npreloaded dataset for the configuration. Configuration templates are\navailable for saving device events to MongoDB, InfluxDB, and Apache Cassandra.\nData templates are available for the standard "),t("em",[this._v("construction")]),this._v(" dataset, as well\nas the "),t("em",[this._v("air traffic")]),this._v(" dataset, and "),t("em",[this._v("empty")]),this._v(" which doesn't load any data.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"centralized-configuration-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centralized-configuration-management","aria-hidden":"true"}},[this._v("#")]),this._v(" Centralized Configuration Management")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"persistence-configurations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#persistence-configurations","aria-hidden":"true"}},[this._v("#")]),this._v(" Persistence Configurations")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"variable-replacement-in-datastore-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#variable-replacement-in-datastore-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Variable Replacement in Datastore Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"influxdb-improvements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#influxdb-improvements","aria-hidden":"true"}},[this._v("#")]),this._v(" InfluxDB Improvements")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"improved-administrative-user-interface"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#improved-administrative-user-interface","aria-hidden":"true"}},[this._v("#")]),this._v(" Improved Administrative User Interface")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"improved-scripting-support"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#improved-scripting-support","aria-hidden":"true"}},[this._v("#")]),this._v(" Improved Scripting Support")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"script-storage-and-metadata"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#script-storage-and-metadata","aria-hidden":"true"}},[this._v("#")]),this._v(" Script Storage and Metadata")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"script-versioning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#script-versioning","aria-hidden":"true"}},[this._v("#")]),this._v(" Script Versioning")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"scripting-user-interface"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scripting-user-interface","aria-hidden":"true"}},[this._v("#")]),this._v(" Scripting User Interface")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"data-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-model","aria-hidden":"true"}},[this._v("#")]),this._v(" Data Model")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"customers-and-customer-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#customers-and-customer-types","aria-hidden":"true"}},[this._v("#")]),this._v(" Customers and Customer Types")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"areas-and-area-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#areas-and-area-types","aria-hidden":"true"}},[this._v("#")]),this._v(" Areas and Area Types")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"device-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#device-types","aria-hidden":"true"}},[this._v("#")]),this._v(" Device Types")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"assets-and-asset-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#assets-and-asset-types","aria-hidden":"true"}},[this._v("#")]),this._v(" Assets and Asset Types")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"new-id-management-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-id-management-structure","aria-hidden":"true"}},[this._v("#")]),this._v(" New Id Management Structure")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"security-improvements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#security-improvements","aria-hidden":"true"}},[this._v("#")]),this._v(" Security Improvements")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"json-web-token"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json-web-token","aria-hidden":"true"}},[this._v("#")]),this._v(" JSON Web Token")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"updated-security-headers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updated-security-headers","aria-hidden":"true"}},[this._v("#")]),this._v(" Updated Security Headers")])}],!1,null,null,null);i.options.__file="features.md";t.default=i.exports}}]);