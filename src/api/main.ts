import { INestApplication } from "@nestjs/common";
import {Logger, PinoLogger} from 'nestjs-pino';
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(),{
        bufferLogs: true,
    });
    app.useLogger(app.get(Logger));
    const config: ConfigService = app.get(ConfigService);
    await configure(app, config);
    await app.listen(config.get("app.port") || 5000);
}
bootstrap().then().catch(e => console.log(e));

async function configure(app: INestApplication, config: ConfigService) {
    const path = config.get("app.path") || "api";
    app.setGlobalPrefix(path);
}
