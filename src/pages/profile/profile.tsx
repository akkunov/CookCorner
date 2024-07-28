import {FC, lazy,Suspense} from 'react';
import styles from './profile.module.css';
import {NavLink, Outlet} from "react-router-dom";
const UserHeaderInfoLazy = lazy(() => import ("../../components/profileC/userHeaderInfo/userHeaderInfo"));
const UserProfileImg = lazy(() => import ("../../components/profileC/userProfileImg/userProfileImg"));


const Profile:FC = () =>  {
    const  activeClass  = ({isActive}:{isActive:boolean}): string =>  isActive ?  styles.active  : ""
    return (
        <div className={styles.wrapper}>
            <div className={styles.profile}>
                    <div className={styles.profileT}>Profile</div>
                    <div className={styles.profileContainer}>
                        <Suspense fallback={'...loading'}>
                            <UserProfileImg className={styles.profileImgContainer} />
                        </Suspense>

                        <div className={styles.userInfo}>
                            <Suspense fallback={'...loading'}>
                                <UserHeaderInfoLazy />
                            </Suspense>
                            <div className={styles.userName}>Sarthak Ranjan Hota</div>
                            <div className={styles.userBio}>I'm a passionate chef who loves creating delicious dishes with flair.</div>
                            <button className={styles.manageProfile}>Manage Profile</button>
                        </div>
                    </div>
            </div>
            <div className={styles.content}>
                <div className={styles.contentNav}>
                    <NavLink to={'myRecipe'}  className={activeClass}>My recipe</NavLink>
                    <NavLink to={"savedRecipe"} className={activeClass}>Saved recipe</NavLink>
                </div>
                <div className={styles.contentContainer}>
                    <Suspense fallback={'... loading'}>
                        <Outlet />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}

export default Profile;