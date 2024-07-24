import {FC} from "react";
import styles from './main.module.css';
import Menu from "../../components/menu/menu";
import {Outlet} from 'react-router-dom';


const Root :FC = () => {
    return(
        <div className={styles.wrapper}>
            <Menu />
            <Outlet />
        </div>
    )
}
export default  Root