import React from 'react'
import styles from './styles.module.css';
import book from '../../Assets/Images/book.svg';

export default function LearnMoreComponent() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.textContainer}>
                <div className={styles.titleText}>
                    Learn even more
                </div>
                <div className={styles.textDesc}>
                    Unlock Premium features only on $9.99 per month.
                </div>
                <button className={styles.button}>
                    Go Premium
                </button>
            </div>
            <div className={styles.bookImage}>
                <img src={book} alt='' />
            </div>
        </div>
    )
}
