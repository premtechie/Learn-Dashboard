import React,{useEffect,useState} from 'react'
import CourseCompleted from '../../Components/CourseCompleted';
import CourseList from '../../Components/CourseList';
import CourseProgress from '../../Components/CourseProgress';
import GraphComponent from '../../Components/GraphComponent';
import HeaderComponent from '../../Components/HeaderComponent';
import LearnMoreComponent from '../../Components/LearnMoreComponent';
import PendingCourseSlider from '../../Components/PendingCourseSlider';
import SearchBar from '../../Components/SearchBar';
import Sidebar from '../../Components/Sidebar'
import styles from './styles.module.css';

const mobileWidth = 560;
const tabScreenWidth = 900;

export default function Dashboard() {
    const [isDesktop,setDesktop] = useState(true);
    const [isMobileScreen,setMobile] = useState(false);
    const [isTabletScreen,setTablet] = useState(false);
    useEffect(()=>{
        const windowWidth = window.screen.width;
        if(windowWidth < mobileWidth){
            setMobile(true);
            setDesktop(false)
        }
        else if(windowWidth < tabScreenWidth){
            setTablet(true);;
            setDesktop(false)
        }
    })
    return (
        <div className={styles.Dashboard}>
            <Sidebar />  
            <div className={styles.showSearchBar}>
                <SearchBar />
            </div>
            <div className={styles.showProgressTemplate}>
                <CourseCompleted />
                <CourseProgress />
            </div>   
            <div className={styles.header}>
                <HeaderComponent />
                <PendingCourseSlider />
                <CourseList />
                <div className={styles.showGraph}>
                    <GraphComponent />
                </div>
                <div className={styles.showLearnMore}>
                    <LearnMoreComponent />
                </div>
            </div>
            <div className={styles.rightContainer}>
                <SearchBar />
                <div className={styles.progressTemplate}>
                    <CourseCompleted />
                    <CourseProgress />
                </div>
                <div className={styles.graphComponent}>
                    <GraphComponent />
                </div>
                <LearnMoreComponent />
            </div>
        </div>
    )
}
