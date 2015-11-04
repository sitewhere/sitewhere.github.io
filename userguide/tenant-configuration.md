---
title: Tenant Configuration
layout: default
sidebar: sidebar.html
prevLink: index.html
prevTitle: Integration
nextLink: hardware/arduino/arduino.html
nextTitle: Arduino Integration
---

# {{page.title}}
In addition to the global configuration file, there is a per-tenant configuration file
located at **conf/sitewhere/xxx-tenant.xml** (where **xxx** is the tenant id). Each tenant
has its own device data and configurable processing pipeline. The tenant configuration file
uses Spring beans and a custom schema like the global configuration, but with a different
schema targeted at tenant-specific features:

.. code-block:: xml

   <?xml version="1.0" encoding="UTF-8"?>
   <beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns:context="http://www.springframework.org/schema/context" xmlns:sw="http://www.sitewhere.com/schema/sitewhere/ce/tenant"
      xmlns:global="http://www.sitewhere.com/schema/sitewhere/ce"
      xsi:schemaLocation="
              http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.1.xsd
              http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-3.1.xsd
              http://www.springframework.org/schema/security http://www.springframework.org/schema/security/spring-security-3.0.xsd
              http://www.sitewhere.com/schema/sitewhere/ce http://www.sitewhere.org/schema/sitewhere/ce/1.2.0/sitewhere.xsd
              http://www.sitewhere.com/schema/sitewhere/ce/tenant http://www.sitewhere.org/schema/sitewhere/ce/1.2.0/sitewhere-tenant.xsd">
              
      <!-- Load property values for substitution -->
      <context:property-placeholder
         location="file:${catalina.home}/conf/sitewhere/${tenant.id}-tenant.properties"
         ignore-resource-not-found="true"/>
      
      <!-- ######################## -->
      <!-- # TENANT CONFIGURATION # -->
      <!-- ######################## -->
      <sw:tenant-configuration>

# Tenant Datastores
Tenant datastores extend the features of the global datastore with
implementations of the device and asset data models.

## MongoDB Tenant Datastore
To use MongoDB as the tenant datastore, edit the SiteWhere configuration *<sw:tenant-datastore>* section
and use the *<sw:mongo-tenant-datastore>* element as shown below:

.. code-block:: xml
   :emphasize-lines: 7-8

   <!-- ########################### -->
   <!-- # DATASTORE CONFIGURATION # -->
   <!-- ########################### -->
   <sw:tenant-datastore>
   
      <!-- Default MongoDB Datastore -->
      <sw:mongo-tenant-datastore useBulkEventInserts="true"
         bulkInsertMaxChunkSize="1000"/>

      <!-- Improves performance by using Hazelcast for distributed caching -->
      <sw:hazelcast-cache/>
      
      <!-- Initializes data model with sample data if datastore is empty -->
      <sw:default-device-model-initializer/>
      <sw:default-asset-model-initializer/>

   </sw:tenant-datastore>

The following attributes may be specified for the *<sw:mongo-tenant-datastore>* element.
      
+------------------------+----------+--------------------------------------------------+
| Attribute              | Required | Description                                      |
+========================+==========+==================================================+
| useBulkEventInserts    | optional | Indicates whether the bulk loading APIs should   |
|                        |          | be used to increase event write performance.     |
|                        |          | Defaults to *false*.                             |
+------------------------+----------+--------------------------------------------------+
| bulkInsertMaxChunkSize | optional | Indicates the max number of events to queue      |
|                        |          | before sending a batch via the bulk APIs.        |
|                        |          | Defaults to *1000*.                              |
+------------------------+----------+--------------------------------------------------+

## HBase Tenant Datastore
To use HBase as the tenant datastore, edit the SiteWhere configuration  *<sw:tenant-datastore>* section 
and use the *<sw:hbase-tenant-datastore/>* element as shown below:

.. code-block:: xml
   :emphasize-lines: 7

   <!-- ########################### -->
   <!-- # DATASTORE CONFIGURATION # -->
   <!-- ########################### -->
   <sw:tenant-datastore>

      <!-- Default HBase Datastore -->
      <sw:hbase-tenant-datastore/>

      <!-- Improves performance by using Hazelcast for distributed caching -->
      <sw:hazelcast-cache/>
      
      <!-- Initializes data model with sample data if datastore is empty -->
      <sw:default-device-model-initializer/>
      <sw:default-asset-model-initializer/>

   </sw:tenant-datastore>


## Device Management Cache Providers
Many elements of the device data model do not change often and can benefit from a caching implementation.
SiteWhere offers a service provider interface 
`IDeviceManagementCacheProvider <../apidocs/com/sitewhere/spi/device/IDeviceManagementCacheProvider.html>`_
which may be implemented to provide caching capabilities that use an external cache provider.
Note that removing the cache will result in noticeably slower performance since the underlying
service provider implementations will load all data from the datastore.

### Hazelcast Cache Provider
SiteWhere offers a default device management cache implementation based on `Hazelcast <http://hazelcast.com//>`_
which can be configured as shown below:

.. code-block:: xml
   :emphasize-lines: 8

   <sw:tenant-datastore>
   
      <!-- Default MongoDB Datastore -->
      <sw:mongo-tenant-datastore useBulkEventInserts="true"
         bulkInsertMaxChunkSize="1000"/>

      <!-- Improves performance by using Hazelcast for distributed caching -->
      <sw:hazelcast-cache/>

The Hazelcast cache works well in standalone mode as well as in clustered environments since the cache
contents are synchronized across the Hazelcast cluster.

### Ehcache Cache Provider
SiteWhere offers a device management cache implementation based on `Ehcache <http://ehcache.org/>`_
which can be configured as shown below:

.. code-block:: xml
   :emphasize-lines: 8

   <sw:tenant-datastore>
   
      <!-- Default MongoDB Datastore -->
      <sw:mongo-tenant-datastore useBulkEventInserts="true"
         bulkInsertMaxChunkSize="1000"/>

		<!-- Improves performance by using EHCache to store device management entities -->
		<sw:ehcache-device-management-cache/>

The following attributes may be specified for the *<sw:ehcache-device-management-cache>* element.
      
+------------------------------------+----------+--------------------------------------------------+
| Attribute                          | Required | Description                                      |
+====================================+==========+==================================================+
| siteCacheMaxEntries                | optional | Max number of site entries in cache.             |
+------------------------------------+----------+--------------------------------------------------+
| deviceSpecificationCacheMaxEntries | optional | Max number of specification entries in cache.    |
+------------------------------------+----------+--------------------------------------------------+
| deviceCacheMaxEntries              | optional | Max number of device entries in cache.           |
+------------------------------------+----------+--------------------------------------------------+
| deviceAssignmentCacheMaxEntries    | optional | Max number of assignment entries in cache.       |
+------------------------------------+----------+--------------------------------------------------+
| siteCacheTtl                       | optional | Time to live for site entries.                   |
+------------------------------------+----------+--------------------------------------------------+
| deviceSpecificationCacheTtl        | optional | Time to live for specification entries.          |
+------------------------------------+----------+--------------------------------------------------+
| deviceCacheTtl                     | optional | Time to live for device entries.                 |
+------------------------------------+----------+--------------------------------------------------+
| deviceAssignmentCacheTtl           | optional | Time to live for assignment entries.             |
+------------------------------------+----------+--------------------------------------------------+

Note that the Ehcache implementation should **not** be used in clustered environments. There will
be an instance of the cache on each SiteWhere instance and the caches will not be synchronized.



# DEVICE COMMUNICATION GOES HERE





## Asset Management
SiteWhere includes an asset management subsystem that provides a standardized way to reference assets from
many different sources. SiteWhere assets reference items in the real world including people (person assets),
places (location assets) and things (hardware assets). There is also a class of assets called device assets
that are hardware assets which can be used in device specifications. 

Assets are used to specify information about device specifications such as the name, photo, and properties 
that make the asset unique. They are also used in device assignments to indicate a physical object that is
associated with a device such as a person associated with a badge or the car associated with a tracking device.

Starting with SiteWhere 1.1.0, all assets are stored in the datastore by default. Previous versions required
them to be stored in XML files or external asset management systems. In the administrative console, new 
asset categories and assets can be added. When the system starts, each of the asset categories is loaded
as an asset module. Other assets can still be added via the filesystem or external sources as detailed below.

### Filesystem Asset Modules
Assets can be loaded from the filesystem using files containing XML data. For an example of the data
format take a look at the files in the **conf/sitewhere/assets/** directory. The available modules 
include *<sw:filesystem-device-asset-module/>*, *<sw:filesystem-hardware-asset-module/>*,
*<sw:filesystem-person-asset-module/>*, and *<sw:filesystem-location-asset-module/>*. Each module
must have a unique id. Filesystem asset modules load all assets at server startup, but can be reloaded
by calling the **refresh** method in the asset REST services.

.. code-block:: xml
   
   <sw:asset-management>

      <sw:filesystem-device-asset-module filename="my-devices.xml"
         moduleId="my-devices" moduleName="My Devices"/>

   </sw:asset-management>
   
The following attributes may be specified for the filesystem asset module elements.
      
+----------------------+----------+--------------------------------------------------+
| Attribute            | Required | Description                                      |
+======================+==========+==================================================+
| filename             | optional | Name of XML file relative to the assets          |
|                      |          | configuration directory.                         |
+----------------------+----------+--------------------------------------------------+
| moduleId             | optional | Unique module id.                                |
+----------------------+----------+--------------------------------------------------+
| moduleName           | optional | Name shown in use interface for module.          |
+----------------------+----------+--------------------------------------------------+

### WSO2 Identity Server Asset Module
SiteWhere can load and reference assets from `WSO2 Identity Server <http://wso2.com/products/identity-server/>`_
allowing asset data to be stored externally. WSO2 Identity Server allows information about people to be
stored in many formats including LDAP and many databases. It also allows data to be retrieved in many
common formats. SiteWhere uses SCIM to load the list of users from the server. The current implementation
loads all users at startup, so when adding users, the **refresh** method should be called in the asset REST
services to pick up the changes. An example WSO2 asset module configuration is shown below:

.. code-block:: xml
   
   <sw:wso2-identity-asset-module moduleId="wso2"
      scimUsersUrl="https://wso2is:9443/wso2/scim/Users" username="admin" password="admin"
      ignoreBadCertificate="true"/>

The following attributes may be specified for the *<sw:wso2-identity-asset-module>* element.
      
+----------------------+----------+--------------------------------------------------+
| Attribute            | Required | Description                                      |
+======================+==========+==================================================+
| scimUsersUrl         | required | URL for accessing SCIM users list.               |
+----------------------+----------+--------------------------------------------------+
| username             | required | Admin username for server authentication.        |
+----------------------+----------+--------------------------------------------------+
| password             | required | Admin password for server authentication.        |
+----------------------+----------+--------------------------------------------------+
| ignoreBadCertificate | required | Allows connection via SSL to the server even if  |
|                      |          | the certificate is not valid. Only use this in   |
|                      |          | development envionments.                         |
+----------------------+----------+--------------------------------------------------+

## Configuring Logging
SiteWhere uses `Apache Log4j <http://logging.apache.org/log4j/1.2/>`_ for logging information about the running system.
The logging output is configured by the **log4j.xml** file which is found in the lib folder of the default server
distributions. For users running SiteWhere on their own application server instance, the default logging configuration
file can be found on `GitHub <https://github.com/sitewhere/sitewhere/blob/master/sitewhere-core/config/log4j.xml>`_.
The file must be available on the server classpath in order to be used.

The default logging configuration file logs to the console output and also creates a separate log file named
**sitewhere.log** which contains the same content.

### Enabling Server Debug Output
By default, most debugging output is not logged for SiteWhere. To turn debugging on for all aspects of the server,
scroll down to the following block:

.. code-block:: xml
   
   <category name="com.sitewhere">
      <priority value="INFO" />
   </category>

Change the **INFO** value to **DEBUG** and restart the server. All debug information will be now be available. This is
discouraged in production environments because logging takes system resources and will degrade performance.
