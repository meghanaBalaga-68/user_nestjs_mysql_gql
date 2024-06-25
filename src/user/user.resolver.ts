import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity';

import { AuthService } from 'src/auth/auth.service';
import { UseGuards } from '@nestjs/common';

import { LoginResponse } from 'src/auth/login.response';
import { Inject, forwardRef } from '@nestjs/common';

import { CreateUserInput } from './dto/create.user.input';
import { GqlAuthGuard } from 'src/guard/auth.guard';
import { RoleGuard } from 'src/guard/role.guard';
import { Roles } from 'src/decorator/role.decorator';


@Resolver(of => User)
export class UsersResolver {
  constructor(
    private readonly userService: UserService,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) { }

  @Mutation(returns => User)
  async createUser(
    @Args('input') input: CreateUserInput,

  ): Promise<User> {
    return this.userService.createUser(input);
  }

  @Mutation(returns => User)
  async updateUser(
    @Args({ name: 'id', type: () => ID }) id: string,
    @Args('input') input: CreateUserInput,

  ): Promise<User> {
    return this.userService.updateUser(id, input);
  }

  @Query(returns => [User])
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Query(returns => User)
  @UseGuards(GqlAuthGuard)
  async getUserById(@Args('id') id: string): Promise<User> {
    return this.userService.getUserById(id);

  }



  @Mutation(returns => LoginResponse)
  async login(
    @Args('username') username: string,
    @Args('password') password: string,
  ) {

    return this.authService.login(username, password);
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard, RoleGuard)
  @Roles('Admin')
  async deleteUsers(@Args('id') id: string): Promise<boolean> {
    await this.userService.deleteUserById(id);
    return true;
  }


}

