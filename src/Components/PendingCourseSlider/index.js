import React from 'react'
import styles from './styles.module.css';
import spain from '../../Assets/Images/spain.png'
import left from '../../Assets/Images/left.svg'
import right from '../../Assets/Images/right.svg'

import { Progress } from 'antd';
import 'antd/dist/antd.css';


export default function PendingCourseSlider() {
    return (
        <div className={styles.mainContainer}>
            <div className = {styles.sliderMain}>
                <img className={styles.icon} src={spain} alt='flag' />
                <div className ={styles.textContainer}>
                    <div className={styles.text1}>
                        Spanish B2
                    </div>
                    <div className={styles.text2}>
                        by Alejandro Velazquez
                    </div>
                </div>
                <Progress style={{marginLeft:'10px',fontSize:'12px',fontWeight:'800'}} type="circle" width='36px' strokeColor='black' percent={83} />
                <button className={styles.continue}>
                    Continue
                </button>
            </div>
            <div className={styles.sliderIconContainer}>
                <div className={styles.arrowBox}>
                    <img className={styles.arrow} src={left} alt=''/>
                </div>
                <div className={styles.arrowBox}>
                    <img className={styles.arrow} src={right} alt=''/>
                </div>
            </div>
        </div>
    )
}
