import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-type-json';

@ObjectType()
export class Mint {
  @Field((type) => Date)
  minted: Date;

  @Field()
  donation: string;

  @Field()
  basename: string;
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
