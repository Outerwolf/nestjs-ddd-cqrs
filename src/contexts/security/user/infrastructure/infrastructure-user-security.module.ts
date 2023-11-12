import { Module } from "@nestjs/common";
import {USER_SECURITY_REPOSITORY} from "../domain/user-security-repository";
import {InMemoryUserSecurityRepository} from "./persistance/inmemory-user-security-repository";

@Module({
    imports: [],
    controllers: [],
    providers: [
        {
            provide: USER_SECURITY_REPOSITORY,
            useClass: InMemoryUserSecurityRepository,
        }
    ],
    exports: [
        {
            provide: USER_SECURITY_REPOSITORY,
            useExisting: InMemoryUserSecurityRepository,
        }
    ]
})
export class InfrastructureUserSecurityModule {}
