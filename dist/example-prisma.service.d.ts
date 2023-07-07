import { INestApplication, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/commondb_examples';
export declare class ExamplePrismaService extends PrismaClient implements OnModuleInit {
    private injectTsFieldMiddleware;
    onModuleInit(): Promise<void>;
    enableShutdownHooks(app: INestApplication): Promise<void>;
}
//# sourceMappingURL=example-prisma.service.d.ts.map