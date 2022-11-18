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

    private email: string;
    private username: string;
    private password: string;
    private role: string;
    private isAdminUser?: boolean;
    private accessToken?: string;
    private refreshToken?: string;
    private isDeleted?: boolean;
    private lastLogin?: Date;
    private createdDate: Date;
    private modifiedDate: Date;

    private constructor(props: UserProps, id?: UniqueEntityID) {
        super();
        this.id = id ? id : new UniqueEntityID();
        this.email = props.email;
        this.username = props.username;
        this.password = props.password;
        this.isAdminUser = props.isAdminUser;
        this.accessToken = props.accessToken;
        this.refreshToken = props.refreshToken;
        this.isDeleted = props.isDeleted;
        this.lastLogin = props.lastLogin;
        this.createdDate = props.createdDate ? props.createdDate : undefined;
        this.modifiedDate = props.modifiedDate;
    }

    getID(): string {
        return this.id.toString();
    }

    getEmail(): string {
        return this.email;
    }

    getUsername(): string {
        return this.username;
    }
    getUserPassword(): string {
        return this.password;
    }
    setPassword(password: string): void {
        this.password = password;
    }
    getIsAdminUser() {
        return this.isAdminUser;
    }
    setIsAdminUser(isAdminUser: boolean): void {
        this.isAdminUser = isAdminUser;
    }
    getAccessToken(): string {
        return this.accessToken;
    }
    setAccessToken(accessToken: string): void {
        this.accessToken = accessToken;
    }
    getRefreshToken(): string {
        return this.refreshToken;
    }
    setRefreshToken(refreshToken: string): void {
        this.refreshToken = refreshToken;
    }
    getIsDeleted(): boolean {
        return this.isDeleted;
    }
    setIsDeleted(isDeleted: boolean): void {
        this.isDeleted = isDeleted;
    }
    getLastLogin(): Date {
        return this.lastLogin;
    }
    setLastLogin(lastLogin: Date): void {
        this.lastLogin = lastLogin;
    }

    getCreatedDate(): Date {
        return this.createdDate;
    }
    getModifedDate(): Date {
        return this.modifiedDate;
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
