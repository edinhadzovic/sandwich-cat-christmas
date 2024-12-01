import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { PubSubModal } from './module/pubsub.module';
import { GraphQLResolver } from './resolver/graphql.resolver';
import { GraphQLResolverModule } from './resolver/graphql.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      subscriptions: {
        'graphql-ws': true, // Enable WebSocket subscriptions
        path: '/graphql',
      },
      playground: true,
      cors: {
        origin: '*',
      },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'web'),
      exclude: ['/api*', '/graphql*'],
    }),
    GraphQLResolverModule,
  ],
  controllers: [AppController],
  providers: [PubSubModal],
})
export class AppModule {}
