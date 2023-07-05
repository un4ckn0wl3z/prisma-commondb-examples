import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/commondb_examples';
import { ObjectId } from 'bson';

@Injectable()
export class ExamplePrismaService extends PrismaClient implements OnModuleInit {

  private injectTsFieldMiddleware() {
    this.$use((params, next) => {
      if (params.action === 'create' ||
        params.action === 'createMany' ||
        params.action === 'update' ||
        params.action === 'updateMany' ||
        params.action === 'upsert') {
        if (Array.isArray(params.args.data)) {
          for (let index = 0; index < params.args.data.length; index++) {
            params.args.data[index].ts = new ObjectId().toString();
          }
        } else {
          params.args.data.ts = new ObjectId().toString()
        }
      }
      return next(params)
    })
  }

  async onModuleInit() {
    this.injectTsFieldMiddleware();
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}