import { Shift, typeRole } from "./user.types";
export declare class User {
    user_id: string;
    username: string;
    email: string;
    password: string;
    phonenumber: string;
    empId: string;
    shift: Shift;
    usertype: typeRole;
    created_at: Date;
    hashPassword(): Promise<void>;
    generateEmpId(): void;
}
