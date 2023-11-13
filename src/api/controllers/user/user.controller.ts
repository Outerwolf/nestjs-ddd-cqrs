import {Body, Controller, Get, Param, Post, Put} from "@nestjs/common";
import {UserSecurityDto} from "./user-security-dto";
import {CommandBus, QueryBus} from "@nestjs/cqrs";
import {UserCreateCommand} from "../../../contexts/security/user/application/create-user/user-create-command";

@Controller("signup")
export class UserController {
    constructor(private readonly queryBus: QueryBus,
                private readonly commandBus: CommandBus) {
    }
    @Post("")
    async create(@Body() req:UserSecurityDto) {
        return this.commandBus.execute(new UserCreateCommand(req.username, req.password, req.role));
    }
    @Get(":id")
    async find(@Param('id') id: string): Promise<any> {
        return "Hello"
    }
}
