import Head from 'next/head'
import { BsFillGearFill } from "react-icons/bs";
import Layout from 'components/components/layout'


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
      <div className='container p-24'>
      {/* <div> - Who we are, why choose us…</div> */}
      <h1>About Us</h1>
      <div>Coming soon...</div>
      </div>
     

    </Layout>

     </main>

    
    </>
  )
}
