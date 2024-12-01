import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-type-json';

@ObjectType()
export class Mint {
  @Field((type) => Date)
  minted: Date;

  @Field()
  address: string;

  @Field()
  tokenId: string;
}

@ObjectType()
export class Files {
  @Field()
  id: string;

  @Field()
  ipfs_pin_hash: string;

  @Field(() => GraphQLJSONObject)
  metadata: any;

  @Field()
  mime_type: string;

  @Field()
  number_of_files: number;
}

@ObjectType()
export class Redeem {
  @Field()
  name: string;

  @Field()
  contract: string;

  @Field()
  decimals: number;

  @Field()
  txHash: string;
}
