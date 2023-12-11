#!/bin/sh
# It looks like occationally this will fail with
# 'Init: Installing breakpad exception handler for appid(steam)/version(xxx)/tid(xxx)' error, which
# seems like a Steam CMD issue (https://github.com/ValveSoftware/steam-for-linux/issues/9321). 
# However, the game server files will still be downloaded even with this error message, 
# thus we decided to always return true as a temporary workaround to avoid deployment failure.
SteamAppId=376030
./steamcmd.sh +@sSteamCmdForcePlatformType linux +force_install_dir /opt/minecloud/server/ArkSurvivalEvolvedServer +login anonymous +app_update ${SteamAppId} -beta none validate +quit || true