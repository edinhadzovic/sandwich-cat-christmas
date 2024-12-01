import { Module } from '@nestjs/common';
import { PubSubModal } from 'src/module/pubsub.module';
import { GraphQLResolver } from './graphql.resolver';
import { PinataService } from 'src/microservices/pinataService';

@Module({
  imports: [PubSubModal],
  providers: [GraphQLResolver, PinataService],
})
export class GraphQLResolverModule {}
