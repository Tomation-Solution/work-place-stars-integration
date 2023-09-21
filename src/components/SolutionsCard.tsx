import { Link } from "react-router-dom"

// interface SolutionCardProps:{
  
// }
interface ItemProps{
   image: string;
    headerText: string;
    solution: string;
    aboutHeaderText: string;
    readMore: string;
    freePulse: string;
    
}
interface SolutionCardProps{
    item:ItemProps
}


const SolutionsCard: React.FC<SolutionCardProps> = ({item}) => {
  return (
    <div className="shadow-md border p-5 flex flex-col justify-between  gap-7 rounded-md text-sm" >
        <section className="space-y-2" >
            <img src={item.image}  className={`w-20 h-5 `} alt=""  />
            <h3 className="text-[#737373] text-[18px]" >{item.headerText}</h3>
            <h5 className="text-primary text-base" >{item.solution}</h5>
        </section>
        <p className="text-[#737373] capitalize" >{item.aboutHeaderText}</p>
    
            <div  className="flex mx-0 items-center gap-3" >
                <Link to={item.readMore} target="_blank">
                    <button className='w-[120px] py-[6px] bg-primary text-white border border-transparent text-sm  rounded-md'> Login</button>
                </Link>
                <Link to={item.freePulse} target={item.freePulse === '' ? "" : "_blank"} >
                        <button  className='w-[120px] py-[6px] bg-transparent text-primary border border-primary text-sm   rounded-md' > Read More</button>
                </Link>
            </div>
     
    </div>
  )
}

export default SolutionsCard