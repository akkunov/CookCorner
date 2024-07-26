import {FC} from 'react';
import styles from  './userProfileImg.module.css'

interface userProfileProps{
    img?:string | null;
    className?: string;
}
const UserProfileImg:FC<userProfileProps> = (props) =>  {
    const {className} = props
    return (
        <div className={`${className}`}>
            <img src="https://th.bing.com/th/id/OIP.rVNUaJACf_2NiRKAvhFWeAHaLH?rs=1&pid=ImgDetMain" alt="user img" className={styles.img}/>
        </div>

    );
}

export default UserProfileImg;