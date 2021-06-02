import { getConnection } from '@libs/shared/database/knexfile';
import { OrderSync } from '@libs/shared/models/OrderSync';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ObjectionModule } from '@willsoto/nestjs-objection';
import { knexSnakeCaseMappers } from 'objection';

@Module({
  imports: [
    ObjectionModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory(config: ConfigService) {
        return {
          config: {
            client: 'mysql',
            debug: true,
            connection: getConnection(),
            pool: {
              min: 0,
              max: 10,
            },
            migrations: {
              tableName: 'knex_migrations',
            },
          },
        };
      },
    }),
    ObjectionModule.forFeature([OrderSync]),
  ],
  providers: [],
  exports: [ObjectionModule],
})
export class DatabaseModule {}
