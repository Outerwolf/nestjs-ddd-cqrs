import {Body, Controller, Get, Param, Put} from "@nestjs/common";
import {UserDto} from "./user.dto";
import {CommandBus} from "@nestjs/cqrs";
import {UserCreateCommand} from "../../../contexts/security/user/application/create-user/user-create-command";
import {BaseController} from "../baseController";

@Controller("user")
export class UserController extends BaseController {
    constructor() {
        super()
    }
    @Put(":id")
    async create(@Param('id') id: string, @Body() req:UserDto) {
        return this.commandBus.execute(new UserCreateCommand(id, req.username, req.password));
    }
    @Get(":id")
    async find(@Param('id') id: string): Promise<any> {
        return "Hello"
    }
}
