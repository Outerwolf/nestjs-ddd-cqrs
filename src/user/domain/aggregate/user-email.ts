import { HttpException, HttpStatus } from "@nestjs/common";
import { ValueObject } from "src/shared/domain/value-object";

interface UserEmailProps {
    email: string;
}

export class UserEmail extends ValueObject<UserEmailProps> {
    public static minLength: number = 3;
    public static maxLength: number = 254;
    private constructor(props: UserEmailProps) {
        super(props);
    }

    public static create(props: UserEmailProps): UserEmail {
        const regex =
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
        if (regex.test(props.email)) {
            throw new HttpException("Email is invalid", HttpStatus.BAD_REQUEST);
        }
        if (props.email.length < this.minLength || props.email.length > this.maxLength) {
            throw new HttpException("Invalid UserEmail length", HttpStatus.BAD_REQUEST);
        }
        return new UserEmail(props);
    }
}
