---
title: Tenant Device Communication
layout: default
sidebar: sidebar.html
prevLink: userguide/tenant-configuration.html
prevTitle: Tenant Configuration
nextLink: hardware/arduino/arduino.html
nextTitle: Arduino Integration
---

# {{page.title}}
The communication subsystem configures how SiteWhere communicates with devices.
On the inbound side, device data is brought in to the system via **event sources**. The inbound 
data is converted into SiteWhere events and passed in to the **inbound processing chain** by 
the **inbound processing strategy**. On the outbound side (as part of the **outbound processing chain**)
commands are sent to external devices via **command destinations**. An **outbound command router** 
makes the choice of which command destination will be used to deliver the command payload.

## Event Sources
Event sources are responsible for bringing data into SiteWhere. All event sources implement the
[IInboundEventSource](http://docs.sitewhere.org/current/apidocs/com/sitewhere/spi/device/communication/IInboundEventSource.html)
interface and are composed of one or more **event receivers** (implementing 
[IInboundEventReceiver](http://docs.sitewhere.org/current/apidocs/com/sitewhere/spi/device/communication/IInboundEventReceiver.html)) 
and a single **event decoder** (implementing 
[IDeviceEventDecoder](http://docs.sitewhere.org/current/apidocs/com/sitewhere/spi/device/communication/IDeviceEventDecoder.html)).
Event receivers take care of dealing with protocols for gathering data. The data is then processed
by the event decoder in order to create SiteWhere events which provide a common representation of
the device data so it can be processed by the inbound processing chain.

### MQTT Event Source
Since consuming MQTT data is common in IoT applications, SiteWhere includes a component that 
streamlines the process. In the example below, an event source is configured to listen for messages
on the given topic, then use the **protobuf-event-decoder** to decode the message payload 
using the standard SiteWhere Google Protocol Buffers message format.

{% highlight xml %}
<sw:device-communication>
	<!-- Inbound event sources -->
	<sw:event-sources>

		<!-- Event source for protobuf messages over MQTT -->
		<sw:mqtt-event-source sourceId="protobuf" hostname="localhost"
			port="1883" topic="SiteWhere/input/protobuf">
			<sw:protobuf-event-decoder/>
		</sw:mqtt-event-source>
{% endhighlight %}


The following attributes may be specified for the **mqtt-event-source** element.
      
| Attribute            | Required | Description                                      
|----------------------|----------|--------------------------------------------------
| sourceId             | required | Unique event source id.                          
| hostname             | required | MQTT broker server hostname or IP address.       
| port                 | required | MQTT broker server port.                         
| topic                | required | MQTT topic where devices will post events.       

### ActiveMQ Event Source
[Apache ActiveMQ](http://activemq.apache.org/) is an open source messaging platform
that supports many wire formats such as AMQP, OpenWire, XMPP, and MQTT. It also supports
the standard Java JMS APIs for message processing. SiteWhere includes an event source
that creates an embedded ActiveMQ broker that listens on a configured transport. A
multithreaded pool of consumers listen on a configured topic and hand off the binary
payload to the configured decoder.

{% highlight xml %}
<sw:device-communication>
   
	<!-- Inbound event sources -->
	<sw:event-sources>

		<!-- Event source for protobuf messages over ActiveMQ queue -->
		<sw:activemq-event-source sourceId="activemq" transportUri="tcp://localhost:1234"
			queueName="SITEWHERE.IN" numConsumers="150">
			<sw:protobuf-event-decoder/>
		</sw:activemq-event-source>
{% endhighlight %}
         
The example above listens for JMS connections over TCP/IP with 150 consumer threads that 
read data from the configured queue, decode the data using SiteWhere Google Protocol Buffers
format, then send the decoded events to be processed.

The following attributes may be specified for the **activemq-event-source** element.
      
| Attribute            | Required | Description                                      
|----------------------|----------|--------------------------------------------------
| sourceId             | required | Unique event source id.                          
| transportUri         | required | Configures the ActiveMQ transport that will be made available for clients to connect to.    
| queueName            | required | Queue that external clients post events to.                       
| numConsumers         | required | Number of threaded consumers used to process data from the queue. Defaults to *3*.       

### Socket Event Source
Many devices connect over direct socket connections to report events. For instance, many
GPS trackers have cellular connectivity and report location or other events over GPRS.
The **socket-event-source** can be used to create a server socket which listens
on a given port, receiving client connections and processing them using a multithreaded
approach. Socket interactions are often complex and stateful, so the processing is
delegated to an implementation of 
[ISocketInteractionHandler](http://docs.sitewhere.org/current/apidocs/com/sitewhere/spi/device/communication/socket/ISocketInteractionHandler.html)
which handles the conversation between device and server. The socket interaction handler
returns a payload which is passed to the configured decoder to build SiteWhere events.

{% highlight xml %}
<sw:device-communication>
   
	<!-- Inbound event sources -->
	<sw:event-sources>

		<!-- Event source for protobuf messages from socket connections -->
		<sw:socket-event-source port="8585" numThreads="10" sourceId="socket">
			<sw:read-all-interaction-handler-factory/>
			<sw:protobuf-event-decoder/>
			</sw:socket-event-source>
{% endhighlight %}

Configuring the **read-all-interaction-handler-factory** reads all of the input from
the client socket and passes the binary information to the configured decoder. In some cases
(such as sending payloads in the standard SiteWhere Google Protocol Buffers format) this
is sufficient. However, in most cases, the user will need to create an interaction handler that
understands the conversational logic between the device and server. A custom implementation
can be referenced by using the **interaction-handler-factory** element
which references a Spring bean that contains the socket interaction handler factory. The factory implements the
[ISocketInteractionHandlerFactory](http://docs.sitewhere.org/current/apidocs/com/sitewhere/spi/device/communication/socket/ISocketInteractionHandlerFactory.html)
interface and creates instances of the socket interaction handler that manages device 
conversation.

The following attributes may be specified for the **socket-event-source** element.
      
| Attribute            | Required | Description                                      
|----------------------|----------|--------------------------------------------------
| sourceId             | required | Unique event source id.                          
| port                 | optional | Server port to listen on. Defaults to *8484*.    
| numThreads           | required | Queue that external clients post events to.                       
| numConsumers         | required | Number of threads used to process client requests. Defaults to *5*.     

### WebSocket Event Source
A common connectivity option for IoT applications is interaction with a remote 
[WebSocket](http://en.wikipedia.org/wiki/WebSocket). 
The **web-socket-event-source** can be used to connect to a WebSocket and
stream data into the system. The data payload can be either binary or text
and the event decoder should be configured based on the expected type of data.

{% highlight xml %}
<sw:device-communication>
   
	<!-- Inbound event sources -->
	<sw:event-sources>

		<!-- Event source for WebSocket connectivity -->
		<sw:web-socket-event-source sourceId="websocket"
			webSocketUrl="ws://localhost:6543/sitewhere/stringsender" payloadType="string">
			<sw:groovy-string-event-decoder scriptPath="customDecoder.groovy"/>
		</sw:web-socket-event-source>
{% endhighlight %}
         
Note that the payload type is 'string' and that the *<sw:groovy-string-event-decoder/>* decoder
expects a String input. If a binary decoder is configured for a String payload type or vice versa,
the system will generate an error on startup.

The following attributes may be specified for the **web-socket-event-source** element.
      
| Attribute            | Required | Description                                      
|----------------------|----------|--------------------------------------------------
| sourceId             | required | Unique event source id.                          
| webSocketUrl         | required | URL of the WebSocket to connect to.     
| payloadType          | required | Either 'string' or 'binary' depending on which type of message is sent from the server socket.                       

### Hazelcast Queue Event Source
This event source is used to pull decoded device events from a Hazelcast queue. 
The usual usage scenario is that one SiteWhere instance uses the
**hazelcast-queue-processor** on the inbound processing chain to send all decoded events
to the queue and the subordinate instances use the **hazelcast-queue-event-source**
element to process the events. Multiple subordinate instances can attach to the
same queue, allowing parallel processing of the events. Note that all subordinate
instances must be in the same Hazelcast group in order to process the queue.

{% highlight xml %}
<sw:device-communication>
   
	<!-- Inbound event sources -->
	<sw:event-sources>

		<!-- Event source for pulling events from Hazelcast queue -->
		<sw:hazelcast-queue-event-source sourceId="hzQueue"/>
{% endhighlight %}

The following attributes may be specified for the **hazelcast-queue-event-source** element.
      
| Attribute            | Required | Description                                      
|----------------------|----------|--------------------------------------------------
| sourceId             | required | Unique event source id.                          

### Custom Event Source
In cases where a custom protocol is needed to support inbound events for devices, SiteWhere makes
it easy to plug in a custom event source. The custom event source class must implement the
[IInboundEventSource](http://docs.sitewhere.org/current/apidocs/com/sitewhere/spi/device/communication/IInboundEventSource.html)
interface. SiteWhere provides base classes that provide much of the common event source 
functionality. For instance the com.sitewhere.device.communication.BinaryInboundEventSource found
in sitewhere-core provides an event source that deals with binary data. By creating an instance
of BinaryInboundEventSource and plugging in a custom 
[IInboundEventReceiver](http://docs.sitewhere.org/current/apidocs/com/sitewhere/spi/device/communication/IInboundEventReceiver.html)
and [IDeviceEventDecoder](http://docs.sitewhere.org/current/apidocs/com/sitewhere/spi/device/communication/IDeviceEventDecoder.html)
implementation, the behavior can be completely customized. The event receiver takes care of receiving
binary data from the device and the decoder converts the data into SiteWhere events that can be 
processed.

{% highlight xml %}
<sw:device-communication>
   
	<!-- Inbound event sources -->
	<sw:event-sources>

		<!-- Custom event source referencing a Spring bean -->
		<sw:event-source ref="customEventSourceBean"/>
{% endhighlight %}

The following attributes may be specified for the **event-source** element.
      
| Attribute            | Required | Description                                      
|----------------------|----------|--------------------------------------------------
| ref                  | required | Reference to externally defined Spring bean.                          

## Inbound Processing Strategy
The inbound processing strategy is responsible for moving events from event sources into the
inbound processing chain. It is responsible for handling threading and reliably delivering
events for processing. An inbound processing strategy must implement the 
[IInboundProcessingStrategy](http://docs.sitewhere.org/current/apidocs/com/sitewhere/spi/device/communication/IInboundProcessingStrategy.html)
interface.

### Default Inbound Processing Strategy
The default inbound processing strategy for SiteWhere CE uses a bounded queue to hold events
being delivered from event sources. It creates a thread pool that consumes the queue to 
deliver events to the inbound processing chain. If events are delivered faster than the thread
pool can process them, the queue will eventually start blocking the event receiver threads.
Increasing the number of threads for event processing takes load from the queue but increases
processing load on the core system. SiteWhere CE does not persist the inbound queue, so shutting 
down the server may result in data loss. SiteWhere EE offers a more advanced inbound processing
strategy implementation with persistent queues and transactional semantics.

{% highlight xml %}
<sw:device-communication>

    <!-- Inbound event sources would go here -->
   
	<!-- Inbound Processing Strategy -->
	<sw:inbound-processing-strategy>
		<sw:default-inbound-processing-strategy
			numEventProcessorThreads="150" enableMonitoring="true" monitoringIntervalSec="1"/>
	</sw:inbound-processing-strategy>
{% endhighlight %}

The following attributes may be specified for the **default-inbound-processing-strategy** element.
      
| Attribute                | Required | Description                                      
|--------------------------|----------|--------------------------------------------------
| numEventProcessorThreads | optional | Number of threads used to process incoming events. Defaults to *100*.                  
| enableMonitoring         | optional | Enables monitoring of event processing in the log. Defaults to *false*.            
| monitoringIntervalSec    | optional | Interval (in seconds) at which monitoring messages are posted. Defaults to *5*. 
    
## Inbound Processing Chain
After data has been decoded into SiteWhere device events by event sources, the
inbound processing strategy queues up events to be processed by the 
**inbound processing chain**. The chain is a series of **inbound event processors** (implementing 
[IInboundEventProcessor](http://docs.sitewhere.org/current/apidocs/com/sitewhere/spi/device/event/processor/IInboundEventProcessor.html))
that each handle the inbound events in series. New inbound event processors can be added to the chain to augment
the existing functionality. For instance, a metrics processor could keep count of events processed per second. 

**Since REST calls (or other calls that directly invoke the device management APIs) do not enter the system via event sources, 
they are not processed by the inbound processing chain.**

### Event Storage Processor
By default, an instance of **event-storage-processor** is configured in the inbound chain. This processor
takes care of persisting device events via the device management service provider interfaces. If this 
processor is removed, events will not be stored. The default configuration is shown below:

{% highlight xml %}
<sw:device-communication>
					
	<!-- Add processing logic to inbound events -->        
	<sw:inbound-processing-chain>

		<!-- Store events -->
		<sw:event-storage-processor/>

	</sw:inbound-processing-chain>
{% endhighlight %}

### Registration Processor
By default, an instance of **registration-processor** is configured in the inbound chain. This processor
handles the dynamic registration of devices which includes creating a new device and assignment for
devices requesting registration. If this processor is removed, registration requests will be ignored. 
The default configuration is shown below:

{% highlight xml %}
<sw:device-communication>
       
	<!-- Add processing logic to inbound events -->        
	<sw:inbound-processing-chain>
            
		<!-- Allow devices to dynamically register -->
		<sw:registration-processor/>
   
	</sw:inbound-processing-chain>
{% endhighlight %}


### Device Stream Processor
By default, an instance of **device-stream-processor** is configured in the inbound chain. This processor
handles streaming data from devices. If this processor is removed, stream creation requests as well as requests
for adding data to a stream will be ignored. The default configuration is shown below:

{% highlight xml %}
<sw:device-communication>
               
	<!-- Add processing logic to inbound events -->        
	<sw:inbound-processing-chain>
            
		<!-- Allow devices to create streams and send stream data -->
		<sw:device-stream-processor/>
   
	</sw:inbound-processing-chain>
{% endhighlight %}

### Hazelcast Queue Processor
An instance of **hazelcast-queue-processor** may be configured in the inbound processing chain
to forward all decoded events into a Hazelcast queue. This allows multiple subordinate SiteWhere 
instances to use the **hazelcast-queue-event-source** to pull the events in and 
process them. The events are handed to the subordinate instances in round-robin fashion 
so the processing load can be distributed. If this processor is configured, normally the
other default processors for storage, registration, and stream processing are removed, since
the processing occurs in the subordinate instances.

{% highlight xml %}
<sw:device-communication>
               
	<!-- Add processing logic to inbound events -->        
	<sw:inbound-processing-chain>
         
		<!-- Note that other processors have been removed -->
            
		<!-- Send all events to a Hazelcast queue -->
		<sw:hazelcast-queue-processor/>
   
	</sw:inbound-processing-chain>
{% endhighlight %}

## Batch Operation Manager
The batch operation manager is responsible for asynchronously processing operations that 
are applied to many devices. Batch operations can be submitted via the administrative
console or via the REST services. The batch operation manager cycles through the list 
of batch operation elements, executing each and keeping state regarding progress of
execution. The default batch operation manager can be configured by using the
**default-batch-operation-manager** element as shown below.

{% highlight xml %}
<sw:device-communication>
               
	<!-- Batch operation management -->
	<sw:batch-operations>
		<sw:default-batch-operation-manager throttleDelayMs="10000"/>
	</sw:batch-operations>
{% endhighlight %}

The throttle delay value can be used to slow down the rate that elements are processed
so that the system is not overloaded by large operations.
      
A custom batch operation manager can be added by creating a class that implements
[IBatchOperationManager](http://docs.sitewhere.org/current/apidocs/com/sitewhere/spi/device/batch/IBatchOperationManager.html)
and adding a reference to it using the **batch-operation-manager** element.

The following attributes may be specified for the **default-batch-operation-manager** element.
      
| Attribute                | Required | Description                                      
|--------------------------|----------|--------------------------------------------------
| throttleDelayMs          | optional | Number of milliseconds to wait between processing batch operation elements. Defaults to *0*. 
                
## Outbound Processing Chain
In the default provisioning implementation, each time an event is saved via the device management 
service provider interfaces, the outbound event processing chain is invoked. In the same way the 
inbound processing chain acts on unsaved inbound event data, the oubound processing chain acts on 
data that has been successfully persisted to the datastore. Each **outbound event processor** (implementing 
[IOutboundEventProcessor](http://docs.sitewhere.org/current/apidocs/com/sitewhere/spi/device/event/processor/IOutboundEventProcessor.html))
is executed in series. New outbound event processors can be added to the chain to augment existing
functionality. For instance, SiteWhere has an event processor for sending all outbound events to
Hazelcast subscribers, allowing external clients to act on the events.

**REST calls (or other calls that directly invoke the device management APIs) are processed by the
outbound processing chain in the same manner as events from event sources.**

### Command Delivery Event Processor
By default, an instance of **command-delivery-event-processor** is configured in the outbound chain. This
processor hands off device command invocations to the communication subsystem for processing. If this 
processor is removed, device command invocations will be persisted, but will never be processed. The
default configuration is shown below:

{% highlight xml %}
<sw:device-communication>
					
	<sw:outbound-processing-chain>
      
		<!-- Routes commands for outbound processing -->
		<sw:command-delivery-event-processor/>
				
		<!-- Send outbound device events over Hazelcast -->
		<sw:outbound-event-processor ref="hazelcastDeviceEventProcessor"/>
	
	</sw:outbound-processing-chain>
{% endhighlight %}

This example also shows the addition of a custom outbound event processor which references a Spring bean
defined elsewhere in the configuration. Events will be passed to the custom processor after they have
been processed by the provisioning processor.

### Zone Test Event Processor
The **zone-test-event-processor** outbound event processor is used to test location events against
a list of predefined zones to verify if they fall within the zone boundaries. Each location event is
tested against the conditions defined in the list of **zone-test** elements. The zone tests
specify the unique token of the zone to test against (defined via the admin interface or REST services)
and the test condition (inside or outside the zone). If the condition is met, a new alert event is 
created based on the alert attributes in the test. The alert event can be processed like any other
alert entering the system, allowing other outbound processing components to handle reaction to the
zone condition.

{% highlight xml %}
<sw:device-communication>
   
	<sw:outbound-processing-chain>
      
		<!-- Routes commands for outbound processing -->
		<sw:command-delivery-event-processor/>
         
		<!-- Performs zone checking for locations -->
		<sw:zone-test-event-processor>
			<sw:zone-test zoneToken="777fa4e5-bc2f-458b-9968-b598b2e2d2ca" condition="outside"
				alertLevel="error" alertType="off.site" alertMessage="Asset has left the worksite."/>
		</sw:zone-test-event-processor>
{% endhighlight %}
 
In the example above, each location will be checked against the zone defined by the given zone token.
If the location is outside the given zone (in this case the worksite where an asset is deployed), an
alert is fired. The alert is an error of type 'off.site' an includes an alert message. If an asset 
goes offsite, the alert event can be used for reactions such as firing an SMS message or sending 
an audible alarm to a device on the worksite.
 
The following attributes may be specified for the **zone-test** element.
      
| Attribute                | Required | Description                                      
|--------------------------|----------|--------------------------------------------------
| zoneToken                | required | Unique token for zone to test.
| condition                | required | Condition for test. Either *inside* or *outside*.
| alertType                | required | Alert type for generated alert.
| alertLevel               | optional | Alert level for generated alert. Defaults to *error*.
| alertMessage             | required | Alert message for generated alert.

### Sending Events to an Azure Event Hub
The **azure-eventhub-event-processor** outbound event processor connects to an 
[Azure Event Hub](http://azure.microsoft.com/en-us/services/event-hubs/) and forwards
device events to it. The current implementation sends all events in JSON format. Future
implementations will allow for filtering which events are sent and choosing the wire 
format of the event data. An Azure Event Hub outbound event
processor can be figured as shown below:

{% highlight xml %}
<sw:outbound-processing-chain>
      
	<sw:azure-eventhub-event-processor sasKey="{azure.sas.key}" sasName="default" 
		serviceBusName="sitewhere.servicebus.windows.net" eventHubName="sitewhere"/>

</sw:outbound-processing-chain>
{% endhighlight %}
   
Note that a SAS name and key are required in order to connect to the Event Hub. See
[this](https://msdn.microsoft.com/en-us/library/azure/dn170477.aspx) article to find
more information about Shared Access Signatures.

The following attributes may be specified for the **azure-eventhub-event-processor** element.
      
| Attribute                | Required | Description                                      
|--------------------------|----------|--------------------------------------------------
| serviceBusName           | required | Name of the service bus where the event hub is configured.
| eventHubName             | required | Name of the event hub to connect to.
| sasName                  | required | Name of SAS entity to connect with.
| sasKey                   | required | Key for SAS entity to connect with.

### Broadcasting Events via Hazelcast
SiteWhere has support for broadcasting events over [Hazelcast](http://hazelcast.com/) topics, making it
easy to share events with external agents. To enable Hazelcast broadcasting, first add the configuration
information to the **globals** section in the global configuration file as shown below:

{% highlight xml %}
<sw:configuration>

	<sw:globals>
		<sw:hazelcast-configuration configFileLocation="${catalina.home}/conf/sitewhere/hazelcast.xml"/>
	</sw:globals>
{% endhighlight %}
   
Note that the *configFileLocation* attribute specifies full path to a Hazelcast configuration file.
The configuration above is the default which assumes SiteWhere is running inside a Tomcat container.
Once the configuration has been declared, it may be referenced as part of the outbound processing chain to
enable broadcasting of events.

{% highlight xml %}
<sw:outbound-processing-chain>
      
	<!-- Routes commands for outbound processing -->
	<sw:command-delivery-event-processor/>

	<!-- Send outbound device events over Hazelcast -->
	<sw:hazelcast-event-processor/>

</sw:outbound-processing-chain>
{% endhighlight %}
   
To consume events from the Hazelcast topics, listen on the topic names as defined in 
[ISiteWhereHazelcast](http://docs.sitewhere.org/current/apidocs/com/sitewhere/spi/server/hazelcast/ISiteWhereHazelcast.html).

### Sending Events to Apache Solr
SiteWhere supports forwarding events to [Apache Solr](http://lucene.apache.org/solr/) to leverage
the sophisticated search and analytics features it provides. The Solr outbound event processor uses
the [Solrj](https://cwiki.apache.org/confluence/display/solr/Using+SolrJ) library to send each
outbound event to a Solr instance. The events are stored using a custom SiteWhere document schema,
allowing event data to be indexed based on its type. For instance, location events are stored with
geospatial indexes to allow efficient location searches. To enable the Solr event processor, first add the configuration
information to the **globals** section of the global configuration file as shown below:

{% highlight xml %}
<sw:configuration>

	<sw:globals>
		<sw:hazelcast-configuration configFileLocation="${catalina.home}/conf/sitewhere/hazelcast.xml"/>
		<sw:solr-configuration solrServerUrl="http://localhost:8983/solr/SiteWhere"/>
	</sw:globals>
{% endhighlight %}
   
The **solrServerUrl** attribute needs to point to the Solr core being used for SiteWhere data. To
add the outbound event processor to the chain, reference it as shown below:

{% highlight xml %}
<sw:outbound-processing-chain>
		
	<!-- Routes commands for outbound processing -->
	<sw:command-delivery-event-processor/>
			
	<!-- Index events in Solr -->
	<sw:solr-event-processor/>

</sw:outbound-processing-chain>
{% endhighlight %}
   
Note that on system startup, the event processor attempts to ping the Solr server to verify the 
settings are correct. If the ping fails, the component will not be started.

### Sending Events to InitialState.com
SiteWhere events can be forwarded to [InitialState.com](https://www.initialstate.com/) to
allow them to be visualized using the advanced dashboarding features offered by the platform.
To enable event forwarding, add the **initial-state-event-processor** element and
specify the streaming access key made available when you create an InitialState account.
Separate data streams are created for each device assignment based on the unique token
for the assignment. An example configuration is shown below:

{% highlight xml %}
<sw:outbound-processing-chain>
      
	<!-- Routes commands for outbound processing -->
	<sw:command-delivery-event-processor/>
         
	<!-- Sends events to InitialState.com -->
	<sw:initial-state-event-processor streamingAccessKey="your_access_key"/>

</sw:outbound-processing-chain>
{% endhighlight %}

The following attributes may be specified for the **initial-state-event-processor** element.
      
| Attribute                | Required | Description                                      
|--------------------------|----------|--------------------------------------------------
| streamingAccessKey       | required | Streaming access key copied from the website.
   
### Using Siddhi for Complex Event Processing (CEP)
SiteWhere supports integration with [Siddhi](https://github.com/wso2/siddhi) for complex
event processing. Adding a **siddhi-event-processor** to the outbound processing chain
routes all SiteWhere events into Siddhi event streams for processing. The Spring XML configuration
allows multiple queries to be registered with Siddhi while allowing callbacks to be registered
so that the resulting streams can be processed. An example configuration is shown below:

{% highlight xml %}
<sw:outbound-processing-chain>
      
	<!-- Routes commands for outbound processing -->
	<sw:command-delivery-event-processor/>
         
		<!-- Processes event streams using Siddhi for complex event processing -->
	<sw:siddhi-event-processor>
         
		<sw:siddhi-query
			selector="from e1 = MeasurementStream[mxname == 'engine.temp'], e2 = MeasurementStream[mxname == 'engine.temp' and e1.assignment == assignment and ((e2.mxvalue - e1.mxvalue) > 5)] select e1.assignment insert into EngineTempRose">
			<sw:stream-debugger stream="EngineTempRose"/>
		</sw:siddhi-query>
            
		<sw:siddhi-query
			selector="from e1 = LocationStream, e2 = LocationStream[(latitude != e1.latitude or longitude != e1.longitude) and e1.assignment == assignment] select e2.assignment, e2.latitude, e2.longitude insert into LocationChanged">
			<sw:stream-debugger stream="LocationChanged"/>
		</sw:siddhi-query>
            
		<sw:siddhi-query
			selector="from every e1 = AlertStream[type == 'low.bp'] -> e2 = AlertStream[type == 'g.shock' and e1.assignment == assignment] within 7 sec select e1.assignment insert into Fainted">
			<sw:groovy-stream-processor scriptPath="siddhiEventProcessor.groovy" stream="Fainted"/>
		</sw:siddhi-query>

	</sw:siddhi-event-processor>

</sw:outbound-processing-chain>
{% endhighlight %}
   
SiteWhere currently registers three event streams with Siddhi, **MeasurementStream** for individual measurements,
**AlertStream** for alerts, and **LocationStream** for locations. The events injected into the streams contain
all of the same information provided by the core SiteWhere event APIs.

Any number of queries may be registered with Siddhi by adding **siddhi-query** elements within the processor.
Each query specifies a selector which indicates the logic to be performed on the event streams (for more information
on the query language see [the documentation](https://docs.wso2.com/display/CEP310/Queries)). To process the
stream results, any number of callbacks may be registered. The **stream-debugger** callback will print
all events for a given stream to the log. The **groovy-stream-processor** may be used to process stream events
with a Groovy script.

## Command Destinations
Command destinations are responsible for delivering commands to devices. All command destinations implement the
[ICommandDestination](http://docs.sitewhere.org/current/apidocs/com/sitewhere/spi/device/communication/ICommandDestination.html)
interface and are composed of a **command encoder** (implementing [ICommandExecutionEncoder](http://docs.sitewhere.org/current/apidocs/com/sitewhere/spi/device/communication/ICommandExecutionEncoder.html)),
a **parameter extractor** (implementing [ICommandDeliveryParameterExtractor](http://docs.sitewhere.org/current/apidocs/com/sitewhere/spi/device/communication/ICommandDeliveryParameterExtractor.html)),
and a **delivery provider** (implementing [ICommandDeliveryProvider](http://docs.sitewhere.org/current/apidocs/com/sitewhere/spi/device/communication/ICommandDeliveryProvider.html)).
The command encoder is used to convert the command payload into a format understood by the device. The parameter
extractor pulls information needed for delivering the message to the delivery provider (e.g. for an SMS provider,
the extractor may pull the SMS phone number for the device from device metadata). The delivery provider takes 
the encoded payload and extracted parameters, then delivers the message to the device.

### MQTT Command Destination
For devices that listen on an MQTT topic for commands, the **mqtt-command-destination** element can 
be used to easily configure a destination. An encoder and parameter extractor should be configured
based on the expected command format and location of MQTT routing information. The 
**hardware-id-topic-extractor** element configures the MQTT topics for delivery based
on an expression that includes the hardware id of the device to be addressed. In cases where this
is not appropriate, a custom parameter extractor can be injected instead.

{% highlight xml %}
<sw:device-communication>
					
	<!-- Outbound command destinations -->
	<sw:command-destinations>

		<!-- Delivers commands via MQTT -->
		<sw:mqtt-command-destination destinationId="default" hostname="localhost" port="1883">
			<sw:protobuf-command-encoder/>
			<sw:hardware-id-topic-extractor commandTopicExpr="SiteWhere/commands/%s"
				systemTopicExpr="SiteWhere/system/%s"/>
		</sw:mqtt-command-destination>
{% endhighlight %}

The following attributes may be specified for the **mqtt-command-destination** element.
      
| Attribute                | Required | Description                                      
|--------------------------|----------|--------------------------------------------------
| destinationId            | required | Unique id for destination.                 
| hostname                 | required | MQTT broker hostname.                 
| port                     | required | MQTT broker port.                 

### Twilio Command Destination
For devices that receive commands via SMS messages, the **twilio-command-destination** may be used to
deliver the command via the [Twilio](https://www.twilio.com/) online service. To use the service you will
need to create a Twilio account and pay for the outbound SMS service (including a phone number that
messages will be sent from).

{% highlight xml %}
<sw:device-communication>
					
	<!-- Outbound command destinations -->
	<sw:command-destinations>

		<!-- Delivers commands via Twilio SMS messages -->
		<sw:twilio-command-destination destinationId="laipac"
			accountSid="${twilio.account.sid}" authToken="${twilio.auth.token}" 
			fromPhoneNumber="${twilio.from.phone.number}">
			<sw:protobuf-command-encoder/>
			<sw:parameter-extractor ref="laipacExtractor"/>
		</sw:twilio-command-destination>
{% endhighlight %}
				
The account SID, auth token, and sending phone number are all pieces of data related to the Twilio account.
The parameter extractor implementation should be one that supplies parameters of type 
SmsParameters which is used by the delivery provider to determine the SMS phone number 
to deliver the command to.

The following attributes may be specified for the **twilio-command-destination** element.
      
| Attribute                | Required | Description                                      
|--------------------------|----------|--------------------------------------------------
| destinationId            | required | Unique id for destination.                 
| accountSid               | required | Twilio account SID (from Twilio website).                 
| authToken                | required | Twilio account auth token (from Twilio website).                 
| fromPhoneNumber          | required | Twilio phone number used to originate SMS.                 

## Debugging Device Communication
When developing solutions that use the device communication subsystem, it is often helpful 
to see exactly what SiteWhere is doing to handle inbound and outbound data. To turn on 
communication debugging, scroll down to the following block in
the **lib/log4j.xml** file:

{% highlight xml %}
<sw:device-communication>
<category name="com.sitewhere.device.communication">
	<priority value="INFO" />
</category>
{% endhighlight %}
   
Update the **INFO** value to **DEBUG** and restart the server to see more detailed communication information.
