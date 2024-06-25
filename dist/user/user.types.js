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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserType = exports.Shift = exports.typeRole = void 0;
const graphql_1 = require("@nestjs/graphql");
var typeRole;
(function (typeRole) {
    typeRole["ADMIN"] = "Admin";
    typeRole["WORKER"] = "Worker";
    typeRole["SUPERVISOR"] = "Supervisor";
})(typeRole || (exports.typeRole = typeRole = {}));
(0, graphql_1.registerEnumType)(typeRole, {
    name: 'typeRole',
});
var Shift;
(function (Shift) {
    Shift["MORNING"] = "Morning";
    Shift["AFTERNOON"] = "Afternoon";
    Shift["EVENING"] = "Evening";
    Shift["NIGHT"] = "Night";
})(Shift || (exports.Shift = Shift = {}));
(0, graphql_1.registerEnumType)(Shift, { name: 'Shift', });
let UserType = class UserType {
};
exports.UserType = UserType;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], UserType.prototype, "user_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], UserType.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], UserType.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], UserType.prototype, "phonenumber", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], UserType.prototype, "empId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Shift),
    __metadata("design:type", String)
], UserType.prototype, "shift", void 0);
__decorate([
    (0, graphql_1.Field)(() => typeRole),
    __metadata("design:type", String)
], UserType.prototype, "usertype", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], UserType.prototype, "created_at", void 0);
exports.UserType = UserType = __decorate([
    (0, graphql_1.ObjectType)()
], UserType);
//# sourceMappingURL=user.types.js.map