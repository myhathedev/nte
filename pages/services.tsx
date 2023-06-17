import Head from 'next/head'
import { BsFillCursorFill } from "react-icons/bs";
import Layout from 'components/components/layout';
import metadata from 'components/components/data/metadata';
import Frame from 'components/components/frame';


export default function Services() {
  return (
    <>
      <Head>
        <title>Our Electrical Services</title>
        <meta name="description" content="Our Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   <main>
    <Layout>
      <Frame title="Our Services"></Frame>
   
      <div className='container py-12'>
      {metadata.servicePage.map((item,index)=> (
        <div className='flex flex-col gap-8 py-4' key={index}>
          <div className='text-4xl text-sky-900 text-center'>{item.title}</div>
          <div className="grid grid-cols-3 grid-rows-1 gap-4 p-12">
            {item.item.map((item,index)=> (
              <div className="flex gap-4 items-center sv-item" key={index}>
              <div className="block text-sky-600 text-3xl"><BsFillCursorFill /></div>
              <p className="text-xl mb-0">{item}</p>
            </div>
            ))}
    
          </div>
        </div>

      ))}
      </div>
     

    </Layout>

     </main>

    
    </>
  )
}
