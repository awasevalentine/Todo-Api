
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './Auth/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { todoSchema } from './Models/Schema/todo.schema';



@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL), 
    MongooseModule.forFeature([{ name: 'Todo', schema:todoSchema }]),

    
 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
