import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    //fetch the api and send to the frontend like 
    //http://10.100.72.192:3000/graphql
    origin: [ '10.100.72.192','http://localhost:5174'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    //creating User
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: 'Content-type, Accept'
})
  await app.listen(process.env.PORT ||  5000, '0.0.0.0');
}
bootstrap();
