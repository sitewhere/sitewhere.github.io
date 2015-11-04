---
title: Global Configuration
layout: default
sidebar: sidebar.html
prevLink: index.html
prevTitle: Integration
nextLink: hardware/arduino/arduino.html
nextTitle: Arduino Integration
---

# {{page.title}}
SiteWhere uses a hierarchy of [Spring](http://projects.spring.io/spring-framework/) XML files as
its configuration mechanism. When the SiteWhere server starts, one of the first steps is to bootstrap
the core system components by loading the **conf/sitewhere/sitewhere-server.xml** file. This file
acts as the global server configuration, specifying aspects of the system shared by all tenants such
as the user datastore implementation and Hazelcast configuration. In addition to the global configuration,
there is a per-tenant configuration in **conf/sitewhere/xxx-tenant.xml** (where **xxx** is the tenant id)
which specifies details about how the tenant engine is to be configured. Most other SiteWhere features 
such as device management and communication engine are configured in these tenant configuration files.

## Spring Beans Configuration
A valid SiteWhere configuration is based on a standard Spring beans XML file with an embedded section
that uses a schema specific to SiteWhere. The XML below is a partial configuration file illustrating some
of the key features. 

Notice the schema declarations and enclosing *<beans>* element at the top of the file. These are standard for a 
[Spring beans](http://docs.spring.io/spring-framework/docs/current/spring-framework-reference/html/beans.html) 
configuration file. There is an **http://www.sitewhere.com/schema/sitewhere/ce** namespace declared and 
pointed to the schema for the targeted release. Often a new SiteWhere release will add features to the 
schema, so it is important to point to the schema for the version of SiteWhere being run on the server.

The **configuraton** section contains all of the schema-based SiteWhere configuration elements. If a
schema-aware editor such as Eclipse is being used, the editor will provide syntax completion based on the 
SiteWhere schema. An example of a SiteWhere global configuration file is included below:

{% highlight xml %}
   <?xml version="1.0" encoding="UTF-8"?>
   <beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns:context="http://www.springframework.org/schema/context" xmlns:sw="http://www.sitewhere.com/schema/sitewhere/ce"
      xsi:schemaLocation="
              http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.1.xsd
              http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-3.1.xsd
              http://www.springframework.org/schema/security http://www.springframework.org/schema/security/spring-security-3.0.xsd
              http://www.sitewhere.com/schema/sitewhere/ce http://www.sitewhere.org/schema/sitewhere/ce/1.2.0/sitewhere.xsd">
              
      <!-- Load property values for substitution -->
      <context:property-placeholder location="file:${catalina.home}/conf/sitewhere/sitewhere.properties"
         ignore-resource-not-found="true"/>
      
      <!-- ########################### -->
      <!-- # SITEWHERE CONFIGURATION # -->
      <!-- ########################### -->
      <sw:configuration>
   
         <!-- ################################# -->
         <!-- # GLOBAL SERVICES CONFIGURATION # -->
         <!-- ################################# -->
         <sw:globals>
            <sw:hazelcast-configuration configFileLocation="${catalina.home}/conf/sitewhere/hazelcast.xml"/>
            <sw:solr-configuration solrServerUrl="http://localhost:8983/solr/SiteWhere"/>
            <sw:groovy-configuration debug="true" verbose="true"/>
         </sw:globals>
         
         <!-- ################################## -->
         <!-- # GLOBAL DATASTORE CONFIGURATION # -->
         <!-- ################################## -->
         <sw:datastore>
         
            <!-- MongoDB datastore used for global data model -->
            <sw:mongo-datastore hostname="localhost" port="27017" databaseName="sitewhere"/>
            
            <!-- Initializes users and tenant data if datastore is empty -->
            <sw:default-user-model-initializer/>
   
         </sw:datastore>
   
      </sw:configuration>
   
   </beans>
{% endhighlight %}
   
## Handling Sensitive Data
SiteWhere configuration files often contain login credentials or other information that should not
be shared with other users. Also, there are situations where settings for a system are 
environment-specific (production vs. staging vs. development) and maintaining a separate configuration 
for each creates extra work. Using Spring
`property placeholders <http://docs.spring.io/spring-framework/docs/current/spring-framework-reference/html/xsd-config.html#xsd-config-body-schemas-context-pphc>`_
allows sensitive data to be moved into an external properties file and injected at runtime.
In the following example, the hostname and port for the MongoDB datastore would be loaded from
the **sitewhere.properties** file in the same directory as the main configuration file.

.. code-block:: xml
   :emphasize-lines: 1, 14
   
   <context:property-placeholder location="file:${catalina.home}/conf/sitewhere/sitewhere.properties" ignore-resource-not-found="true"/>

   <!-- ########################### -->
   <!-- # SITEWHERE CONFIGURATION # -->
   <!-- ########################### -->
   <sw:configuration>
      
      <!-- ########################### -->
      <!-- # DATASTORE CONFIGURATION # -->
      <!-- ########################### -->
      <sw:datastore>
      
         <!-- Default MongoDB Datastore -->
         <sw:mongo-datastore hostname="${mongo.host}" port="${mongo.port}" databaseName="sitewhere"/>
 
The properties file would contain values for the placeholders as shown below:

.. code-block:: properties

   # SiteWhere configuration properties.
   mongo.host=localhost
   mongo.port=1234

## Global Datastore Configuration
SiteWhere can use either `MongoDB <http://www.mongodb.org/>`_ or `Apache HBase <https://hbase.apache.org/>`_ for 
underlying data storage. Tenant datastores must use the same database type as is specified in the 
global configuration.

### Configuring a MongoDB Datastore
To use MongoDB as the global datastore, edit the SiteWhere configuration *<sw:datastore>* section
and use the *<sw:mongo-datastore>* element as shown below:

.. code-block:: xml
   :emphasize-lines: 7

   <!-- ################################## -->
   <!-- # GLOBAL DATASTORE CONFIGURATION # -->
   <!-- ################################## -->
   <sw:datastore>
   
      <!-- MongoDB datastore used for global data model -->
      <sw:mongo-datastore hostname="localhost" port="27017" databaseName="sitewhere"/>
      
      <!-- Initializes users and tenant data if datastore is empty -->
      <sw:default-user-model-initializer/>

   </sw:datastore>

Note that the default settings assume a local MongoDB instance running on the default port and using a database
named **sitewhere**.

The following attributes may be specified for the *<sw:mongo-datastore>* element.
      
+------------------------+----------+--------------------------------------------------+
| Attribute              | Required | Description                                      |
+========================+==========+==================================================+
| hostname               | optional | Server hostname for MongoDB instance.            |
|                        |          | Defaults to *localhost*.                         |
+------------------------+----------+--------------------------------------------------+
| port                   | optional | Server port for MongoDB instance.                |
|                        |          | Defaults to *27017*.                             |
+------------------------+----------+--------------------------------------------------+
| databaseName           | optional | MongoDB database name for SiteWhere storage.     |
|                        |          | Defaults to *sitewhere*.                         |
+------------------------+----------+--------------------------------------------------+

### Configuring an HBase Datastore
To use Apache HBase as the global datastore, edit the SiteWhere configuration  *<sw:datastore>* section 
and use the *<sw:hbase-datastore>* element as shown below:

.. code-block:: xml
   :emphasize-lines: 7-8

   <!-- ################################## -->
   <!-- # GLOBAL DATASTORE CONFIGURATION # -->
   <!-- ################################## -->
   <sw:datastore>

      <!-- Default HBase Datastore -->
      <sw:hbase-datastore quorum="sandbox.hortonworks.com"
         zookeeperZnodeParent="/hbase-unsecure"/>

      <!-- Initializes users and tenant data if datastore is empty -->
      <sw:default-user-model-initializer/>

   </sw:datastore>

The above configuration may be used to connect to a Hortonworks HDP instance.

The following attributes may be specified for the *<sw:hbase-datastore>* element.
      
+--------------------------+----------+--------------------------------------------------+
| Attribute                | Required | Description                                      |
+==========================+==========+==================================================+
| quorum                   | required | Server hostname for HBase ZooKeeper quorum.      |
+--------------------------+----------+--------------------------------------------------+
| zookeeperClientPort      | optional | ZooKeeper client port. Defaults to 2181.         |
+--------------------------+----------+--------------------------------------------------+
| zookeeperZnodeParent     | optional | ZooKeeper znode parent. Defaults to '/hbase'.    |
+--------------------------+----------+--------------------------------------------------+
| zookeeperZnodeRootServer | optional | ZooKeeper znode root server. Defaults to         |
|                          |          | 'root-region-server'.                            |
+--------------------------+----------+--------------------------------------------------+

## Populating Sample Data
In both MongoDB and HBase installations, SiteWhere will automatically create the underlying database if it does 
not already exist. After that, each time that SiteWhere server starts up, it will check whether there is data 
in the database and, if data initializers are configured, will prompt to populate 
the database with sample data (for non-console startup, there are properties on the 
model initializers in the configuration file that allow you to specify whether 
to populate the sample data automatically). SiteWhere has an initializer that will
create sample data for user and tenant data models. It can be configured by adding 
*<sw:default-user-model-initializer/>* to the *<sw:datastore>* section as shown in
the datastore examples above.
