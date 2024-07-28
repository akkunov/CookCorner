import {FC, lazy,Suspense} from 'react';
import styles from './search.module.css';
const SearchToggler  = lazy(() => import ("../../components/serachToggle/toggler"))

const CardRender = lazy(() => import ("../../components/cards/renderCards/cardRender"))


const Search:FC = () =>  {
    return (
        <div className={styles.wrapper}>
                <h1 className={styles.title}>What to eat today?</h1>
                <Suspense fallback={'loading ...'}>
                    <SearchToggler />
                </Suspense>

                <span className={styles.result}>Results</span>
            <div className={styles.resultContent}>
                <Suspense fallback={'loading ...'}>
                    <CardRender />
                </Suspense>
            </div>
        </div>

    );
}

export default Search;