import {UserSecurity} from "./user-security";
import {UserSecurityUsername} from "./user-security-username";
import {UserSecurityId} from "./user-security-id";

export const USER_SECURITY_REPOSITORY = 'USER_SECURITY_REPOSITORY';
export interface UserSecurityRepository {
    save(userSecurity: UserSecurity): Promise<void>
    findByUserName(username: UserSecurityUsername): Promise<UserSecurity>
    delete(id: UserSecurityId): Promise<void>
    update(id: UserSecurityId, userSecurity: UserSecurity): Promise<void>
}