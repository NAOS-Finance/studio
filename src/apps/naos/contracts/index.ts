import { Injectable, Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { ContractFactory } from '~contract/contracts';
import { Network } from '~types/network.interface';

import { NaosBoostPool__factory } from './ethers';
import { NaosStakingPools__factory } from './ethers';

// eslint-disable-next-line
type ContractOpts = { address: string; network: Network };

@Injectable()
export class NaosContractFactory extends ContractFactory {
  constructor(@Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit) {
    super((network: Network) => appToolkit.getNetworkProvider(network));
  }

  naosBoostPool({ address, network }: ContractOpts) {
    return NaosBoostPool__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  naosStakingPools({ address, network }: ContractOpts) {
    return NaosStakingPools__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
}

export type { NaosBoostPool } from './ethers';
export type { NaosStakingPools } from './ethers';
