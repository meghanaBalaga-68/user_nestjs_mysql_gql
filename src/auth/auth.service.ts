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
    // console.log(user);
    if (user && await bcrypt.compare(password, user.password) ) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(username: string, password: string) {
    const user = await this.validateUser(username, password);
    // console.log({username, password});
    if (!user) {
      throw new Error('Invalid credentials');
    }
    if(user.usertype !== 'Admin'){
      throw new UnauthorizedException('Not authorized');
    }
    const payload = { username: user.username, sub: user.user_id, usertype: user.usertype };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}

