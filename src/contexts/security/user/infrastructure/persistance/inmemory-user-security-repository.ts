import {UserSecurity} from "../../domain/user-security";
import {UserSecurityRepository} from "../../domain/user-security-repository";
import {Injectable} from "@nestjs/common";
import {UserSecurityId} from "../../domain/user-security-id";
@Injectable()
export class InMemoryUserSecurityRepository implements UserSecurityRepository {
    private InMemoryUsersSecurityMemory: UserSecurity[] = [];
    async save(userSecurity: UserSecurity): Promise<void> {
        return new Promise(
            (resolve, reject) => {
                this.InMemoryUsersSecurityMemory.push(userSecurity.toPrimitives())
                resolve()
            }
        )
    }

    findById(userId: UserSecurityId): Promise<UserSecurity> {
        return Promise.resolve(this.InMemoryUsersSecurityMemory.find((userSecurity) =>  userSecurity.toPrimitives().id=== userId.value));
    }

}