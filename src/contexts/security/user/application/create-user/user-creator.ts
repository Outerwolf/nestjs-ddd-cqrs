import {Inject, Injectable} from "@nestjs/common";
import {UserSecurity} from "../../domain/user-security";
import {PinoLogger} from "nestjs-pino";
import {USER_SECURITY_REPOSITORY, UserSecurityRepository} from "../../domain/user-security-repository";

@Injectable()
export class UserCreator {
    constructor(private readonly logger: PinoLogger,
                @Inject(USER_SECURITY_REPOSITORY)
                private readonly userSecurityRepository: UserSecurityRepository) {
        this.logger.setContext(UserCreator.name)
    }

    async execute(id: string, username: string, password: string) {
        this.logger.info(id)
        const userSecurity = UserSecurity.create(id, username, password);
        return this.userSecurityRepository.save(userSecurity);
    }

}