import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { GqlExecutionContext } from "@nestjs/graphql";



@Injectable()
export class RoleGuard implements CanActivate{
    constructor(private reflector: Reflector){}


    canActivate(context: ExecutionContext): boolean{
        const roles = this.reflector.get<string[]>('usertypes', context.getHandler());
        if(!roles){
            return true;
        }
        const ctx = GqlExecutionContext.create(context);
        const { user } = ctx.getContext().req;
        return roles.includes(user.usertype);
        
    }
}