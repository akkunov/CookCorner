import {IMeal} from "../meal/types";


export interface ILogin {
    gmail: string;
    password: string;
}

export interface ILoginResponse {
    accessToken: string;
    refreshToken: string;
    user: {
        id: number;
        name: string;
        email: string;
    };
}

export interface IAuthor{
    name:string;
    id:string;
    gmail:string;
    phone?:string|undefined;
    recipe?: IMeal[];
}
export interface errorResponse {
    message: string;
}

