"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const user_entity_1 = require("../user/user.entity");
exports.default = (0, config_1.registerAs)('orm.config', () => ({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    entities: [user_entity_1.User],
    synchronize: true,
}));
//# sourceMappingURL=db.config.js.map