import { INestApplication, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
    const config: ConfigService = app.get(ConfigService);
    const logger: Logger = new Logger();
    await configure(app, config);

    app.listen(config.get("app.port") || 5000, () => {
        logger.log(`[APP] ${config.get("app.name")}`);
        logger.log(`[PROC] ${process.pid}`);
        logger.log(`[NOD] ${process.version}`);
        logger.log(`[ENV] ${process.env.NODE_ENV}`);
        logger.log(`[DKR] ${process.env.IS_DOCKER ? true : false}`);
    });
}
bootstrap();

async function configure(app: INestApplication, config: ConfigService) {
    const path = config.get("app.path") || "api";
    app.setGlobalPrefix(path);
}
