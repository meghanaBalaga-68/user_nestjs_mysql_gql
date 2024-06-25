import { InputType, Field, registerEnumType } from '@nestjs/graphql';
import { IsEnum } from 'class-validator';
import { typeRole, Shift } from 'src/user/user.types';

registerEnumType(typeRole, {
    name: 'typeRole',
});

registerEnumType(Shift, {
    name: 'Shift',
});
@InputType()
export class UpdateUserInput {
  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  phonenumber: string;

  @Field()
  @IsEnum(Shift)
  shift: Shift;

  @Field()
  @IsEnum(typeRole)
  usertype: typeRole;
}
