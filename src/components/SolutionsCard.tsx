import { Link } from "react-router-dom"

interface SolutionsCardProps {
    img: string;
  }

const SolutionsCard: React.FC<SolutionsCardProps> = ({img}) => {
  return (
    <div className="shadow-md border p-5 flex flex-col justify-between  gap-7 rounded-md text-sm" >
        <section>
            <img src={img}  className="w-20 h-5" alt=""  />
            <h3 className="text-[#737373] text-base md:text-xl" >Employee Engagement</h3>
            <h5 className="text-primary" >(ORG 360)</h5>
        </section>
        <p>Elevate your business with our Employee Feedback Survey.</p>
    
            <div  className="flex mx-0 items-center gap-3" >
                <Link to="/">
                    <button className='w-[120px] py-[6px] bg-primary text-white border border-transparent text-sm  rounded-md'> Login</button>
                </Link>
                <Link to="/">
                        <button  className='w-[120px] py-[6px] bg-transparent text-primary border border-primary text-sm   rounded-md' > Read More</button>
                </Link>
            </div>
     
    </div>
  )
}

export default SolutionsCard