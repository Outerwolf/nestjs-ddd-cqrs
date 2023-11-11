import {StringValueObject} from "../../../shared/domain/value-object/string-value-object";
import {UserSecurityUsernameInvalid} from "./user-security-username-invalid";
import {UserSecurityUserNameLengthExceeded} from "./user-security-user-name-length-exceeded";

export class UserSecurityUsername extends StringValueObject {
    private readonly REGEX_VALID_EMAIL = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    private readonly MAX_USERNAME_LENGTH = 50
    constructor(value: string) {
        super(value);
    }

    private ensureLengthIsLessThan50Characters(value: string): void {
        if(this.MAX_USERNAME_LENGTH >50) {
            throw new UserSecurityUserNameLengthExceeded(`the email ${value} has more than 50 characters`)
        }
    }
    private ensureEmailIsValid(value: string): void {
        if(!this.REGEX_VALID_EMAIL.test(value)) {
            throw new UserSecurityUsernameInvalid(`the email provided is not valid ${value}`)
        }
    }
}