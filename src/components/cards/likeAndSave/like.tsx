import styles from "./like.module.css";
import {FC} from "react";
import {GoHeart} from "react-icons/go";
import {TbBookmark} from "react-icons/tb";
import {IMeal} from "../mealCard/mealCard";
type ILike = Pick<IMeal, 'liked' | 'saved'>
const Like:FC<ILike> = ({liked,saved}) => {
    return(
        <div className={styles.optionInfo}>
            <GoHeart style={{width: 15, height: 15}}/>
            <span>{liked}</span>
            <TbBookmark style={{width: 15, height: 15}} />
            <span>{saved}</span>
        </div>
    )
}
export default Like