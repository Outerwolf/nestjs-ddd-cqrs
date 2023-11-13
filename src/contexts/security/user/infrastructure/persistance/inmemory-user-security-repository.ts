import {UserSecurity} from "../../domain/user-security";
import {UserSecurityRepository} from "../../domain/user-security-repository";
import {Injectable} from "@nestjs/common";
import {UserSecurityUsername} from "../../domain/user-security-username";
import {UserSecurityId} from "../../domain/user-security-id";

export interface UserSecurityModel {
    id: string,
    username: string,
    password: string,
    role: string,
    created_at: Date,
    modified_at: Date,
}


@Injectable()
export class InMemoryUserSecurityRepository implements UserSecurityRepository {
    private InMemoryUsersSecurityMemory: UserSecurityModel[] = [];
    async save(userSecurity: UserSecurity): Promise<void> {
        return new Promise(
            (resolve, reject) => {
                this.InMemoryUsersSecurityMemory.push(userSecurity.toPrimitives())
                resolve()
            }
        )
    }

    findByUserName(id: UserSecurityUsername): Promise<UserSecurity> {
        return Promise.resolve(undefined);
    }

    delete(id: UserSecurityId): Promise<void> {
        return Promise.resolve(undefined);
    }

    update(id: UserSecurityId, userSecurity: UserSecurity): Promise<void> {
        return Promise.resolve(undefined);
    }
}