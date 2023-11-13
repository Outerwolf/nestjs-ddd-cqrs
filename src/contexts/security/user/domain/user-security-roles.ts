import {EnumValueObject} from "../../../shared/domain/value-object/enum-value-object";
import {InvalidArgumentError} from "../../../shared/domain/value-object/invalid-argument-error";

export enum UserSecurityRoles {
    ADMIN = "SUPER_ADMIN",
    USER = "USER",
    THIRD_PARTY = "THIRD_PARTY",
}

export class UserSecurityRole extends EnumValueObject<UserSecurityRoles> {

    constructor(value: UserSecurityRoles) {
        super(value, Object.values(UserSecurityRoles))
    }

    static fromValue(value: string): UserSecurityRole {
        for (const role of Object.values(UserSecurityRoles)) {
            if (value === role.toString()){
                return new UserSecurityRole(role);
            }
        }
        throw new InvalidArgumentError(`The Role Type ${value} is invalid`)
    }

    public isAdmin(): boolean {
        return this.value === UserSecurityRoles.ADMIN;
    }

    protected throwErrorForInvalidValue(value: UserSecurityRoles): void {
        throw new InvalidArgumentError(`The Role Type ${value} is invalid`)
    }

}