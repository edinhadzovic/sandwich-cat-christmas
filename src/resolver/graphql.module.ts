import { Module } from '@nestjs/common';
import { PubSubModal } from 'src/module/pubsub.module';
import { GraphQLResolver } from './graphql.resolver';

@Module({
  imports: [PubSubModal],
  providers: [GraphQLResolver],
})
export class GraphQLResolverModule {}
