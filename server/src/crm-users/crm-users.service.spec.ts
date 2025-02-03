import { Test, TestingModule } from '@nestjs/testing';
import { CrmUsersService } from './crm-users.service';

describe('CrmUsersService', () => {
  let service: CrmUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrmUsersService],
    }).compile();

    service = module.get<CrmUsersService>(CrmUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
