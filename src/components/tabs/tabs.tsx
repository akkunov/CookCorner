import { NavLink, Outlet } from 'react-router-dom';
import styles from './tabs.module.css';
import {FC} from "react";
import MealCard from "../cards/mealCard/mealCard";


export const Category1 = () => {
    return <div>Content for Category 1</div>;
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
    const activeClass = ({isActive}: {isActive: boolean}):string => isActive ? styles.activeTab : styles.tab
    return (
        <div className={styles.tabsContainer}>
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
