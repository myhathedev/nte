import Head from 'next/head'
import { BsFillGearFill } from "react-icons/bs";
import Layout from 'components/components/layout';
import Frame from 'components/components/frame';


export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="About NTE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   <main>
    <Layout>
      <Frame title = 'About Us'></Frame>
      <div className='container p-24'>
      </div>
     

    </Layout>

     </main>

    
    </>
  )
}
