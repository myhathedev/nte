import React from 'react';
import styles from '../styles/logo.module.css'

const LogoAnimation = () => {
    const logos = [
        "/logos/logo1.jpg",
        "/logos/logo2.jpg",
        "/logos/logo3.jpg",
        "/logos/logo4.jpg",
        "/logos/logo5.jpg",
        "/logos/logo6.jpg",
        "/logos/logo7.jpg",
        "/logos/logo8.jpg",
        "/logos/logo9.jpg",
        "/logos/logo10.jpg",
        "/logos/logo11.jpg",
    ]
       
  return (
    <div className={styles.logoContainer}>
      {[...Array(3)].map((_, index) => (
        <div key={index} className={styles.logo}>   
        {[...logos].map((logo,index2)=>(
            <div key={index2} className='inline-block w-[9.09%] h-30 px-2 object-contain'><img  className={styles.logoImage} src={logo} alt="logo" /> </div>
        ))}       
        </div>
      ))}
    </div>
  );
};

export default LogoAnimation;