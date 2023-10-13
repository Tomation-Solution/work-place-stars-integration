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
  // const [look_up,setLook_up] = useState<string>('')


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
      {blogData.map((data,index:number)=>(
        
        <BlogNewsInfo key={index} data={data} variant={index%2==0?'evenPost':'oddPost'} />
      ))}
      
    </div>
    <div>
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