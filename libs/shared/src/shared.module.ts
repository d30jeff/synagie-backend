import { Module } from '@nestjs/common';
import { SharedService } from './shared.service';
import { DatabaseModule } from './database/database.module';
import { CommonModule } from './common/common.module';

@Module({
  providers: [SharedService],
  exports: [SharedService],
  imports: [DatabaseModule, CommonModule],
})
export class SharedModule {}
