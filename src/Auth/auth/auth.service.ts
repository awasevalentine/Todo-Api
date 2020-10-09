import {Res} from '@nestjs/common/decorators/http';
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { UserDto } from 'src/Models/Dto/user.Dto';
import { UserDocument } from 'src/Models/Interface/user.interface';

@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>,
    private jwtService: JwtService) { }
    
  

  async createUser(userDto: UserDto): Promise<any> {
    const { userName, email, passwordHash } = userDto;

    const hashedPassword = await bcrypt.hash(passwordHash, 10);

    const user = new this.userModel({ userName, email, passwordHash: hashedPassword });
   
    return await user.save();
  }



  async signIn(user: UserDocument) {
    const payload = { email: user.email, _id: user._id, userName: user.userName};
    return {
      accessToken: this.jwtService.sign(payload)
    };
     
  }



  async validateUser(username: string, pass: string): Promise<UserDocument> {
    const user = await this.userModel.findOne({ email: username });

    if (!user) {
      return null;
    }

    const valid = await bcrypt.compare(pass, user.passwordHash);

    if (valid) {
      return user;
    }

    return null;
  }


  

  async getUserId(id: string): Promise<any> {
    const user = await this.userModel.findById({ _id: id });
    if (!user) {
      return `user not found by Id -> ${id}`;
    }
    return user;
  }
}
