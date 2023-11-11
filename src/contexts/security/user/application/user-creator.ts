import {Injectable} from "@nestjs/common";
import {UserSecurity} from "../domain/user-security";
import {PinoLogger} from "nestjs-pino";

@Injectable()
export class UserCreator {
    constructor(private readonly logger: PinoLogger) {
        this.logger.setContext(UserCreator.name)
    }

    async execute(id: string, username: string, password: string) {
        this.logger.info(id)
        const userSecurity = UserSecurity.create(id, username, password);
        console.log(userSecurity)
    }

}