export class UserDto {
    username: string;
    password: string;
    type: string;
    access_token?: string;
    refresh_token?: string;
    is_deleted?: boolean;
    last_login?: Date;
    created_date?: Date;
    modified_date?: Date;
}