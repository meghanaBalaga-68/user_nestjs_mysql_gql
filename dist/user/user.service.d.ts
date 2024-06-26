import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserInput } from './dto/create.user.input';
import { UserGetType, UserType } from './user.types';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    createUser(createUserDto: CreateUserInput): Promise<User>;
    updateUser(id: string, updateUserDto: CreateUserInput): Promise<User>;
    getUsers(): Promise<UserGetType[]>;
    findByUsername(username: string): Promise<User | undefined>;
    findOneById(user_id: string): Promise<UserType | undefined>;
    deleteUser(user_id: string): Promise<boolean>;
}
