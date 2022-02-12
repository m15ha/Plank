import React from 'react';
import styles from './styles.module.scss';
import asset1 from '../../assets/asset1.png';
import asset2 from '../../assets/asset2.png';
import asset3 from '../../assets/asset3.png';

const Title = ({ children }) => {
    return (
        <>
            <div className={styles.layout__general}>
                <img
                    className={styles.layout__decoration1}
                    src={asset1}
                    alt='Background decoration'
                />
                <img
                    className={styles.layout__decoration2}
                    src={asset2}
                    alt='Background decoration'
                />
                <img
                    className={styles.layout__decoration3}
                    src={asset3}
                    alt='Background decoration'
                />
                <div className={styles.layout__container}>{children}</div>
            </div>
        </>
    );
};

export default Title;
