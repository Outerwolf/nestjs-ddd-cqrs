import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {UserCreateCommand} from "./user-create-command";
import {PinoLogger} from "nestjs-pino";
import {UserCreator} from "../user-creator";

@CommandHandler(UserCreateCommand)
export class UserCreateHandler implements ICommandHandler<UserCreateCommand> {
    constructor(private readonly logger: PinoLogger, private readonly userCreator: UserCreator) {
        this.logger.setContext(UserCreateHandler.name)
    }
    execute(command: UserCreateCommand): Promise<void> {
        return this.userCreator.execute(command.id, command.username, command.password);
    }
}