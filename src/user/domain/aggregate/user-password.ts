import { HttpException, HttpStatus } from "@nestjs/common";
import { ValueObject } from "src/shared/domain/value-object";

interface PasswordProps {
    password: string;
}

export class Password extends ValueObject<PasswordProps> {
    public static minLength: number = 8;
    public static maxLength: number = 255;

    private constructor(props: PasswordProps) {
        super(props);
    }

    public static create(props: PasswordProps): Password {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;
        if (!props.password) {
            throw new HttpException("Password is required", HttpStatus.BAD_REQUEST);
        }
        if (regex.test(props.password)) {
            throw new HttpException("Password is invalid", HttpStatus.BAD_REQUEST);
        }
        if (props.password.length < this.minLength || props.password.length > this.maxLength) {
            throw new HttpException("Invalid Password length", HttpStatus.BAD_REQUEST);
        }
        return new Password(props);
    }
}
