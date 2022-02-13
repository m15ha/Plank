import React, { useState } from 'react';
import styles from './styles.module.scss';
import { ReactComponent as BarsIcon } from '../../assets/bars.svg';
import { ReactComponent as XmarkIcon } from '../../assets/xmark.svg';

const Filters = ({
    filterHandler,
    data,
    fetchError,
    isLoading,
    selectedFilter,
}) => {
    const { categories } = data;
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const handleBurgerClick = () => {
        setIsBurgerOpen(!isBurgerOpen);
    };

    const handleFilterClick = filter => {
        filterHandler(filter);
        setIsBurgerOpen(false);
    };

    return (
        <>
            <div className={styles.filter__burger_container}>
                <BarsIcon onClick={handleBurgerClick} />
            </div>
            <ul
                className={`${styles.filter__container} ${
                    isBurgerOpen ? styles.filter__container_open : ''
                }`}
            >
                <XmarkIcon onClick={() => setIsBurgerOpen(false)} />

                <li key='all'>
                    <button
                        className={
                            selectedFilter === 'all' ? styles.active : ''
                        }
                        onClick={() => handleFilterClick('all')}
                    >
                        All
                    </button>
                </li>
                {categories &&
                    categories.map(category => {
                        return (
                            <li key={category.slug}>
                                <button
                                    className={
                                        selectedFilter === category.slug
                                            ? styles.active
                                            : ''
                                    }
                                    onClick={() =>
                                        handleFilterClick(category.slug)
                                    }
                                >
                                    {category.title}
                                </button>
                            </li>
                        );
                    })}
            </ul>
        </>
    );
};

export default Filters;
