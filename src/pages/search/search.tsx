import {FC} from 'react';
import styles from './search.module.css';
import SearchToggler from "../../components/serachToggle/toggler";

import CardRender from "../../components/cards/renderCards/cardRender";


const Search:FC = () =>  {
    return (
        <div className={styles.wrapper}>
                <h1 className={styles.title}>What to eat today?</h1>
                <SearchToggler />
                <span className={styles.result}>Results</span>
            <div className={styles.resultContent}>
                <CardRender />
            </div>
        </div>

    );
}

export default Search;