import {FC} from "react";
import  styles from './author.module.css';
import UserProfileImg from "../../../components/profileC/userProfileImg/userProfileImg";
import UserHeaderInfo from "../../../components/profileC/userHeaderInfo/userHeaderInfo";
import CardRender from "../../../components/cards/renderCards/cardRender";


const Author:FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.profileContainer}>
                <UserProfileImg  className={styles.profileImg}/>
                    <div className={styles.userName}>Sarthak Ranjan Hota</div>
                    <UserHeaderInfo />
                    <div className={styles.userBio}>I'm a passionate chef who loves creating delicious dishes with flair.</div>
                    <button className={styles.followBtn}>Follow</button>
            </div>
            <div className={styles.contentContainer}>
                <CardRender />
            </div>

        </div>
    )
}
export default Author