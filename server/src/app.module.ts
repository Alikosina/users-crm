import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CrmUsersModule } from './crm-users/crm-users.module';

@Module({
  imports: [AuthModule, CrmUsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
