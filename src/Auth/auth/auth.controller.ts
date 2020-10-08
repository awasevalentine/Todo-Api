import { Body, Controller, Post, UseGuards, Request, Res } from '@nestjs/common';
import { UserDto } from 'src/Models/Dto/user.Dto';
import { LocalAuthGuard } from 'src/Models/Guards/local-Auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService){}

  @Post('/signup')
  async signUp(
   @Res() res,  @Body() userDto: UserDto
  ): Promise<any> {
    const user = await this.authService.createUser(userDto);
    return user;
  }

  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  async signIn(@Request() req) {
    return this.authService.signIn(req.user);
  }
}
