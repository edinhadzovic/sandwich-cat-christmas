import { Inject } from '@nestjs/common';
import {
  Args,
  Int,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Files, Mint } from './graphql.model';
import { PinataService } from 'src/microservices/pinataService';

@Resolver()
export class GraphQLResolver {
  constructor(
    @Inject('PUB_SUB') private pubSub: PubSub,
    private readonly pinataService: PinataService,
  ) {}

  @Query(() => [Files])
  async files(
    @Args('take', { type: () => Int, nullable: true }) take?: number,
  ) {
    const files = await this.pinataService.fetchFiles(take || 10);
    console.log(files);
    return files;
  }

  @Query(() => String)
  hello() {
    return 'Hello World!';
  }

  @Mutation(() => String)
  async mint() {
    await this.pubSub.publish('mint', {
      mint: {
        minted: new Date(),
        donation: '100USDC',
        basename: 'saca.base.eth',
      },
    });
    return 'Message sent!';
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
