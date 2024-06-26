import { Entity, PrimaryGeneratedColumn,  Column, BeforeInsert} from "typeorm";
import { ObjectType, Field } from "@nestjs/graphql";
import { Shift, typeRole } from "./user.types";
import * as bcrypt from 'bcrypt';


@ObjectType()
@Entity('user')
export class User{
    @Field(() => String)
    @PrimaryGeneratedColumn('uuid')
    user_id: string;

    @Field(()=> String)
    @Column()
    username: string;
 
    @Field(()=> String)
    @Column({unique: true})
    email: string;

    @Field(()=> String)
    @Column()
    password: string;

    @Field(()=> String)
    @Column()
    phonenumber: string;

    @Field(()=> String)
    @Column()
    empId: string;

    @Field(()=>Shift)
    @Column({
        type: 'enum',
        enum: Shift,
        default: Shift.MORNING
    })
    
    shift: Shift;

    @Field(()=>typeRole)
    @Column({
        type: 'enum',
        enum: typeRole,
        default: typeRole.WORKER
    })
    usertype: typeRole;
    
    @Field()
    @Column({
        type: 'timestamp',
        default: () => 'NOW()'
    })
    created_at: Date;


    @BeforeInsert()
    async hashPassword() {
        let data = await bcrypt.hash(this.password, 10);
        // console.log(this.password,data,'@password')
        this.password=data
    }

    @BeforeInsert()
    generateEmpId() {
        this.empId = 'EMP' + Math.floor(Math.random()*10000).toString().padStart(4,'0');
    }
}