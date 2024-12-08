import { Test, TestingModule } from '@nestjs/testing';
import { CitiesByTagController } from './cities-by-tag.controller';

describe('CitiesByTagController', () => {
  let controller: CitiesByTagController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CitiesByTagController],
    }).compile();

    controller = module.get<CitiesByTagController>(CitiesByTagController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
