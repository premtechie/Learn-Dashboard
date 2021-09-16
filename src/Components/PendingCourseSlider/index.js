import React,{useState,useEffect} from 'react'
import styles from './styles.module.css';
import spain from '../../Assets/Images/spain.png'
import left from '../../Assets/Images/left.svg'
import right from '../../Assets/Images/right.svg'
import {pendingCourseList} from './pendingCourseData' 
import { Progress } from 'antd';
import 'antd/dist/antd.css';


export default function PendingCourseSlider() {
    const [courseId,setCourseId] = useState(0);
    function handleSliderFunctionLeft(){
        if(courseId > 0 && courseId < pendingCourseList.length){
            setCourseId(courseId-1)
        }   
    }
    function handleSliderFunctionRight(){
        if(courseId+1 < pendingCourseList.length && courseId >= 0){
            setCourseId(courseId+1)
        }  
    }

    return (
        <div className={styles.mainContainer}>
            { pendingCourseList && 
                    <div className = {styles.sliderMain}>
                        <img className={styles.icon} src={pendingCourseList[courseId].img} alt='flag' />
                        <div className ={styles.textContainer}>
                            <div className={styles.text1}>
                                {pendingCourseList[courseId].name}
                            </div>
                            <div className={styles.text2}>
                                {pendingCourseList[courseId].doneBy}
                            </div>
                        </div>
                        <Progress style={{marginLeft:'10',fontSize:'12',fontWeight:'800'}} type="circle" width='36px' strokeColor='black' percent={pendingCourseList[courseId].completion} />
                        <button className={styles.continue} onClick={()=>console.log('clicked')}>
                            Continue
                        </button>
                    </div>  
            }
            <div className={styles.sliderIconContainer}>
                <div className={styles.arrowBox} onClick={()=>handleSliderFunctionLeft()} >
                    <img className={styles.arrow} src={left} alt=''/>
                </div>
                <div className={styles.arrowBox} onClick={()=>handleSliderFunctionRight()}>
                    <img className={styles.arrow} src={right} alt=''/>
                </div>
            </div>
        </div>
    )
}
