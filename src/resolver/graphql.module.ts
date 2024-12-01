import { Module } from '@nestjs/common';
import { PubSubModal } from 'src/module/pubsub.module';
import { GraphQLResolver } from './graphql.resolver';
import { PinataService } from 'src/microservices/pinataService';
import { AdventCollectionService } from 'src/service/AdventCollection';
import { Web3Service } from 'src/service/web3.service';
import { RewardService } from 'src/service/rewards.service';
import { WalletService } from 'src/service/wallet.service';
import { MemoryModule } from 'src/microservices/store/memory.module';

@Module({
  imports: [PubSubModal, MemoryModule],
  providers: [
    GraphQLResolver,
    PinataService,
    AdventCollectionService,
    Web3Service,
    RewardService,
    WalletService,
  ],
})
export class GraphQLResolverModule {}
