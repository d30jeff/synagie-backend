import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import tunnel from 'tunnel-ssh';
import mongoose from 'mongoose';

@Module({
  imports: [
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: (configService: ConfigService) => {
    //     return {
    //       // authSource: configService.get('MONGO_AUTHSOURCE'),
    //       // user: configService.get('MONGO_USER'),
    //       // pass: configService.get('MONGO_PASSWORD'),
    //       connectionName: 'Primary',
    //       uri: 'mongodb://synagieroot:c3e3a7569323d1720@localhost:27017/zipply',
    //     };
    //   },
    // }),
  ],
  providers: [
    {
      provide: 'Mongo',
      useFactory: async () => {
        try {
          tunnel(
            {
              username: 'ubuntu',
              host: 'app2.synagie.com',
              privateKey: require('fs').readFileSync(
                '/Users/deojefflai/.ssh/id_rsa.pem',
              ),
              port: 22,
              dstPort: 27017,
              password: 'c3e3a7569323d1720',
            },
            async (error, server) => {
              if (error) {
                console.error(error);
              }

              try {
                await mongoose.createConnection(
                  'mongodb://synagieroot:c3e3a7569323d1720@localhost:27017/zipply,productionmy0-shard-00-01-p2fon.mongodb.net:27017,productionmy0-shard-00-02-p2fon.mongodb.net:27017/zipply',
                  {
                    ssl: true,
                    sslValidate: false,
                    user: 'synagieroot',
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                  },
                );
              } catch (e) {
                console.error(e);
              }
            },
          );
        } catch (e) {
          // console.error(e);
        }
      },
    },
  ],
})
export class MongoModule {}
