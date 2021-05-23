import { NestFactory } from '@nestjs/core';
import { MalaysiaService } from 'apps/malaysia/src/malaysia.service';
import { MalaysiaModule } from './malaysia.module';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(MalaysiaModule);

  const malaysiaService = app.get(MalaysiaService);

  await malaysiaService.insertFakeData();
  await malaysiaService.listenForWayBillsUpload();
}
bootstrap();
