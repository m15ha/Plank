import React from 'react';
import styles from './styles.module.scss';

const Title = ({ children }) => {
    return (
        <>
            <div className={styles.layout__general}>
                <div className={styles.layout__container}>{children}</div>
            </div>
        </>
    );
};

export default Title;
