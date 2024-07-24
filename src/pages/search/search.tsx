import {FC} from 'react';
import styles from './search.module.css';
import SearchToggler from "../../components/serachToggle/toggler";
import {Category2} from "../../components/tabs/tabs";


const Search:FC = () =>  {
    return (
        <div className={styles.wrapper}>
                <h1 className={styles.title}>What to eat today?</h1>
                <SearchToggler />
                <span className={styles.result}>Results</span>
            <div className={styles.resultContent}>
                <Category2 />
                <Category2 />
                <Category2 />
            </div>
        </div>

    );
}

export default Search;