"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: ['10.100.72.192', 'http://localhost:5174'],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        preflightContinue: false,
        optionsSuccessStatus: 204,
        allowedHeaders: 'Content-type, Accept'
    });
    await app.listen(process.env.PORT || 5000, '0.0.0.0');
}
bootstrap();
//# sourceMappingURL=main.js.map