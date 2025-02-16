import { AuthActionTypes, SIGN_IN, SIGN_OUT } from "../types/authTypes";

export const signIn = (token: string): AuthActionTypes => ({
    type: SIGN_IN,
    payload: { token }
});

export const signOut = (): AuthActionTypes => ({
    type: SIGN_OUT
});