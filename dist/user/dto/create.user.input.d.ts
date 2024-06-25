import { typeRole, Shift } from 'src/user/user.types';
export declare class CreateUserInput {
    username: string;
    email: string;
    password: string;
    phonenumber: string;
    shift: Shift;
    usertype: typeRole;
}
