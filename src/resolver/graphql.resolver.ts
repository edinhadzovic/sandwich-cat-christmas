import { Inject } from '@nestjs/common';
import { Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Mint } from './graphql.model';

@Resolver()
export class GraphQLResolver {
  constructor(@Inject('PUB_SUB') private pubSub: PubSub) {}

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
