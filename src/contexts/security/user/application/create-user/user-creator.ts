import {Inject, Injectable} from "@nestjs/common";
import {UserSecurity} from "../../domain/user-security";
import {PinoLogger} from "nestjs-pino";
import {USER_SECURITY_REPOSITORY, UserSecurityRepository} from "../../domain/user-security-repository";
import {UserSecurityUsername} from "../../domain/user-security-username";

@Injectable()
export class UserCreator {
    constructor(private readonly logger: PinoLogger,
                @Inject(USER_SECURITY_REPOSITORY)
                private readonly userSecurityRepository: UserSecurityRepository) {
        this.logger.setContext(UserCreator.name)
    }

    async execute(username: string, password: string, role: string) {
        const userSecurity = UserSecurity.create(username, password, role);
        return this.userSecurityRepository.save(userSecurity);
    }

}