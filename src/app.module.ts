import { ContextModule } from "./context/context.module";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
    imports: [ContextModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
