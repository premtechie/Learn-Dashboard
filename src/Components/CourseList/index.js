import React,{useEffect, useState} from 'react'
import styles from './styles.module.css';
import clock from '../../Assets/Images/clock.svg'
import fire from '../../Assets/Images/fire.svg'
import figma from '../../Assets/Images/figma.svg'
import photoShop from '../../Assets/Images/photoshop.svg';
import pencil from '../../Assets/Images/pencil.png';
import instagram from '../../Assets/Images/instagram.svg'
import click from '../../Assets/Images/click.png'
import classNames from 'classnames';
import {allCourseList,mostPopular,topRated,newCourse} from './courseData'



    

function CourseList() {

    const [navTab,setNavTab] = useState(0);
    const [cardList,setCardList] = useState([]);
    useEffect(()=>{
        setCardList(allCourseList)
    },[])
    const navList = [
        {name:'All Courses',
            id:0
        },
        {name:'The Newest',
            id:1
        },
        {name:'Top Rated',
            id:2
        },
        {name:'Most Popular',
            id:3
        }
    ]
    return (
        <div>
            <div className={styles.title}>Courses</div>
            <div className={styles.navBar}>
                {
                    navList.map((item)=>(
                        <div key={item.id} className={
                            classNames(styles.tab,{[styles.active]:navTab == item.id})}
                            onClick={()=>{
                                setNavTab(item.id)
                                if(item.name == 'The Newest'){
                                    setCardList(newCourse)
                                }
                                else if(item.name == 'Top Rated'){
                                    setCardList(topRated)
                                }
                                else if(item.name == 'All Courses'){
                                    setCardList(allCourseList)
                                }
                                else if(item.name == "Most Popular"){
                                    setCardList(mostPopular)
                                }
                            }}

                        >
                            {item.name}
                        </div>
                    )
                )}
            </div>
            <div className={styles.cardContainer}>
                {
                cardList.map(cardItem=>
                    <div className={styles.card} >
                        <div className={styles.imgComp}>
                            <img className={styles.imageIcon} src={cardItem.componentImage} alt='' />
                        </div>
                        <div className={styles.textContainer}>
                            <div className={styles.text1}>{cardItem.courseTitle}</div>
                            <div className={styles.text2}>{cardItem.courseDoneBy}</div>
                        </div>
                        <div className={styles.timer}>
                            <img src={clock} alt='' className={styles.icon} />
                            <div className={styles.rating}>{cardItem.time}</div>
                        </div>
                        <div className={styles.ratingContainer}>
                            <img src={fire} alt='' className={styles.icon} />
                            <div className={styles.rating}>{cardItem.rating}</div>
                        </div>
                        <button className={styles.viewCourse}>
                            viewCourse
                        </button>
                    </div>
                    )}
            </div>
        </div>
    )
}

export default CourseList
