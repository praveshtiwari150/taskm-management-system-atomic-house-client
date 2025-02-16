import { SIGN_IN, SIGN_OUT, AuthActionTypes } from "../types/authTypes";

interface IAuthState {
    isAuthenticated: boolean,
    token: string | null
}

const initinalState: IAuthState = {
    isAuthenticated: false,
    token: null
}

export const authReducer = (state = initinalState, action: AuthActionTypes): IAuthState => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload.token
            };
        case SIGN_OUT:
            return {
                ...state,
                isAuthenticated: false,
                token: null
            }
        default:
            return state;
    }
}

