import { Inject } from '@nestjs/common';

import { Register } from '~app-toolkit/decorators';
import { presentBalanceFetcherResponse } from '~app-toolkit/helpers/presentation/balance-fetcher-response.present';
import { BalanceFetcher } from '~balance/balance-fetcher.interface';
import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { Network } from '~types/network.interface';

import { NaosBoostPool, NaosContractFactory } from '../contracts';
import { NAOS_DEFINITION } from '../naos.definition';

@Register.BalanceFetcher(NAOS_DEFINITION.id, Network.BINANCE_SMART_CHAIN_MAINNET)
export class BinanceSmartChainNaosBalanceFetcher implements BalanceFetcher {
  constructor(
    @Inject(APP_TOOLKIT)
    private readonly appToolkit: IAppToolkit,
    @Inject(NaosContractFactory) private readonly contractFactory: NaosContractFactory,
  ) { }

  async getStakedBalances(address: string) {
    const network = Network.BINANCE_SMART_CHAIN_MAINNET;
    return this.appToolkit.helpers.masterChefContractPositionBalanceHelper.getBalances<NaosBoostPool>({
      address: "0x3dcd32dd2b225749aa830ca3b4f2411bfeb03db4",
      appId: NAOS_DEFINITION.id,
      groupId: NAOS_DEFINITION.groups.boostPool.id,
      network,
      resolveChefContract: ({ contractAddress }) =>
        this.contractFactory.naosBoostPool({ network, address: contractAddress }),
      resolveStakedTokenBalance: this.appToolkit.helpers.masterChefDefaultStakedBalanceStrategy.build({
        resolveStakedBalance: ({ contract, multicall }) =>
          multicall.wrap(contract).getStakeTotalDeposited(address),
      }),
      resolveClaimableTokenBalances: this.appToolkit.helpers.masterChefDefaultClaimableBalanceStrategy.build({
        resolveClaimableBalance: ({ multicall, contract, contractPosition, address }) =>
          multicall.wrap(contract).getStakeTotalUnclaimed(address),
      }),
    });
  }

  async getBalances(address: string) {
    const [stakedBalances] = await Promise.all([this.getStakedBalances(address)]);

    return presentBalanceFetcherResponse([
      {
        label: 'Staking',
        assets: stakedBalances,
      },
    ]);
  }
}
