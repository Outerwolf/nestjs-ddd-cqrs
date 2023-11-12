import { Module } from "@nestjs/common";
import {UserCreateHandler} from "./create-user/user-create-handler";
import {UserCreator} from "./create-user/user-creator";
import {InfrastructureUserSecurityModule} from "../infrastructure/infrastructure-user-security.module";
export const CommandHandlers = [UserCreateHandler]
@Module({
    imports: [InfrastructureUserSecurityModule],
    controllers: [],
    providers: [...CommandHandlers, UserCreator],
})
export class ApplicationUserSecurityModule {}
