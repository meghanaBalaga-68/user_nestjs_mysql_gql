import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { GqlExecutionContext } from "@nestjs/graphql";



@Injectable()
export class RoleGuard implements CanActivate{
    constructor(private reflector: Reflector){}


    canActivate(context: ExecutionContext): boolean{
       
        const ctx = GqlExecutionContext.create(context);
        const requiredrole = this.reflector.get<string[]>('usertypes', context.getHandler());
        const { user } = ctx.getContext().req;
        if(!requiredrole){
            return true;
        }
        if(requiredrole && user && user.usertype !== requiredrole){
            throw new ForbiddenException('Insufficient Permissions');
        }
        return true;
    }
}