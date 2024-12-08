import { Test, TestingModule } from '@nestjs/testing';
import { AllCitiesController } from './all-cities.controller';

describe('AllCitiesController', () => {
  let controller: AllCitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AllCitiesController],
    }).compile();

    controller = module.get<AllCitiesController>(AllCitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
