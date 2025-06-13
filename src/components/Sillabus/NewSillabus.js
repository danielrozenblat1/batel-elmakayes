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

const NewSyllabus = () => {
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
       { text: "זיהוי מחלות וסימנים בציפורן - הדגמה מעשית", icon: <AlertTriangle className={styles.contentIcon} /> },
       { text: "טכניקות סטריליזציה נכונה - למניעת זיהומים", icon: <Sparkles className={styles.contentIcon} /> },
       { text: "זיהוי מחלות נפוצות בציפורן ואופן הטיפול", icon: <Search className={styles.contentIcon} /> },
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
       { text: "הבנה מעמיקה של אנטומיה: הקיוטיקל, לונולה, המטריקס", icon: <BookOpen className={styles.contentIcon} /> },
       { text: "זיהוי זיהומים ציפורניים - היפוניכיום והדגמה", icon: <Eye className={styles.contentIcon} /> },
       { text: "הכרת מבנה הציפורן ותפקידה הביולוגי", icon: <Brain className={styles.contentIcon} /> },
       { text: "בדיקת הציפורן וכיצד לזהות חריגות", icon: <Search className={styles.contentIcon} /> },
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
       { text: "סקירת כלי העבודה המקצועיים: פצירה, קובץ סיליקון, מכונת שיוף", icon: <Scissors className={styles.contentIcon} /> },
       { text: "מברשות אקריל, מגש Dappen, חומר פולימר ומונומר", icon: <Brush className={styles.contentIcon} /> },
       { text: "הכרת חומרי בסיס - PMMA ופולימר מונומר", icon: <Package className={styles.contentIcon} /> },
       { text: "תרגול זיהוי מחלות וסימנים בציפורן", icon: <Target className={styles.contentIcon} /> },
       { text: "תרגול הכנת החומרים - מחימום לאקריל", icon: <Layers className={styles.contentIcon} /> },
       { text: "הכנת מקום העבודה וארגון הכלים הנכון", icon: <Settings className={styles.contentIcon} /> }
     ]
   },
   {
     number: 4,
     icon: <Paintbrush className={styles.sessionIcon} />,
     title: "הכנת הציפורן לבנייה - מניקור בסיסי ותפקיד ה-PRIMER",
     quote: "הכנה נכונה מבטיחה תוצאה מושלמת",
     content: [
       { text: "שלבי הכנת הציפורן: הסרת לק ישן ושמירה על ניקיון", icon: <Eraser className={styles.contentIcon} /> },
       { text: "חיתוך והסרת עור עודף - cuticle removal", icon: <Scissors className={styles.contentIcon} /> },
       { text: "שיוף עדין של צורת הציפורן כדי לשמור על הציפורן הבריאה", icon: <FileText className={styles.contentIcon} /> },
       { text: "הסרת הברק (matte) של הציפורן - יצירת משטח מחוספס להידבקות טובה", icon: <Target className={styles.contentIcon} /> },
       { text: "מריחת Dehydrator לייבוש ופריימר אקריל", icon: <Zap className={styles.contentIcon} /> },
       { text: "שימוש בחומר ניקוי לשיפור הידבקות הציפורן המלאכותית", icon: <Shield className={styles.contentIcon} /> },
       { text: "פריימרים בעלי תכונות בטיחות - לדוגמה no-burn פריימר", icon: <Package className={styles.contentIcon} /> }
     ]
   },
   {
     number: 5,
     icon: <Palette className={styles.sessionIcon} />,
     title: "עבודה עם תבנית והבנייה הראשונית באקריל",
     quote: "כל בניין גדול מתחיל בתבנית חזקה",
     content: [
       { text: "הבנה מעמיקה בטכניקת תבנית (נייל פורם) ואופן התאמתן לציפורן", icon: <Layers className={styles.contentIcon} /> },
       { text: "קביעת אורך וצורה רצויה באמצעות מדידה מדויקת והתאמת התבנית", icon: <Ruler className={styles.contentIcon} /> },
       { text: "לימוד כיצד לשים מונומר/אקריל בצורה נכונה על התבנית", icon: <Target className={styles.contentIcon} /> },
       { text: "עיצוב צורה בסיסית בהתאם לשיטה הסטנדרטית", icon: <Paintbrush className={styles.contentIcon} /> },
       { text: "הן ילמדו להבין את כדור האקריל לשימוש נכון", icon: <Focus className={styles.contentIcon} /> },
       { text: "ילמדו כיצד להשיג את יחסי הרוחב והעובי הנכונים", icon: <CheckCircle className={styles.contentIcon} /> }
     ]
   },
   {
     number: 6,
     icon: <Star className={styles.sessionIcon} />,
     title: "השלמת בניית ציפורן ועיצוב צורה",
     quote: "העיצוב הוא המקום שבו האומנות פוגשת הטכניקה",
     content: [
       { text: "העמקה בטכניקת בניית ציפורניים שלמות: פיסול צורת הקצה הרצויה", icon: <Fingerprint className={styles.contentIcon} /> },
       { text: "שיחה על טיפולי ציפורניים בשכבות (שכבות קבועות) גם באקריל", icon: <Palette className={styles.contentIcon} /> },
       { text: "שילוב בין תבניות שונות. נכיר צורות: עיצוב צורה מתקדמת", icon: <Layers className={styles.contentIcon} /> },
       { text: "עיצוב צורות - עקרונות עיצוב שונים ליצירת מראה ריאליסטי או אמנותי", icon: <Paintbrush className={styles.contentIcon} /> },
       { text: "הדבקת השכבות ובניית הציפורן כך שתתרגלו גם תיקונים", icon: <Repeat className={styles.contentIcon} /> }
     ]
   },
   {
     number: 7,
     icon: <Brush className={styles.sessionIcon} />,
     title: "קישוט ועיצוב מתקדם - צבע ופרנץ' קבוע",
     quote: "הפרטים הקטנים הם שעושים את ההבדל הגדול",
     content: [
       { text: "הכרת שיטות קישוט בציפורן אקריל: מריחת לק ג'ל לציפוי עליון", icon: <Paintbrush className={styles.contentIcon} /> },
       { text: "אפשרויות הדבקה של אבני חן ומדבקות", icon: <Sparkles className={styles.contentIcon} /> },
       { text: "שיחה על בריק ומרקמים שונים - איך להשיג גימור חלק", icon: <Target className={styles.contentIcon} /> },
       { text: "שימוש בג'ל או אקריל צבעוני (Pigment) ליצירת פרנץ'", icon: <Palette className={styles.contentIcon} /> },
       { text: "כמו כן נדבר על צורות מתקדמות: סטילטו (שקד צר), בולט (מרובע) וריבועי", icon: <Layers className={styles.contentIcon} /> },
       { text: "נבין כי השימור האסתטי תלוי בדיוק בחלוקת השכבות וגובה השכבות", icon: <Focus className={styles.contentIcon} /> }
     ]
   },
   {
     number: 8,
     icon: <Fingerprint className={styles.sessionIcon} />,
     title: "מילוי ותיקונים",
     quote: "תחזוקה נכונה מאריכה את יופי העבודה",
     content: [
       { text: "נלמד על שלבי המילוי השוטף של ציפורן אקריל: הסרת לק או ג'ל קיים", icon: <Eraser className={styles.contentIcon} /> },
       { text: "שיוף הדרגתי להסרת הגימור הקיים והגעה לציפורן הטבעית", icon: <FileText className={styles.contentIcon} /> },
       { text: "נבין כיצד לשים מונומר/אקריל מחדש באזור הגדילה", icon: <Target className={styles.contentIcon} /> },
       { text: "יצירת כדור אקריל ליד שורש הציפורן ושחזור צורת הציפורן", icon: <Focus className={styles.contentIcon} /> },
       { text: "כך שהחומר יתפרס מהשורש החוצה", icon: <Layers className={styles.contentIcon} /> },
       { text: "נדגיש את החשיבות של שמירה על עובי אחיד ומעבר חלק", icon: <Repeat className={styles.contentIcon} /> },
       { text: "לאזור המחבר בין החומר הישן לחדש", icon: <CheckCircle className={styles.contentIcon} /> },
       { text: "התלמידות יתרגלו גם תיקון סדקים/שברים על ידי מילוי בחומר", icon: <Wrench className={styles.contentIcon} /> }
     ]
   },
   {
     number: 9,
     icon: <Eye className={styles.sessionIcon} />,
     title: "הסרת בנייה בטוחה וסיכום שיטות העבודה",
     quote: "סיום נכון הוא לא פחות חשוב מהתחלה טובה",
     content: [
       { text: "נעבור על שלבי הסרת ציפורן אקריל בטוחה", icon: <Eraser className={styles.contentIcon} /> },
       { text: "שיטת הסרה בעדינות באמצעות חומר הסרה בבטיחות", icon: <Shield className={styles.contentIcon} /> },
       { text: "התלמידות יבצעו הסרה הדרגתית בצורה מקצועית", icon: <Target className={styles.contentIcon} /> },
       { text: "מילוי אקריל מקצועי: הסבר על הגימור הנכון ושמירת צורת", icon: <Layers className={styles.contentIcon} /> },
       { text: "הציפורן לפי המודל המקורי. הן ילמדו איך להגיע לאיזון נכון", icon: <Focus className={styles.contentIcon} /> },
       { text: "כדור האקריל לתיקון נכון ומדויק", icon: <CheckCircle className={styles.contentIcon} /> },
       { text: "יצירת צורה מושלמת בעדינות בזמן המותאם בטיחותית", icon: <Heart className={styles.contentIcon} /> }
     ]
   },
   {
     number: 10,
     icon: <Trophy className={styles.sessionIcon} />,
     title: "מבחן מעשי ותיאורטי ומתן תעודה",
     quote: "כל סוף הוא התחלה חדשה - עכשיו את מוכנה לעולם המקצועי",
     content: [
       { text: "בחינה עיונית על הנושאים שלמדו", icon: <BookOpen className={styles.contentIcon} /> },
       { text: "אנטומיה, היגיינה, בטיחות, חומרי בנייה", icon: <Brain className={styles.contentIcon} /> },

       { text: "פרויקט מלא: הכנת ציפורן מלאה עד שלב הגימור", icon: <Layers className={styles.contentIcon} /> },
       { text: "בחירת גימור מתאים, בעיית צביעה או בחירת תיקון בצבע", icon: <Palette className={styles.contentIcon} /> },
       { text: "פרנץ' לפי הבחירה", icon: <Star className={styles.contentIcon} /> },
              { text: "חלוקת תעודת הסמכה", icon: <Star className={styles.contentIcon} /> }
     ]
   }
 ];

 return (
   <div className={styles.syllabusContainer}>
     <div className={styles.header}>
       <h1 className={styles.mainTitle}>מסלול בתאל קומסטיקס</h1>
       <h2 className={styles.subtitle}>חתימה של מצויינות - המסלול שמכתיב את הרמה !</h2>
   <h2 className={styles.subtitle}></h2>

       <div className={styles.courseInfo}>
       <span>4 תחומים שונים : בנייה באקריל <br/> לק ג׳ל ברגליים <br/> עיצוב ושיקום הגבות בחוט ומספריים <br/> הסרת שיער בשעווה לכל חלקי הגוף  </span>
         <span>13 מפגשים</span>
         <span>3 שעות כל מפגש</span>
         <span>לימוד עיוני + פרקטיקה מעשית</span>
         <span>תעודת הסמכה</span>
          <span>ערכת פרימיום בשווי עד 4000 שקלים</span>
                
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

export default NewSyllabus;