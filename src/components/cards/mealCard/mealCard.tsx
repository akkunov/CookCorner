import  {FC,} from 'react';
import styles from './mealCard.module.css'
import {Link} from "react-router-dom";
import likeIcon from '../../../assets/icon/like.svg'
import savedIcon from '../../../assets/icon/saved.svg'


interface IMeal {
    name: string;
    imgUrl:string;
    id: string;
    liked: number;
    saved:number;
    author: string
}

const MealCard:FC<IMeal> = (props) =>  {
    const {imgUrl, name,author,saved,liked,id} = props
    return (
        <Link to={`meals/${id}`}>
            <div className={styles.wrapper}>
                <img src={imgUrl} alt="img" className={styles.img}/>
                <div className={styles.cardDescription}>
                    <span className={styles.cardName}>{name}</span>
                    <span className={styles.cardAuthor}>by {author}</span>
                    <div className={styles.optionInfo}>
                        <img src={likeIcon} alt="like icon"/>
                        <span>{liked}</span>
                        <img src={savedIcon} alt="like icon"/>
                        <span>{saved}</span>
                    </div>
                </div>
            </div>
        </Link>

    );
}

export default MealCard;