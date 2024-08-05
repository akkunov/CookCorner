
export interface IUser {
    name:string;
    id?:string;
    gmail:string;
    password?:string;
    accessToken?: string | undefined;
    refreshToken?:string | undefined;
    phone?:string|undefined;
}

export type IRegister = {
    name:string,
    gmail:string,
    password:string,
    repeatPassword:string,
};

// export type ILogin  =  Pick<IUser, 'gmail' | 'password'>;
//
//
// export interface IMeal {
//     id:string;
//     author: string;
//     authorId: string;
//     name:string;
//     recipe: Array<any>;
//     description: string;
//     time?:string;
//
// }