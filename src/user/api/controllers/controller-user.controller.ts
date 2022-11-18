import { Controller, Get } from "@nestjs/common";
import { UniqueEntityID } from "src/shared/domain/unique-entity-id";
import { User, UserProps } from "src/user/domain/aggregate/user";

@Controller("controller-user")
export class ControllerContextController {
    @Get()
    getHello(): string {
        const userProps: UserProps = {
            username: "test",
            password: "1234",
            email: "",
            isEmailVerified: false,
            isAdminUser: false,
            accessToken: "",
            refreshToken: "",
            isDeleted: false,
            lastLogin: new Date(),
            createdDate: new Date(),
        };
        const user = User.create(userProps, new UniqueEntityID());
        console.log(user);
        return "Hello World!";
    }
}
