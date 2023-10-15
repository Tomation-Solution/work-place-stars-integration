import { Link, useParams } from 'react-router-dom'
import postImg from '../../assets/demo-post-image.jpg'
import SubscribeToBlog from '../../components/SubscribeToBlog'
import { useEffect, useState } from 'react'
import api from '../../api-services/api'
import Loader from '../../components/Loader'

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

  
const BlogDetailsPage = () => {
    const [blog,setBlog] = useState<BlogType|null>(null)
   
    // const [loading,setLoading] = useState(false)
  
    const { id } = useParams();
    console.log(id)
  
    const getBlogDetail = async()=>{
  
      // setLoading(true)
      const resp = await api.get('blog/blog-view/'+id)
      console.log(resp)
      setBlog(resp.data)
      // setLoading(false)
    }
    useEffect(()=>{
      if(id){
        console.log({id})
        getBlogDetail()
      }
    },[id])
  return (
    <div className='font-poppins text-normal ' >
        <div className='grid grid-cols-1 md:grid-cols-6 py-[60px] w-[85%] mx-auto gap-10 font-light' >
        <section className='col-span-4 grid' >
      {blog ? <>

        <div className='my-10' >
            <div>
                <img className='h-[400px] w-full rounded-[20px] object-cover' src={blog.main_image} alt="" />
            </div>
            <div className='grid gap-y-2' >
                <h3 className='text-[1.4rem] text-primary font-medium' >{blog.title}</h3>
                <div className='flex items-center gap-2'  >

                <p><span className='font-medium' >Date:</span><span  className='capitalize ml-2'>{new Date(blog.date_created).toDateString()}</span></p>
                <p><span className='font-medium'>Writer:</span><span  className='capitalize ml-2'>{blog.author}</span></p>
                </div>
            </div>
        </div>

       

        {blog.blog_paragraphs.length!=0?
                  blog.blog_paragraphs.map((data,index)=>(

        <div key={index} className='font-poppins mt-2' >
            <img src={data.image}  className='w-[90%]' alt="" />
            <p className='text-base text-justify my-2' >
            {data.input_text}
            </p>
        </div>
                  )):''}

      </> : <Loader /> }
        {/* header */}
        </section>
        <section className={`col-span-2 my-8 ${blog ? "" : "mt-3"}`}>
            <div>

                <h3 className='font-bold mb-8 text-center text-2xl' >Our Products</h3>
            <Link className='bg-[#e7f2f7] mb-9 px-3 py-5 grid place-items-center' to='https://calendly.com/emetricsuitesolutions/demo-for-roselyn?month=2023-10'>
                 <div className='grid place-items-center' >
                    <img src={postImg} className='w-[250px] flex items-center rounded-md' alt="" />
                    <h3 className='font-medium text-center my-3' >HR Administration</h3>
                    <p className='text-center text-sm' >Be on top of your game by relying on our automated HR tasks management syste..</p>
                 </div>
            </Link>
            <Link className='bg-[#e7f2f7] mb-9 px-3 py-5 grid place-items-center' to='https://calendly.com/emetricsuitesolutions/demo-for-roselyn'>
                 <div className='grid place-items-center'>
                    <img className='w-[250px] flex items-center rounded-md' src={postImg} alt="" />
                    <h3 className='font-medium text-center my-3' >Performance Management</h3>
                    <p className='text-center text-sm' >Performance management in any organization aims at extensively improving organizat..</p>
                 </div>
            </Link>
            </div>
        </section>
        </div>
        <SubscribeToBlog />
    </div>
  )
}

export default BlogDetailsPage