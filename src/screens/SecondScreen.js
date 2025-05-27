import SmallBox from "../components/SmallBox/SmallBox";
import styles from "./SecondScreen.module.css"
import { useEffect, useState } from "react"
import work from "../icons/wired-lineal-1023-portfolio-hover-pinch.json"
import sad from "../icons/wired-lineal-1854-office-desk-hover-pinch.json"
import female from "../icons/wired-lineal-187-suitcase-morph-open (2).json"
import time from "../icons/wired-lineal-28-calendar-hover-pinch.json"
const SecondScreen = () => {
    const [animate, setAnimate] = useState(true);

    useEffect(() => {
        // הפעלת האנימציה בלולאה כל 5 שניות
        const interval = setInterval(() => {
            setAnimate(false);
            // מפעילים מחדש את האנימציה אחרי זמן קצר
            setTimeout(() => {
                setAnimate(true);
            }, 100);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return <>
        <div className={styles.titleContainer}>
            <h2 className={styles.title}>
                <div className={styles.markedTitle}>
                    <div className={`${styles.highlight} ${animate ? styles.animateHighlight : ''}`}></div>
                    <div className={styles.textContent}>לא הגעת לכאן סתם</div>
                </div>
            </h2>
        </div>
        
        <div className={styles.description}>את כאן כי את מאוהבת בכל עולם הציפורניים כבר הרבה זמן והחלטת שהגיע הזמן לעשות שינוי ולהפוך את התשוקה שלך לקריירה </div>
        
        <div className={styles.titleContainer}>
            <h2 className={styles.title}>
                <div className={styles.markedTitle}>
                    <div className={`${styles.highlight} ${animate ? styles.animateHighlight : ''}`}></div>
                    <div className={styles.textContent}>בכמה חודשים בודדים</div>
                </div>
            </h2>
        </div>
        <div className={styles.description}>את יכולה להפוך מ</div>
        <div className={styles.row}>
        <SmallBox text="אחת שקמה כל בוקר עם תחושת מועקה לעבודה" icon={sad}/>
        <SmallBox text="מישהי שלא נהנת מהעבודה שלה ונותנת דין וחשבון לבוס שלה" icon={work}/>
        </div>
        <div className={styles.description}>למצב ש</div>
        <div className={styles.row}>
       <SmallBox text="את הבוס של עצמך ומנהלת את הזמן שלך בדיוק כמו שאת רוצה" icon={time}/>
        <SmallBox text="את מגשימה את עצמך ולעשות מה שאת אוהבת בכל יום מחדש" icon={female}/>
        </div>
    </>
}

export default SecondScreen