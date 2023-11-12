import {UserSecurity} from "./user-security";
import {UserSecurityId} from "./user-security-id";

export const USER_SECURITY_REPOSITORY = 'USER_SECURITY_REPOSITORY';
export interface UserSecurityRepository {
    save(userSecurity: UserSecurity): Promise<void>
    findById(id: UserSecurityId): Promise<UserSecurity>
}