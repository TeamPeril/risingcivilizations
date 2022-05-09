Reccommended Forge Version: Forge-1.16.5-36.2.34
Please set the following in your server.properties files when it generates, for stability and compatibility:

allow-flight=true

difficulty=hard

max-tick-time=256000

view-distance=12

=========================

SERVER START PARAMETERS/JVM FLAGS YOU SHOULD USE

https://aikar.co/2018/07/02/tuning-the-jvm-g1gc-garbage-collector-flags-for-minecraft/

=========================

allow flight needs to be true for things like mounts that fly and fairy ring, or the server will kick players using those.

difficulty needs to be hard difficulty mode because everything is balanced around it.

max-tick-time need to be 256000 for big structures and for players first time joining the server.

view distance should be 12 for performance reasons, raising it higher can cause lag.


