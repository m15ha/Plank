import { motion } from 'framer-motion';
import React from 'react';
import styles from './styles.module.scss';

const Title = () => {
    return (
        <>
            <motion.h1
                initial={{ x: -1000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className={styles.title__main}
            >
                work
            </motion.h1>
        </>
    );
};

export default Title;
