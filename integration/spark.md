---
title: Apache Spark
layout: default
sidebar: sidebar.html
prevLink: integration/openhab.html
prevTitle: OpenHAB
nextLink: integration.html
nextTitle: Integration
---

# {{page.title}}
[Apache Spark Streaming](http://spark.apache.org/streaming/) is an extension of the open
source Apache Spark platform that makes it easy to build scalable fault-tolerant 
streaming applications. SiteWhere support includes a custom receiver that streams events  
from a SiteWhere via Hazelcast. The event stream can then be manipulated via the standard
Spark Streaming APIs and used as the input for [machine learning](http://spark.apache.org/mllib/) 
and [graph processing](http://spark.apache.org/graphx/) modules available in Spark.

## Creating a Spark Project
In order to deploy code to be executed on Spark via **spark-submit**, an [Uber JAR](https://maven.apache.org/plugins/maven-shade-plugin/examples/includes-excludes.html) must be 
created containing the dependencies needed for it to run. The **pom.xml** used by Maven
to build the project should include dependencies on the SiteWhere Spark module and
the Apache Spark libraries:

{% highlight xml %}
<dependencies>
	<dependency>
		<groupId>com.sitewhere</groupId>
		<artifactId>sitewhere-spark</artifactId>
		<version>${sitewhere.version}</version>
		<scope>compile</scope>
	</dependency>
	<dependency>
		<groupId>org.apache.spark</groupId>
		<artifactId>spark-streaming_2.10</artifactId>
		<version>1.5.2</version>
		<scope>provided</scope>
	</dependency>
</dependencies>
{% endhighlight %}

**Note that the Spark libraries are marked as *provided* since the Spark engine will make them available.**

To create the Uber JAR, an extra plugin needs to be added to the Maven build as shown below:

{% highlight xml %}
<plugin>
	<groupId>org.apache.maven.plugins</groupId>
	<artifactId>maven-shade-plugin</artifactId>
	<version>2.4.2</version>
	<configuration>
		<artifactSet>
			<excludes>
				<exclude>log4j:log4j</exclude>
				<exclude>javax.mail:mail</exclude>
				<exclude>javax.activation:activation</exclude>
			</excludes>
		</artifactSet>
	</configuration>
	<executions>
		<execution>
			<phase>package</phase>
			<goals>
				<goal>shade</goal>
			</goals>
		</execution>
	</executions>
</plugin>
{% endhighlight %}

The *excludes* block prevents unneeded libraries from being included in the JAR.