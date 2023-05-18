
import { CSSProperties, useState , useRef, useEffect, HtmlHTMLAttributes } from "react";
import Image from 'next/image'

import { BsFillCircleFill , BsChevronDoubleRight , BsChevronDoubleLeft} from "react-icons/bs";
import styles from '../styles/slider.module.css'
import metadata from "./data/metadata";

type Slides = {
    id: number,
    url:string;  
    title:string;
    button:string;
}

const SlideSlider= () => {

    const [index,setIndex] = useState(0);
    const [isChanged,setIsChanged] = useState(false);
    const slides : Slides[] = metadata.slideshow;
    const sliderRef = useRef <HTMLDivElement>(null);
    const carouselRef = useRef <HTMLDivElement>(null);
    const [direction,setDirection] = useState(-1);
    const [difference,setDifference] = useState(1);
    const rate = 100/slides.length;

    useEffect(()=>{   
        const interval = setInterval(() => {
            handleNext(1);
            console.log(index);
            }, 7000);       
            return () => clearInterval(interval);
        
    },[index]);

    const handleNext = (dif:number) => { 
        const newIndex = index+dif;
        if (dif===1 &&newIndex>=slides.length){
            setIndex(0);
        } else {
            setIndex(newIndex);
        }     
        setDirection(-1)
        const slider = sliderRef.current;
        const carousel = carouselRef.current;
        if (slider && carousel && slider.lastElementChild) {
            if (direction >0) { 
                slider.prepend(slider.lastElementChild); 
                setDirection(-1); 
            }
            carousel.style.justifyContent='flex-start'
            const text = 'translate(-'+dif*rate+'%)'          
            slider.style.transform = text     
        }      
    }
    
    const handlePrev =(dif:number) => {     
    const slider = sliderRef.current;
    const carousel = carouselRef.current; 
    if (slider && carousel && slider.firstElementChild && slider.lastElementChild) {
        if (direction <0) { 
            slider.appendChild(slider.firstElementChild); 
            setDirection(1); 
        }
        carousel.style.justifyContent='flex-end'      
        const text = 'translate('+(dif)*rate+'%)'
        slider.style.transform = text;         
    } 
   
}

const transitionEnd =() => {
    const slider = sliderRef.current;
    const dif = difference;
   const dir = direction;
   const carousel = carouselRef.current; 

   if (carousel){
    carousel.style.transition='none'
    carousel.style.transform = 'scale(1)';}
    if (slider && slider.firstElementChild && slider.lastElementChild) {
        if (dir<0) {
            for (let i=0;i<dif;i++){
                slider.appendChild(slider.firstElementChild);
            }
            setIndex(parseFloat(slider.firstElementChild.id.toString()));
        } else if (dir>0) {   
            for (let i=0;i<dif;i++){       
                slider.prepend(slider.lastElementChild);
          }  
          setIndex(parseFloat(slider.lastElementChild.id.toString()));
        }        
        slider.style.transition='none';
        slider.style.transform = 'translate(0)';
        setTimeout (()=> {
            slider.style.transition='all 1s';
        })
        setDifference(1);          
    }
    setDifference(1);
}


    const handleDot = (number : number)=> {
        setIndex(number);
        const inx = index;
        const dif = number-inx;
        console.log('dif '+dif)
        if (dif>0) {
            setDirection(-1);
            handleNext(dif); 
            setDifference(dif);
        } else if (dif <0) {
            setDirection(1);
            handlePrev(-dif);
            setDifference(-dif);
        }        
    }
    return (
    <div>      
        <div  className={styles.container}>
        <div className={styles.leftArrowStyles} onClick={()=>handlePrev(1)}> <BsChevronDoubleLeft /> </div>
        <div className={styles.rightArrowStyles} onClick={()=>handleNext(1)}> <BsChevronDoubleRight/></div>
        <div className={styles.dotStyles}>
            {slides.map((slide,slideIndex)=> (  
                <div key={slideIndex} onClick={()=>{handleDot(slideIndex)}} className={slideIndex===index? styles.activedot:styles.normaldot}><BsFillCircleFill /></div>          
            )
                )}
        </div>
            <div className={styles.carousel} ref ={carouselRef}>
                <div className={styles.slider} ref={sliderRef} onTransitionEnd={transitionEnd} >
                    {slides.map((item,index1) =>  ( 
                        <section id={index1.toString()} className='block relative overflow-hidden' key={index1}>
                             <Image
                                    src={item.url}
                                    alt="My Image"
                                    fill
                                    objectFit="cover"
                                    className={index1===index? styles.slideImageActive :styles.slideImage}
                                    
                                />
                            {/* <img className = {styles.slideImage} src ={item.url} alt={item.title} /> */}
                        </section>
                    )                  
                    )}
                    
                </div>
            </div>
        </div>

    </div>        
    )
}

export default SlideSlider;