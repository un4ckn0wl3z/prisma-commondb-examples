"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ExamplePrismaModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamplePrismaModule = void 0;
const common_1 = require("@nestjs/common");
const example_prisma_service_1 = require("./example-prisma.service");
let ExamplePrismaModule = exports.ExamplePrismaModule = ExamplePrismaModule_1 = class ExamplePrismaModule {
    static register(options) {
        return {
            global: true,
            module: ExamplePrismaModule_1,
            imports: [],
            providers: [
                example_prisma_service_1.ExamplePrismaService
            ],
            exports: [
                example_prisma_service_1.ExamplePrismaService
            ]
        };
    }
};
exports.ExamplePrismaModule = ExamplePrismaModule = ExamplePrismaModule_1 = __decorate([
    (0, common_1.Module)({})
], ExamplePrismaModule);
//# sourceMappingURL=example-prisma.module.js.map