import Image from "next/image"
import Link from "next/link"
import { MdLocationOn,MdCalendarToday,MdAccessTime } from "react-icons/md";

interface Props {
    title: string ;
    image: string ;
    slug:  string ;
    location: string ;
    date:  string ;
    time:  string ;
}

const EventCard = ({title,image,slug,location,date,time}: Props) => {
  return <>
    <Link href={`/events/${slug}`} className="flex h-60">
        <Image src={image} alt={title} width={410} height={300} className=""/>
        
    </Link>

    <div className="flex flex-row gap-1 items-start pt-1">
      <MdLocationOn width={14} height={14} className="w-3 h-3"/>
      <p className="text-[14px]">{location}</p>
    </div>

    <p className="title">{title}</p>
    
    <div className="flex gap-2">

      <div className="flex flex-row gap-1 items-start pt-1">
        <MdCalendarToday width={14} height={14} className="mt-[1px] w-3 h-3"/>
        <p className="text-[14px]">{date}</p>
      </div>
      <div className="flex flex-row gap-1 items-start pt-1" >
        <MdAccessTime width={14} height={14} className="flex items-start mt-[2px] w-3 h-3"/>
        <p className="text-[14px]">{time}</p>
      </div>
    </div>
        
  </>
}

export default EventCard