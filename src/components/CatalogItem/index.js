import React from 'react';
import styles from './styles.module.scss';
import defaultImg from '../../assets/img/default.png';
import arrowIcon from '../../assets/arrow-icon.svg';

const CatalogItem = ({ caseStudy }) => {
    const { id, title, link, thumbnail, excerpt, categories } = caseStudy;

    const img = thumbnail ? thumbnail : defaultImg;

    return (
        <div className={styles.item__container}>
            <div className={styles.item__image}>
                <img className={styles.item__ibg} src={img} alt={title} />
            </div>
            <div className={styles.item__content}>
                <div className={styles.content__category}>
                    {categories[0].title}
                </div>
                <h2 className={styles.content__title}>{title}</h2>
                <p className={styles.content__text}>{excerpt}</p>
                <a href='/' className={styles.content__button}>
                    View Case Study
                    <img
                        className={styles.content__svg}
                        src={arrowIcon}
                        alt='Button arrow'
                    />
                </a>
                {/* <a href='/' className={styles.content__button}>
                    View Case Study
                </a> */}
            </div>
        </div>
    );
};

export default CatalogItem;
