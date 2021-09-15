import React from 'react'
import styles from './styles.module.css';

export default function CourseProgress() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.courseNumber}>4</div>
            <div className={styles.courseText}>Course in Progress</div>
        </div>
    )
}
