import { Controller, Get } from "@nestjs/common";
import { UniqueEntityID } from "src/shared/domain/unique-entity-id";
import { User, UserProps } from "src/user/domain/aggregate/user";

@Controller("user")
export class UserController {
    @Get()
    getHello() {
        const userProps: UserProps = {
            username: "test",
            password: "1234",
            email: "",
            isAdminUser: false,
        };
        const user = User.create(userProps);
        return user;
    }
}
