import { Module } from "@nestjs/common";
import { SharedControllerModule } from "./api/health.module";

@Module({
    imports: [SharedControllerModule],
    controllers: [],
    providers: [],
})
export class SharedModule {}
