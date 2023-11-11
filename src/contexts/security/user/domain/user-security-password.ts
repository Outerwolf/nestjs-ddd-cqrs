import {StringValueObject} from "../../../shared/domain/value-object/string-value-object";
import {UserSecurityPasswordNotEnoughCharacters} from "./user-security-password-not-enough-characters";
import {UserSecurityPasswordExceedCharacters} from "./user-security-password-exceed-characters";

export class UserSecurityPassword extends StringValueObject {
    private readonly MIN_PASSWORD_LENGTH = 8
    private readonly MAX_PASSWORD_LENGTH = 255

    constructor(value: string) {
        super(value);
        this.ensurePasswordIsLessThan8Characters(value);
        this.ensurePasswordIsMoreThan255Characters(value);
    }

    private ensurePasswordIsLessThan8Characters(value: string) {
        if (this.MIN_PASSWORD_LENGTH < 8) {
            throw new UserSecurityPasswordNotEnoughCharacters(`The password has less ${this.MIN_PASSWORD_LENGTH} characters`)
        }
    }

    private ensurePasswordIsMoreThan255Characters(value: string) {
        if (this.MAX_PASSWORD_LENGTH < 8) {
            throw new UserSecurityPasswordExceedCharacters(`The password has less ${this.MAX_PASSWORD_LENGTH} characters`)
        }
    }
}