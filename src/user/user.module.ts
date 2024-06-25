import { Module} from '@nestjs/common';
import { UserService } from './user.service';
import { UsersResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { forwardRef } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';



@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    forwardRef(() => AuthModule),
  ],
  providers: [UserService, UsersResolver],
  exports: [UserService]
})
export class UserModule {}
