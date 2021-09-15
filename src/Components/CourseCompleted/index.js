import React from 'react'
import styles from './styles.module.css';


export default function CourseCompleted() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.completedNumber}>11</div>
            <div className={styles.completedText}>Course Completed</div>
        </div>
    )
}
