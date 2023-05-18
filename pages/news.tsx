import Head from 'next/head'
import { BsFillGearFill } from "react-icons/bs";
import Layout from 'components/components/layout'


export default function News() {
  return (
    <>
      <Head>
        <title>News</title>
        <meta name="description" content="News" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   <main>
    <Layout>
      <div className='container p-24'>
        <h1>News</h1>
      <div>Coming soon...</div>
    
      </div>
     

    </Layout>

     </main>

    
    </>
  )
}
