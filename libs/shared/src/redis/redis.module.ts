import { RedisService } from '@libs/shared/services/base/redis.service';
import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    CacheModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory(config: ConfigService) {
        return {
          store: redisStore,
          host: config.get('REDIS_HOST'),
          port: config.get('REDIS_PORT'),
        };
      },
    }),
  ],
  providers: [RedisService],
  exports: [CacheModule, RedisService]
})
export class RedisModule {}
