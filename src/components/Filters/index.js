import React, { useState } from 'react';
import styles from './styles.module.scss';

const Filters = ({
    filterHandler,
    data,
    fetchError,
    isLoading,
    selectedFilter,
}) => {
    const { categories } = data; 

    return (
        <ul className={styles.filter__container}>
            <li key='all'>
                <button
                    className={selectedFilter === 'all' ? styles.active : ''}
                    onClick={() => filterHandler('all')}
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
                                onClick={() => filterHandler(category.slug)}
                            >
                                {category.title}
                            </button>
                        </li>
                    );
                })}
        </ul>
    );
};

export default Filters;
