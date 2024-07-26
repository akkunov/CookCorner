import {FC} from "react";
import styles from "./userHeaderInfo.module.css";
interface userHeaderInfoProps{
    recipe?: number | string;
    followers?: number | string;
    following?: number | string;
}
const

    UserHeaderInfo :FC<userHeaderInfoProps> = () => {

    return (
        <div className={styles.userFollowers}>
            <div className={styles.userFollowersContainer}>
                <span className={styles.userFollowersCount}>29</span>
                <span className={styles.userFollowersT}>Recipe</span>
            </div>
            <div className={styles.userFollowersContainer}>
                <span className={styles.userFollowersCount}>144</span>
                <span className={styles.userFollowersT}>Followers</span>
            </div>
            <div className={styles.userFollowersContainer}>
                <span className={styles.userFollowersCount}>100</span>
                <span className={styles.userFollowersT}>Following</span>
            </div>
        </div>
    )
}

export default UserHeaderInfo