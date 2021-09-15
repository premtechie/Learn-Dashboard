import React from 'react'
import Sidebar from '../../Components/Sidebar'
import styles from './styles.module.css';
export default function Dashboard() {
    return (
        <div className={styles.Dashboard}>
            <Sidebar />     
        </div>
    )
}
