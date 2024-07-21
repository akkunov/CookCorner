import {FC} from 'react';
import styles from './search.module.css';
import SearchToggler from "../../components/serachToggle/toggler";


const Search:FC = () =>  {
    return (
        <div>
            <SearchToggler />
        </div>
    );
}

export default Search;