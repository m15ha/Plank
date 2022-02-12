import React from 'react';
import styles from './styles.module.scss';

const CatalogItem = ({ caseStudy }) => {
    const { id, title, link, thumbnail, excerpt, categories } = caseStudy;
    return (
        <li className='item__container'>
            <div className='item__ibg'>
                <img className='item__image' src={thumbnail} alt={title} />
            </div>
            <div className='item__content'>
                <div className='item__content-category'>{categories.title}</div>
                <h2 className='item__content-title'>{title}</h2>
                <p className='item__content-text'>{excerpt}</p>
                <button className='item__content-button'></button>
            </div>
        </li>
    );
};

export default CatalogItem;
