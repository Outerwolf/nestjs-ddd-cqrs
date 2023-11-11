import { Module } from "@nestjs/common";
import { ApplicationUserSecurityModule } from "./application/application-user-security.module";
import { DomainUserSecurityModule } from "./domain/domain-user-security.module";
import { InfrastructureUserSecurityModule } from "./infrastructure/infrastructure-user-security.module";

@Module({
    imports: [ApplicationUserSecurityModule, DomainUserSecurityModule, InfrastructureUserSecurityModule],
    controllers: [],
    providers: [],
})
export class UserSecurityModule {}
