import { BadRequestException, Inject } from '@nestjs/common';
import {
  Args,
  Int,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Files, Mint, Redeem } from './graphql.model';
import { PinataService } from 'src/microservices/pinataService';
import { AdventCollectionService } from 'src/service/AdventCollection';
import { RewardService } from 'src/service/rewards.service';
import { WalletService } from 'src/service/wallet.service';
import { MemoryService } from 'src/microservices/store/memory.service';

@Resolver()
export class GraphQLResolver {
  constructor(
    @Inject('PUB_SUB') private pubSub: PubSub,
    private readonly pinataService: PinataService,
    private readonly adventCollectionService: AdventCollectionService,
    private readonly rewardService: RewardService,
    private readonly walletService: WalletService,
    private readonly memoryService: MemoryService,
  ) {}

  @Query(() => [Files])
  async files(
    @Args('take', { type: () => Int, nullable: true }) take?: number,
  ) {
    const files = await this.pinataService.fetchFiles(take || 10);
    return files;
  }

  @Query(() => String)
  hello() {
    return 'Hello World!';
  }

  @Mutation(() => String)
  async mint() {
    console.log('Minting');
    await this.pubSub.publish('mint', {
      mint: {
        minted: new Date(),
        donation: '100USDC',
        basename: 'saca.base.eth',
      },
    });
    return 'Message sent!';
  }

  @Mutation(() => Redeem)
  async redeem(
    @Args('address') address: string,
    @Args('tokenId') tokenId: string,
    @Args('day') day: number,
  ) {
    try {
      const isRedeemable = await this.adventCollectionService.checkNftRedeemed(
        day,
        tokenId,
      );

      if (!isRedeemable) return 'Not Redeemable';

      const collectionContract =
        await this.adventCollectionService.getCollectionContract(day);

      const alreadyRedeemed = this.memoryService.has(
        this.memoryService.createKey(address, day, tokenId, collectionContract),
      );

      if (alreadyRedeemed) return 'Already Redeemed';

      const isValidRequest =
        await this.adventCollectionService.verifyCollection(
          day,
          tokenId,
          address,
        );

      if (!isValidRequest) return 'Invalid Request';

      let finalReward = null;
      let finalAmount: number = null;
      let tx = null;
      const maxTries = 5;
      let tries = 0;
      while (!tx && tries < maxTries) {
        const [reward, amount] = this.rewardService.pickARewardRandomly();
        if (reward.name === 'coffeeNft') {
          const contract = amount;
          tx = await this.walletService.transferNFT(
            contract.contract,
            contract.id,
            address,
          );
        } else {
          tx = await this.walletService.transformTokenToAddress(
            reward,
            address,
            amount.toString(),
          );
        }

        if (tx) {
          finalReward = reward;
          finalAmount =
            reward.name === 'coffeeNft' ? Number(amount.id) : amount;
        } else {
          tries++;
        }
      }

      this.memoryService.set(
        this.memoryService.createKey(address, day, tokenId, collectionContract),
        true,
      );
      return {
        name: finalReward.name,
        contract: collectionContract,
        decimals: 18,
        txHash: tx.hash,
        amount: finalAmount.toString(),
      };
    } catch (error) {
      console.log(error);
      return new BadRequestException();
    }
  }

  @Subscription(() => Mint, {
    resolve(payload, args, context, info) {
      console.log(payload, args, context, info);
      return payload.mint;
    },
  })
  onMint() {
    return this.pubSub.asyncIterableIterator('mint');
  }
}
