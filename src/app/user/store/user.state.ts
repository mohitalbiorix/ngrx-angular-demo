import { User } from "../model/user.model";

export interface UserState {
    readonly userStore: User[];
}