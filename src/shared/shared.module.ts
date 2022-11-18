import { Module } from "@nestjs/common";
import { SharedControllerModule } from "./api/api-shared.module";

@Module({
    imports: [SharedControllerModule],
    controllers: [],
    providers: [],
})
export class SharedModule {}
