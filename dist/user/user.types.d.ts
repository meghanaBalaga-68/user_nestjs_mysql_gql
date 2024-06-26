export declare enum typeRole {
    ADMIN = "Admin",
    WORKER = "Worker",
    SUPERVISOR = "Supervisor"
}
export declare enum Shift {
    MORNING = "Morning",
    AFTERNOON = "Afternoon",
    EVENING = "Evening",
    NIGHT = "Night"
}
export declare class UserType {
    user_id: string;
    username: string;
    email: string;
    phonenumber: string;
    empId: string;
    shift: Shift;
    usertype: typeRole;
    created_at: Date;
}
export declare class UserGetType {
    username: string;
    empId: string;
    usertype: typeRole;
}
