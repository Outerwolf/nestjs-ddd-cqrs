import { Module } from "@nestjs/common";
import { ApiContextModule } from "./api/api-user.module";
import { ApplicationUserModule } from "./application/application-user.module";
import { DomainUserModule } from "./domain/domain-user.module";
import { InfrastructureUserModule } from "./infrastructure/infrastructure-user.module";

@Module({
    imports: [ApiContextModule, ApplicationUserModule, DomainUserModule, InfrastructureUserModule],
    controllers: [],
    providers: [],
})
export class UserModule {}
