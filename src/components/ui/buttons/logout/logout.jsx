import React from 'react';
import styles from './logout.module.css'
import {useNavigate} from "react-router-dom";
import {useActions} from "../../../../hook/useActions.jsx";
function Logout(props) {
    const navigate = useNavigate();
    const {logout} = useActions()

    function logoutHandler(){
        logout();
        navigate('/login')
    }
    return (
        <button className={styles.logout} onClick={logoutHandler}>
            Выйти
        </button>
    );
}

export default Logout;