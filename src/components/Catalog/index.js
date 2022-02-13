import React from 'react';
import CatalogItem from '../CatalogItem';
import styles from './styles.module.scss';

const Catalog = ({ data, fetchError, isLoading }) => {
    return (
        <section className={styles.catalog__container}>
            {data.length > 0 ? (
                data.map(caseStudy => {
                    return (
                        <CatalogItem key={caseStudy.id} caseStudy={caseStudy} />
                    );
                })
            ) : (
                <p className={styles.catalog__empty}>
                    No case studies found
                </p>
            )}
        </section>
    );
};

export default Catalog;
