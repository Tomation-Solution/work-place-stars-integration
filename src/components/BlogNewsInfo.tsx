import { Link } from "react-router-dom";

type BlogNewsInfoDataType={
  id:number;
  comments:[],
  blog_paragraphs:{input_text:string,image:string}[],
  title:string;
  main_image:string;
  author:string;
  category:string;
  date_created:string;
  get_paragraph_intro:string;
}


interface BlogNewsInfoProp{
  data:BlogNewsInfoDataType;
  variant:string;
}
const BlogNewsInfo = ({data,variant}:BlogNewsInfoProp) => {
  return (
    <div className="font-poppins  md:max-w-[900px]  my-[60px] grid grid-cols-1 md:grid-cols-5 gap-x-4 container w-[80%] md:w-full" >
        <div className={`col-span-2 relative grid place-items-center max-w-[90%] mx-auto md:max-w-full order-2 ${variant === 'evenPost' ? 'order-1' :'md:order-2 order-1'}` } >  
            <div className={`absolute z-[-1]  bg-[#e7f6fc] top-0 w-[90%] h-[90%] ${variant === 'evenPost' ? '-translate-x-6 -translate-y-4' : 'translate-x-6 -translate-y-4'}   rounded-[20px]`} ></div>
            <img className='w-full object-fill block h-[320px] p-5 rounded-[40px] ' src={data?.main_image} alt="" />
        </div>
        <div className={`items-center md:items-start col-span-3 flex flex-col justify-center order-1 gap-y-3 ${variant === 'evenPost' ? 'order-2' :'md:order-1 order-2'}`} >
        {/* text-[#072563] */}
            <h2 className='text-primary text-[1.3em]  font-medium uppercase text-center md:text-left' >{data.title}</h2>
            <p className='line-clamp-2  text-sm text-center md:text-left' >{data?.get_paragraph_intro}</p>
            <Link className='border-primary border py-[0.7em] px-[1em] cursor-pointer shadow-md  text-primary capitalize bg-white rounded-md w-fit ' to={'/blog/'+data.id}>Read More</Link>
        </div>
    </div>
  )
}

export default BlogNewsInfo