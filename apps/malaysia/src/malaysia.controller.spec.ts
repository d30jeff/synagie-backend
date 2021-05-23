import { Test, TestingModule } from '@nestjs/testing';
import { MalaysiaController } from './malaysia.controller';
import { MalaysiaService } from './malaysia.service';

describe('MalaysiaController', () => {
  let malaysiaController: MalaysiaController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MalaysiaController],
      providers: [MalaysiaService],
    }).compile();

    malaysiaController = app.get<MalaysiaController>(MalaysiaController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(malaysiaController.getHello()).toBe('Hello World!');
    });
  });
});
