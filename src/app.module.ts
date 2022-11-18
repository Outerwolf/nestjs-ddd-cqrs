import { SharedModule } from "./shared/shared.module";
import { UserModule } from "./user/user.module";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [SharedModule, UserModule, ConfigModule.forRoot()],
})
export class AppModule {}
