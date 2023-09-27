import image1 from '../../assets/whoweare/img1.svg'
import image2 from '../../assets/whoweare/img2.svg'
import image3 from '../../assets/whoweare/img3.svg'
import Banner from '../../components/Banner'
import QuickInfo from '../../components/QuickInfo'
import bannerImage from "../../assets/top-banner-image.jpg";

const ValuesMissionVison = () => {
  return (
    <section className='font-poppins'>
      <Banner image={bannerImage} pageTitle="Our Idealogies" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[100px] gap-y-10 px-5 my-[100px] max-w-8xl sm:mx-7 md:mx-5 xl:mx-10 mx-3"  >
    <QuickInfo image={image1} header="Why Choose Us" mainText="At Workplace Stars, you're a vital partner, and the value we bring to your businesses directly influences our organization's success. Our services are custom-tailored to meet your needs." />
    <QuickInfo  image={image2}  header='Our Mission' mainText='To improve companies’ growth, profitability, and peoples’ working lives, benefit society and create STAR Workplaces - 1 STAR at a time.' blueText={true} />
    <QuickInfo  image={image3} header='Our Vision' mainText='To become the transformational point for upwardly mobile organizations via effective and efficient strategy development, implementation and manpower utilization. ' />
</div>

<div className='gap-x-[100px] gap-y-10 px-5 my-[100px] max-w-8xl sm:mx-7 md:mx-5 xl:mx-10 mx-3' >

  <h3 className='text-2xl font-bold text-primary my-[40px]' >Our Business Value Proposition (Operational Architecture)</h3>

<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[50px]' >

  <div className="shadow-md border p-5 flex flex-col gap-2" >
      <h3 className='text-primary font-bold text-xl' >Business Situation audit </h3>
    
      <ol className='font-light text-base space-y-2 ' >
          <li> •	Historical performance review</li>
          <li> •	Employee Engagement assessment </li>
          <li> •	Organization Structure Review</li>
          
      </ol>
  </div>
 
  <div className='shadow-md border p-5 flex flex-col gap-1' >
      <h3 className='text-primary font-bold text-xl' >Enterprise Transformation <br />Plan Development </h3>
    
      <ol className='font-light text-base text-justify' >
          <li> •	Data based Improved strategic directions</li>
          <li> •	Improved operational systems, processes, policies etc </li>
          <li> •	Result based performance management system</li>          
      </ol>
  </div>
 
  <div className='shadow-md border p-5 flex flex-col gap-2' >
      <h3 className='text-primary font-bold text-xl' >Automation and digitalization of key HR functions </h3>
    
      <ol className='font-light text-base space-y-2' >
          <li> •		Performance Management</li>
          <li> •	Task management </li>
          <li> •	Payroll management </li>
          <li> •	Leave Management</li>
          
      </ol>
  </div>
 
</div>
</div>







    </section>
  )
}

export default ValuesMissionVison