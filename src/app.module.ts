
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MONGODB_URL } from 'secretKeys';
import { todoSchema } from './Models/Schema/todo.schema';
import { join } from 'path';

@Module({
  imports: [MongooseModule.forRoot(MONGODB_URL), 
    MongooseModule.forFeature([{ name: 'Todo', schema:todoSchema }]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'dist/simple-todo-app'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
