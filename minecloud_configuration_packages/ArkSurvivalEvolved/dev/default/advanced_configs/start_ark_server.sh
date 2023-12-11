#!/bin/bash
export templdpath=$LD_LIBRARY_PATH
export LD_LIBRARY_PATH=./linux64:$LD_LIBRARY_PATH
export SteamAppId=376030

echo "Starting Ark Survival Evolved server"

# Tip: Make a local copy of this script to avoid it being overwritten by steam.
# NOTE: Minimum password length is 5 characters & Password cant be in the server name.
# NOTE: You need to make sure the ports 7777-2458 is being forwarded to your server through your local router & firewall.
./ark_server.x86_64 -name ${ARK_SERVER_NAME} -port 7777 -world ${ARK_WORLD} -password ${ARK_PASSWORD}

export LD_LIBRARY_PATH=$templdpath