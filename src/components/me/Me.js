import React from 'react';
import styles from './Me.module.css';
import batel from "../../images/בתאל אלמקייס תמונת פרופיל.jpg"
import bateldictionary from ".././../images/בתאל אלמקייס יומן.png"
import Works from '../recommends/Works';
import Recommendations from '../recommends/Recommends';
import Syllabus from '../Sillabus/Sillabus';
import ThirdScreen from '../../screens/ThirdScreen';
import NewSyllabus from '../Sillabus/NewSillabus';
import GabotSillabus from '../Sillabus/GabotSillabus';
const AboutMeComponent = () => {
  return (
    <>
      <div className={styles.header} id="מי אני">לפני שנצלול לעומק.. בואי נכיר</div>
      <div className={styles.darkGoldContainer}>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            {/* כאן יבוא התמונה, לדוגמה: */}
            <img src={batel} alt="בתאל קוסמטיקס" className={styles.image} />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>בתאל קומסטיקס</h1>
            <div className={styles.subtitle}>"כל מה שהיה לי בהתחלה היה חלום וכוח רצון"</div>
            <p className={styles.description}>
              מהילדות ידעתי שאני הולכת להתעסק בתחום הביוטי. לא כיוונתי דווקא לתחום הציפורניים  - 
        
       
            </p>
            <p className={styles.description}>
              קפצתי למים העמוקים ולמדתי לשחות מהר מאוד. עד היום עברו דרכי אלפי לקוחות מרוצות שחוזרות אליי שוב ושוב. 
              התהליך הזה לימד אותי שיעור חשוב: <span className={styles.goldText}>זה או שיש לך את זה או שאין לך את זה</span>. 
              אבל איך תדעי אם יש לך את זה אם לא תנסי?
            </p>
            <p className={styles.description}>
              אני מאמינה ש<span className={styles.goldText}>אין גיל להגשמה עצמית</span>. להיות הבוסית של עצמך זה לא רק חלום - זו מציאות שאפשר להשיג. 
              המסר שלי פשוט: אם יש לך חלום - תרדפי אחריו בכל מחיר. תהיי מוכנה לעבוד קשה, להקריב, להתמיד.
            </p>
          </div>
        </div>
      </div>
      
   
    
        <div className={styles.centeredSubtitle}>התחלתי לגמרי מ-0</div>
        <p className={styles.centeredDescription}>
          מאוד מאוד נחושה להצליח ועם מוטיבציה מטורפת! ידעתי שאני כאן כדי להשאר ותוך שנה הגעתי למצב שהיומן שלי מפוצץ שלושה חודשים קדימה עם 400 לקוחות בחודש שלא מצליחות לקבוע תורים  
        </p>
        <img src={bateldictionary} alt="בתאל אלמקייס" className={styles.imageCentered} />
        <div className={styles.centeredSubtitle}>שיצאו ממני ככה:</div>
    <Works/>
         <div className={styles.centeredSubtitle}>וזה חלק קטן מהאהבה שלהן חזרה</div>
    <Recommendations/>
        <p className={styles.centeredDescription}>
והיום - אחרי אינספור בקשות, החלטתי לקחת את כל הידע שצברתי ולהעביר אותו הלאה בצורה הכי מקיפה שיש!
        </p>
       <div className={styles.centeredSubtitle}>אז תחזיקי חזק.. ככה זה הולך לעבוד:</div>
       
          <Syllabus/>
          <NewSyllabus/>
          <GabotSillabus/>
        <ThirdScreen/>

  
    </>
  );
};

export default AboutMeComponent;