import {$auth} from "../../api/auth";
import {AxiosResponse} from "axios";
import {IMeal} from "./types";

export class MealService {
    static fetchMeals = async (): Promise<AxiosResponse<IMeal[]>> => $auth.get('/meals');

    static searchMeals = async (query: string): Promise<AxiosResponse<IMeal[]>> => $auth.get(`/meals/search?query=${query}`);

    static searchByAuthor = async (author: string): Promise<AxiosResponse<IMeal[]>> => $auth.get(`/meals/author?name=${author}`);
}