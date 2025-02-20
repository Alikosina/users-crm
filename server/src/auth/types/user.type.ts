import { IsEmail, IsNotEmpty } from 'class-validator';

export class User {
  @IsNotEmpty()
  readonly id: number;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}
