import React, { useState } from 'react';
import { 
 BookOpen, Heart, Sparkles, Camera, Eye, Shield, Paintbrush, Award,
 Brain, AlertTriangle, Search, Zap, Wrench, Microscope, Package,
 Lightbulb, Users, Target, Layers, Eraser, UserCheck, Star,
 CheckCircle, Repeat, Focus, Trophy, Instagram, Aperture, Scissors,
 Palette, Brush, FileText, Settings, Ruler, Fingerprint, Plus, Minus
} from 'lucide-react';
import styles from './Sillabus.module.css';
import Button from '../button/Button';

const GabotSillabus = () => {
 const [isExpanded, setIsExpanded] = useState(false);

 const toggleExpanded = () => {
   setIsExpanded(!isExpanded);
 };

 const sessions = [
   {
     number: 1,
     icon: <Eye className={styles.sessionIcon} />,
     title: "מבוא לעיצוב גבות",
     quote: "הגבות הן מסגרת הפנים - הן קובעות את כל הביטוי",
     content: [
       { text: "חשיבות הגבות במסגרת הפנים", icon: <Eye className={styles.contentIcon} /> },
       { text: "טרנדים בעיצוב גבות בעבר ובהווה", icon: <Sparkles className={styles.contentIcon} /> },
       { text: "התאמת עיצוב הגבה למבנה הפנים והעין", icon: <Focus className={styles.contentIcon} /> },
       { text: "הסבר על מבנה השערה והגבה", icon: <Brain className={styles.contentIcon} /> }
     ]
   },
   {
     number: 2,
     icon: <Ruler className={styles.sessionIcon} />,
     title: "תורת מבנה הגבה",
     quote: "מדידה מדויקת היא הבסיס לעיצוב מושלם",
     content: [
       { text: "נקודות המפתח בעיצוב גבות (תחילת הגבה, קשת, סיום)", icon: <Target className={styles.contentIcon} /> },
       { text: "מדידות סימטריה נכונות עם חוט מדידה או סרגל ייעודי", icon: <Ruler className={styles.contentIcon} /> },
       { text: "הדגמה על תמונות ושרטוט נכון בתיאוריה", icon: <FileText className={styles.contentIcon} /> }
     ]
   },
   {
     number: 3,
     icon: <Shield className={styles.sessionIcon} />,
     title: "היגיינה ובטיחות",
     quote: "עבודה בטוחה היא עבודה מקצועית",
     content: [
       { text: "סטריליזציה של ציוד (חוט, פינצטה, מספריים)", icon: <Sparkles className={styles.contentIcon} /> },
       { text: "כללים לעבודה בטוחה עם הלקוחה", icon: <Shield className={styles.contentIcon} /> },
       { text: "שמירה על עור בריא ומניעת פציעות", icon: <Heart className={styles.contentIcon} /> }
     ]
   },
   {
     number: 4,
     icon: <Wrench className={styles.sessionIcon} />,
     title: "כלים וחומרים",
     quote: "הכלים הנכונים הם מחצית מההצלחה",
     content: [
       { text: "סוגי חוטים לעיצוב גבות (כותנה, משי, פוליאסטר)", icon: <Package className={styles.contentIcon} /> },
       { text: "סוגי פינצטות (שפיץ, משוננת, אלכסון)", icon: <Wrench className={styles.contentIcon} /> },
       { text: "סוגי מספריים לגבות", icon: <Scissors className={styles.contentIcon} /> },
       { text: "אביזרי עזר: מברשת גבות, מברשת ספוליא, ג'ל הרגעה, פד אלכוהול", icon: <Brush className={styles.contentIcon} /> }
     ]
   },
   {
     number: 5,
     icon: <Target className={styles.sessionIcon} />,
     title: "טכניקת עיצוב גבות בחוט",
     quote: "החוט הוא הכלי המדויק ביותר לעיצוב גבות",
     content: [
       { text: "יתרונות החוט לעומת פינצטה ושעווה", icon: <Lightbulb className={styles.contentIcon} /> },
       { text: "כיצד להכין את החוט לעבודה", icon: <Settings className={styles.contentIcon} /> },
       { text: "אחיזת חוט נכונה (תנועת מספריים באצבעות)", icon: <Scissors className={styles.contentIcon} /> },
       { text: "תרגול תנועות בסיס על עור סינתטי או חוט באוויר", icon: <Repeat className={styles.contentIcon} /> },
       { text: "תרגול מעשי", icon: <Target className={styles.contentIcon} /> }
     ]
   },
   {
     number: 6,
     icon: <Focus className={styles.sessionIcon} />,
     title: "טכניקת פינצטה נכונה",
     quote: "דיוק ועדינות הם המפתח לעבודה עם פינצטה",
     content: [
       { text: "עבודה מדויקת ונקודתית עם פינצטה", icon: <Focus className={styles.contentIcon} /> },
       { text: "איך להימנע משבירת שערות ועקירת זקיקים", icon: <AlertTriangle className={styles.contentIcon} /> },
       { text: "תרגול פינצטה בעיצוב קווים מדויקים", icon: <Target className={styles.contentIcon} /> }
     ]
   },
   {
     number: 7,
     icon: <Scissors className={styles.sessionIcon} />,
     title: "עבודה עם מספריים לעיצוב וסידור גבה",
     quote: "המספריים הם הכלי לגימור מושלם",
     content: [
       { text: "גזירת שערות ארוכות בצורה נכונה", icon: <Scissors className={styles.contentIcon} /> },
       { text: "תרגול סירוק וגזירה לשמירה על מראה טבעי", icon: <Brush className={styles.contentIcon} /> },
       { text: "שילוב מספריים עם חוט ופינצטה לתוצאה מושלמת", icon: <Layers className={styles.contentIcon} /> }
     ]
   },
   {
     number: 8,
     icon: <Layers className={styles.sessionIcon} />,
     title: "שילוב הטכניקות בעיצוב אחד",
     quote: "האמנות האמיתית היא בשילוב כל הטכניקות יחד",
     content: [
       { text: "סדר עבודה נכון: חיטוי ➔ מדידה ➔ חוט ➔ פינצטה ➔ מספריים ➔ ניקוי והרגעה", icon: <CheckCircle className={styles.contentIcon} /> },
       { text: "תרגול מעשי מלא על מודל עם ליווי צמוד", icon: <Users className={styles.contentIcon} /> }
     ]
   },
   {
     number: 9,
     icon: <Heart className={styles.sessionIcon} />,
     title: "טיפול לאחר עיצוב",
     quote: "הטיפול הנכון לאחר עיצוב מבטיח תוצאות מושלמות",
     content: [
       { text: "חיטוי והרגעת העור לאחר הסרת שיער", icon: <Sparkles className={styles.contentIcon} /> },
       { text: "המלצות לתכשירים מרגיעים ושמירה על תוצאות", icon: <Heart className={styles.contentIcon} /> }
     ]
   },
   {
     number: 10,
     icon: <Trophy className={styles.sessionIcon} />,
     title: "סיכום והענקת תעודות",
     quote: "כל סוף הוא התחלה חדשה - עכשיו את מוכנה לעולם המקצועי",
     content: [
       { text: "מענה לשאלות", icon: <Search className={styles.contentIcon} /> },
       { text: "טיפים לכניסה לשוק העבודה והצעות מחיר", icon: <Award className={styles.contentIcon} /> },
       { text: "חלוקת תעודת הסמכה", icon: <Trophy className={styles.contentIcon} /> }
     ]
   }
 ];

 return (
   <div className={styles.syllabusContainer}>
     <div className={styles.header}>
       <h1 className={styles.mainTitle}>קורס עיצוב גבות</h1>

       <div className={styles.courseInfo}>
         <span>10 מפגשים</span>
         <span>3 שעות כל מפגש</span>
         <span>לימוד עיוני + פרקטיקה מעשית</span>
         <span>תעודת הסמכה</span>
       </div>
       
       <div className={styles.expandButtonContainer}>
         <button 
           className={styles.expandButton} 
           onClick={toggleExpanded}
           aria-label={isExpanded ? "הסתר מפגשים" : "הצג מפגשים"}
         >
           {isExpanded ? (
             <>
               <Minus className={styles.expandIcon} />
               <span>לחצי כדי להסתיר את תיאור המפגשים</span>
             </>
           ) : (
             <>
               <Plus className={styles.expandIcon} />
               <span>לחצי כדי לצפות בכל המפגשים</span>
             </>
           )}
         </button>
       </div>
     </div>

     {isExpanded && (
       <div className={styles.sessionsContainer}>
         {sessions.map((session) => (
           <div key={session.number} className={styles.sessionCard}>
             <div className={styles.sessionHeader}>
               <div className={styles.sessionNumber}>מפגש {session.number}</div>
               <div className={styles.iconContainer}>
                 {session.icon}
               </div>
             </div>
             
             <h3 className={styles.sessionTitle}>{session.title}</h3>
             
             <div className={styles.quoteContainer}>
               <p className={styles.sessionQuote}>"{session.quote}"</p>
             </div>
             
             <div className={styles.contentContainer}>
               {session.content.map((item, index) => (
                 <div key={index} className={styles.contentItem}>
                   <span className={styles.contentIconWrapper}>
                     {item.icon}
                   </span>
                   <span className={styles.contentText}>
                     {item.text}
                   </span>
                 </div>
               ))}
             </div>
            
           </div>
           
         ))}
         
       </div>
       
     )}
     
   
   </div>
 );
};

export default GabotSillabus;