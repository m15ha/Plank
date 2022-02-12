import React from 'react';
import styles from './styles.module.scss';

const Filters = ({ filterHandler, data, fetchError, isLoading }) => {

    const {
       categories,
    } = data;
       console.log("🚀 ~ file: index.js ~ line 9 ~ Filters ~ categories", categories)
    return (
        <ul className={styles.filter__container}>
            <li key='all'>
                <button
                    className={true ? styles.active : ''}
                    onClick={filterHandler}
                >
                    All
                </button>
            </li>
            {categories && categories.map(category => {
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
