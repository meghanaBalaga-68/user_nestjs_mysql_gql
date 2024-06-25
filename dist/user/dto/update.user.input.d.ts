import { typeRole, Shift } from 'src/user/user.types';
export declare class UpdateUserInput {
    username: string;
    email: string;
    password: string;
    phonenumber: string;
    shift: Shift;
    usertype: typeRole;
}
