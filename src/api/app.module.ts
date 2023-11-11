import { SharedModule } from "../contexts/shared/shared.module";
import { UserSecurityModule } from "../contexts/security/user/user-security.module";
import {Global, Module} from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import {ControllersModule} from "./controllers/controllers.module";
import {LoggerModule} from "nestjs-pino";

@Global()
@Module({
    imports: [
        SharedModule,
        UserSecurityModule,
        ControllersModule,
        LoggerModule.forRoot(),
        ConfigModule.forRoot()
    ],
    exports: [ControllersModule]
})
export class AppModule {}
