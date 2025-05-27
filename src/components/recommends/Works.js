import React from 'react';
import styles from './Recommends.module.css';

import result1 from "../../images/בתאל אלמקייס עבודות 1.png";
import result2 from "../../images/בתאל אלמקייס עבודות 2.png";
import result3 from "../../images/בתאל אלמקייס עבודות 3.png";
import result4 from "../../images/בתאל אלמקייס עבודות 4.png";
import result5 from "../../images/בתאל אלמקייס עבודות 5.png";
import result6 from "../../images/בתאל אלמקייס עבודות 6.png";
import result7 from "../../images/בתאל אלמקייס עבודות 7.png";
import result8 from "../../images/בתאל אלמקייס עבודות 8.png";
import result9 from "../../images/בתאל אלמקייס עבודות 9.png";
import result10 from "../../images/בתאל אלמקייס עבודות 10.png";
import result11 from "../../images/בתאל אלמקייס עבודות 11.png";
import result12 from "../../images/בתאל אלמקייס עבודות 12.png";
import result13 from "../../images/בתאל אלמקייס עבודות 13.png";
import result14 from "../../images/בתאל אלמקייס עבודות 14.png";
import result15 from "../../images/בתאל אלמקייס עבודות 15.png";
import result16 from "../../images/בתאל אלמקייס עבודות 16.png";
import result17 from "../../images/בתאל אלמקייס עבודות 17.png";
import result18 from "../../images/בתאל אלמקייס עבודות 18.png";
import result19 from "../../images/בתאל אלמקייס עבודות 19.png";
import result20 from "../../images/בתאל אלמקייס עבודות 20.png";
import result21 from "../../images/בתאל אלמקייס עבודות 21.png";
import result22 from "../../images/בתאל אלמקייס עבודות 22.png";
import result23 from "../../images/בתאל אלמקייס עבודות 23.png";
import result24 from "../../images/בתאל אלמקייס עבודות 24.png";
import result25 from "../../images/בתאל אלמקייס עבודות 25.png";
import result26 from "../../images/בתאל אלמקייס עבודות 26.png";
import result27 from "../../images/בתאל אלמקייס עבודות 27.png";
import result28 from "../../images/בתאל אלמקייס עבודות 28.png";
import result29 from "../../images/בתאל אלמקייס עבודות 29.png";
import result30 from "../../images/בתאל אלמקייס עבודות 30.png";
import result31 from "../../images/בתאל אלמקייס עבודות 31.png";
import result32 from "../../images/בתאל אלמקייס עבודות 32.png";
import result33 from "../../images/בתאל אלמקייס עבודות 33.png";
import result34 from "../../images/בתאל אלמקייס עבודות 34.png";
import result35 from "../../images/בתאל אלמקייס עבודות 35.png";
import result36 from "../../images/בתאל אלמקייס עבודות 36.png";
import result37 from "../../images/בתאל אלמקייס עבודות 37.png";
import result38 from "../../images/בתאל אלמקייס עבודות 38.png";
import result39 from "../../images/בתאל אלמקייס עבודות 39.png";
import result40 from "../../images/בתאל אלמקייס עבודות 40.png";
import result41 from "../../images/בתאל אלמקייס עבודות 41.png";
import result42 from "../../images/בתאל אלמקייס עבודות 42.png";
import result43 from "../../images/בתאל אלמקייס עבודות 43.png";
import result44 from "../../images/בתאל אלמקייס עבודות 44.png";
import result45 from "../../images/בתאל אלמקייס עבודות 45.png";
import result46 from "../../images/בתאל אלמקייס עבודות 46.png";
import result47 from "../../images/בתאל אלמקייס עבודות 47.png";
import result48 from "../../images/בתאל אלמקייס עבודות 48.png";
import result49 from "../../images/בתאל אלמקייס עבודות 49.png";
import result50 from "../../images/בתאל אלמקייס עבודות 50.png";
import result51 from "../../images/בתאל אלמקייס עבודות 51.png";
import result52 from "../../images/בתאל אלמקייס עבודות 52.png";
import result53 from "../../images/בתאל אלמקייס עבודות 53.png";
import result54 from "../../images/בתאל אלמקייס עבודות 54.png";

const Works = () => {
  const images = [
    result1, result2, result3, result4, result5, result6, result7, result8,
    result9, result10, result11, result12, result13, result14, result15, result16,
    result17, result18, result19, result20, result21, result22, result23, result24,
    result25, result26, result27, result28, result29, result30, result31, result32,
    result33, result34, result35, result36, result37, result38, result39, result40,
    result41, result42, result43, result44, result45, result46, result47, result48,
    result49, result50, result51, result52, result53, result54
  ];

  return (
    <>


      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* קבוצה ראשונה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
          {/* קבוצה שנייה זהה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
};

export default Works;