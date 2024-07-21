import React from 'react';
import styles from './register.module.css'
import {Link} from "react-router-dom";
import RegisterForm from "../../../components/auth/registerForm/registerForm";



function Register(props) {


    async function submit(data){

    }
    return (
        <>
            {/*{user.status === 'error' && <CustomAlert message={user.error} duration={2000} deps={user.status}/>}*/}
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.header}>
                        <span className={styles.titleBlock}>
                           <h1 className={styles.title}>Sign up for delicious </h1>
                            <span className={styles.boldTitle}>Discoveries</span>
                        </span>
                    </div>
                    <div className={styles.registerContainer}>
                        <RegisterForm submit={submit}/>
                        <span className={styles.goRegister}>
                            Already have an account?
                           <Link to={'/register'}>
                               Sign In Now
                            </Link>
                        </span>

                    </div>
                </div>
            </div>
        </>

    );
}

export default Register;