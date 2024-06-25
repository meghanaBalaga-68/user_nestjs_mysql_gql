"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_service_1 = require("./user.service");
const user_entity_1 = require("./user.entity");
const auth_service_1 = require("../auth/auth.service");
const common_1 = require("@nestjs/common");
const login_response_1 = require("../auth/login.response");
const common_2 = require("@nestjs/common");
const create_user_input_1 = require("./dto/create.user.input");
const auth_guard_1 = require("../guard/auth.guard");
const role_guard_1 = require("../guard/role.guard");
const role_decorator_1 = require("../decorator/role.decorator");
let UsersResolver = class UsersResolver {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
    }
    async createUser(input) {
        return this.userService.createUser(input);
    }
    async updateUser(id, input) {
        return this.userService.updateUser(id, input);
    }
    async getUsers() {
        return this.userService.getUsers();
    }
    async getUserById(id) {
        return this.userService.getUserById(id);
    }
    async login(username, password) {
        return this.authService.login(username, password);
    }
    async deleteUsers(id) {
        await this.userService.deleteUserById(id);
        return true;
    }
};
exports.UsersResolver = UsersResolver;
__decorate([
    (0, graphql_1.Mutation)(returns => user_entity_1.User),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_input_1.CreateUserInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "createUser", null);
__decorate([
    (0, graphql_1.Mutation)(returns => user_entity_1.User),
    __param(0, (0, graphql_1.Args)({ name: 'id', type: () => graphql_1.ID })),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_user_input_1.CreateUserInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "updateUser", null);
__decorate([
    (0, graphql_1.Query)(returns => [user_entity_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "getUsers", null);
__decorate([
    (0, graphql_1.Query)(returns => user_entity_1.User),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "getUserById", null);
__decorate([
    (0, graphql_1.Mutation)(returns => login_response_1.LoginResponse),
    __param(0, (0, graphql_1.Args)('username')),
    __param(1, (0, graphql_1.Args)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "login", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard, role_guard_1.RoleGuard),
    (0, role_decorator_1.Roles)('Admin'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "deleteUsers", null);
exports.UsersResolver = UsersResolver = __decorate([
    (0, graphql_1.Resolver)(of => user_entity_1.User),
    __param(1, (0, common_2.Inject)((0, common_2.forwardRef)(() => auth_service_1.AuthService))),
    __metadata("design:paramtypes", [user_service_1.UserService,
        auth_service_1.AuthService])
], UsersResolver);
//# sourceMappingURL=user.resolver.js.map