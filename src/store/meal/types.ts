export interface IMeal {
    id: string;
    name: string;
    author: string;
    imgUrl: string;
    liked: number;
    saved: number;
}

export interface errorResponse {
    message: string;
}
