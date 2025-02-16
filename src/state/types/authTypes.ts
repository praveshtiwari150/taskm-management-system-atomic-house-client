export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export interface ISignInAction{
    type: typeof SIGN_IN;
    payload: { token: string };
}

export interface ISignOutAction{
    type: typeof SIGN_OUT;
}

export type AuthActionTypes = ISignInAction | ISignOutAction;
