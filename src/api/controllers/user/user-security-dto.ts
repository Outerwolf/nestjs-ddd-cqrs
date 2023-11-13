import {IsString, MaxLength, MinLength} from "class-validator";

export class UserSecurityDto {
    @IsString()
    @MinLength(8)
    @MaxLength(64)
    username: string;
    @IsString()
    @MinLength(8)
    @MaxLength(64)
    password: string;
    @IsString()
    role: string;
}