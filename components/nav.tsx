import { navItems } from "./data/navItems"
import Link from 'next/link'
import { BsFillEnvelopePaperFill, BsGeoAltFill ,BsFillPhoneFill} from "react-icons/bs";
import metadata from "./data/metadata";

export default function Navigation() {
    return (
      <div>
        <div className=" banner">
            <div className ="flex justify-between mx-auto max-w-6xl px-8 py-2 sm:px-0">
                <div className="flex w-1/2 max-h-20 md:w-1/3 lg:w-1/4">
                    <img
                        className="object-contain w-full"
                        src= '/Logo.jpg'
                        alt="logo"
                    />
                </div>
                <div className="flex">
                    <div className="flex flex-col gap-1 px-4 justify-center">      
                        <p className="flex mb-0 items-center"><BsFillEnvelopePaperFill className="me-2"/>{metadata.contactInfo.email}</p>
                        <p className="hidden lg:flex lg:items-center mb-0"><BsGeoAltFill className="me-2"/>{metadata.contactInfo.address}, {metadata.contactInfo.city}, {metadata.contactInfo.province} {metadata.contactInfo.postalCode} </p>
                    </div>
                    <div className="flex flex-col gap-1 px-4 justify-center">      
                        <p className="flex mb-0 items-center">Phone: {metadata.contactInfo.phone}</p>
                        <p className="hidden lg:flex lg:items-center mb-0">Fax: {metadata.contactInfo.fax}</p>
                    </div>

                </div>
               
            </div>
        </div>

        <div className="nav-bar bg-sky-500">
            <div className="flex mx-auto max-w-6xl  justify-between">
                <div className =" flex">
                { navItems.map((item,index) =>(
                    <Link className="no-underline" key={index} href={item.href}>
                        <div className="flex justify-center text-white w-32 text-xl font-bold m-0  py-3 hover:bg-sky-600 transition-all">
                            {item.label}
                        </div>
                    </Link>
                ))
                }
                </div>
                
            </div>
        </div>
        
        

      </div>
    )
  }