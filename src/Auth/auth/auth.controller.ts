import { Body, Controller, Post, UseGuards, Request, Res, Get, Req, Param } from '@nestjs/common';
import { UserDto } from 'src/Models/Dto/user.Dto';
import { LocalAuthGuard } from 'src/Models/Guards/local-Auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) { }



  @Post('/signup')
  async signUp( @Res() res, @Body() userDto: UserDto ): Promise<any> {
    const user = await this.authService.createUser(userDto).then(
      (data) => {
        res.json(data);
      },
      (error) => {
        res.json(error);
      }
    );
    return user;
  }



  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  async signIn(@Request() req) {
    return this.authService.signIn(req.user);
  }


  
  @Get('/userById/:id')
  async getUserId(@Param('id') id: string, @Res() res): Promise<any> {
    
    const user = await this.authService.getUserId(id).then(
      data => {
        console.log(`return  data isb -> `);
      },
    );
    return user;
  }

}
