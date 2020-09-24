import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  //app.useStaticAssets('/dist/dist/simple-todo-app');
  await app.listen(process.env.PORT || 3300, ()=>{
    console.log(`server running on localhost:3300`);
  });
}
bootstrap();
