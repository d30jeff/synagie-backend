import { HealthcheckController } from '@libs/shared/controllers/healthcheck.controller';
import { DatabaseModule } from '@libs/shared/database/database.module';
import { OrderSyncService } from '@libs/shared/services/order-sync.service';
import { Logger, Module, OnApplicationBootstrap } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';

const env = process.env.NODE_ENV || 'development';
const envFilePath = `.${env.toLocaleLowerCase()}.env`;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath,
    }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    DatabaseModule,
  ],
  controllers: [HealthcheckController],
  providers: [OrderSyncService],
  exports: [ConfigModule, DatabaseModule, OrderSyncService],
})
export class CommonModule implements OnApplicationBootstrap {
  private logger = new Logger(CommonModule.name);

  constructor() {}

  async onApplicationBootstrap() {}
}
