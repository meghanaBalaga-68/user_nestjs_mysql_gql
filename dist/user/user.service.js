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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const bcrypt = require("bcrypt");
const console_1 = require("console");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createUser(createUserDto) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
        const user = new user_entity_1.User();
        user.username = createUserDto.username;
        user.email = createUserDto.email;
        user.password = hashedPassword;
        user.phonenumber = createUserDto.phonenumber;
        user.shift = createUserDto.shift;
        user.usertype = createUserDto.usertype;
        return await this.userRepository.save(user);
    }
    async updateUser(id, updateUserDto) {
        const user = await this.userRepository.findOne({ where: { user_id: id } });
        if (!user) {
            throw new console_1.error('User not Found');
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(updateUserDto.password, salt);
        await this.userRepository.update(id, {
            username: updateUserDto.username,
            email: updateUserDto.email,
            password: hashedPassword,
            phonenumber: updateUserDto.phonenumber,
            shift: updateUserDto.shift,
            usertype: updateUserDto.usertype,
        });
        return this.userRepository.findOne({ where: { user_id: id } });
    }
    async getUsers() {
        return this.userRepository.find();
    }
    async getUserById(id) {
        const user = await this.userRepository.findOne({ where: { user_id: id } });
        if (!user) {
            throw new console_1.error('User Not Found');
        }
        return user;
    }
    async findByUsername(username) {
        const user = await this.userRepository.findOne({ where: { username } });
        return user;
    }
    async deleteUserById(userId) {
        await this.userRepository.delete(userId);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map