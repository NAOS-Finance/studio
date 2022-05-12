import { Register } from '~app-toolkit/decorators';
import { appDefinition, AppDefinition } from '~app/app.definition';
import { GroupType, AppAction, AppTag } from '~app/app.interface';
import { Network } from '~types/network.interface';

export const NAOS_DEFINITION = appDefinition({
  id: 'naos',
  name: 'NAOS Finance',
  description: `A DeFi lending protocol allowing lenders and SME borrowers to facilitate permissionless and borderless loaning/borrowing transactions`,
  links: {
    github: 'https://github.com/NAOS-Finance',
    twitter: 'https://twitter.com/naos_finance',
    discord: 'https://discord.com/invite/qThcuS7FBd',
    telegram: 'https://t.me/naos_finance',
    medium: 'https://naosfinance.medium.com/',
  },
  groups: {
    wallet: { id: 'wallet', type: GroupType.TOKEN },
    boostPool: { id: 'boostPool', type: GroupType.POSITION },
    farm: { id: 'farm', type: GroupType.POSITION },
  },
  url: 'https://naos.finance/',
  tags: [AppTag.LENDING],
  supportedNetworks: {
    [Network.ETHEREUM_MAINNET]: [AppAction.VIEW],
    [Network.BINANCE_SMART_CHAIN_MAINNET]: [AppAction.VIEW],
  },
  token: {
    address: '0x4a615bB7166210CCe20E6642a6f8Fb5d4D044496',
    network: Network.ETHEREUM_MAINNET,
  },
});

@Register.AppDefinition(NAOS_DEFINITION.id)
export class NaosAppDefinition extends AppDefinition {
  constructor() {
    super(NAOS_DEFINITION);
  }
}
