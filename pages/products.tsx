import Head from 'next/head'
import { BsFillGearFill } from "react-icons/bs";
import Layout from 'components/components/layout';
import Frame from 'components/components/frame';
import Awards from 'components/components/award-slideshow';
import metadata from 'components/components/data/metadata';
import Link from 'next/link';

export default function Product() {
  return (
    <>
      <Head>
        <title>Our Products</title>
        <meta name="description" content="Products"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   <main>
   
    <Layout>
    <Frame title="Our Products"></Frame>
      <div className='container p-24 flex flex-col gap-24'>

        <div id='section1' className='flex'>
          <div className='flex flex-col w-1/2'><Awards/></div>
          <div className='flex flex-col w-1/2 justify-center gap-8'>
            <div className='text-4xl'>Introduction</div>
            <div>We've been meeting Atlantic Canada's electrical and industrial needs for many years. Our operations have consistently grown, attracting and keeping a highly skilled workforce while adopting the latest equipment technologies.</div>
          </div>       
        </div>

        <div id='section2' className='flex flex-col gap-8'>
          <div className='text-4xl'>Electrical & Industrial Equipment</div>
         
        </div>

        <div id='section3' className='flex flex-col gap-8'>
          <div className='text-4xl'>Law enforcement Equipment</div>
          <div className='flex gap-8'>
            {metadata.productPage.map((item,index)=> (
                <div key= {index} className='flex flex-col items-center w-64 h-80 border-solid border-sky-700 border-2 p-3 shadow-md'>
                  <Link href={item.link} target='_blank' ><div className=' flex justify-center h-48 aspect-square mb-4 cursor-pointer transition-all hover:scale-110'><img src={item.photo} alt={item.product}></img></div></Link>
                  <div className = ' font-bold text-center'>{item.product}</div>
                  <div className='text-sm  text-center'>{item.vendor}</div>
              </div>
          
            ))}
            </div>
        </div>
      
      </div>
     

    </Layout>

     </main>

    
    </>
  )
}
