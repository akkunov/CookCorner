import {useNavigate} from "react-router-dom";
import {FC, ReactNode, useEffect} from "react";
import {useAppSelector} from "../hook/reduxHooks";

interface IProps{
    children:ReactNode;
}

const WithAuth:FC<IProps> = ({ children }) => {
    const {user} = useAppSelector((state) => state);

    const isAuth = !!user?.user?.user.id && !!user?.user?.accessToken
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, [isAuth, navigate]);

    if (!isAuth) {
        return
    }

    return children;
}


export default WithAuth;