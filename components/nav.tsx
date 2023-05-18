import { navItems } from "./data/navItems"
import Link from 'next/link'
import { BsFillEnvelopePaperFill, BsGeoAltFill ,BsFillPhoneFill} from "react-icons/bs";

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
                <div className="flex flex-col gap-1 px-4 justify-center">      
                    <p className="flex mb-0 items-center"><BsFillEnvelopePaperFill className="me-2"/> Hieunnte@eastlink.ca</p>
                    <p className="hidden lg:flex lg:items-center mb-0"><BsGeoAltFill className="me-2"/> 339 Windmill Road, Dartmouth, NS, B3A 1H8,</p>
                </div>
            </div>
        </div>

        <div className="nav-bar bg-sky-500">
            <div className="flex mx-auto max-w-6xl px-8 py-3 justify-between">
                <div className =" flex gap-12 ">
                { navItems.map((item,index) =>(
                    <Link className="no-underline" key={index} href={item.href}><p className="text-white text-xl font-bold m-0">{item.label}</p></Link>
                ))
                }
                </div>
                <div className ="flex">
                <p className="flex items-center mb-0  text-white text-xl font-bold "><BsFillPhoneFill className="me-2"/> (902) 461-7533</p>
                </div>
                
            </div>
        </div>
        
        

      </div>
    )
  }