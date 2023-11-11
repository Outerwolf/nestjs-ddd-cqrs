import {Body, Controller, Get, Param, Put} from "@nestjs/common";
import {UserDto} from "./user.dto";
import {CommandBus} from "@nestjs/cqrs";
import {UserCreateCommand} from "../../../contexts/security/user/application/create-user/user-create-command";

@Controller("user")
export class UserController {
    constructor(private readonly commandBus: CommandBus) {}
    @Put(":id")
    async create(@Param('id') id: string, @Body() req:UserDto) {

        await this.commandBus.execute(new UserCreateCommand(id, req.username, req.password))

        return "user";
    }
}
