---
title: Integration
layout: default
sidebar: combined-sidebar.html
includeNavigation: false
---

# SiteWhere Integration
SiteWhere provides a lot of functionality out of the box, but one of its most powerful features
is ease of integration with other platforms. Rather than reinventing the wheel, SiteWhere 
leverages other proven systems to expand its abilities.

## Development Kits for Device Platforms
SiteWhere provides software development kits for quickly integrating devices
from popular hardware platforms. This allows users to focus on building applications
rather than struggling with infrastructure.

### [Android Development Kit]({{ site.url }}/hardware/android/android.html)
SiteWhere has a complete end-to-end development kit for Android devices that allows
connected applications to be quickly developed. Create your own SiteWhere/Android
application by following the tutorial [here]({{ site.url }}/hardware/android/android.html);

### [Arduino Development Kit]({{ site.url }}/hardware/arduino/arduino.html)
SiteWhere provides libraries that allow Arduino devices to be quickly integrated
with the system. The custom C libraries support MQTT interaction for devices that
have enough memory to support it. More constrained devices can use REST for pushing
data to SiteWhere. See the full tutorial [here]({{ site.url }}/hardware/arduino/arduino.html);

### [Java Agent / Commands Tutorial]({{ site.url }}/tutorials/commands.html)
SiteWhere provides an agent that can run on any Java-capable platform such as
Raspberry Pi. By embedding the agent code, external systems or devices can quickly add
SiteWhere connectivity. This [tutorial]({{ site.url }}/tutorials/commands.html) walks
though the basics of SiteWhere device specifications and commands. It also covers downloading, 
configuring, and running the Java agent.

### [Raspberry Pi Tutorials]({{ site.url }}/tutorials/raspberry-pi.html)
SiteWhere is very well integrated with the Raspberry Pi platform and these tutorials
will help with integration. Examples include integrating SiteWhere with Node-RED for
developing device flows without the need for coding.

## External Software Platforms
SiteWhere can be configured as middleware to push and pull data from external
systems. This allows SiteWhere to integrate data captured by other systems,
control devices proxied by other systems, or pass data along for other goals 
such as CEP and analytics.

### [Mule AnyPoint Platform]({{ site.url }}/integration/mule.html)
Mule AnyPoint is a world class ESB platform that makes it easy to integrate various
technologies without having to write a lot of code. Integrating SiteWhere with Mule
opens up a world of possibilities in working with your IoT data. Use the
[integration guide]({{ site.url }}/integration/mule.html) to start integrating
your SiteWhere data with Mule AnyPoint.

### [OpenHAB]({{ site.url }}/integration/openhab.html)
SiteWhere supports integration with the popular [openHAB](http://www.openhab.org/) open
home automation project. The SiteWhere openHAB plugin (available on the
[downloads](http://www.sitewhere.org/downloads) page) allows SiteWhere to store
and process openHAB data. It also allows openHAB devices to be controlled directly
from the SiteWhere REST services and administrative application. See the complete
[tutorial]({{ site.url }}/integration/openhab.html) for an end-to-end example.

### [Apache Spark]({{ site.url }}/integration/spark.html)
[Apache Spark Streaming](http://spark.apache.org/streaming/) is an extension of the open 
source [Apache Spark](http://spark.apache.org/) platform that makes it easy to build scalable fault-tolerant 
streaming applications. SiteWhere support includes a custom receiver that streams events 
from a SiteWhere instance via Hazelcast. The event stream can then be manipulated via the standard
Spark Streaming APIs and used as the input for [machine learning](http://spark.apache.org/mllib/) 
and [graph processing](http://spark.apache.org/graphx/) modules available in Spark. See the complete
[tutorial]({{ site.url }}/integration/spark.html) for an example application.
