import { Module } from "@nestjs/common";
import {UserCreateHandler} from "./create-user/user-create-handler";
import {UserCreator} from "./user-creator";
export const CommandHandlers = [UserCreateHandler]
@Module({
    imports: [],
    controllers: [],
    providers: [...CommandHandlers,
    UserCreator],
})
export class ApplicationUserSecurityModule {}
