import { UserModule } from "./user/user.module";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [UserModule, ConfigModule.forRoot()],
})
export class AppModule {}
