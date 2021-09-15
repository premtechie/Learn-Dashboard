import React from 'react'
import styles from './styles.module.css';



export default function HeaderComponent() {
    return (
        <div className={styles.headerComponent}>
           <div className={styles.headerText}>
                Hello Josh!
           </div>
           <div className={styles.headerDesc}>
               It's good to see you again
           </div>
        </div>
    )
}
