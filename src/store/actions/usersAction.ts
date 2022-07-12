import * as actionTypes from "./actionTypes";

export function getAllUser(user: IUser) {
    const action: UserAction = {
        type: actionTypes.GET_ALL_USER,
        user,
    };
}
