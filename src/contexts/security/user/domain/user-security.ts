import {AggregateRoot} from "../../../shared/domain/aggregate-root";
import {UserSecurityId} from "./user-security-id";
import {UserSecurityUsername} from "./user-security-username";
import {UserSecurityPassword} from "./user-security-password";

export class UserSecurity extends AggregateRoot {
    private readonly id: UserSecurityId
    private readonly username: UserSecurityUsername
    private readonly password: UserSecurityPassword

    constructor(id: UserSecurityId, username: UserSecurityUsername, password: UserSecurityPassword) {
        super();
        this.id = id;
        this.username = username;
        this.password = password;
    }

    static create(id: string, username: string, password: string) : UserSecurity{
        const userSecurity = new UserSecurity(
            new UserSecurityId(id),
            new UserSecurityUsername(username),
            new UserSecurityPassword(password)
        )
        // TODO push events
        return userSecurity;
    }

    static fromPrimitives(plainData: {id: string, username: string, password: string}): UserSecurity {
        return new UserSecurity(
            new UserSecurityId(plainData.id),
            new UserSecurityUsername(plainData.username),
            new UserSecurityPassword(plainData.password)
        )
    }

    toPrimitives(): any {
        return {
            id: this.id.value,
            username: this.username.value,
            duration: this.password.value,
        }
    }

}