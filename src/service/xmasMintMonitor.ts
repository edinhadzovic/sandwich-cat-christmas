import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Web3Service } from './web3.service';
import { PubSub } from 'graphql-subscriptions';

@Injectable()
export class xmasMintMonitor implements OnModuleInit {
  constructor(
    @Inject('PUB_SUB') private pubSub: PubSub,
    private readonly web3Service: Web3Service,
  ) {}

  onModuleInit() {
    this.listenForMints();
  }

  private listenForMints = async () => {
    const contract = this.web3Service.getFactoryContract(
      process.env.FACTORY_CONTRACT!,
    );
    contract.on(
      'NFTMinted',
      async (collection: string, owner: string, tokenId: any) => {
        await this.pubSub.publish('mint', {
          mint: {
            minted: new Date(),
            address: owner,
            tokenId: tokenId,
          },
        });
      },
    );
  };
}
