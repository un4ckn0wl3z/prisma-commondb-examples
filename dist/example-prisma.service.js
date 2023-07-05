"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamplePrismaService = void 0;
const common_1 = require("@nestjs/common");
const commondb_examples_1 = require("@prisma/commondb_examples");
const bson_1 = require("bson");
let ExamplePrismaService = exports.ExamplePrismaService = class ExamplePrismaService extends commondb_examples_1.PrismaClient {
    injectTsFieldMiddleware() {
        this.$use((params, next) => {
            if (params.action === 'create' ||
                params.action === 'createMany' ||
                params.action === 'update' ||
                params.action === 'updateMany' ||
                params.action === 'upsert') {
                if (Array.isArray(params.args.data)) {
                    for (let index = 0; index < params.args.data.length; index++) {
                        params.args.data[index].ts = new bson_1.ObjectId().toString();
                    }
                }
                else {
                    params.args.data.ts = new bson_1.ObjectId().toString();
                }
            }
            return next(params);
        });
    }
    async onModuleInit() {
        this.injectTsFieldMiddleware();
        await this.$connect();
    }
    async enableShutdownHooks(app) {
        this.$on('beforeExit', async () => {
            await app.close();
        });
    }
};
exports.ExamplePrismaService = ExamplePrismaService = __decorate([
    (0, common_1.Injectable)()
], ExamplePrismaService);
//# sourceMappingURL=example-prisma.service.js.map