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

const Syllabus = () => {
 const [isExpanded, setIsExpanded] = useState(false);

 const toggleExpanded = () => {
   setIsExpanded(!isExpanded);
 };

 const sessions = [
   {
     number: 1,
     icon: <Shield className={styles.sessionIcon} />,
     title: "מבוא לאנטומיה, סטריליזציה ובטיחות",
     quote: "הבסיס החזק הוא תחילת הדרך להצלחה",
     content: [
       { text: "הכרת מבנה הציפורן והעור הסמוך - האנטומיה החשובה", icon: <Brain className={styles.contentIcon} /> },
       { text: "זיהוי מחלות וסימנים בציפורן מודגמים", icon: <AlertTriangle className={styles.contentIcon} /> },
       { text: "טכניקות סטריליזציה נכונה - להימנע מזיהומים", icon: <Sparkles className={styles.contentIcon} /> },
       { text: "הסרת זיהוי מחלות וסימנים בציפורן", icon: <Search className={styles.contentIcon} /> },
       { text: "כללי עבודה בטוחה וסביבת עבודה נקייה", icon: <Shield className={styles.contentIcon} /> },
       { text: "הכרת הציוד המקצועי הנדרש לעבודה", icon: <Wrench className={styles.contentIcon} /> }
     ]
   },
   {
     number: 2,
     icon: <Microscope className={styles.sessionIcon} />,
     title: "אנטומיה מפורטת של הציפורן ומחלות שגרתיות",
     quote: "הבנה עמוקה של המבנה מביאה לטיפול מושלם",
     content: [
       { text: "הבנה מעמיקה על אנטומיה: הנקדייקום, לונולה, המטריקס", icon: <BookOpen className={styles.contentIcon} /> },
       { text: "זיהוי זיהומים ציפורניים - היפוניכיום והדגמה", icon: <Eye className={styles.contentIcon} /> },
       { text: "הכרת מבנה הציפורן ותפקידו הביולוגי", icon: <Brain className={styles.contentIcon} /> },
       { text: "הבינוני נפקודים וכיצד להבין אותן מול הזיהוי", icon: <Search className={styles.contentIcon} /> },
       { text: "זיהוי מחלות נפוצות וטיפול מקדים", icon: <AlertTriangle className={styles.contentIcon} /> },
       { text: "PMMA ואבקת פולימר - הכרת החומרים הבסיסיים", icon: <Package className={styles.contentIcon} /> }
     ]
   },
   {
     number: 3,
     icon: <Wrench className={styles.sessionIcon} />,
     title: "כלי עבודה וחומרי אקריל - טכניקות הכנה",
     quote: "הכלים הנכונים הם חצי מהעבודה",
     content: [
       { text: "סקירת כלי העבודה המקצועיים: פצירה, בית/סיליקון, דקלט לישור הקצה", icon: <Scissors className={styles.contentIcon} /> },
       { text: "מברשות אקריל, מגש Dappen, חומר פולימר", icon: <Brush className={styles.contentIcon} /> },
       { text: "הכרת חומרי בסיס על חומרי PMMA ופולימר מונומר", icon: <Package className={styles.contentIcon} /> },
       { text: "תרגול זרי מחלות וסימנים בציפורן מודגמים", icon: <Target className={styles.contentIcon} /> },
       { text: "תרגול הרכבת החומרים - מחיום לאקריל", icon: <Layers className={styles.contentIcon} /> },
       { text: "הכנת מקום העבודה וארגון הכלים נכון", icon: <Settings className={styles.contentIcon} /> }
     ]
   },
   {
     number: 4,
     icon: <Paintbrush className={styles.sessionIcon} />,
     title: "הכנת הציפורן לבנייה - מניקור בסיסי ותפקיד ה-PRIMER",
     quote: "הכנה נכונה מבטיחה תוצאה מושלמת",
     content: [
       { text: "רזן שלב אחר שלב להכנת הציפורן: הסרת לק ישן ועמדה נקיה", icon: <Eraser className={styles.contentIcon} /> },
       { text: "חיתוך והסרת עור עודף - cuticle removal", icon: <Scissors className={styles.contentIcon} /> },
       { text: "שיוף ירי של צורת הציפורן ממעניק כדי לשמור את צבעי הציפורן הבריא", icon: <FileText className={styles.contentIcon} /> },
       { text: "הסרת השחור (matte) של הציפורן - הסרת ברק שמן לטובת הידבקות טובה יותר", icon: <Target className={styles.contentIcon} /> },
       { text: "מריחת Dehydrator לפתרור ייבש ועל פריימר אקריל", icon: <Zap className={styles.contentIcon} /> },
       { text: "חומר נוטרלי או נוטרלי הזמר נקוי שמותיות לשיפור אחרית הציפורן המלאכותית", icon: <Shield className={styles.contentIcon} /> },
       { text: "פריימרים במומחי הבטיחות - לדוגמה no-burn פריימר", icon: <Package className={styles.contentIcon} /> }
     ]
   },
   {
     number: 5,
     icon: <Palette className={styles.sessionIcon} />,
     title: "עבודה עם תבנית והבנייה הראשונית באקריל",
     quote: "כל בניין גדול מתחיל בתבנית חזקה",
     content: [
       { text: "נניח בעמיק בטכניקת תבנית בניית (נייל פורם) ואופן התאמתן לציפורן", icon: <Layers className={styles.contentIcon} /> },
       { text: "קבעית אורך צורה רצויה באמצעות בסיסון האופקי ואפיצי התבנית", icon: <Ruler className={styles.contentIcon} /> },
       { text: "נמד כיצד לישים מונומר/אקריל מתדרך בתדבת: הכנסת האצבע לתוך תבעלת הבסיסון", icon: <Target className={styles.contentIcon} /> },
       { text: "עיצוב צורה מתדמתת בהתאם לשיטת הסטנדרטית", icon: <Paintbrush className={styles.contentIcon} /> },
       { text: "הן ילמדו להבין את כדור האקריל לתיקון נכון", icon: <Focus className={styles.contentIcon} /> },
       { text: "ילמדו כיצד להרכיש את חבילת יחסי המקצה ובתכנונתנו הטופית", icon: <CheckCircle className={styles.contentIcon} /> }
     ]
   },
   {
     number: 6,
     icon: <Star className={styles.sessionIcon} />,
     title: "השלמת בניית ציפורן ועיצוב צורה",
     quote: "העיצוב הוא המקום שבו האומנות פוגשת הטכניקה",
     content: [
       { text: "נעמיק בטכניקת בניית ציפורניים שלמות: פיסול צורת קצה הרצויה", icon: <Fingerprint className={styles.contentIcon} /> },
       { text: "דיבר על טיפולי כרעי (שכבת לבן קבוע) גם באקריל", icon: <Palette className={styles.contentIcon} /> },
       { text: "ושל שילוב בתבנייה. נכיר מוטים: עיצוב צורה מתדקמת", icon: <Layers className={styles.contentIcon} /> },
       { text: "עיצוב צורות עקרונות עיצוב שונים ליצירת אופק ריאליסטי או למטש", icon: <Paintbrush className={styles.contentIcon} /> },
       { text: "הדבקת השכבות ובין האצבעות כך שיתרגלו גם תיקון", icon: <Repeat className={styles.contentIcon} /> }
     ]
   },
   {
     number: 7,
     icon: <Brush className={styles.sessionIcon} />,
     title: "קישוט ועיצוב מתקדם - צבע ופרנצ'י קבוע",
     quote: "הפרטים הקטנים הם שעושים את ההבדל הגדול",
     content: [
       { text: "נכיר שיטות קישוט בציפורן אקריל: מריחת לק ג'ל לציפויי עליון", icon: <Paintbrush className={styles.contentIcon} /> },
       { text: "אפשרויות הזדהקה של אבני חן/מדבקות", icon: <Sparkles className={styles.contentIcon} /> },
       { text: "דיון בבריטריוס ומרישכות אחרונות - איך להשיג גימור חלק", icon: <Target className={styles.contentIcon} /> },
       { text: "שימוש בג'ל או אקריל צבעוני (Pigment) ליצירת פרנסים", icon: <Palette className={styles.contentIcon} /> },
       { text: "כמו כן נדבר על סוף צורות מתקדמות: סטילטו (שקד צר), בולט (בהיקש) וריבועי", icon: <Layers className={styles.contentIcon} /> },
       { text: "נבחיר כי השימור האסתטי תלוי בדיוק בפסי הסבון וגובה השכבות", icon: <Focus className={styles.contentIcon} /> }
     ]
   },
   {
     number: 8,
     icon: <Fingerprint className={styles.sessionIcon} />,
     title: "מילוי ותיקונים",
     quote: "תחזוקה נכונה מאריכה את יופי העבודה",
     content: [
       { text: "נלמד על שלבי המילוי השוטף של ציפורן אקריל: הסרת לק או ג'ל קיים", icon: <Eraser className={styles.contentIcon} /> },
       { text: "שיוף הדרגתי להסרת הגימור הראשוני והגעה לציפורן אמיתי", icon: <FileText className={styles.contentIcon} /> },
       { text: "נטביר כיצד לישום מונומר/אקריل מחדש באזור הגדילה", icon: <Target className={styles.contentIcon} /> },
       { text: "יצירת כדור אקריל ליד קרקפת הציפורן ושחזור צורת הצלחת כך", icon: <Focus className={styles.contentIcon} /> },
       { text: "שהחומר ייכנס מהשורש החוצה", icon: <Layers className={styles.contentIcon} /> },
       { text: "נדגיש הנדש השמירה על עובי עדין ומעבר חלק", icon: <Repeat className={styles.contentIcon} /> },
       { text: "לאזור החימור חלק בין החומר הישן לחדש", icon: <CheckCircle className={styles.contentIcon} /> },
       { text: "הטלמידות ירגלו גם תיקון סדקים/שברים על ידי מילוי נדקמים", icon: <Wrench className={styles.contentIcon} /> }
     ]
   },
   {
     number: 9,
     icon: <Eye className={styles.sessionIcon} />,
     title: "הסרת בנייה בטוחה וסיכום שיטות העבודה",
     quote: "סיום נכון הוא לא פחות חשוב מהתחלה טובה",
     content: [
       { text: "נבור עבור על שלבי הסרת ציפורן אקריל אמיתית", icon: <Eraser className={styles.contentIcon} /> },
       { text: "שיטת יסוד בעדינות באמצעות חומר הסרה בבטיחות", icon: <Shield className={styles.contentIcon} /> },
       { text: "התלמידות יבצעו הסרת הדרגתית יצירת מספק", icon: <Target className={styles.contentIcon} /> },
       { text: "מילוי אקריל מקצועי: הסבר הגימור הקדום והשברת צורת", icon: <Layers className={styles.contentIcon} /> },
       { text: "הציפורן לפי המודל הקדום. הן ילמדו אין להגיע בכנסת האצבע", icon: <Focus className={styles.contentIcon} /> },
       { text: "כדור האקריל לתיקון נכון מדיד", icon: <CheckCircle className={styles.contentIcon} /> },
       { text: "יצירת אופק צורה בעדינות בזמן המותאם בטיחותי", icon: <Heart className={styles.contentIcon} /> }
     ]
   },
   {
     number: 10,
     icon: <Trophy className={styles.sessionIcon} />,
     title: "מבחן מעשי ותיאורטי ומתן תעודה",
     quote: "כל סוף הוא התחלה חדשה - עכשיו את מוכנה לעולם המקצועי",
     content: [
       { text: "בחירה העיונית תבחן הבלמידות על מושגי הסוד שלמדו", icon: <BookOpen className={styles.contentIcon} /> },
       { text: "אנטומיה, היגיינה, הגיינה, חומרי בנייה", icon: <Brain className={styles.contentIcon} /> },
       { text: "מבחן כתוב קצר יכלול שאלות הגדרתיות וחיבור", icon: <FileText className={styles.contentIcon} /> },
       { text: "קצר (למשל: למה חשוב לשייף צלחת ללא הברקה", icon: <Search className={styles.contentIcon} /> },
       { text: "לפני מריחת יס ולמה חשוב בפנימית יש לתת ללחות לקצת", icon: <AlertTriangle className={styles.contentIcon} /> },
       { text: "ציפורן אלפטיט)", icon: <Fingerprint className={styles.contentIcon} /> },
       { text: "החלק המעשי יתבקשו התלמידות לבצע", icon: <Target className={styles.contentIcon} /> },
       { text: "פרויקטים מלא: הכנת ציפורן מלאה עד שלב הקומה", icon: <Layers className={styles.contentIcon} /> },
       { text: "ובחירת מתאימה, בעיית צבוע או בעיית תיקינה בצבע או", icon: <Palette className={styles.contentIcon} /> },
       { text: "פרנצ'י לפי הבחירה", icon: <Star className={styles.contentIcon} /> }
     ]
   }
 ];

 return (
   <div className={styles.syllabusContainer}>
     <div className={styles.header}>
       <h1 className={styles.mainTitle}>קורס ציפורניים אקריל מקצועי</h1>
       <h2 className={styles.subtitle}>הדרך שלך להיות מקצועית מוסמכת בעולם הציפורניים</h2>
       <div className={styles.courseInfo}>
         <span>10 מפגשים</span>
         <span>4 שעות כל מפגש</span>
         <span>לימוד עיוני + פרקטיקה מעשית</span>
         <span>תעודה מוסמכת</span>
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
               <Button text="בתאל אני בפנים!"/>
           </div>
           
         ))}
       </div>
     )}
     
   
   </div>
 );
};

export default Syllabus;