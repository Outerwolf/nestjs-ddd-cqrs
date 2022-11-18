import { HttpException, HttpStatus } from "@nestjs/common";
import { ValueObject } from "src/shared/domain/value-object";

interface UserNameProps {
    name: string;
}

export class UserName extends ValueObject<UserNameProps> {
    public static minLength: number = 5;
    public static maxLength: number = 32;

    private constructor(props: UserNameProps) {
        super(props);
    }

    public static create(props: UserNameProps): UserName {
        if (!props.name) {
            throw new HttpException("Name is required", HttpStatus.BAD_REQUEST);
        }
        if (props.name.length < this.minLength || props.name.length > this.maxLength) {
            throw new HttpException("Invalid username length", HttpStatus.BAD_REQUEST);
        }
        return new UserName(props);
    }
}
