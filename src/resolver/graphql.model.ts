import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Mint {
  @Field((type) => Date)
  minted: Date;

  @Field()
  donation: string;

  @Field()
  basename: string;
}
