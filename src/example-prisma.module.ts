import { Global, Module } from '@nestjs/common';
import { ExamplePrismaService } from './example-prisma.service';

@Global()
@Module({
  providers: [ExamplePrismaService],
  exports: [ExamplePrismaService],
})
export class ExamplePrismaModule {}