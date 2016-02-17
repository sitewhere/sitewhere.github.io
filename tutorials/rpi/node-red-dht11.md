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
* Drag an *inject* node from the *input* group and place it to the left of the SiteWhere *register* node. 
  Connect the output of the *inject* node to the input of the *register* node. 
* Drag a *debug* node from the *input* group and drop it above the *mqtt* node, then connect
  the output of the *register* node to it. The *register* node will now have two outbound connections. 
  (See the diagram below to make sure your flow looks similar)

### Configure SiteWhere Device Information
Double-click on the *register* node to open the edit dialog, then
click the <i class="fa fa-pencil"></i> icon next to the *Configuration* entry to edit the SiteWhere 
configuration that will be shared between all SiteWhere nodes in this flow.
Leave the default values and click *Add* at the bottom to save the configuration.
Click *Ok* to save the changes.

### Configure MQTT Outbound
Double-click the *mqtt* node to open the edit dialog, then click the
<i class="fa fa-pencil"></i> icon next to the *Server* entry. Enter the name or IP address of the MQTT
broker SiteWhere is connected to and leave the other entries as the default
values. Click *Add* at the bottom to save the configuration. This configuration
can be reused in other MQTT nodes in the flow to prevent having to enter the
same information multiple times. Now enter the MQTT topic SiteWhere is listening on,
which by default is **SiteWhere/input/json**. For the *Name* field, enter 
*To SiteWhere*. Click *Ok* to save the changes.

<a href="{{ site.url }}/images/tutorials/rpi/dht11/dht11-mqtt-config.png" data-lightbox="rpi" title="Configure MQTT">
	<img src="{{ site.url }}/images/tutorials/rpi/dht11/dht11-mqtt-config.png"/>
</a>

### Add a Trigger
Double-click the *inject* node to open the edit dialog. Change the *Name* field
to *Trigger* and click *Ok* to save the changes. This button attached to this node
will act as a trigger for registering the device.

### Deploy the Flow
After completing the previous steps, your flow should look similar to the image
below. Click **Deploy** in the upper-right corner of the page to deploy what 
you have so far. The status indicator beneath the MQTT node should reflect that
the device is *connected* to the MQTT broker.

<a href="{{ site.url }}/images/tutorials/rpi/dht11/dht11-register.png" data-lightbox="rpi" title="Add Registration Nodes">
	<img src="{{ site.url }}/images/tutorials/rpi/dht11/dht11-register.png"/>
</a>

### Test Registration
Test the registration by clicking the button at the left side of the *Trigger* node. It will
send a trigger message that causes the *Register* node to create a JSON registration message
which is sent out via the MQTT connection. The *debug* node will log the JSON to the debugger
panel at the right side of the application. The content will resemble the message below:

{% highlight json %}
{
	"hardwareId": "123-TEST-4567890",
	"type": "RegisterDevice",
	"request": {
		"hardwareId": "123-TEST-4567890",
		"specificationToken": "964e7613-dab3-4fb3-8919-266a91370884",
		"siteToken": "bb105f8d-3150-41f5-b9d1-db04965668d3"
	}
}
{% endhighlight %}

If the message was sent successfully, SiteWhere will register the device and send 
back a registration success message. For the sake of brevity, we will not add 
processing for the response in this tutorial. 

### View the New Device in SiteWhere
Open the SiteWhere administrative console, click on the default site, 
and you should see a new assignment for a Node-RED device that was 
dynamically registered. If not, make sure that Node-RED was able to connect via MQTT
to the broker SiteWhere is using. If using Docker, verify that the 1883 port is being forwarded
so that external clients can access it. The assignments page for the default site will look
similar to the one below:

<a href="{{ site.url }}/images/tutorials/rpi/dht11/dht11-device-added.png" data-lightbox="rpi" title="Add Registration Nodes">
	<img src="{{ site.url }}/images/tutorials/rpi/dht11/dht11-device-added.png"/>
</a>

## Wire the Circuit
The circuit needed to capture data from the DHT11 requires the following components:

* 1 Raspberry Pi 2
* 1 breadboard
* 1 DHT11 sensor (with included 10k resistor)
* An RPi starter kit with IDE cable and various wires

Assemble the circuit by connecting the components as shown in the diagram below. Note
that you can connect the DHT11 directly to the pins on the RPi, but it limits the 
ability to expand on the circuit and does not include a pull-down resistor, which
stabilizes the data output.

<a href="{{ site.url }}/images/tutorials/rpi/dht11/dht11-circuit.png" data-lightbox="rpi" title="Add Registration Nodes">
	<img src="{{ site.url }}/images/tutorials/rpi/dht11/dht11-circuit.png"/>
</a>


