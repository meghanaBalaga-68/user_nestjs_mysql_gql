import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserInput } from './dto/create.user.input';
import { error } from 'console';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserInput): Promise<User> {
    const salt = await bcrypt.genSalt(10); // Generate a salt
        const hashedPassword = await bcrypt.hash(createUserDto.password, salt); // Hash the password with the salt

        const user = new User();
        user.username = createUserDto.username;
        user.email = createUserDto.email;
        user.password = hashedPassword; // Store the hashed password
        user.phonenumber = createUserDto.phonenumber;
        user.shift = createUserDto.shift;
        user.usertype = createUserDto.usertype;

        return await this.userRepository.save(user);
  }

  async updateUser(id: string, updateUserDto: CreateUserInput): Promise<User> {
    const user = await this.userRepository.findOne({where: {user_id: id}});
    if(!user){
        throw new error('User not Found');
    }

    const salt = await bcrypt.genSalt(10); // Generate a salt
        const hashedPassword = await bcrypt.hash(updateUserDto.password, salt); // Hash the password with the salt

        await this.userRepository.update(id, {
            username: updateUserDto.username,
            email: updateUserDto.email,
            password: hashedPassword, // Store the hashed password
            phonenumber: updateUserDto.phonenumber,
            shift: updateUserDto.shift,
            usertype: updateUserDto.usertype,
        });

        return this.userRepository.findOne({where: {user_id: id}});
    }

  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async getUserById(id: string): Promise<User | undefined> {
    const user = await  this.userRepository.findOne({where: {user_id: id}});
    if(!user){
        throw new error('User Not Found');
    }
    return user;
  }

  async findByUsername(username: string): Promise<User | undefined> {
    const user =await this.userRepository.findOne({ where: { username } });
    // console.log(user);
    return user;
  }

  async deleteUserById(userId: string): Promise<void>{
    await this.userRepository.delete(userId);
  }

  
}
