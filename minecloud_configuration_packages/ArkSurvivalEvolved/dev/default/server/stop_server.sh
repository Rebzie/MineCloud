#!/bin/sh

/usr/bin/screen -S mc_server -X stuff '^C'
/bin/sleep 3
/opt/minecloud/send_discord_message_to_webhook.sh "Shutting Ark Survival Evolved server down..."
/bin/sleep 10
/opt/minecloud/send_discord_message_to_webhook.sh "(Ark Survival Evolved server shut down)"