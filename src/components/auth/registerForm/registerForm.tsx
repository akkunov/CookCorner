import {FC, useState} from 'react';
import { useForm } from 'react-hook-form';
import styles from './registerForm.module.css';
import {CiUser} from "react-icons/ci";
import {IRegister} from "../index";
import Input from "../../ui/Input";
import {MdOutlineAlternateEmail} from "react-icons/md";

interface IRegisterForm {
    submit : (data) => void
}
interface ICriteria {
    length: boolean,
    uppercase: boolean,
    lowercase: boolean,
    number: boolean,
    specialChar: boolean,
}


const  RegisterForm:FC<IRegisterForm> = ({submit}) =>  {
    const { register, handleSubmit, formState: { errors }, setError } = useForm<IRegister>({
        mode: "onChange"
    });

    const [criteria, setCriteria] = useState<object ,ICriteria>({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        specialChar: false,
    });

    const validatePassword = (password) => {
        const length = password.length >= 8 && password.length <= 15;
        const uppercase = /[A-Z]/.test(password);
        const lowercase = /[a-z]/.test(password);
        const number = /[0-9]/.test(password);
        const specialChar = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/.test(password);

        setCriteria({
            length,
            uppercase,
            lowercase,
            number,
            specialChar,
        });
        return length && uppercase && lowercase && number && specialChar;
    };

    // Обработчик отправки формы
    const onSubmit = async data => {
        if (data.password !== data.repeatPassword) {
            setError('repeatPassword', { type: 'manual', message: 'Пароли не совпадают' });
            return;
        }
        submit(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container}>
                <Input
                    type="email"
                    register={register('gmail', { required: "Поле обязательно" })}
                    className={styles.email}
                    placeholder={'Введи адрес почты'}
                    icon={<CiUser/>}
                />

                {errors.gmail && <p className={styles.error}>{errors.gmail.message}</p>}
                <Input
                    type="text"
                    register={register('name', {
                            required: "Поле обязательно",
                            pattern: {
                                value: /^[A-Za-z]+$/,
                                message: 'Только латинские буквы'
                            }
                        })}
                    className={styles.login}
                    placeholder={'Придумай логин'}
                    icon={<MdOutlineAlternateEmail />}
                />
                {errors.name && <p className={styles.error}>{errors.name.message}</p>}

                <Input
                    type="password"
                    register={register('password', {
                        required: "Поле обязательно",
                        validate: validatePassword
                    })}

                    className={styles.password}
                    placeholder={'Создай пароль'}
                />
                <ol>
                    <li className={criteria.length ? styles.success : ''}>От 8 до 15 символов</li>
                    <li className={criteria.uppercase ? styles.success : ''}>Строчные и прописные буквы</li>
                    <li className={criteria.number ? styles.success : ''}>Минимум 1 цифра</li>
                    <li className={criteria.specialChar ? styles.success : ''}>Минимум 1 спецсимвол (!, ", #, $...)</li>
                </ol>

                <Input
                    type="password"
                    register={ register('repeatPassword', { required: "Поле обязательно" })}

                    className={styles.password}
                    placeholder={"Повтори пароль"}
                />
                {errors.repeatPassword && <p className={styles.error}>{errors.repeatPassword.message}</p>}

                <input
                    type="submit"
                    value={'Sign Up'}
                    className={styles.submit}
                />
            </div>
        </form>
    );
}

export default RegisterForm;
