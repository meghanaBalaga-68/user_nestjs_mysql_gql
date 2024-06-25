import { ObjectType, Field } from '@nestjs/graphql';
import { UserType } from 'src/user/user.types';

@ObjectType()
export class LoginResponse {
  @Field()
  access_token: string;

  @Field(()=>UserType)
  user: UserType;
}
