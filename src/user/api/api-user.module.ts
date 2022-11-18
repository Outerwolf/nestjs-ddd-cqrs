import { Module } from "@nestjs/common";
import { ControllerContextController } from "./controllers/controller-user.controller";

@Module({
    imports: [],
    controllers: [ControllerContextController],
    providers: [],
})
export class ApiContextModule {}
