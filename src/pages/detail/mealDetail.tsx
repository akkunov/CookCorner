import  {FC} from 'react';
import styles from './mealDetail.module.css';
import {GoHeart} from "react-icons/go";
import {TbBookmark} from "react-icons/tb";


const MealDetail:FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.heroContainer}>
                <img src="https://th.bing.com/th/id/OIP.LEOA5xYfDymvhql3HXqRHQHaE8?rs=1&pid=ImgDetMain" alt=" meal images"/>
            </div>
            <div className={styles.contentContainer}>
                <h1 className={styles.mealName}>Ainsley’s Jerk Chicken</h1>
                <span className={styles.authorName}>by Ainsley Harriott</span>
                <span className={styles.mealTime}>20-30 min</span>
                <div className={styles.mealType}>Easy</div>
                <div className={styles.mealLikesContainer}>
                    <div className={styles.mealLikesItem}>
                        <GoHeart style={{width: 25, height: 25}}/>
                        <span>12 likes</span>
                    </div>
                    <div  className={styles.mealLikesItem}>
                        <TbBookmark style={{width: 25, height: 25}} />
                        <span>12</span>
                    </div>
                </div>
                <div className={styles.recipeContainer}>
                    <span className={styles.desc}>
                        Description
                    </span>
                    <p className={styles.p}>
                        You pick up your palette knife and then work that into.
                        Give your meat a good old rub.
                        That’s it, nice and hot, hot and spicy meat.
                        He-he boy...You pick up your palette knife and then work that into.
                        Give your meat a good old rub. That’s it, nice and hot, hot and spicy meat.
                        He-he boy...You pick up your palette knife and then work that into. Give your
                        meat a good old rub. That’s it, nice and hot, hot and spicy meat. He-he boy...
                    </p>
                    <div className={styles.ingredients}>
                        <div className={styles.ingredientTitle}>Ingredients</div>
                        <div className={styles.ingredient}>
                            <span>Chicken</span>
                            <span>1 kg</span>
                        </div>

                        <div className={styles.ingredient}>
                            <span>Chicken</span>
                            <span>1 kg</span>
                        </div>
                        <div className={styles.ingredient}>
                            <span>Chicken</span>
                            <span>1 kg</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MealDetail;