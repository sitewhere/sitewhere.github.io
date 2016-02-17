---
title: Raspberry Pi DHT11 Server Logic
layout: default
sidebar: sidebar.html
prevLink: tutorials/rpi/node-red-dht11.html
prevTitle: Node-RED DHT11 Tutorial
nextLink: tutorials/raspberry-pi.html
nextTitle: Raspberry Pi Tutorials
---

# {{page.title}}
This tutorial uses temperature/humidity data from a DHT11 sensor and adds
SiteWhere server logic processing to dynamically generate alerts and
forward data to [InitialState.com](http://www.initialstate.com) for visualization.

## Getting Started
This tutorial builds on a Node-RED flow created in a previous tutorial. To build
the initial flow step-by-step, follow the tutorial [here](node-red-dht11.html).
You can also take a shortcut and import the flow by opening the Node-RED web
application, choosing the toolbar in the top-right corner, choosing import,
and copying the content below via the clipboard. After placing the nodes, the 
flow is ready to work with.

{% highlight json %}
[{"id":"2e1bee06.d1e412","type":"mqtt-broker","z":"ff588a38.00a778","broker":"192.168.1.7","port":"1883","clientid":"","usetls":false,"verifyservercert":true,"compatmode":true,"keepalive":"15","cleansession":true,"willTopic":"","willQos":"0","willRetain":"false","willPayload":"","birthTopic":"","birthQos":"0","birthRetain":"false","birthPayload":""},{"id":"84f9e0b4.7b062","type":"sw-config","z":"ff588a38.00a778","name":"Default","hwid":"123-TEST-4567890","specification":"964e7613-dab3-4fb3-8919-266a91370884","site":"bb105f8d-3150-41f5-b9d1-db04965668d3"},{"id":"4c5716e.fb3a8e8","type":"sw-register","z":"ff588a38.00a778","name":"Register","config":"84f9e0b4.7b062","x":652,"y":206,"wires":[["f0bfe849.0f4018","6a3b45ca.95c4bc"]]},{"id":"f0bfe849.0f4018","type":"mqtt out","z":"ff588a38.00a778","name":"To SiteWhere","topic":"SiteWhere/input/json","qos":"","retain":"","broker":"2e1bee06.d1e412","x":887,"y":235,"wires":[]},{"id":"6989852e.96767c","type":"inject","z":"ff588a38.00a778","name":"Trigger","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":475,"y":206,"wires":[["4c5716e.fb3a8e8"]]},{"id":"6a3b45ca.95c4bc","type":"debug","z":"ff588a38.00a778","name":"","active":true,"console":"false","complete":"false","x":887,"y":160,"wires":[]},{"id":"95128c46.6aed7","type":"rpi-dht22","z":"ff588a38.00a778","name":"Measure","topic":"rpi-dht22","dht":"11","pintype":"0","pin":4,"x":338,"y":386,"wires":[["70a14363.8f5ebc"]]},{"id":"70a14363.8f5ebc","type":"function","z":"ff588a38.00a778","name":"Capture Data","func":"msg['mx:temperature'] = msg.payload;\nmsg['mx:humidity'] = msg.humidity;\nreturn msg;","outputs":1,"noerr":0,"x":506,"y":329,"wires":[["985f6255.67a0a"]]},{"id":"985f6255.67a0a","type":"sw-send-measurements","z":"ff588a38.00a778","name":"Build JSON","mxname":"temperature","mxvalue":"0","updstate":true,"config":"84f9e0b4.7b062","x":670,"y":382,"wires":[["f0bfe849.0f4018","6a3b45ca.95c4bc"]]},{"id":"4fb0ec68.b04f14","type":"inject","z":"ff588a38.00a778","name":"Interval","topic":"","payload":"","payloadType":"date","repeat":"3","crontab":"","once":true,"x":168,"y":330,"wires":[["95128c46.6aed7"]]}]
{% endhighlight %}

## Adding Server Processing Logic
As of SiteWhere 1.6.1, server processing logic is supported directly via 
[Groovy](http://www.groovy-lang.org/) scripts that run in the outbound 
processing pipeline. Older SiteWhere versions were able to forward events
to other frameworks such as Mule Anypoint for logic processing, but logic was not directly
supported in the SiteWhere pipeline. 

To add processing logic to the pipeline for your tenant, open the SiteWhere administrative 
appliation and choose *Manage Tenants* (make sure your user has tenant admin privileges). Click
on the tenant that will be using the new processing logic to open the tenant configuration
editor as shown below:

<a href="{{ site.url }}/images/tutorials/rpi/dht11/dht11-tenant-edit.png" data-lightbox="rpi" title="Edit the Tenant Configuration">
	<img src="{{ site.url }}/images/tutorials/rpi/dht11/dht11-tenant-edit.png"/>
</a>

### Add a Groovy Processor
Scroll down and click on the *Event Processing* catetgory, then click on *Outbound Processors*.
Add a Groovy event processor to the pipeline by clicking the *Add Component* dropdown and
choosing *Groovy Processor* from the list. Enter **dht11-logic.groovy** for the script path
and click *Create* to add the processor. The new processor will be added to the end of the 
processing chain. The resulting list will look similar to the one below:

<a href="{{ site.url }}/images/tutorials/rpi/dht11/dht11-groovy.png" data-lightbox="rpi" title="Edit the Tenant Configuration">
	<img src="{{ site.url }}/images/tutorials/rpi/dht11/dht11-groovy.png"/>
</a>

To apply the updates to the tenant, click *Stage Updates*, *Ok* the updates, then click the
stop button on the right side of the banner to shut down the tenant. After it shuts down,
click the start button to restart it. The tenant will now send all events to though the
Groovy script for processing. Note that you can also add filters to the processor to limit
which events are sent to it. If you have the flow already running in Node-RED, you will see
error messages in the SiteWhere console indicating it can not find the Groovy script.

### Add Logic to the Groovy Script
In your SiteWhere installation, navigate to the *conf/sitewhere/global/scripts/groovy* folder.
This is the default root path for Groovy scripts. It is also possible to override the path
for a given tenant so that the tenant's scripts are isolated rather than global. Create a new
file named **dht11-logic.groovy**. 

The error messages in the SiteWhere console will stop since
there is now a file where it expects it. Note that, because Groovy is compiled dynamically, 
changes to the script are immediately reflected in SiteWhere processing. There is no need to
shut down the tenant or server to make changes. Edit the content of the script to contain
the following logic:

{% highlight groovy %}
if (event.hasMeasurement('humidity')) {
	Double humidity = event.getMeasurement('humidity');
	
	if (humidity > 50) {
		logger.info "Humidity is ${humidity} (> 50%). Generating alert."
		def newAlert = eventBuilder.newAlert 'high.humidity', 'Humidity is high!' warning() trackState()
		eventBuilder.forSameAssignmentAs event persist newAlert
	}
}
{% endhighlight %}

Depending on your local environment, the humidity may be high enough to start generating alerts
immediately. If not, you can blow on the sensor to raise the humidity and generate an alert.
Note that the logic is creating a new alert which is stored just as other event data. It will
show up in the tabular data for the assignment. It is also processed by the event pipeline
just like any other alert, so it can be sent via Hazelcast or fed to Siddhi CEP processing.

### Add Command for Flashing an LED
It often makes sense to issue a command to a device when an alert condition is encountered.
For instance, if a water level sensor is triggered on a pool, a command could be sent to
turn off water flow. In this example, we want to flash an LED on the Raspberry Pi if 
humidity is above a given threshold. First, we need to add a command to flash the LED.
In the SiteWhere administrative application, click on *Devices > Specifications*
and open the *Node-RED* specification from the list. Under the *Commands* tab, click the
*Add New Command* button. Enter **flashLed** as the name, **http://rpi.namespace** as the
namespace, and **Flash the device LED** as the description. We will not use any parameters
or metadata for this example, but parameters can easily be passed along with the commands.
Click *Create* to create the new command. SiteWhere can now send this command to any device
that uses the *Node-RED* specification.

<a href="{{ site.url }}/images/tutorials/rpi/dht11/dht11-command1.png" data-lightbox="rpi" title="Create a Command">
	<img src="{{ site.url }}/images/tutorials/rpi/dht11/dht11-command1.png"/>
</a>

### Add LED to Existing Circuit
To show the command being executed on the Raspberry Pi, we will add an LED to the breadboard
and trigger it using GPIO pin 17. Below is the updated circuit diagram:

<a href="{{ site.url }}/images/tutorials/rpi/dht11/dht11-circuit-led.png" data-lightbox="rpi" title="Circuit with LED">
	<img src="{{ site.url }}/images/tutorials/rpi/dht11/dht11-circuit-led.png"/>
</a>

Now signaling pin 17 will turn on the LED.

### Add Nodes to Execute Command
A few new nodes need to be added to the Node-RED flow to handle the inbound command from
SiteWhere:

* Drag an *mqtt* node from the *inbound* group and drop it at the bottom-left side of the canvas.
* Drag a *command* node from the *sitewhere* group and drop it next to the *mqtt* node, then connect them.
* Drag a *switch* node from the *function* group and drop it next to the *command* node, then connect them.
* Drag a *trigger* node from the *function* group and drop it next to the *switch* node, then connect them.
* Drag a *rpi-gpio* (out) node from the *Raspberry_Pi* group and drop it next to the *trigger* node, then connect them.

Rename the nodes as shown below:

<a href="{{ site.url }}/images/tutorials/rpi/dht11/dht11-cmd-nodes.png" data-lightbox="rpi" title="Circuit with LED">
	<img src="{{ site.url }}/images/tutorials/rpi/dht11/dht11-cmd-nodes.png"/>
</a>




