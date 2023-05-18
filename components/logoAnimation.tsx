import React from 'react';
import styles from '../styles/logo.module.css'

const LogoAnimation = () => {
    const logos = [
        "/Logo.jpg" ,
        '/device1.jpg',
        '/device2.jpg',
        '/building1.jpg',
        '/building2.jpg'
    ]
       
  return (
    <div className={styles.logoContainer}>
      {[...Array(3)].map((_, index) => (
        <div key={index} className={styles.logo}>   
        {[...logos].map((logo,index2)=>(
            <div key={index2} className='inline-block w-1/5 h-20 px-4 overflow-y-hidden object-cover'><img  src={logo} alt="logo" /> </div>
        ))}       
        </div>
      ))}
    </div>
  );
};

export default LogoAnimation;