import styles from "./ThirdScreen.module.css"

import kitt from "../videos/ערכה בתאל אלמקייס.mp4"
import kitt1 from "../videos/ערכה בתאל אלמקייס 1.mp4"
import kitt2 from "../videos/ערכה בתאל אלמקייס 2.mp4"

const ThirdScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>מיותר לציין שהקורס כולל</div>
      
      <div className={styles.featuresGrid}>
        {/* יחס אישי */}
        <div className={styles.featureCard}>
          <div className={styles.iconContainer}>
            <svg className={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 className={styles.featureTitle}>יחס אישי</h3>
          <p className={styles.featureDescription}>
            הקורס הוא אחת על אחת ואני איתך בכל שלב ושלב לאורך כל 12 המפגשים וגם אחריהם
          </p>
        </div>

        {/* ליווי אישי */}
        <div className={styles.featureCard}>
          <div className={styles.iconContainer}>
            <svg className={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className={styles.featureTitle}>זמינות גם לאחר הקורס</h3>
          <p className={styles.featureDescription}>
            אני כאן גם אחרי הקורס - לכל שאלה, התייעצות, התלבטות וחיזוק
          </p>
        </div>
      </div>

      {/* ערכה אישית */}
      <div className={styles.kitSection}>
        <div className={styles.kitCard}>
          <div className={styles.kitIconContainer}>
            <svg className={styles.kitIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h2 className={styles.kitTitle}>ערכה אישית</h2>
          <p className={styles.kitDescription}>
            כל תלמידה שיוצאת ממני מקבלת את כל החומרים שנחוצים לה כדי להתחיל לקבל לקוחות
          </p>
          
          {/* תמונות הערכה */}
          <div className={styles.imagesGrid}>
     
            
            {/* ריבוע ריק 1 - וידאו */}
            <div className={styles.imageCard}>
              <div className={styles.imagePlaceholder}>
                <video 
                  src={kitt1} 
                  controls
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '15px'
                  }}
                />
              </div>
            </div>
            
            {/* ריבוע ריק 2 */}
            <div className={styles.imageCard}>
              <div className={styles.imagePlaceholder}>
                   <video 
                  src={kitt2} 
                  controls
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '15px'
                  }}
                />
              </div>
            </div>
            
            {/* ריבוע ריק 3 */}
            <div className={styles.imageCard}>
              <div className={styles.imagePlaceholder}>
                  <video 
                  src={kitt} 
                  controls
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '15px'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdScreen