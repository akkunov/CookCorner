import {ILogin, ILoginResponse} from "./types";
import {$auth} from "../../api/auth";
import {AxiosResponse} from 'axios';

export class UserService{
    static login = async (data:ILogin): Promise<AxiosResponse<ILoginResponse>> => $auth.post(`login`, data);
}