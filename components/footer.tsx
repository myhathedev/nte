import metadata from "./data/metadata";
import Link from "next/link";

export default function Footer() {
    return (
<div className="container-fluid flex flex-col pt-24 pb-16 gap-12 bg-sky-950 text-white">

  <div className="container flex justify-evenly gap-8 ">
    <div className="flex flex-col w-1/3 ">
      <p className="text-2xl">ABOUT US</p>
      <p className="text-gray-400">We've been meeting Atlantic Canada's electrical and industrial needs for many years. Our operations have consistently grown, attracting and keeping a highly skilled workforce while adopting the latest equipment technologies.</p>
    </div>
    <div className="flex w-1/5 flex-col">
      <p className="text-2xl">QUICK LINKS</p>
      <div className="text-gray-400">
        {metadata.quicklinks.map((item,index)=> (
          <Link className='no-underline' href={item.href}  key={index} ><div className="text-gray-400 hover:text-sky-300 transition-colors duration-100">{item.label}</div></Link>
        ))}
      </div>
    </div>
    <div className="flex flex-col w-1/4">
      <p className="text-2xl">CONTACT US</p>
      <div className="text-gray-400">
        <p>Phone: (902) 461-7533</p>
        <p>Email: Hieunnte@eastlink.ca</p>
        <p>Address: 339 Windmill Road, Dartmouth, NS, B3A 1H8, Canada</p>
      </div>
    </div>
   
  </div>
  <div className=" flex h-4 border-t-2 pt-8 justify-center border-gray-500 items-center">  
    <p className="text-sm text-gray-300 ">&copy; 2023 Nguyen Technologies & Electrical Equipment. All rights reserved.  </p>
    </div>
</div>
   )
}