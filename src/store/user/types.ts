import {IMeal} from "../../global";

export interface ILogin {
    username: string;
    password: string;
}

export interface ILoginResponse {
    token: string;
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

