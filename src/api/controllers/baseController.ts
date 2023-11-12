import {CommandBus, QueryBus} from "@nestjs/cqrs";

export class BaseController {
    constructor(private readonly queryBus: QueryBus,
                private readonly commandBus: CommandBus) {
    }
}