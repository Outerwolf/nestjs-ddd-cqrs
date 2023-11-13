export class UserCreateCommand {
    constructor(
        public readonly username: string,
        public readonly password: string,
        public readonly role: string,
    ){}
}