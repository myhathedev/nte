import Head from 'next/head'
import { BsFillGearFill ,BsTools , BsBoxSeam,BsFillPersonCheckFill} from "react-icons/bs";
import Layout from 'components/components/layout'
import LogoAnimation from 'components/components/logoAnimation';
import styles from '../styles/Home.module.css'
import React, { useLayoutEffect, useRef } from 'react';
import metadata from 'components/components/data/metadata';
import SlideSlider from 'components/components/slide-slider';
import Awards from 'components/components/award-slideshow';
import Link from 'next/link';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const intro = useRef<HTMLDivElement>(null);
  const ourServices = useRef<HTMLDivElement>(null);
 
  useLayoutEffect(() => {
    const ctx = gsap.context((self:any) => {
      const boxes = self.selector('.box');
      boxes.forEach((box:any) => {
        gsap.from(box, {
          opacity: 0,
          scrollTrigger: {
            trigger: box,
            start: 'top center',
            end: '+=300',
            scrub: true,
          },
        });
      });
    }, intro); // <- Scope!
    const ctx2 = gsap.context((self:any) => {
      const boxes = self.selector('.sv-item');
      const title = self.selector('.sv-title');
      gsap.from(title, {
        opacity:0,
        scrollTrigger: {
          trigger: title,
          start: 'top 80%',
          end: '+=300',
          scrub: true,
        },
      });
      boxes.forEach((box:any) => {
        gsap.from(box, {
          scale:0,
          scrollTrigger: {
            trigger: box,
            start: 'top bottom',
            end: '+=300',
            scrub: true,
          },
        });
      });
    }, ourServices);
    return () => {
      ctx.revert(); 
      ctx2.revert();
    } // <- Cleanup!
  }, []);

  return (
    <>
      <Head>
        <title>Welcome to NTE</title>
        <meta name="description" content="NTE homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   <main>
    <Layout>
    <SlideSlider />

    <div className="container flex flex-col gap-20 py-28 " ref={intro}>
      <div id="intro1" className=" flex items-center justify-between" >
        <div className="w-3/5 text-justify">
          <p className='text-3xl font-light italic text-right text-sky-700'>WHO WE ARE</p>
          <p  className='text-xl text-sky-900 font-extrabold text-right'>“EXPERT IN TROUBLE SHOOTING AND CUSTOMIZED SOLUTIONS”</p>
          <div className = 'box'>
          <p> 
            Founded by Hieu Nguyen in 1985 as N&N Electric Motor Specialists Ltd, operated as brand name NTE (Nguyen Technologies & Electrical Equipment) has emerged as a leader in Nova Scotia, Canada, specializing in AC/DC motor rewinding, gear box and pump overhaul, repair, troubleshooting, and service calls for control systems. 
          </p>
          <p>
            With over 35 years of experience, NTE has achieved steady growth and expanded its services to meet the evolving needs of its customers. Known for its technical excellence and knowledgeable expertise, NTE is a trusted name in the industry for rebuilding and remanufacturing all types of electrical equipment. Our know-how stands out, helping our customers minimize downtime and save on investment costs. Partner with us for reliable motor and control services, and let us provide exceptional solutions for all your electrical equipment needs.
          </p>
          </div>
        </div>
        <div className=" flex w-2/5 justify-end ">
          <img
            className="w-5/6 aspect-square object-contain"
            src= '/section2/photo1.png'
            alt="Second slide"
          />
        </div>
      </div>

      <div id="intro2" className = 'flex flex-col gap-4'>
      <div  className="flex items-end justify-between">
        <div>
        <div className=" flex justify-start gap-2 ">
            <img
              className="w-1/3 aspect-square object-cover"
              src= '/section2/photo2a.png'
              alt="Equipment"
            />
            <img
              className="aspect-square object-cover "
              src= '/section2/photo2b.jpg'
              alt="Equipment"
            />
          </div>
          <div>
            <img
              className="w-4/5 object-contain"
              src= '/section2/photo2d.jpg'
              alt="Equipment"
            />

        </div>
        </div>
       
        <div className="w-3/5">
          <p className='text-3xl font-light italic  text-sky-700'>WHAT WE DO</p>
          <p  className='text-xl  text-sky-900 font-extrabold'>“MINIMIZE YOUR DOWN TIME AND SAVE YOUR INVESTMENT”</p>
          <div className='flex flex-col box'>
            <p className='font-bold text-slate-500'>ELECTRIC EQUPIPMENT SERVICES:</p>
            {metadata.electricServices.map((item,index) => (
                    <div className ='flex items-center gap-2 pb-2' key={index}><BsTools className='w-8'/>{item}</div>
                  ))}
            <Link href='/services'>More about our Services...</Link>
            <p className='pt-4 font-bold text-slate-500'> MORE THAN 15 YEARS DISTRIBUTETECHNOLOGIES EQUPIPMENT TO VIETNAM MARKET</p>
          {metadata.distributeService.map((item,index) => (
                  <div className ='flex items-center gap-2 pb-2' key={index}><BsBoxSeam className='w-8'/>{item}</div>
                ))}
          </div>
        
        </div> 
      </div>
      
      </div>
      <div className='flex justify-evenly'>
                  {metadata.exportClient.map((item,index)=> 
                  <div key={index} className='flex flex-col gap-4 items-center'>
                    <div><b>{item.name}</b></div>
                    <div className='flex w-40'><img src={item.logo} alt={item.title}></img></div>
                  </div>)}
                </div>
      
      <div id="intro3" className='flex flex-col gap-12'>
        <div className="flex items-center text-center">
          <div className="w-full">
            <p className='text-3xl font-light italic  text-sky-700'>WHO WE SERVE</p>
            <p  className='text-xl  text-sky-900 font-extrabold'>“OURS LOYALTY CUSTOMERS”</p>
          <div className='flex gap-4 justify-evenly box'>
            <div className='list-none'>
              <p className='text-3xl'>38 years </p>
                  <p className='text-lg font-bold text-slate-500'>Serving in Electric Motor Repair Services:</p> 
                  {metadata.electricServicesCustomers.map((item,index) => (
                    <div className ='flex h-8 items-center gap-2' key={index}><BsFillPersonCheckFill className='w-6 h-6 p-1 aspect-square text-white rounded-full bg-sky-600' />{item}</div>
                  ))}
              </div>
              <div className='list-none'>
                <p className='text-3xl'>More than 15 years</p>
                <p className='text-lg font-bold text-slate-500'>Export Technological Equipment for: </p>
                {metadata.technologicalEquipmentCustomers.map((item,index) => (
                  <div className ='flex h-8 items-center gap-2' key={index}><BsFillPersonCheckFill className='w-6 h-6 p-1 aspect-square text-white rounded-full bg-sky-600' />{item}</div>
                  ))}
              

              </div>
          </div>
          </div>

        </div>
      
        <div className='container col-span-3 overflow-hidden '>
          <LogoAnimation />
        </div>
      </div>
  </div>


<div id="delivery" className= "flex">
  <div className="flex w-1/2">
  <img
    className="object-cover w-full h-full"
    src= '/horizontal1.jpg'
    alt="Second slide"
  />
  </div>
  <div className="flex flex-col items-center px-8 py-12 bg-sky-600 text-white w-1/2 justify-center gap-8">

      <p>We are serving clients across Atlantic Canada and Vietnam for over many years.</p>
      <p className="text-5xl text-center">Ask us about our Products&nbsp;and&nbsp;Services</p>  
      <Link className='no-underline hover:no-underline' href='/contact-us'><div className={styles.contactbutton} >CONTACT US</div></Link>
      {/* <div className={styles.contactbutton}>CAll US NOW AT (902) 461-7533</div> */}
    
  </div>
</div>

<div id ="our-service" className="container py-28 flex flex-col gap-16" ref={ourServices}>
  <div className="flex flex-col justify-center items-center">
    <p>Take a look at</p>
    <p className="text-6xl mb-0 text-sky-800 sv-title">Our Field Services</p>
  </div>
  
  <div className="grid grid-cols-3 grid-rows-1 gap-4 ">
    {metadata.fieldServices.map((item,index)=> (
      <div className="flex gap-4 items-center sv-item" key={index}>
      <div className="block bg-sky-600 w-12 h-12 p-3 rounded-full text-white"><BsFillGearFill /></div>
      <p className="text-xl mb-0">{item}</p>
    </div>
    ))}
  
  </div>
</div>

<div className='container-fluid flex py-24 bg-sky-700'>
  <div className='w-1/2'>
  <Awards/>
  </div>

  <div className='flex flex-col justify-center text-white gap-2'>
  <div className=' text-6xl'>Our Achievements</div>
  <div className='text-xl'>After 38 years providing excellent services to our Customers</div>
</div>
</div>



    </Layout>

     </main>

    
    </>
  )
}
