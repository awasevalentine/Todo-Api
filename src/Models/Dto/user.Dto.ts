import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class UserDto {


  @IsString()
  @MinLength(4, { message: 'minimum character allowed for a user is 4'})
    @MaxLength(20, { message: 'the maximum character allowed for a username is 20'})
  readonly userName: string;

  readonly email: string;

  @IsString()
  @MinLength(8, { message: 'password is too weak. password should be greater than 8 characters' })
  @MaxLength(20, { message: 'password exceed maximum chacters allowed. maximium character allowed is 20'})
  readonly passwordHash: string;
}