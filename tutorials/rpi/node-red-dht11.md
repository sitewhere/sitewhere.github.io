---
title: Raspberry Pi DHT11 Sensor Tutorial
layout: default
sidebar: sidebar.html
prevLink: tutorials/rpi/node-red-setup.html
prevTitle: Node-RED Installation
nextLink: tutorials/raspberry-pi.html
nextTitle: Raspberry Pi Tutorials
---

# {{page.title}}
This tutorial walks through building a Raspberry Pi Node-RED flow that reads 
temperature and humidity data from a [DHT11](https://www.adafruit.com/product/386) 
sensor and sends it to SiteWhere. It then demonstrates how to implement conditional 
logic for generating custom alerts in SiteWhere and how to send the data to 
InitialState.com to visualize it in real-time.

## Getting Started
This tutorial assumes you have already installed Node-RED and the DHT 
processing nodes on the Raspberry Pi. If not, follow 
[this tutorial](node-red-setup.html) to install the required components 
before continuing. After completing the initial configuration, make
sure that Node-RED is running by entering:

{% highlight bash %}
sudo node-red -v
{% endhighlight %}

Once the server has started, open the Node-RED application (usually available 
at http://localhost:1880).

## Add Device Registration
Starting from an empty flow: 
* Drag a SiteWhere *register* node from the palette at the left and drop it on the canvas. 
* Drag an *mqtt* node from the *output* group in the palette and drop it next to the *register* node. 
  Connect the outbound port of the *register* node to the inbound port on the *mqtt* node. 
* Drag an *inject* node from the input group and place it to the left of the SiteWhere *register* node. 
  Connect the output of the *inject* node to the input of the *register* node. 
* Drag a *debug* node from the *input* group and drop it above the *mqtt* node, then connect
  the output of the *register* node to it. The *register* node will now have two outbound connections. 
  (See the diagram below to make sure your flow looks similar)

Double-click on the *register* node to open the edit dialog, then
click the pen icon next to the *Configuration* entry to edit the SiteWhere 
configuration that will be shared between all SiteWhere nodes in this flow.
Leave the default values and click *Add* at the bottom to save the configuration.
Click *Ok* to save the changes.

Double-click the *mqtt* node to open the edit dialog, then click the
pen icon next to the *Server* entry. Enter the name or IP address of the MQTT
broker SiteWhere is connected to and leave the other entries as the default
values. Click *Add* at the bottom to save the configuration. This configuration
can be reused in other MQTT nodes in the flow to prevent having to enter the
same information multiple times. Now enter the MQTT SiteWhere is listening on,
which by default is **SiteWhere/input/json**. For the *Name* field, enter 
*To SiteWhere*. Click *Ok* to save the changes.

Double-click the *inject* node to open the edit dialog. Change the *Name* field
to *Trigger* and click *Ok* to save the changes.

After completing the previous steps, your flow should look similar to the image
below. Click **Deploy** in the upper-right corner of the page to deploy what 
you have so far.

<a href="{{ site.url }}/images/tutorials/rpi/dht11/dht11-register.png" data-lightbox="rpi" title="Add Registration Nodes">
	<img src="{{ site.url }}/images/tutorials/rpi/dht11/dht11-register.png"/>
</a>
