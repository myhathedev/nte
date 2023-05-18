import Head from 'next/head'
import { BsFillGearFill } from "react-icons/bs";
import Layout from 'components/components/layout'


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
      <div className='container p-24'>
        <h1>Our Products</h1>
        <div>Coming soon...</div>
      {/* <div>Electrical & Industrial Equipment</div>
      <div>Law enforcement Equipment</div>
      <div>TRAFFICE SOLUTIONS: MASSLOAD </div> */}
      </div>
     

    </Layout>

     </main>

    
    </>
  )
}
