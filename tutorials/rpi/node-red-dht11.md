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
processing nodes on the Raspberry Pi. Follow [this tutorial](node-red-setup.html)
to install the required components before continuing.


