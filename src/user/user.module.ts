import { Module } from "@nestjs/common";
import { ApiContextModule } from "./api/api-user.module";
import { ApplicationContextModule } from "./application/application-context.module";
import { DomainContextModule } from "./domain/domain-context.module";
import { InfrastructureContextModule } from "./infrastructure/infrastructure-context.module";

@Module({
    imports: [ApiContextModule, ApplicationContextModule, DomainContextModule, InfrastructureContextModule],
    controllers: [],
    providers: [],
})
export class UserModule {}
