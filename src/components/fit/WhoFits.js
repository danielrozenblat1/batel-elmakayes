import React from 'react';
import { 
  Heart, Star, Target, Zap, Crown, Shield, Sparkles, Trophy,
  Users, Coffee, Clock, Sunrise, Mountain, Rocket, Diamond,
  CheckCircle, Flame, Award
} from 'lucide-react';
import styles from './WhoFits.module.css';

const WhoIsFit = () => {
  const whoIsFitItems = [
    {
      icon: <Heart className={styles.itemIcon} />,
      text: "מאוהבת בתחום הביוטי ורוצה להתפרנס ממנו"
    },
    {
      icon: <Flame className={styles.itemIcon} />,
      text: "יש לה רצון להצלחה ומחוייבות אמיתית"
    },
    {
      icon: <Target className={styles.itemIcon} />,
      text: "מוכנה להתמסר ולתת מעצמה 24/7"
    },
    {
      icon: <Mountain className={styles.itemIcon} />,
      text: "לא מפונקת ומוכנה להקריב על מנת להצליח"
    },
    {
      icon: <Rocket className={styles.itemIcon} />,
      text: "רוצה תמיד להשתפר ולהתמקצע"
    },
    {
      icon: <Crown className={styles.itemIcon} />,
      text: "רוצה להיות הבוס של עצמה ולהשיג עצמאות"
    },
    {
      icon: <Sparkles className={styles.itemIcon} />,
      text: "מחפשת הגשמה עצמית וחופש כלכלי"
    },
    {
      icon: <Trophy className={styles.itemIcon} />,
      text: "רוצה ביטחון עצמי וקריירה יציבה"
    }
  ];

  return (
    <div className={styles.whoIsFitContainer}>
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>שניה לפני שאנחנו מדברות <br/> הקורס שלי מתאים למי ש...</h1>
      </div>

      <div className={styles.itemsContainer}>
        {whoIsFitItems.map((item, index) => (
          <div key={index} className={styles.fitItem}>
            <div className={styles.iconWrapper}>
              {item.icon}
            </div>
            <div className={styles.itemText}>
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoIsFit;