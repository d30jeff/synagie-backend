import dotenv from 'dotenv';
import { MySqlConnectionConfig } from 'knex';
import { knexSnakeCaseMappers } from 'objection';
import path from 'path';

const environment = process.env.NODE_ENV || 'development';

dotenv.config({
  path: path.join(
    __dirname,
    `../../../../.${environment.toLocaleLowerCase()}.env`,
  ),
});

export function getConnection(): MySqlConnectionConfig {
  const country = process.env.COUNTRY;

  if (!country) {
    throw new Error('COUNTRY not set');
  }

  if (country === 'malaysia') {
    return {
      host: process.env.MALAYSIA_MYSQL_HOST,
      user: process.env.MALAYSIA_MYSQL_USER,
      password: process.env.MALAYSIA_MYSQL_PASSWORD,
      database: process.env.MALAYSIA_MYSQL_DATABASE,
      port: Number(process.env.MALAYSIA_MYSQL_PORT),
    };
  }
}

export default {
  development: {
    client: 'mysql',
    debug: true,
    connection: getConnection(),
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    ...knexSnakeCaseMappers(),
  },
};
