import React from 'react'
import HeaderComponent from '../../Components/HeaderComponent';
import PendingCourseSlider from '../../Components/PendingCourseSlider';
import Sidebar from '../../Components/Sidebar'
import styles from './styles.module.css';
export default function Dashboard() {
    return (
        <div className={styles.Dashboard}>
            <div>
                <Sidebar />     
            </div>
            <div className={styles.header}>
                <HeaderComponent />
                <PendingCourseSlider />
            </div>
        </div>
    )
}
