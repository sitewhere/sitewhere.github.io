---
title: Raspberry Pi Tutorials
layout: default
sidebar: sidebar.html
prevLink: integration.html
prevTitle: Integration Tutorials
nextLink: tutorials/rpi/node-red-setup.html
nextTitle: Node-RED Installation
---

# {{page.title}}
The following tutorials provide step-by-step examples of integrating Raspberry Pi hardware
with the SiteWhere platform.

## [Node-RED Installation]({{ site.url }}/tutorials/rpi/node-red-setup.html)
This tutorial provides a complete walkthrough for installing Node-RED on Raspbian
and acts as a basis for other examples.

## [Node-RED DHT11 Sensor Tutorial]({{ site.url }}/tutorials/rpi/node-red-dht11.html)
This tutorial builds on the initial Node-RED tutorial and illustrates how to read
sensor data and forward it to SiteWhere with no coding. The flow registers the 
Raspberry Pi then monitors a DHT11 temperature/humidity sensor, forwarding the data
to SiteWhere at an interval.
