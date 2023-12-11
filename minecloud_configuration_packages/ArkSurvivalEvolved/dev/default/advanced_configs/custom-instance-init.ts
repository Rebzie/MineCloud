import {
  InitCommand,
  InitConfig,
  InitFile,
  InitPackage
} from 'aws-cdk-lib/aws-ec2';
import { MINECLOUD_SERVER_DIR } from '../../lib/const/minecloud-dir';
import { STEAM_CMD_INIT } from '../../shared_lib/steamcmd-init';
import { ARK_PASSWORD, ARK_SERVER_NAME, ARK_WORLD } from '../ark-server-settings';
import { setUpEnviromentVariable, setUpShellScript } from '../../shared_lib/minecloud-utilities';

export const CUSTOM_INIT_CONFIG: InitConfig = getCustomInitConfig();

function getCustomInitConfig(): InitConfig {
  let configs: (InitPackage | InitCommand | InitFile)[] = [
    ...STEAM_CMD_INIT,
    ...setUpShellScript('/opt/minecloud/server/ArkSurvivalEvolvedServer', 'start_ark_server.sh', 'minecloud_configs/advanced_configs/start_ark_server.sh'),
    ...setUpShellScript(MINECLOUD_SERVER_DIR, 'InstallUpdate.sh', 'minecloud_configs/advanced_configs/InstallUpdate.sh'),
    InitCommand.shellCommand(`chown -R ec2-user:ec2-user ${MINECLOUD_SERVER_DIR}`,{
      cwd: MINECLOUD_SERVER_DIR
    }),
    InitCommand.shellCommand(`runuser -u ec2-user ./InstallUpdate.sh`,{
      cwd: MINECLOUD_SERVER_DIR
    }),
    ...setUpEnviromentVariable("ARK_SERVER_NAME", ARK_SERVER_NAME),
    ...setUpEnviromentVariable("ARK_WORLD", ARK_WORLD),
    ...setUpEnviromentVariable("ARK_PASSWORD", ARK_PASSWORD)
  ];

  return new InitConfig(configs);
}
