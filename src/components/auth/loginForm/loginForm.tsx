import {FC} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import styles from './loginForm.module.css';
import {ILogin} from "../../../global";

interface ILoginForm{
    submit: (data:ILogin) => void;
}
const LoginForm :FC<ILoginForm> = ({submit}) =>  {
    const { register, handleSubmit, formState:{errors} } = useForm <ILogin> ({
        mode: "onChange"
    });


    const onSubmit:SubmitHandler<ILogin> = data => {
        submit(data)
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container}>
                <label htmlFor={"gmail"} className={styles.label}>Gmail</label>
                <input
                    id={"gmail"}
                    type="email"
                    {...register('gmail',
                        {required: "Поле обязательно",})}
                    className={styles.login}
                    placeholder={'Введи туда-сюда логин'}
                />
                {errors.gmail && <p className={styles.error}>{errors.gmail.message}</p>}'
                <label htmlFor={"password"}
                       className={styles.label}>Password</label>
                <input
                    id={'password'}
                    type="password"
                    {...register('password', {
                        required: "Поле обязательно",
                    })}
                    className={styles.password}
                    placeholder={'Пароль (тоже введи)'}
                />
                {errors.password && <p className={styles.error}>{errors.password.message}</p>}

                <input
                    type="submit"
                    value={'Войти'}
                    className={styles.submit}
                />
            </div>
        </form>

        </>

    );
}

export default LoginForm;
