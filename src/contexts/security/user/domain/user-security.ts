import {AggregateRoot} from "../../../shared/domain/aggregate-root";
import {UserSecurityId} from "./user-security-id";
import {UserSecurityUsername} from "./user-security-username";
import {UserSecurityPassword} from "./user-security-password";
import {UserSecurityRole, UserSecurityRoles} from "./user-security-roles";

export class UserSecurity extends AggregateRoot {
    private readonly id: UserSecurityId
    private readonly username: UserSecurityUsername
    private readonly password: UserSecurityPassword
    private readonly role: UserSecurityRole
    private readonly createdAt: Date
    private readonly modifiedAt: Date

    constructor(id: UserSecurityId, username: UserSecurityUsername, password: UserSecurityPassword, role: UserSecurityRole,
                createdAt: Date, modifiedAt: Date) {
        super();
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
    }

    getId(): string {
        return this.id.value;
    }
    getUsername(): string {
        return this.username.value
    }
    getRole(): string {
        return this.role.value
    }

    static create(username: string, password: string, role: string) : UserSecurity{
        const currentDate = Date.now()
        const userSecurity = new UserSecurity(
            UserSecurityId.random(),
            new UserSecurityUsername(username),
            new UserSecurityPassword(password),
            UserSecurityRole.fromValue(role),
            new Date(currentDate),
            new Date(currentDate),
        )
        // TODO push events
        return userSecurity;
    }

    static fromPrimitives(plainData: {id: string, username: string, password: string, role: string, createdAt: number, modifiedAt: number}): UserSecurity {
        return new UserSecurity(
            new UserSecurityId(plainData.id),
            new UserSecurityUsername(plainData.username),
            new UserSecurityPassword(plainData.password),
            UserSecurityRole.fromValue(plainData.role),
            new Date(plainData.createdAt),
            new Date(plainData.modifiedAt),
        )
    }

    toPrimitives(): any {
        return {
            id: this.id.value,
            username: this.username.value,
            password: this.password.value,
            role: this.role.value,
            created_at: this.createdAt,
            modified_at: this.modifiedAt,
        }
    }

}