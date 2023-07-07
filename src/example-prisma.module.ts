import { DynamicModule, Global, Module } from '@nestjs/common';
import { ExamplePrismaService } from './example-prisma.service';

@Module({})
export class ExamplePrismaModule {
  static register(options: object) : DynamicModule {

    return {
      global: true,
      module: ExamplePrismaModule,
      imports: [
      
      ],
      providers: [
        ExamplePrismaService
      ],
      exports: [
        ExamplePrismaService
      ]
      }
  }
}