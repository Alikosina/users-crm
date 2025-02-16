import { Controller, Post, Body, Get, Request } from '@nestjs/common';

import { Public } from '../common/decorators';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() req: { email: string; password: string }) {
    return this.authService.login(req);
  }

  @Post('register')
  async register(@Body() req) {
    return this.authService.register(req.email, req.password);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
