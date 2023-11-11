import { Controller, Get } from "@nestjs/common";
import { HealthCheck, HealthCheckService, MemoryHealthIndicator } from "@nestjs/terminus";

@Controller()
export class HealthController {
    constructor(private health: HealthCheckService, private memory: MemoryHealthIndicator) {}

    @Get("health")
    @HealthCheck()
    check() {
        return this.health.check([() => this.memory.checkHeap("memory_heap", 150 * 1024 * 1024)]);
    }
}
