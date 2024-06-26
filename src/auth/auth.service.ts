import { Injectable, Inject, forwardRef, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    //console.log(user);
    let m =await bcrypt.compare(password, user.password) 
    if (user && m) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(username: string, password: string) {
    const user = await this.validateUser(username, password);
    // console.log(user);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    // if(user.usertype !== 'Admin'){
    //   throw new UnauthorizedException('Not authorized');
    // }
    const payload = { username: user.username, sub: user.user_id};
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}

