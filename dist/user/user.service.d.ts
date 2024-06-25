import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserInput } from './dto/create.user.input';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    createUser(createUserDto: CreateUserInput): Promise<User>;
    updateUser(id: string, updateUserDto: CreateUserInput): Promise<User>;
    getUsers(): Promise<User[]>;
    getUserById(id: string): Promise<User | undefined>;
    findByUsername(username: string): Promise<User | undefined>;
    deleteUserById(userId: string): Promise<void>;
}
