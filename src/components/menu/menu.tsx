import { FC } from 'react';
import Logo from "../logo/logo";
import { NavLink } from "react-router-dom";
import home from '../../assets/icon/home.svg';
import styles from './menu.module.css';
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";



const Menu: FC = () => {
    const  activeClass  = ({isActive}:{isActive:boolean}):string =>  isActive ?  styles.active  : ""

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Logo />
                <span className={styles.divident}></span>
            </div>
            <ol className={styles.navBlock}>
                <NavLink to="/main"  className={activeClass}>
                    <li className={styles.navItem}>
                        <img src={home} alt="home icon" />
                    </li>
                </NavLink>
                <NavLink to="/search" className={activeClass}>
                    <li className={styles.navItem}>
                        <CiSearch />
                    </li>
                </NavLink>
                <NavLink to="/profile" className={activeClass}>
                    <li className={styles.navItem}>
                        <CgProfile />
                    </li>
                </NavLink>
            </ol>
            <button className={styles.logout}>
                <FiLogOut />
            </button>
        </div>
    );
};

export default Menu;
