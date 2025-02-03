import { Test, TestingModule } from '@nestjs/testing';
import { CrmUsersController } from './crm-users.controller';

describe('CrmUsersController', () => {
  let controller: CrmUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrmUsersController],
    }).compile();

    controller = module.get<CrmUsersController>(CrmUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
