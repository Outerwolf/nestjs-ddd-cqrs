import { AggregateRoot } from "@nestjs/cqrs";
import { UniqueEntityID } from "src/shared/domain/unique-entity-id";

export interface UserProps {
    email: string;
    username: string;
    password: string;
    role?: string;
    isEmailVerified?: boolean;
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
    private isEmailVerified?: boolean;
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
        this.isEmailVerified = props.isEmailVerified;
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

    setPasword(password: string): void {
        this.password = password;
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
