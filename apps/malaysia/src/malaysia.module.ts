import { CommonModule } from '@libs/shared/common/common.module';
import { Module } from '@nestjs/common';
import { MalaysiaController } from './malaysia.controller';
import { MalaysiaService } from './malaysia.service';

@Module({
  imports: [CommonModule],
  controllers: [MalaysiaController],
  providers: [MalaysiaService],
})
export class MalaysiaModule {}
