import { Inject } from '@nestjs/common';

import { Register } from '~app-toolkit/decorators';
import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { PositionFetcher } from '~position/position-fetcher.interface';
import { ContractPosition } from '~position/position.interface';
import { Network } from '~types/network.interface';

import { NaosBoostPool, NaosContractFactory } from '../contracts';
import { NAOS_DEFINITION } from '../naos.definition';

const appId = NAOS_DEFINITION.id;
const groupId = NAOS_DEFINITION.groups.boostPool.id;
const network = Network.BINANCE_SMART_CHAIN_MAINNET;

@Register.ContractPositionFetcher({ appId, groupId, network })
export class BinanceSmartChainNaosBoostContractPositionFetcher implements PositionFetcher<ContractPosition> {
  constructor(
    @Inject(APP_TOOLKIT)
    private readonly appToolkit: IAppToolkit,
    @Inject(NaosContractFactory) private readonly contractFactory: NaosContractFactory,
  ) { }

  async getPositions() {
    return this.appToolkit.helpers.masterChefContractPositionHelper.getContractPositions<NaosBoostPool>({
      address: '0x3dcd32dd2b225749aa830ca3b4f2411bfeb03db4',
      appId,
      groupId,
      network,
      resolveContract: ({ address, network }) => this.contractFactory.naosBoostPool({ address, network }),
      resolvePoolLength: ({ multicall, contract }) => 1,
      resolveDepositTokenAddress: ({ poolIndex, contract, multicall }) =>
        multicall.wrap(contract).getPoolToken(),
      resolveRewardTokenAddresses: ({ multicall, contract }) => multicall.wrap(contract).reward(),
      resolveRewardRate: this.appToolkit.helpers.masterChefDefaultRewardsPerBlockStrategy.build({
        resolvePoolAllocPoints: async ({ poolIndex, contract, multicall }) => 1,
        resolveTotalAllocPoints: ({ multicall, contract }) => 1,
        resolveTotalRewardRate: ({ multicall, contract }) => multicall.wrap(contract).rewardRate(),
      }),
    });
  }
}
