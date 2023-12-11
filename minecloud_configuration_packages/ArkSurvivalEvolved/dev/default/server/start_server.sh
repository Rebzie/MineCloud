#!/bin/sh

echo "Starting ArkSurvivalEvolved"
# Start the server as ec2-user
cd /opt/minecloud/server/ArkSurvivalEvolvedServer
runuser -u ec2-user ./start_ark_server.sh
echo "ArkSurvivalEvolved server stop"