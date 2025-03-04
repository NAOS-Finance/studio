import { Inject } from '@nestjs/common';

import { TokenBalanceHelper } from '~app-toolkit';
import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { Register } from '~app-toolkit/decorators';
import { presentBalanceFetcherResponse } from '~app-toolkit/helpers/presentation/balance-fetcher-response.present';
import { BalanceFetcher } from '~balance/balance-fetcher.interface';
import { Network } from '~types/network.interface';

import { NaosStakingPools, NaosContractFactory } from '../contracts';
import { NAOS_DEFINITION } from '../naos.definition';

@Register.BalanceFetcher(NAOS_DEFINITION.id, Network.ETHEREUM_MAINNET)
export class EthereumNaosBalanceFetcher implements BalanceFetcher {
  constructor(
    @Inject(APP_TOOLKIT)
    private readonly appToolkit: IAppToolkit,
    @Inject(TokenBalanceHelper) private readonly tokenBalanceHelper: TokenBalanceHelper,
    @Inject(NaosContractFactory) private readonly contractFactory: NaosContractFactory,
  ) { }

  async getWalletBalances(address: string) {
    return await this.tokenBalanceHelper.getTokenBalances({
      network: Network.ETHEREUM_MAINNET,
      appId: NAOS_DEFINITION.id,
      groupId: NAOS_DEFINITION.groups.wallet.id,
      address,
    });
  }

  async getStakedBalances(address: string) {
    const network = Network.ETHEREUM_MAINNET;
    return this.appToolkit.helpers.masterChefContractPositionBalanceHelper.getBalances<NaosStakingPools>({
      address,
      appId: NAOS_DEFINITION.id,
      groupId: NAOS_DEFINITION.groups.farm.id,
      network,
      resolveChefContract: ({ contractAddress }) =>
        this.contractFactory.naosStakingPools({ network, address: contractAddress }),
      resolveStakedTokenBalance: this.appToolkit.helpers.masterChefDefaultStakedBalanceStrategy.build({
        resolveStakedBalance: ({ contract, multicall, contractPosition }) =>
          multicall.wrap(contract).getStakeTotalDeposited(address, contractPosition.dataProps.poolIndex),
      }),
      resolveClaimableTokenBalances: this.appToolkit.helpers.masterChefDefaultClaimableBalanceStrategy.build({
        resolveClaimableBalance: ({ multicall, contract, contractPosition, address }) =>
          multicall.wrap(contract).getStakeTotalUnclaimed(address, contractPosition.dataProps.poolIndex),
      }),
    });
  }

  async getBalances(address: string) {
    const [walletBalances, stakedBalances] = await Promise.all([
      this.getWalletBalances(address),
      this.getStakedBalances(address)
    ]);

    return presentBalanceFetcherResponse([
      {
        label: 'Wallet',
        assets: walletBalances,
      },
      {
        label: 'Staking',
        assets: stakedBalances,
      },
    ]);
  }
}
