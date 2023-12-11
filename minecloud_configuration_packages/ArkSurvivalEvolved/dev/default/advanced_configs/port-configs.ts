import { Peer, Port } from 'aws-cdk-lib/aws-ec2';

export const PORT_CONFIGS = [
  {
    peer: Peer.anyIpv4(),
    port: Port.tcp(7777),
    description: 'Allows Ark Survival Evolved connection'
  },
  {
    peer: Peer.anyIpv4(),
    port: Port.udp(32330),
    description: 'Allows Ark Survival Evolved connection'
  },
  {
    peer: Peer.anyIpv4(),
    port: Port.udp(27015),
    description: 'Allows Ark Survival Evolved connection'
  },
  {
    peer: Peer.anyIpv4(),
    port: Port.udp(2457),
    description: 'Steam Query Port'
  },
  {
    peer: Peer.anyIpv4(),
    port: Port.udp(2458),
    description: ''
  }
];
