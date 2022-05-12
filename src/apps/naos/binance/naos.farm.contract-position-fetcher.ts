import { Inject } from '@nestjs/common';

import { Register } from '~app-toolkit/decorators';
import { PANCAKESWAP_DEFINITION } from '~apps/pancakeswap/pancakeswap.definition';
import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { PositionFetcher } from '~position/position-fetcher.interface';
import { ContractPosition } from '~position/position.interface';
import { Network } from '~types/network.interface';

import { NaosStakingPools, NaosContractFactory } from '../contracts';
import { NAOS_DEFINITION } from '../naos.definition';

const appId = NAOS_DEFINITION.id;
const groupId = NAOS_DEFINITION.groups.farm.id;
const network = Network.BINANCE_SMART_CHAIN_MAINNET;

@Register.ContractPositionFetcher({ appId, groupId, network })
export class BinanceSmartChainNaosFarmContractPositionFetcher implements PositionFetcher<ContractPosition> {
  constructor(
    @Inject(APP_TOOLKIT)
    private readonly appToolkit: IAppToolkit,
    @Inject(NaosContractFactory) private readonly contractFactory: NaosContractFactory,
  ) { }

  async getPositions() {
    return this.appToolkit.helpers.masterChefContractPositionHelper.getContractPositions<NaosStakingPools>({
      address: '0x6ebc2c41c1e29a5506b86b758b6c16dd5bbcf7d1',
      appId,
      groupId,
      network,
      dependencies: [
        { appId: PANCAKESWAP_DEFINITION.id, groupIds: [PANCAKESWAP_DEFINITION.groups.pool.id], network },
      ],
      resolveContract: ({ address, network }) => this.contractFactory.naosStakingPools({ address, network }),
      resolvePoolLength: ({ multicall, contract }) => multicall.wrap(contract).poolCount(),
      resolveDepositTokenAddress: ({ poolIndex, contract, multicall }) =>
        multicall.wrap(contract).getPoolToken(poolIndex),
      resolveRewardTokenAddresses: ({ multicall, contract }) => multicall.wrap(contract).reward(),
      resolveRewardRate: this.appToolkit.helpers.masterChefDefaultRewardsPerBlockStrategy.build({
        resolvePoolAllocPoints: async ({ poolIndex, contract, multicall }) =>
          multicall.wrap(contract).getPoolRewardWeight(poolIndex),
        resolveTotalAllocPoints: ({ multicall, contract }) => multicall.wrap(contract).totalRewardWeight(),
        resolveTotalRewardRate: ({ multicall, contract }) => multicall.wrap(contract).rewardRate(),
      }),
    });
  }
}
