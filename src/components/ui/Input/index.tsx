import { FC } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import styles from './input.module.css';

interface InputProps {
    type: string;
    register: UseFormRegisterReturn;
    placeholder: string;
    error?: FieldError;
    className?: string;
    icon?: React.ReactNode;
    children?:React.ReactNode;
}

const Input: FC<InputProps> = ({ type, register, placeholder, error, className, icon }) => {
    return (
        <div className={styles.inputContainer}>
            {icon && <div className={styles.icon}>{icon}</div>}
            <input
                type={type}
                {...register}
                className={`${styles.input} ${className}`}
                placeholder={placeholder}
            />
            {error && <p className={styles.error}>{error.message}</p>}
        </div>
    );
};

export default Input;
