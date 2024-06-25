import { UserService } from './user.service';
import { User } from './user.entity';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserInput } from './dto/create.user.input';
export declare class UsersResolver {
    private readonly userService;
    private readonly authService;
    constructor(userService: UserService, authService: AuthService);
    createUser(input: CreateUserInput): Promise<User>;
    updateUser(id: string, input: CreateUserInput): Promise<User>;
    getUsers(): Promise<User[]>;
    getUserById(id: string): Promise<User>;
    login(username: string, password: string): Promise<{
        access_token: string;
        user: any;
    }>;
    deleteUsers(id: string): Promise<boolean>;
}
