import React from 'react';
import styles from './styles.module.scss';

const categories = [
    {
        title: 'Arts & Culture',
        slug: 'arts-culture',
    },
    {
        title: 'Non-Profits',
        slug: 'non-profits',
    },
    {
        title: 'Publishing & Education',
        slug: 'publishing-higher-education',
    },
    {
        title: 'Sports',
        slug: 'sports',
    },
    {
        title: 'Wellness',
        slug: 'wellness',
    },
];

const Filters = ({ filterHandler }) => {
    return (
        <ul className={styles.filter__container}>
            <li key='all'>
                <button
                    className={true ? styles.active : ""}
                    onClick={filterHandler}
                >
                    All
                </button>
            </li>
            {categories.map(category => {
                return (
                    <li key={category.slug}>
                        <button onClick={filterHandler}>
                            {category.title}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default Filters;
