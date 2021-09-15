import React from 'react'
import styles from './styles.module.css';
import home from '../../Assets/Images/home.svg'
import setting from '../../Assets/Images/setting.svg'
import mail from '../../Assets/Images/mail.svg'
import course from '../../Assets/Images/course.svg'
import signout from '../../Assets/Images/signout.svg'
import head from '../../Assets/Images/userhead.svg';
import body from '../../Assets/Images/userbottom.svg';

export default function Sidebar() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.navList}>
                <div className={styles.logo}>F.</div>
                <div className={styles.navSub}>
                    <div className={styles.iconContainer}>
                        <img className={styles.icon} src={home} />
                    </div>
                    <div className={styles.iconContainer}>
                        <img className={styles.icon} src={course} />
                    </div>
                    <div className={styles.iconContainer2}>
                        <img className={styles.icon1} src={head} />
                        <img className={styles.icon1} src={body} />
                    </div>
                    <div className={styles.iconContainer}>
                        <img className={styles.icon} src={mail} />
                    </div>
                    <div className={styles.iconContainer}>
                        <img className={styles.icon} src={setting} />
                    </div>
                </div>
                <div className={styles.iconContainer3}>
                    <img className={styles.icon} src={signout} />
                </div>
            </div>
        </div>
    )
}
