import { useEffect, useState } from "react";
import BlogNewsInfo from "../../components/BlogNewsInfo"
import SubscribeToBlog from "../../components/SubscribeToBlog";
// import { blogData, verifiedBlogData } from "../../data/blogData";
import api from "../../api-services/api";
import BlogCategories from "../../components/BlogCategories";
import Loader from "../../components/Loader";

type BlogType={
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


const BlogHomePage = () => {

  const [loading,setLoading] = useState(false)
  const [blogData,setBlogData] = useState<BlogType[]>([])
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the current items to display based on the current page
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogData.slice(indexOfFirstItem, indexOfLastItem);
 

   // Pagination logic
   const totalPages = Math.ceil(blogData.length / itemsPerPage);
   const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);


  const getBlogs = async()=>{
    setLoading(true)
    // const resp = await api.get(`blog/blog-view/${look_up}`)
    const resp = await api.get('blog/blog-view/?categories__names=Performance Management')
    setBlogData(resp.data)
    setLoading(false)
  }

  useEffect(()=>{
    getBlogs()
  },[])

   return (
    <div className="py-[60px]" >
    
      <BlogCategories />

      {loading && <Loader />}

    <div  className="flex flex-col items-center w-[90%] mx-auto" >
      {currentItems.map((data,index:number)=>(
        
        <BlogNewsInfo key={index} data={data} variant={index%2==0?'evenPost':'oddPost'} />
      ))}
      
    </div>
    <div className="mt-4  flex items-center justify-center">

<ul className="flex space-x-2">
   {pageNumbers.map((number,index)=>(
     <li key={index}>
     <button
       className={`${
         currentPage === number ? 'bg-primary text-white' : 'bg-gray-200'
       } px-3 py-2 rounded-sm focus:outline-none`}
       onClick={() => setCurrentPage(number)}
     >
       {number}
     </button>
   </li>
   ))}
  </ul>
</div>
    <div className="my-6" >
      <div className="flex flex-col items-center w-[90%] mx-auto" >
        <h3 className="font-medium text-[1.8rem]" >Explore More Topics</h3>
        <p className="text-center md:text-left" >Ready to brush up on something new? We've got more to read right this way.</p>
        <div  className="flex items-center gap-2 my-4" >
          <div className="bg-[#dff3fb] border-l-[4px] border-primary p-2 font-medium" >Email Marketing</div>
          <div className="bg-[#dff3fb] border-l-[4px] border-primary p-2 font-medium" >Instagram Markerting</div>
        </div>
      </div>

      
      <SubscribeToBlog />
    </div>
     
    </div>
  )
}

export default BlogHomePage