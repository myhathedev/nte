import Head from 'next/head'
import Layout from 'components/components/layout'
import Frame from 'components/components/frame';
import metadata from 'components/components/data/metadata';
import style from '../styles/contact.module.css'


export default function ContactUs() {

  const inputStyle = 
  "appearance-none block w-full  text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:shadow-md focus:ring-2 focus:ring-sky-600 focus:bg-white";
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="News" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   <main>
    <Layout>
    <Frame title="Contact Us"></Frame>
      <div className='container flex p-24 justify-evenly'>

        <div id='section1' className='flex border-solid border-2 justify-center p-12 shadow bg-gray-200'>
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                  First Name
                </label>
                <input className={inputStyle} id="grid-first-name" type="text" placeholder="Jane"/>
                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                  Last Name
                </label>
                <input className={inputStyle}  id="grid-last-name" type="text" placeholder="Doe"/>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                  Email
                </label>
                <input className={inputStyle}  id="grid-email" type="text" placeholder="janedoe@example.com"/>
                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-phone">
                  Phone
                </label>
                <input className= {inputStyle}  id="grid-phone" type="text"/>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-address">
                  Address
                </label>
                <input className={inputStyle}  id="grid-address" type="text" />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-company">
                  Company Name
                </label>
                <input className={inputStyle} id="grid-company" type="text" />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                  City
                </label>
                <input className={inputStyle}  id="grid-city" type="text"/>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-province">
                  Province
                </label>
                <div className="relative">
                  <select className={"block bg-white "+ inputStyle } id="grid-province">
                  <option>AB</option> (Alberta)
                  <option>BC</option> (British Columbia)
                  <option>MB</option> (Manitoba)
                  <option>NB</option> (New Brunswick)
                  <option>NL</option> (Newfoundland and Labrador)
                  <option>NS</option> (Nova Scotia)
                  <option>ON</option> (Ontario)
                  <option>PE</option> (Prince Edward Island)
                  <option>QC</option> (Quebec)
                  <option>SK</option> (Saskatchewan)
                  <option>NT</option> (Northwest Territories)
                  <option>NU</option> (Nunavut)
                  <option>YT</option> (Yukon)
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-postalcode">
                  Postal Code
                </label>
                <input className={inputStyle}  id="grid-postalcode" type="text" />
              </div>
            </div>


            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-company">
                  Message
                </label>
                <textarea className={inputStyle} id="grid-company" rows={6}/>
              </div>
            </div>

            <div className="flex justify-end mt-8 me-2">
            <button className="flex-shrink-0 w-28 bg-sky-500 hover:bg-sky-700 border-sky-500 hover:border-sky-700 text-lg border-4 text-white py-1 px-2 rounded " type="button">
              Submit
            </button>
            </div>
          </form>
        </div>

        <div id='section2' className ='flex flex-col w-2/5'>
          <div className='text-center text-5xl text-sky-600 drop-shadow-md pb-4 border-b-2 border-gray-300'>Contact Information</div>
          <div className ={style.infogrid}>
            <div className={style.title}>Email</div><div className ={style.content}>{metadata.contactInfo.email}</div>
            <div className={style.title}>Phone</div><div className ={style.content}>{metadata.contactInfo.phone}</div>         
            <div className={style.title}>Fax</div><div className ={style.content}>{metadata.contactInfo.fax}</div>
            <div className={style.title}>Location</div> <div className ={style.content}>{metadata.contactInfo.fullAddress}</div>
          </div>

          <div className='shadow m-4'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.969284251298!2d-63.59481040000001!3d44.6794063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a21386e16e41b%3A0xe3defbe72c638562!2s339%20Windmill%20Rd%2C%20Dartmouth%2C%20NS%20B3A%201H8!5e0!3m2!1sen!2sca!4v1686980313227!5m2!1sen!2sca" width="100%" height="300"   loading="lazy" ></iframe>
          </div>
        </div>
    
      </div>

    </Layout>

     </main>

    
    </>
  )
}
