# openHAB-Lidl-HG06106

Here is an example of a functional openHAB config for Lidl Livarno Lux HG06106 RGB light (tested with E27 (HG06106C) and E14 (HG06106B) versions).
Works with Google asistant (for free ! Thanks to the openHAB Cloud Connector).

### Equipment
- Raspberry Pi 3 Model B (Raspberry Pi OS 10)
- openHAB 3.2.0 (with openHAB Cloud Connector, JSONPath Transformation, JSScripting, Javascript Transformation)
-  SONOFF ZigBee 3.0 USB Dongle Plus
- mosquitto 1.5.7
- zigbee2MQTT 1.23.0

### Features
✅ On / off switch
✅ Dimmer
✅ Color selection ⚠️The color cannot be read from the JSON, as it is not readable in RGB mode... A transformation (in JS for example) could perhaps allow the reading of the color (change from XY to RGB). But the color selection via Google Home or openHAB works perfectly.
✅ The color temperature (which allows to adjust the shades of white on the bulb) varies between 150 and 500 (unit?).  The spec indicates that these lights can vary from 2000 to 6500 kelvin. So I made a JS script to do the conversion (linear) from 2000 (warmest) to 6500 kelvin (coldest) to 500 (warmest) to 150 (coldest), and it does the job perfectly! The value remains displayed in Kelvin on openHAB.


### Sources
 - https://community.openhab.org/t/oh3-zigbee2mqtt-livarno-lux-work-in-progress/119134
 - https://www.openhab.org/docs/ecosystem/google-assistant/
 - https://www.zigbee2mqtt.io/devices/HG06106C.html
 - https://www.zigbee2mqtt.io/devices/HG06106B.html

