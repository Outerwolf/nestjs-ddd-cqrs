import { AggregateRoot } from "@nestjs/cqrs";
import { UniqueEntityID } from "src/shared/domain/unique-entity-id";

export interface UserProps {
    email: string;
    username: string;
    password: string;
    role?: string;
    isAdminUser?: boolean;
    accessToken?: string;
    refreshToken?: string;
    isDeleted?: boolean;
    lastLogin?: Date;
    createdDate?: Date;
    modifiedDate?: Date;
}

export class User extends AggregateRoot<UserProps> {
    private readonly id: UniqueEntityID;

    public readonly props: UserProps;

    private constructor(props: UserProps, id?: UniqueEntityID) {
        super();
        this.id = id ? id : new UniqueEntityID();
        this.props = props;
    }

    getID(): string {
        return this.id.toString();
    }

    getEmail(): string {
        return this.props.email;
    }

    getUsername(): string {
        return this.props.username;
    }
    getUserPassword(): string {
        return this.props.password;
    }
    setPassword(password: string): void {
        this.props.password = password;
        this.props.modifiedDate = new Date();
    }
    getIsAdminUser() {
        return this.props.isAdminUser;
    }
    setIsAdminUser(isAdminUser: boolean): void {
        this.props.isAdminUser = isAdminUser;
        this.props.modifiedDate = new Date();
    }
    getAccessToken(): string {
        return this.props.accessToken;
    }
    setAccessToken(accessToken: string): void {
        this.props.accessToken = accessToken;
        this.props.modifiedDate = new Date();
    }
    getRefreshToken(): string {
        return this.props.refreshToken;
    }
    setRefreshToken(refreshToken: string): void {
        this.props.refreshToken = refreshToken;
        this.props.modifiedDate = new Date();
    }
    getIsDeleted(): boolean {
        return this.props.isDeleted;
    }
    setIsDeleted(isDeleted: boolean): void {
        this.props.isDeleted = isDeleted;
        this.props.modifiedDate = new Date();
    }
    getLastLogin(): Date {
        return this.props.lastLogin;
    }
    setLastLogin(lastLogin: Date): void {
        this.props.lastLogin = lastLogin;
        this.props.modifiedDate = new Date();
    }

    getCreatedDate(): Date {
        return this.props.createdDate;
    }
    getModifedDate(): Date {
        return this.props.modifiedDate;
    }

    static create(props: UserProps, id?: UniqueEntityID): User {
        const isNewUser = !Boolean(id);
        if (isNewUser) {
            props.createdDate = new Date();
            console.log("Creating new user");
        }
        props.modifiedDate = new Date();
        const user = new User({ ...props }, id);
        return user;
    }
}
