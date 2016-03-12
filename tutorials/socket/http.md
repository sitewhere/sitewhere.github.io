---
title: HTTP Socket Tutorial
layout: default
sidebar: sidebar.html
prevLink: index.html
prevTitle: Integration
nextLink: index.html
nextTitle: Integration
---

# {{page.title}}
SiteWhere supports interacting with remote systems or devices by accepting HTTP requests
and processing the payloads to produce SiteWhere events. This is accomplished by using
a [socket event source](http://documentation.sitewhere.org/userguide/tenant/device-communication.html#socket-event-source)
combined with an HTTP socket interaction handler to properly parse the HTTP request and
send a **200 OK** HTTP response to the caller.

## Configuring the Socket Event Source
To accept HTTP requests, a socket event source must be configured for the tenant that
will receive the data. Open the SiteWhere administrative application and choose
**Manage Tenants** from the user dropdown in the top-right corner (note that the 
user must have tenant administration privileges). From the list of tenants, choose the
tenant that will be receiving the HTTP data.

**NOTE: The HTTP socket interaction handler is only available in SiteWhere 1.7 and above**

Choose **Device Communication**, then **Event Sources** in the tenant configuration editor
to enter the event source configuration page. Create a new socket event source by clicking
on the **Add Component** dropdown at the bottom of the page and choosing **Socket Event Source**
as shown below:

<a href="{{ site.url }}/images/tutorials/socket/http/eventsource1.png" data-lightbox="architecture" title="Socket Event Source">
	<img src="{{ site.url }}/images/tutorials/socket/http/eventsource1.png"/>
</a>

The socket event source can be configured to listen on any available server port. Also, multiple
threads can be used to process the socket requests in parallel. An example configuration is shown below:

<a href="{{ site.url }}/images/tutorials/socket/http/socket-config.png" data-lightbox="architecture" title="Socket Configuration">
	<img src="{{ site.url }}/images/tutorials/socket/http/socket-config.png"/>
</a>

Once the socket has been configured, an interaction handler should be assigned in order to control
the way SiteWhere interacts with the socket data. In this case, the interaction uses HTTP, so the
HTTP interaction handler will be chosen. In the **Add Component** dropdown, choose 
**HTTP Socket Interaction Factory** as shown below:

<a href="{{ site.url }}/images/tutorials/socket/http/http-config.png" data-lightbox="architecture" title="HTTP Configuration">
	<img src="{{ site.url }}/images/tutorials/socket/http/http-config.png"/>
</a>

To parse the HTTP payload into SiteWhere events, a binary event decoder will need to be assigned to
the event source. In this case, the HTTP payload will be parsed by a Groovy script so choose
**Add Component** in the binary decoder block and choose **Groovy Binary Decoder** as shown below:

<a href="{{ site.url }}/images/tutorials/socket/http/http-groovy.png" data-lightbox="architecture" title="Groovy Decoder">
	<img src="{{ site.url }}/images/tutorials/socket/http/http-groovy.png"/>
</a>

