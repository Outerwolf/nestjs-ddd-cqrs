import { Module } from "@nestjs/common";
import {UserController} from "./user.controller";
import {CqrsModule} from "@nestjs/cqrs";

@Module({
    imports: [CqrsModule],
    controllers: [UserController],
})
export class UserControllerModule {}
