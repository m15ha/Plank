import React from 'react';
import CatalogItem from '../CatalogItem';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';

const Catalog = ({ data, fetchError, isLoading }) => {
    const listVariants = {
        visible: i => ({
            opacity: 1,
            transition: {
                delay: i * 0.08,
            },
        }),
        hidden: { opacity: 0 },
    };

    return (
        <motion.section className={styles.catalog__container}>
            {data.length > 0 ? (
                data.map((caseStudy, i) => {
                    return (
                        <motion.div
                            key={caseStudy.id}
                            variants={listVariants}
                            initial='hidden'
                            animate='visible'
                            custom={i}
                        >
                            <CatalogItem
                                key={caseStudy.id}
                                caseStudy={caseStudy}
                            />
                        </motion.div>
                    );
                })
            ) : (
                <p className={styles.catalog__empty}>No case studies found</p>
            )}
        </motion.section>
    );
};

export default Catalog;
