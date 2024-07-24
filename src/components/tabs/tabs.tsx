import {Navigate, NavLink, Outlet, useNavigate} from 'react-router-dom';
import styles from './tabs.module.css';
import {FC, useEffect} from "react";
import MealCard from "../cards/mealCard/mealCard";
import ShadowMealCard from "../cards/shadowMealCard/shadowMealCard";


export const Category1 = () => {
    return <ShadowMealCard
            imgUrl={'https://th.bing.com/th/id/R.05119a5f3615feb29fd0f480ea5c68d3?rik=vKVPgLEx%2bHRzdA&pid=ImgRaw&r=0'}
            id={"1"}
            author={"Asan Uson"}
            liked={112}
            name={"Egg Omlet"}
            saved={120}
    />;
};


export const Category2 = () => {
    return (
        <>
            <MealCard
                id={"1"}
                author={"Asan Uson"}
                imgUrl={'https://th.bing.com/th/id/OIP.PzDXAFFCuFZEDK8XQxBkTwHaFK?rs=1&pid=ImgDetMain'}
                liked={112}
                name={"Egg Omlet"}
                saved={120}
            />
            <MealCard
                id={"1"}
                author={"Asan Uson"}
                imgUrl={'https://th.bing.com/th/id/OIP.PzDXAFFCuFZEDK8XQxBkTwHaFK?rs=1&pid=ImgDetMain'}
                liked={112}
                name={"Egg Omlet"}
                saved={120}
            />
            <MealCard
                id={"1"}
                author={"Asan Uson"}
                imgUrl={'https://th.bing.com/th/id/OIP.PzDXAFFCuFZEDK8XQxBkTwHaFK?rs=1&pid=ImgDetMain'}
                liked={112}
                name={"Egg Omlet"}
                saved={120}
            />
            <MealCard
                id={"1"}
                author={"Asan Uson"}
                imgUrl={'https://th.bing.com/th/id/OIP.PzDXAFFCuFZEDK8XQxBkTwHaFK?rs=1&pid=ImgDetMain'}
                liked={112}
                name={"Egg Omlet"}
                saved={120}
            />
        </>
        )
}


export const Category3 = () => {
    return <MealCard
        id={"1"}
        author={"Asan Uson"}
        imgUrl={'https://th.bing.com/th/id/R.4c3e961aacfa25b22534ecd076655434?rik=SQhPHsjTmdd2zg&pid=ImgRaw&r=0 '}
        liked={112}
        name={"Egg Omlet"}
        saved={120}
    />
}




const Tabs:FC = () => {
    const navigate = useNavigate()
    const activeClass = ({isActive}: {isActive: boolean}):string => isActive ? styles.activeTab : styles.tab;
    useEffect(() => {
        navigate('breakfast')
    },[])
    return (
        <div className={styles.tabsContainer}>
            <span className={styles.tabUserName}>Hi, Sarthak. UI Designer & Cook</span>
            <h2 className={styles.tabsTitle}>Category</h2>
            <nav className={styles.tabsNav}>
                <NavLink
                    to="breakfast"
                    className={activeClass}
                >
                    Breakfast
                </NavLink>
                <NavLink
                    to="lunch"
                    className={activeClass}
                >
                    Lunch
                </NavLink>
                <NavLink
                    to="dinner"
                    className={activeClass}
                >
                    Dinner
                </NavLink>
            </nav>
            <div className={styles.tabContent}>
                <Outlet />
            </div>
        </div>
    );
};

export default Tabs;
