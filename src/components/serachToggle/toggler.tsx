import { useState } from 'react';
import styles from './toggler.module.css';

const SearchToggler: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'chef' | 'recepts'>('chef');

    const handleTabChange = (tab: 'chef' | 'recepts') => {
        setActiveTab(tab);
    };

    return (
        <div className={styles.container}>
            <div className={styles.toggleButtons}>
                <div
                    className={styles.indicator}
                    style={{
                        transform: activeTab === 'chef' ? 'translateX(0)' : 'translateX(22rem)',
                    }}
                ></div>
                <button
                    className={activeTab === 'chef' ? styles.active : styles.inactive}
                    onClick={() => handleTabChange('chef')}
                >
                    Chef
                </button>
                <button
                    className={activeTab === 'recepts' ? styles.active : styles.inactive}
                    onClick={() => handleTabChange('recepts')}
                >
                    Recepts
                </button>
            </div>


            <input
                type="text"
                placeholder={`Search ${activeTab}`}
                className={styles.searchInput}
            />
        </div>
    );
};

export default SearchToggler;
