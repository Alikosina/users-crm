import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() req: { email: string; password: string }) {
    return this.authService.login(req);
  }

  @Post('register')
  async register(@Body() req) {
    return this.authService.register(req.email, req.password);
  }
}
