import  {FC,} from 'react';
import styles from './mealCard.module.css'
import {Link} from "react-router-dom";
import Like from "../likeAndSave/like";



export interface IMeal {
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
        <Link to={`/detail/${id}`}>
            <div className={styles.wrapper}>
                <img src={imgUrl} alt="img" className={styles.img}/>
                <div className={styles.cardDescription}>
                    <span className={styles.cardName}>{name}</span>
                    <span className={styles.cardAuthor}>by {author}</span>
                    <Like liked={liked} saved={saved} />
                </div>
            </div>
        </Link>

    );
}

export default MealCard;