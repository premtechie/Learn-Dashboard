import React from 'react'
import styles from './styles.module.css';
import clock from '../../Assets/Images/clock.svg'
import fire from '../../Assets/Images/fire.svg'
import figma from '../../Assets/Images/figma.svg'
import photoShop from '../../Assets/Images/photoshop.svg';
import pencil from '../../Assets/Images/pencil.png';
import instagram from '../../Assets/Images/instagram.svg'
import click from '../../Assets/Images/click.png'

const cardList = [
        { componentImage:figma,
            courseTitle:"Learn Figma",
            courseDoneBy:"by Christopher Morgan",
            time:"6h 30min",
            rating:4.9
        },
        { componentImage:click,
            courseTitle:"Analog Photography",
            courseDoneBy:"by Gordan Norman",
            time:"3h 15min",
            rating:4.7
        },
        { componentImage:instagram,
            courseTitle:"Master Instagram",
            courseDoneBy:"by Sophie Gill",
            time:"7h 40min",
            rating:4.6
        },
        { componentImage:pencil,
            courseTitle:"Basics of drawing",
            courseDoneBy:"by Jean Tate",
            time:"11h 30min",
            rating:4.8
        },
        { componentImage:photoShop,
            courseTitle:"Photoshop - Essence",
            courseDoneBy:"by David Green",
            time:"5h 35min",
            rating:4.7
        },
    ]


function CourseList() {
    return (
        <div>
            <div className={styles.title}>Courses</div>
            <div className={styles.navBar}>
                <div className={styles.tab,styles.active}>All Courses</div>
                <div className={styles.tab}>The Newest</div>
                <div className={styles.tab}>Top Rated</div>
                <div className={styles.tab}>Most Popular</div>
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
