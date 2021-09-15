import React from 'react'
import styles from './styles.module.css';
import image from '../../Assets/Images/pic.svg'


export default function HeaderComponent() {
    return (
        <div className={styles.headerComponent}>
           <div className={styles.headerTextContainer}>
                <div className={styles.headerText}>
                        Hello Josh!
                </div>
                <div className={styles.headerDesc}>
                    It's good to see you again
                </div>
           </div>
           <img  className={styles.helloImg} src={image} alt='' />
        </div>
    )
}
