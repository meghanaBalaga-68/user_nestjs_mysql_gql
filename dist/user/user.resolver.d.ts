import { UserService } from './user.service';
import { User } from './user.entity';
import { UserGetType } from './user.types';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserInput } from './dto/create.user.input';
export declare class UsersResolver {
    private readonly userService;
    private readonly authService;
    constructor(userService: UserService, authService: AuthService);
    createUser(input: CreateUserInput): Promise<User>;
    updateUser(id: string, input: CreateUserInput): Promise<User>;
    getUsers(): Promise<UserGetType[]>;
    whoAmI(context: any): Promise<User>;
    login(username: string, password: string): Promise<{
        access_token: string;
        user: any;
    }>;
    deleteUser(id: string): Promise<boolean>;
}
