
import styles from './login.module.css'
import LoginForm from "../../../components/auth/loginForm/loginForm";
import {Link} from "react-router-dom";



function Login(props) {
    async function submit(data){

    }
    return (
        <>
            {/*{user.status === 'error' && <CustomAlert message={user.error} duration={2000} deps={user.status}/>}*/}
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.header}>
                        <span className={styles.titleBlock}>
                           <h1 className={styles.title}>Welcome Back To</h1>
                            <span className={styles.boldTitle}>CooksCorner</span>
                        </span>


                    </div>
                    <div className={styles.registerContainer}>
                        <LoginForm submit={submit}/>
                        <span className={styles.goRegister}>
                            I don’t have an account?
                           <Link to={'/register'}>
                               Sign Up Now
                            </Link>
                        </span>

                    </div>
                </div>
            </div>
        </>

    );
}

export default Login;