
import styles from './cardRender.module.css';

import {Category2} from "../../tabs/tabs";
import {FC} from "react";

const CardRender:FC =() => {
    return (
        <div className={styles.tabContent}>
            <Category2 />
            <Category2 />
            <Category2 />
            <Category2 />
            <Category2 />
            <Category2 />
            <Category2 />
            <Category2 />
        </div>
    );
}

export default CardRender;