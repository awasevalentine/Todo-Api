import { ValidationPipe } from '@nestjs/common';
import * as compression from 'compression';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.use(compression());
  await app.listen(process.env.PORT || 3300, ()=>{
    console.log(`server running on localhost:3300`);
  });
}
bootstrap();
