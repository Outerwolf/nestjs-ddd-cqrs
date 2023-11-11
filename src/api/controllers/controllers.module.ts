import {Module} from "@nestjs/common";
import {UserControllerModule} from "./user/user-controller.module";
import {HealthProbeControllerModule} from "./health_check/health-controller.module";

@Module({
    imports: [UserControllerModule, HealthProbeControllerModule],
})
export class ControllersModule {}